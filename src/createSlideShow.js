function createSlideShow(parent, imagesArray) {
  const slideShowDiv = document.createElement('div');
  slideShowDiv.classList.add('slideshow');
  parent.append(slideShowDiv);
  const findMiddle = (arr, ind = 0) => {
    if (arr[ind]) {
      return findMiddle(arr, ++ind);
    }
    return ind % 2 !== 0 ? [arr[(ind - 1) / 2]] : [arr[(ind / 2) - 1],
      arr[ind / 2]];
  };
  function addImagesToSlideshow() {
    const middle = findMiddle(imagesArray);
    console.log(`middle is: ${middle}`);
    for (let i = 0; i < imagesArray.length; i++) {
      const newImage = new Image(150, 250);
      newImage.src = imagesArray[i];
      slideShowDiv.append(newImage);
      console.log(`the current images array is ${imagesArray[i]}`);
      if (imagesArray[i] === middle) {
        console.log('hi');
      }
    }
  }
  addImagesToSlideshow();
}
export default createSlideShow;
