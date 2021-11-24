function createSlideShow(parent, imagesArray) {
  const slideShowDiv = document.createElement('div');
  slideShowDiv.classList.add('slideshow');
  parent.append(slideShowDiv);
  function addImagesToSlideshow() {
    for (let i = 0; i < imagesArray.length; i++) {
      const newImage = new Image();
      newImage.src = imagesArray[i];
      slideShowDiv.append(newImage);
    }
  }
  addImagesToSlideshow();
}
export default createSlideShow;
