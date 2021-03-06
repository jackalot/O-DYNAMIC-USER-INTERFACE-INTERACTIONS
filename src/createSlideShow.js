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
  function slideLeft() {
    const middleElement = findMiddle(0, imagesArray);
    const index = imagesArray.indexOf(middleElement);
    const oldMiddle = imagesArray.slice(index, index + 1);
    const newMiddleElement = document.querySelector(`#image-${index - 1}`);
    newMiddleElement.style.visibility = 'visible';
    const leftHalf = imagesArray.slice(0, index);
    const rightHalf = imagesArray.slice(index + 1, imagesArray.length - 1);
    const lastElement = imagesArray.slice(imagesArray.length - 1, imagesArray.length);
    const newLeftHalf = lastElement.concat(leftHalf);
    const newArray = newLeftHalf.concat(oldMiddle, rightHalf);
    // eslint-disable-next-line no-param-reassign
    imagesArray = newArray.slice(0);
    setTimeout(() => {
      // eslint-disable-next-line no-use-before-define
      emptySlideShowDiv();
    }, 100);
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
      slideLeft();
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
    const newMiddleElement = document.querySelector(`#image-${index + 1}`);
    newMiddleElement.style.visibility = 'visible';
    const element = imagesArray.slice(index, index + 1);
    leftHalf = leftHalf.concat(element);
    const newArray = leftHalf.concat(newMiddle, rightHalf);
    // eslint-disable-next-line no-param-reassign
    imagesArray = newArray.slice(0);
    setTimeout(() => {
      // eslint-disable-next-line no-use-before-define
      emptySlideShowDiv();
    }, 100);
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
  function addNavigatonDots() {
    const navigationDiv = document.createElement('div');
    parent.append(navigationDiv);
    const copy = imagesArray; //  if this isnt referenced here, event listener gets an error.
    navigationDiv.classList.add('navigation-div');
    for (let i = 0; i < copy.length; i++) {
      const navigationButton = document.createElement('button');
      navigationButton.classList.add('navigation-button');
      navigationButton.textContent = `${i}`;
      navigationButton.addEventListener('click', () => {
        console.log(`${copy}`);
      });
      navigationDiv.append(navigationButton);
    }
  }
  addNavigatonDots();
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
