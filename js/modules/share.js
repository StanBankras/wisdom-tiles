import { configuration } from "../index.js";

if (navigator.canShare) {
  const shareButtons = document.querySelectorAll('.export.share');
  shareButtons.forEach(btn => {
    btn.style.display = 'block';
    btn.addEventListener('click', sharePhoto);
  });
}

const pdfDownloadBtn = document.getElementById('pdf');

pdfDownloadBtn.addEventListener('click', () => {
  const canvas = document.getElementById('canvas');
  const base64 = canvas.toDataURL('image/png');
  downloadBase64File(base64, `${configuration.pattern.toLowerCase()}-wisdom.jpg`);
});

function downloadBase64File(base64Data, fileName) {
  const downloadLink = document.createElement("a");
  downloadLink.href = base64Data;
  downloadLink.download = fileName;
  downloadLink.click();
}

function sharePhoto() {
  const canvas = document.getElementById('canvas');
  canvas.toBlob(blob => {
    const file = new File([blob], 'fileName.png', { type: blob.type });
    navigator
      .share({
        files: [file],
        title: 'Words of Wis\'Dam',
        text: 'Your own Wisdom Tile',
      })
      .then(() => console.log('Share was successful.'))
      .catch((error) => console.log('Sharing failed', error));
  });
}