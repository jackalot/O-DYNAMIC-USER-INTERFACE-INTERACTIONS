function createDropdown(parent, labelText, options) {
  function createLabel() {
    const x = document.createElement('LABEL');
    const t = document.createTextNode(labelText);
    x.setAttribute('for', labelText);
    x.appendChild(t);
    parent.appendChild(x);
  }
  createLabel();
  function createDropDownButton() {
    const dropDownButton = document.createElement('button');
    dropDownButton.setAttribute('name', labelText);
    dropDownButton.textContent = 'dropdown';
    parent.appendChild(dropDownButton);
  }
  createDropDownButton();
  function createOptions() {
    const optionsDiv = document.createElement('div');
    for (let i = 0; i < options.length; i++) {
      const newSelection = document.createElement('button');
      newSelection.textContent = options[i];
      optionsDiv.appendChild(newSelection);
    }
    parent.appendChild(optionsDiv);
  }
  createOptions();
}
export default createDropdown;
