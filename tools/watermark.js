const photoInput = document.getElementById('photoInput');
const replaceInput = document.getElementById('replaceInput');
const replacePhoto = document.getElementById('replacePhoto');
const watermarkSelect = document.getElementById('watermarkSelect');
const colorInput = document.getElementById('colorInput');
const colorValue = document.getElementById('colorValue');
const sizeInput = document.getElementById('sizeInput');
const sizeValue = document.getElementById('sizeValue');
const previewEmpty = document.getElementById('previewEmpty');
const previewStage = document.getElementById('previewStage');
const previewCanvas = document.getElementById('previewCanvas');
const previewLabel = document.getElementById('previewLabel');
const photoStrip = document.getElementById('photoStrip');
const downloadCurrent = document.getElementById('downloadCurrent');
const downloadAll = document.getElementById('downloadAll');
const statusMessage = document.getElementById('statusMessage');

const watermarkSvg = {
  large: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.51 49.48"><path fill="#231f20" d="M19.57 27.25c-5.22 0-11.2-.12-16.42-.12-1.28.07-2.46-.67-2.93-1.83-.51-1.25-.08-2.71 1.04-3.52 4.89-1.46 10.98-2.85 15.87-4.31-1.26-4.3-3.72-8.67-4.98-12.97-.04-.17-.38-1.66.59-2.8.89-1.05 2.5-1.38 3.91-.72 3.07 4.11 6.61 8.96 9.67 13.07 3.91-4.13 7.35-9 11.26-13.13.14-.1 2.09-1.47 4.17-.65 1.86.73 3.02 2.88 2.61 5.15-3.61 5.26-7.22 10.52-10.83 15.78 8.5 4.26 17 8.52 25.5 12.78.92 1.46 1.16 3.2.44 4.4-1.07 1.79-4.32 2.47-6.99.49-7.06-3-15.06-6.19-22.12-9.19-1.81 5.93-2.93 11.92-4.74 17.85-.22.25-1.4 1.99-3.61 1.95-2.09-.04-3.59-1.49-4.31-3.71.51-6.2 1.36-12.33 1.87-18.52Z"/><path fill="#231f20" d="M59.75 35.23c-1.42-4.08-2.51-8.24-3.58-12.43-.41-1.6-1.7-4.39-1.58-6.06.1-1.39-.43-1.38.99-1.4.96-.01 2.8 1.45 3.44 1.86 3.57 2.29 6.91 4.94 10.02 7.83 2.79 2.6 5.13 6.15 8.3 8.27 5.93 3.96 10.62-1.2 10.47-7.19-.1-4-.95-7.99-1.05-11.99-.08-3.25 1.33-5.69 5.04-4.21 1.81.72 3.37 2.61 4.72 3.94 3.19 3.13 6.34 6.31 9.51 9.47 2.64 2.62 5.27 6.17 8.75 7.72 2.33 1.03 5.03 1.09 7.01-.73 2.69-2.47 2.08-6.22 1.95-9.53-.04-1.09-.95-6.93-.31-7.72.92-1.13 1.92.07 3.18.9 3.77 2.46 7.21 5.47 10.3 8.73 3.7 3.9 9.64 9.87 14.53 3.64 1.1-1.4 1.6-3.02 1.85-4.75.13-.9-.37-4.8.05-5.22 1.7-1.69 9.24 7.66 10.39 8.76 2.63 2.51 5.45 4.65 9.28 4.05 1.95-.31 3.58-1.16 5.11-2.44.42-.35 4.88-4.84 5.07-4.43 2.11 4.69 9.01.62 6.91-4.04-1.64-3.64-5.99-5-9.67-3.76-2.49.84-4.13 2.75-5.9 4.56-1.37 1.4-2.11 2.58-4.07 1.46-1.28-.73-2.79-2.81-3.79-3.84-3.28-3.37-6.75-8.11-11.72-8.9-4.62-.74-8.51 2.08-9.39 6.63-.21 1.1-.46 6.13.13 6.09-.79.06-4.67-5.03-5.42-5.74-3.77-3.59-8.27-7.58-13.11-9.62-4.03-1.7-9.04-1.34-11 3.16-2.41 5.55 1.56 12.43-.68 17.83l1.84-2.39c-.11.07-13.76-14.14-15.17-15.52-3.46-3.38-7.36-6.83-12.48-6.98-5.51-.16-9.74 3.42-10.73 8.78-.5 2.72-.1 5.53.14 8.26.16 1.75.31 3.49.47 5.24.06.67.8 5.44.68 3 .71-.89.47-1.63-.74-2.21l-1.16-1.26c-1.18-1.25-2.4-2.47-3.66-3.64-2.35-2.18-4.83-4.22-7.4-6.13-4-2.98-9.16-7.04-14.52-6.1-4.81.84-6.85 5.27-6.26 9.76.89 6.78 3.28 14 5.52 20.44 1.68 4.83 9.41 2.75 7.71-2.13h0Z"/></svg>',
  small: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.9 49.48"><path fill="#231f20" d="M19.57 27.25c-5.22 0-11.2-.12-16.42-.12-1.28.07-2.46-.67-2.93-1.83-.51-1.25-.08-2.71 1.04-3.52 4.89-1.46 10.98-2.85 15.87-4.31-1.26-4.3-3.72-8.67-4.98-12.97-.04-.17-.38-1.66.59-2.8.89-1.05 2.5-1.38 3.91-.72 3.07 4.11 6.61 8.96 9.67 13.07 3.91-4.13 7.35-9 11.26-13.13.14-.1 2.09-1.47 4.17-.65 1.86.73 3.02 2.88 2.61 5.15-3.61 5.26-7.22 10.52-10.83 15.78 8.5 4.26 17 8.52 25.5 12.78.92 1.46 1.16 3.2.44 4.4-1.07 1.79-4.32 2.47-6.99.49-7.06-3-15.06-6.19-22.12-9.19-1.81 5.93-2.93 11.92-4.74 17.85-.22.25-1.4 1.99-3.61 1.95-2.09-.04-3.59-1.49-4.31-3.71.51-6.2 1.36-12.33 1.87-18.52Z"/></svg>'
};

