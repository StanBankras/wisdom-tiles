import { configuration } from "../index.js";

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