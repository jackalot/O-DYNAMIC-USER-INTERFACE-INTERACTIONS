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
  function addSlideLeftButton() {
    const slideShowButtonLeft = document.createElement('button');
    const middleElement = findMiddle(0, imagesArray);
    const middleNumber = imagesArray.indexOf(middleElement);
    const leftHalf = imagesArray.slice(0, middleNumber);
    const closestLeft = leftHalf[leftHalf.length - 1];
    console.log(`closest left is ${closestLeft}`);
    slideShowDiv.append(slideShowButtonLeft);
    slideShowButtonLeft.textContent = 'Slide left';
    slideShowButtonLeft.addEventListener('click', () => {
      console.log('click');
    });
  }
  addSlideLeftButton();
  //  if we need this function later use it, for now the statements
  //   work but the function itself doesnt
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
      newImage.id = `image-${i}`;
      newImage.src = imagesArray[i];
      slideShowDiv.append(newImage);
      if (i !== middleNumber) {
        newImage.style.visibility = 'hidden';
      }
    }
  }
  addImagesToSlideshow();
  function slideRight() {
    const middleElement = findMiddle(0, imagesArray);
    const index = imagesArray.indexOf(middleElement);
    let leftHalf = imagesArray.slice(1, index);
    const firstItem = imagesArray.slice(0, 1);
    let rightHalf = imagesArray.slice(index + 2, imagesArray.length);
    rightHalf = rightHalf.concat(firstItem);
    const newMiddle = imagesArray.slice(index + 1, index + 2);
    const element = imagesArray.slice(index, index + 1);
    leftHalf = leftHalf.concat(element);
    const newArray = leftHalf.concat(newMiddle, rightHalf);
    // eslint-disable-next-line no-param-reassign
    imagesArray = newArray.slice(0);
    // eslint-disable-next-line no-use-before-define
    emptySlideShowDiv();
  }
  function addSlideRightButton() {
    const slideShowButtonRight = document.createElement('button');
    const middleElement = findMiddle(0, imagesArray);
    const middleNumber = imagesArray.indexOf(middleElement);
    const rightHalf = imagesArray.slice(middleNumber + 1, imagesArray.length);
    const closestRight = rightHalf[0];
    // console.log(`closest right is ${closestRight}`);
    slideShowDiv.append(slideShowButtonRight);
    slideShowButtonRight.textContent = 'Slide right';
    slideShowButtonRight.addEventListener('click', () => {
      console.log('click');
      slideRight();
    });
  }
  addSlideRightButton();
  const emptySlideShowDiv = () => {
    while (slideShowDiv.firstChild) {
      slideShowDiv.removeChild(slideShowDiv.firstChild);
    }
    if (!slideShowDiv.firstChild) {
      addSlideLeftButton();
      addImagesToSlideshow();
      addSlideRightButton();
    }
  };
}
export default createSlideShow;
