// โหมด HEX / RGB
let isHex = true;
const hexBtn = document.getElementById('hexBtn');
const rgbBtn = document.getElementById('rgbBtn');

hexBtn.addEventListener('click', e => {
  e.stopPropagation();
  isHex = true;
  hexBtn.classList.add('active');
  rgbBtn.classList.remove('active');
  updateDisplay(currentColorObj);
});

rgbBtn.addEventListener('click', e => {
  e.stopPropagation();
  isHex = false;
  rgbBtn.classList.add('active');
  hexBtn.classList.remove('active');
  updateDisplay(currentColorObj);
});

// Toggle sidebar
function toggleSidebar(e) {
  e.stopPropagation();
  document.getElementById('sidebar').classList.toggle('open');
}

// Core elements
let currentColorObj = { hex: '#ffffff', name: 'White' };
const colorCodeEl  = document.getElementById('colorCode');
const colorNameEl  = document.getElementById('colorName');
const toastEl      = document.getElementById('toast');
const histList     = document.getElementById('history-list');
const favList      = document.getElementById('favorites-list');
const clearFavBtn  = document.getElementById('clearFavBtn');
const clearHistBtn = document.getElementById('clearHistBtn');
const shareBtn     = document.getElementById('shareBtn');

// Load from localStorage
let historyColors = JSON.parse(localStorage.getItem('colorHistory') || '[]');
let favColors     = JSON.parse(localStorage.getItem('favColors') || '[]');

// เมื่อโหลดหน้า ให้ parse link ถ้ามี
parseSharedLink();

// Random color & display
function changeBackgroundColor() {
  const hex = randomHex();
  const [r, g, b] = hexToRgb(hex);
  const name = window.getColorNameFromRGB
    ? window.getColorNameFromRGB(r, g, b)
    : 'Unknown';
  currentColorObj = { hex, name };
  document.body.style.backgroundColor = hex;
  updateDisplay(currentColorObj);
  addToHistory(currentColorObj);
}

function randomHex() {
  const r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
  return rgbToHex(r, g, b);
}

// Update display (แต่ไม่แก้ history/favs)
function updateDisplay({ hex, name }) {
  colorCodeEl.textContent = isHex
    ? hex.toUpperCase()
    : hexToRgbString(hex);
  colorNameEl.textContent = name;
  document.body.style.backgroundColor = hex;
}

// History & Favorites logic
function addToHistory(colorObj) {
  if (!historyColors.some(c => c.hex.toLowerCase() === colorObj.hex.toLowerCase())) {
    historyColors.unshift(colorObj);
    if (historyColors.length > 30) historyColors.pop();
    localStorage.setItem('colorHistory', JSON.stringify(historyColors));
    renderAll();
  }
}

function toggleFav(colorObj) {
  const idx = favColors.findIndex(c => c.hex.toLowerCase() === colorObj.hex.toLowerCase());
  if (idx > -1) favColors.splice(idx, 1);
  else favColors.unshift(colorObj);
  localStorage.setItem('favColors', JSON.stringify(favColors));
  renderAll();
}

function clearFavs() { 
  favColors = [];
  localStorage.removeItem('favColors');
  renderAll();
}

function clearHists() {
  historyColors = [];
  localStorage.removeItem('colorHistory');
  renderAll();
}

clearFavBtn.addEventListener('click', e => { e.stopPropagation(); clearFavs(); });
clearHistBtn.addEventListener('click', e => { e.stopPropagation(); clearHists(); });

// Render ทั้ง History และ Favorites
function renderAll() {
  // — History —
  histList.innerHTML = '';
  if (!historyColors.length) {
    histList.innerHTML = '<li>No history.</li>';
  } else {
    historyColors.forEach(colorObj => {
      const li = document.createElement('li');
      li.className = 'history-item';

      // ★ ปุ่มสตาร์
      const star = document.createElement('button');
      star.className = 'star-btn'
        + (favColors.some(c => c.hex.toLowerCase() === colorObj.hex.toLowerCase())
           ? ' favorited'
           : '');
      star.innerHTML = '★';
      star.title = favColors.some(c => c.hex.toLowerCase() === colorObj.hex.toLowerCase())
        ? 'Unfavorite' : 'Add to favorites';
      star.addEventListener('click', e => {
        e.stopPropagation();
        toggleFav(colorObj);
      });

      // ● วงกลมสี
      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.backgroundColor = colorObj.hex;

      // ชื่อสี + โค้ดสี
      const span = document.createElement('span');
      span.textContent = `${colorObj.name} (${colorObj.hex.toUpperCase()})`;

      li.append(star, circle, span);
      li.addEventListener('click', e => {
        e.stopPropagation();
        currentColorObj = colorObj;
        updateDisplay(colorObj);
      });
      histList.appendChild(li);
    });
  }

  // — Favorites —
  favList.innerHTML = '';
  if (!favColors.length) {
    favList.innerHTML = '<li>No favorites.</li>';
  } else {
    favColors.forEach(colorObj => {
      const li = document.createElement('li');
      li.className = 'fav-item';

      const star = document.createElement('button');
      star.className = 'star-btn favorited';
      star.innerHTML = '★';
      star.title = 'Unfavorite';
      star.addEventListener('click', e => {
        e.stopPropagation();
        toggleFav(colorObj);
      });

      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.backgroundColor = colorObj.hex;

      const span = document.createElement('span');
      span.textContent = `${colorObj.name} (${colorObj.hex.toUpperCase()})`;

      li.append(star, circle, span);
      li.addEventListener('click', e => {
        e.stopPropagation();
        currentColorObj = colorObj;
        updateDisplay(colorObj);
      });
      favList.appendChild(li);
    });
  }
}

