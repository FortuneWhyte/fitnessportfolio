#!/usr/bin/env bash
# Prepare phone photos and videos for the website.
#
#   scripts/optimize-media.sh photo <input> <output.jpg> [max-width=1200] [crop]
#   scripts/optimize-media.sh video <input.mov> <output.mp4> [poster.jpg]
#
# Photos: rotated upright, resized, re-encoded as JPEG. `crop` is an optional
#         ffmpeg crop expression applied before resizing (e.g. "iw*0.7:ih*0.7:iw*0.15:ih*0.3").
# Videos: iPhone HDR is tone-mapped to SDR (via macOS avconvert when available),
#         scaled to 720p, audio removed, H.264 MP4 with fast-start for streaming.
#
# All camera metadata, including GPS location, is stripped from every output.
# Requires ffmpeg (brew install ffmpeg).

set -euo pipefail

mode=${1:-}
input=${2:-}
output=${3:-}

if [[ -z "$mode" || -z "$input" || -z "$output" ]]; then
  sed -n '2,13p' "$0"
  exit 1
fi

mkdir -p "$(dirname "$output")"

case "$mode" in
  photo)
    max_width=${4:-1200}
    crop=${5:-}
    filters="scale='min(${max_width},iw)':-2"
    [[ -n "$crop" ]] && filters="crop=${crop},${filters}"
    ffmpeg -hide_banner -loglevel error -y -i "$input" \
      -vf "$filters" -map_metadata -1 -q:v 4 "$output"
    ;;

  video)
    poster=${4:-}
    tmp=$(mktemp -d)
    trap 'rm -rf "$tmp"' EXIT
    source_file="$input"

    # avconvert handles iPhone HDR (HLG) -> SDR colour correctly
    if command -v avconvert >/dev/null 2>&1; then
      avconvert -s "$input" -p Preset1280x720 -o "$tmp/sdr.mp4" --replace >/dev/null
      source_file="$tmp/sdr.mp4"
    else
      echo "warning: avconvert not found; HDR footage may look washed out" >&2
    fi

    ffmpeg -hide_banner -loglevel error -y -i "$source_file" \
      -map 0:v:0 -an -map_metadata -1 \
      -vf "scale=-2:'min(1280,ih)',fps=30" \
      -c:v libx264 -preset slow -crf 27 -profile:v high -pix_fmt yuv420p \
      -movflags +faststart "$output"

    if [[ -n "$poster" ]]; then
      ffmpeg -hide_banner -loglevel error -y -ss 1 -i "$output" \
        -frames:v 1 -map_metadata -1 -q:v 4 "$poster"
    fi
    ;;

  *)
    echo "unknown mode: $mode (expected photo or video)" >&2
    exit 1
    ;;
esac

echo "✓ $output ($(du -h "$output" | cut -f1 | xargs))"
