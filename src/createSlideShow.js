function createSlideShow(parent, imagesArray) {
  const slideShowDiv = document.createElement('div');
  slideShowDiv.classList.add('slideshow');
  parent.append(slideShowDiv);
  function findMiddle(i, array) {
    if (array[i] !== undefined) {
      return findMiddle(i + 1, array);
    }
    return array[Math.floor(i / 2)];
  }
  function displayOrHideImage(image) {
    if (image.style.visibility === 'visible') {
      image.style.visibility = 'hidden';
    } else {
      image.style.visibility = 'visible';
    }
  }
  function addImagesToSlideshow() {
    const middleElement = findMiddle(0, imagesArray);
    const middleNumber = imagesArray.indexOf(middleElement);
    for (let i = 0; i < imagesArray.length; i++) {
      const newImage = new Image(150, 250);
      newImage.src = imagesArray[i];
      slideShowDiv.append(newImage);
      if (i !== middleNumber) {
        newImage.style.visibility = 'hidden';
      }
    }
  }
  addImagesToSlideshow();
}
export default createSlideShow;
