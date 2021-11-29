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
  function addImagesToSlideshow() {
    // console.log(findMiddle(imagesArray));
    const middleElement = findMiddle(0, imagesArray);
    const middleNumber = imagesArray.indexOf(middleElement);
    for (let i = 0; i < imagesArray.length; i++) {
      const newImage = new Image(150, 250);
      newImage.src = imagesArray[i];
      slideShowDiv.append(newImage);
      if (i === middleNumber) {
        console.log('hi');
      }
    }
  }
  addImagesToSlideshow();
}
export default createSlideShow;
