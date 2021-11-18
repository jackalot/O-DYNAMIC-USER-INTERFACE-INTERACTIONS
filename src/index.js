import createDropdown from './createDropDown';
import './index.css';

const body = document.querySelector('body');
const dropdownDiv = document.createElement('div');
body.appendChild(dropdownDiv);
dropdownDiv.id = 'dropdown-div';
createDropdown(dropdownDiv, 'Drop Down with options ', ['option1', 'option2']);
