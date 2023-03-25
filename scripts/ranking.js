setTimeout(Ready,1000);

function Ready() {
  const images = ["../images/Alladin.jpg", "../images/The_lion_king.jpg", "../images/Lady_and_the_Tramp.jpg", "../images/Beauty_and_the_Beast.jpg"];

  const imageContainer = document.getElementById("image-container");

  let startIndex = 0;
  let endIndex = 1;

  function loadNextImages() {
    startIndex += 2;
    endIndex += 2;

    if (endIndex < images.length) {
      for (let i = startIndex; i <= endIndex; i++) {
        const image = document.createElement("img");
        image.src = images[i];
        image.classList.add("image-item"); // Dodaj klasę do obrazu
        imageContainer.appendChild(image);
      }
    } else {
      for (let i = startIndex; i < images.length; i++) {
        const image = document.createElement("img");
        image.src = images[i];
        image.classList.add("image-item"); // Dodaj klasę do obrazu
        imageContainer.appendChild(image);
      }
    }
  }

  for (let i = startIndex; i <= endIndex; i++) {
    const image = document.createElement("img");
    image.src = images[i];
    image.classList.add("image-item"); // Dodaj klasę do obrazu
    imageContainer.appendChild(image);
  }

  // Znajdź obrazy z klasą "image-item" i dodaj nasłuchiwanie na kliknięcie
  const imagesList = document.querySelectorAll(".image-item");
  for (let i = 0; i < imagesList.length; i++) {
    imagesList[i].addEventListener("click", function() {
      // Usuń wszystkie obrazy z klasą "image-item"
      console.log(`Kliknięto obraz ${i}`);
      const imagesToRemove = document.querySelectorAll(".image-item");
      for (let j = 0; j < imagesToRemove.length; j++) {
        imagesToRemove[j].remove();
      }

      // Sprawdź, czy należy wczytać kolejne obrazy
      if (imagesList.length <= 2 && images.length > 0) {
        loadNextImages();
      }
      else{
        //imagesToRemove.remove();
        imagesToRemove[0].remove();
        imagesToRemove[1].remove();
        imagesToRemove[2].remove();
        imagesToRemove[3].remove();
      }
    });
  }
}
