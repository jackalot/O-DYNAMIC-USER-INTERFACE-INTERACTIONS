import createDropdown from './createDropDown';

const body = document.querySelector('body');
const dropdownDiv = document.createElement('div');
body.appendChild(dropdownDiv);
dropdownDiv.id = 'dropdown-div';
createDropdown(dropdownDiv, 'this is a label', ['option1', 'option2']);