// Utility functions
function rgbToHex(r, g, b) {
  return "#" + [r,g,b]
    .map(x => x.toString(16).padStart(2,'0'))
    .join('');
}

function hexToRgb(hex) {
  hex = hex.replace('#','');
  if (hex.length === 3) hex = hex.split('').map(c => c+c).join('');
  const bigint = parseInt(hex, 16);
  return [(bigint>>16)&255, (bigint>>8)&255, bigint&255];
}

function hexToRgbString(hex) {
  const [r,g,b] = hexToRgb(hex);
  return `rgb(${r}, ${g}, ${b})`;
}

// Copy to clipboard
function copyColor(e) {
  e.stopPropagation();
  const text = isHex
    ? currentColorObj.hex.toUpperCase()
    : hexToRgbString(currentColorObj.hex);
  navigator.clipboard.writeText(text).then(() => {
    toastEl.textContent = 'Copied!';
    showToast();
  });
}

function showToast() {
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 1500);
}

// *** Sidebar Resize Logic ***
const sidebar       = document.getElementById('sidebar');
const resizeHandle  = document.getElementById('resize-handle');
let isResizing      = false;

resizeHandle.addEventListener('mousedown', e => {
  e.stopPropagation();
  isResizing = true;
  document.body.style.cursor = 'ew-resize';
});

document.addEventListener('mousemove', e => {
  if (!isResizing) return;
  let newWidth = e.clientX;
  const minW = 200;
  const maxW = 600;
  if (newWidth < minW) newWidth = minW;
  if (newWidth > maxW) newWidth = maxW;
  sidebar.style.width = `${newWidth}px`;
});

document.addEventListener('mouseup', () => {
  if (isResizing) {
    isResizing = false;
    document.body.style.cursor = '';
  }
});

// *** Share Link Logic ***
shareBtn.addEventListener('click', shareLink);

// สร้าง URL แชร์
function shareLink(e) {
  e.stopPropagation();
  const useHistory = true; // เปลี่ยนเป็น false ถ้าแชร์ favorites
  const arr = useHistory
    ? historyColors.map(c => c.hex.replace('#',''))
    : favColors.map(c    => c.hex.replace('#',''));
  if (arr.length === 0) {
    toastEl.textContent = 'ไม่มีสีให้แชร์';
    showToast();
    return;
  }
  const param = arr.join(',');
  const base = window.location.origin + window.location.pathname;
  const key  = useHistory ? 'hist' : 'fav';
  const url  = `${base}?${key}=${encodeURIComponent(param)}`;

  navigator.clipboard.writeText(url)
    .then(() => {
      toastEl.textContent = 'Link copied!';
      showToast();
    })
    .catch(() => {
      toastEl.textContent = 'คัดลอกไม่สำเร็จ';
      showToast();
    });
}

// อ่าน URL ที่แชร์กลับมา
function parseSharedLink() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('hist')) {
    const list = params.get('hist').split(',');
    historyColors = list.map(hex => {
      const code = '#' + hex;
      return {
        hex: code,
        name: window.getColorNameFromRGB
          ? window.getColorNameFromRGB(...hexToRgb(code))
          : code
      };
    });
    localStorage.setItem('colorHistory', JSON.stringify(historyColors));
  }
  if (params.has('fav')) {
    const list = params.get('fav').split(',');
    favColors = list.map(hex => {
      const code = '#' + hex;
      return {
        hex: code,
        name: window.getColorNameFromRGB
          ? window.getColorNameFromRGB(...hexToRgb(code))
          : code
      };
    });
    localStorage.setItem('favColors', JSON.stringify(favColors));
  }
}

// Initialize
renderAll();
changeBackgroundColor();
