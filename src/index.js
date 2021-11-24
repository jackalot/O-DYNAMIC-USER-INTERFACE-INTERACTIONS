import createDropdown from './createDropDown';
import createSlideShow from './createSlideShow';
import './index.css';
import picture1 from './images/grilledcheese.jpg';

const body = document.querySelector('body');
const dropdownDiv = document.createElement('div');
body.appendChild(dropdownDiv);
dropdownDiv.id = 'dropdown-div';
createDropdown(dropdownDiv, 'Drop Down with options ', ['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8']);
const slideshowContainerDiv = document.createElement('div');
body.appendChild(slideshowContainerDiv);
slideshowContainerDiv.id = 'slideshowContainer-div';
console.log(picture1);
createSlideShow(slideshowContainerDiv, [picture1]);
