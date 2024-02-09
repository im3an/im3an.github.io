function loadTextFile(filename) {
  const textContent = document.getElementById('text-content');
  fetch(`txt-files/${filename}`)
    .then(response => response.text())
    .then(text => {
      textContent.textContent = text;
    })
    .catch(error => {
      console.error('Error loading file:', error);
      textContent.textContent = 'Error loading file.';
    });
}
