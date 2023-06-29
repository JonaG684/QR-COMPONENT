var url = "https://www.mlb.com/";

// Parámetros en el estilo Front-end Style Guide
var styleGuide = "# Front-end Style Guide\n\n## Layout\n\nThe designs were created to the following widths:\n\n- Mobile: 375px\n- Desktop: 1440px\n\n## Colors\n\n- White: hsl(0, 0%, 100%)\n- Light gray: hsl(212, 45%, 89%)\n- Grayish blue: hsl(220, 15%, 55%)\n- Dark blue: hsl(218, 44%, 22%)\n\n## Typography\n\n### Body Copy\n\n- Font size (paragraph): 15px\n\n### Font\n\n- Family: Outfit\n- Weights: 400, 700";

// Crear el código QR
var qrCode = new QRCode("qr-code", {
  text: styleGuide,
  width: 300,
  height: 300,
});

// Descargar el código QR como imagen
function downloadQRCode() {
  var canvas = document.querySelector("#qr-code canvas");
  var downloadLink = document.createElement("a");
  downloadLink.href = canvas.toDataURL("image/png");
  downloadLink.download = "style_guide_qr.png";
  downloadLink.click();
}

// Evento para descargar el código QR cuando se hace clic en un botón
var downloadButton = document.querySelector("#download-button");
downloadButton.addEventListener("click", downloadQRCode);