const files = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,svg,pdf}", {
  eager: true,
  import: "default",
});

export function getFile(path) {
  return files[`../assets/${path}`];
}

export function getImages(filename) {
  const url = getFile(`images/${filename}`);
  if (!url) console.warn(`Image not found: images/${filename}`);
  return url;
}

export function getPdf(filename) {
  const url = getFile(`pdfs/${filename}`);
  if (!url) console.warn(`PDF not found: pdfs/${filename}`);
  return url;
}
