const images = ["../images/Allain.jpg", "../images/The_lion_king.jpg"];

// Pobierz element HTML, do którego chcesz dodać obrazy
const imageContainer = document.getElementById("image-container");

// Przejdź przez listę obrazów i utwórz element <img> dla każdego z nich
for (let i = 0; i < images.length; i++) {
  const image = document.createElement("img");
  image.src = images[i];

  // Dodaj element <img> do elementu HTML
  imageContainer.appendChild(image);
}
const firstImage = document.querySelector("#image-container img:first-child");


  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  setInterval(changeBackground, 5000);