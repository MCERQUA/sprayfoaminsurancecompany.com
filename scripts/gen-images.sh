#!/usr/bin/env bash
# Generate all images for sprayfoaminsurancecompany.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/sprayfoaminsurancecompany.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — SPRAY FOAM INSURANCE ===

gen "hero.jpg" \
  "Photorealistic bright clean wide shot of a professional spray foam contractor in clean modern work gear at a bright modern building site, white background feel, Stripe-style product photography, professional, no text" 4

gen "coverage.jpg" \
  "Photorealistic bright aerial view of clean commercial building with spray foam insulation installation, bright daylight, modern clean photography, no text" 4

gen "about.jpg" \
  "Photorealistic clean bright portrait of a friendly insurance professional at a modern minimalist white office, natural light, Swiss design aesthetic, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide bright clean modern spray foam insurance office, white walls, teal accents, professional minimal photography, no text" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic clean bright photo of spray foam contractor at work in modern commercial building, natural daylight, clean professional photography, no text" 4

gen "off-ratio-coverage.jpg" \
  "Photorealistic clean technical photo of spray foam proportioner machine controls, bright studio lighting, product photography aesthetic, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic bright clean photo of spray foam contractor in proper PPE on clean commercial jobsite, professional safety photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic bright clean photo of spray foam insulation crew on modern roofing project, safety-focused, bright daylight, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic clean bright photo of modern white spray foam contractor van with equipment, clean commercial vehicle photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic clean studio-style photo of spray foam equipment proportioner hoses spray gun on white background, product photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic bright clean modern office photo of insurance professional at minimalist desk, teal accent color visible, professional photography, no text" 4

gen "bonds.jpg" \
  "Photorealistic clean bright contract signing photo, modern office, natural light, professional business photography, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
