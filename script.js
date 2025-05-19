function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function colorDistance(rgb1, rgb2) {
  return Math.hypot(
    rgb1[0] - rgb2[0],
    rgb1[1] - rgb2[1],
    rgb1[2] - rgb2[2]
  );
}

function getClosestColorName(rgb) {
  let closestName = "Unknown";
  let minDistance = Infinity;
  for (const key in colorNames) {
    const refRgb = key.split(',').map(Number);
    const distance = colorDistance(rgb, refRgb);
    if (distance < minDistance) {
      minDistance = distance;
      closestName = colorNames[key];
    }
  }
  return closestName;
}

function changeBackgroundColor() {
  const hex = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  document.body.style.backgroundColor = hex;
  document.getElementById("colorCode").innerText = hex;

  const rgb = hexToRgb(hex);
  const name = getClosestColorName(rgb);
  document.getElementById("colorName").innerText = name;
}

function copyColor(event) {
  event.stopPropagation();
  const colorText = document.getElementById("colorCode").innerText;
  navigator.clipboard.writeText(colorText)
    .then(() => showToast("Copied: " + colorText))
    .catch(() => showToast("Failed to copy"));
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}