const photos = [];
let activePhotoIndex = -1;
let watermarkImage = null;
let watermarkImageKey = '';

function setStatus(message) {
  statusMessage.textContent = message;
}

function loadImageFromFile(file) {
  if ('createImageBitmap' in window) {
    return createImageBitmap(file, { imageOrientation: 'from-image' }).catch(() => loadImageElement(file));
  }
  return loadImageElement(file);
}

function loadImageElement(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error(`Could not read ${file.name}`));
    };
    image.src = url;
  });
}

function loadWatermarkImage() {
  const source = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(watermarkSvg[watermarkSelect.value])}`;
  if (watermarkImage && watermarkImageKey === source) return Promise.resolve(watermarkImage);

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      watermarkImage = image;
      watermarkImageKey = source;
      resolve(image);
    };
    image.onerror = () => reject(new Error('Could not load the selected watermark.'));
    image.src = source;
  });
}

function tintWatermark(image, width, height) {
  const watermarkCanvas = document.createElement('canvas');
  watermarkCanvas.width = Math.max(1, Math.round(width));
  watermarkCanvas.height = Math.max(1, Math.round(height));
  const watermarkContext = watermarkCanvas.getContext('2d');
  watermarkContext.drawImage(image, 0, 0, watermarkCanvas.width, watermarkCanvas.height);
  watermarkContext.globalCompositeOperation = 'source-in';
  watermarkContext.fillStyle = colorInput.value;
  watermarkContext.fillRect(0, 0, watermarkCanvas.width, watermarkCanvas.height);
  return watermarkCanvas;
}

async function renderPhoto(photo) {
  const image = photo.image;
  const canvas = photo === photos[activePhotoIndex] ? previewCanvas : document.createElement('canvas');
  canvas.width = image.naturalWidth || image.width;
  canvas.height = image.naturalHeight || image.height;

  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const selectedWatermark = await loadWatermarkImage();
  const watermarkWidth = canvas.width * (Number(sizeInput.value) / 100);
  const watermarkHeight = watermarkWidth * (selectedWatermark.naturalHeight / selectedWatermark.naturalWidth);
  const rightMargin = canvas.width * 0.03;
  const bottomMargin = canvas.height * 0.03;
  const x = canvas.width - watermarkWidth - rightMargin;
  const y = canvas.height - watermarkHeight - bottomMargin;
  const tintedWatermark = tintWatermark(selectedWatermark, watermarkWidth, watermarkHeight);

  context.drawImage(tintedWatermark, x, y, watermarkWidth, watermarkHeight);
  return canvas;
}

async function renderActivePhoto() {
  if (activePhotoIndex < 0 || !photos[activePhotoIndex]) return;
  previewEmpty.hidden = true;
  previewStage.hidden = false;
  downloadCurrent.disabled = true;
  setStatus('Rendering preview...');

  try {
    await renderPhoto(photos[activePhotoIndex]);
    previewLabel.textContent = `${activePhotoIndex + 1} / ${photos.length}`;
    downloadCurrent.disabled = false;
    setStatus(`${photos.length} photo${photos.length === 1 ? '' : 's'} ready.`);
    updateThumbs();
  } catch (error) {
    setStatus(error.message);
  }
}

function updateThumbs() {
  replacePhoto.disabled = activePhotoIndex < 0;
  photoStrip.replaceChildren();
  photos.forEach((photo, index) => {
    const button = document.createElement('button');
    button.className = `photo-thumb${index === activePhotoIndex ? ' active' : ''}`;
    button.type = 'button';
    button.setAttribute('aria-label', `Show photo ${index + 1}: ${photo.file.name}`);
    button.innerHTML = `<img src="${photo.url}" alt="">`;
    button.addEventListener('click', () => {
      activePhotoIndex = index;
      renderActivePhoto();
    });
    photoStrip.appendChild(button);
  });
}

async function addFiles(fileList) {
  const files = Array.from(fileList).filter(file => file.type.startsWith('image/'));
  if (!files.length) {
    setStatus('Please choose an image file.');
    return;
  }

  setStatus('Loading photos...');
  for (const file of files) {
    try {
      const image = await loadImageFromFile(file);
      photos.push({ file, image, url: URL.createObjectURL(file) });
    } catch (error) {
      setStatus(error.message);
    }
  }

  if (activePhotoIndex < 0 && photos.length) activePhotoIndex = 0;
  updateThumbs();
  downloadAll.disabled = false;
  await renderActivePhoto();
}

async function replaceSelected(file) {
  if (!file || activePhotoIndex < 0) return;
  try {
    const image = await loadImageFromFile(file);
    const previousPhoto = photos[activePhotoIndex];
    URL.revokeObjectURL(previousPhoto.url);
    photos[activePhotoIndex] = { file, image, url: URL.createObjectURL(file) };
    updateThumbs();
    await renderActivePhoto();
  } catch (error) {
    setStatus(error.message);
  }
}

function fileNameForExport(file) {
  const extension = file.name.includes('.') ? file.name.slice(file.name.lastIndexOf('.')) : '.jpg';
  const baseName = file.name.replace(/\.[^/.]+$/, '');
  return `${baseName}-watermarked${extension.toLowerCase() === '.png' ? '.png' : '.jpg'}`;
}

function downloadCanvas(canvas, fileName, fileType) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (!blob) {
        reject(new Error('The image could not be exported.'));
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = fileName;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      resolve();
    }, fileType, 0.92);
  });
}

photoInput.addEventListener('change', event => addFiles(event.target.files));
replacePhoto.addEventListener('click', () => replaceInput.click());
replaceInput.addEventListener('change', event => {
  replaceSelected(event.target.files[0]);
  replaceInput.value = '';
});
watermarkSelect.addEventListener('change', renderActivePhoto);
colorInput.addEventListener('input', () => {
  colorValue.value = colorInput.value.toUpperCase();
  colorValue.textContent = colorInput.value.toUpperCase();
  renderActivePhoto();
});
sizeInput.addEventListener('input', () => {
  sizeValue.value = `${sizeInput.value}%`;
  sizeValue.textContent = `${sizeInput.value}%`;
  renderActivePhoto();
});
downloadCurrent.addEventListener('click', async () => {
  if (activePhotoIndex < 0) return;
  downloadCurrent.disabled = true;
  setStatus('Preparing download...');
  try {
    const photo = photos[activePhotoIndex];
    const canvas = await renderPhoto(photo);
    const fileType = photo.file.type === 'image/png' ? 'image/png' : 'image/jpeg';
    await downloadCanvas(canvas, fileNameForExport(photo.file), fileType);
    setStatus('Download started.');
  } catch (error) {
    setStatus(`Download failed: ${error.message}`);
  } finally {
    downloadCurrent.disabled = false;
  }
});
downloadAll.addEventListener('click', async () => {
  if (!photos.length) return;
  downloadAll.disabled = true;
  setStatus('Preparing downloads...');
  try {
    for (const [index, photo] of photos.entries()) {
      setStatus(`Preparing download ${index + 1} of ${photos.length}...`);
      const canvas = await renderPhoto(photo);
      const fileType = photo.file.type === 'image/png' ? 'image/png' : 'image/jpeg';
      await downloadCanvas(canvas, fileNameForExport(photo.file), fileType);
      await new Promise(resolve => setTimeout(resolve, 150));
    }
    setStatus(`${photos.length} download${photos.length === 1 ? '' : 's'} started.`);
  } catch (error) {
    setStatus(`Download failed: ${error.message}`);
  } finally {
    downloadAll.disabled = false;
  }
});

