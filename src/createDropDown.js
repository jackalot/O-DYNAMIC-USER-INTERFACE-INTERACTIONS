function createDropdown(parent, labelText, options) {
  function createLabel() {
    const x = document.createElement('LABEL');
    const t = document.createTextNode(labelText);
    x.setAttribute('for', labelText);
    x.appendChild(t);
    parent.appendChild(x);
  }
  createLabel();
  function finishDropdown() {
    const dropDownButton = document.createElement('button');
    dropDownButton.setAttribute('name', labelText);
    dropDownButton.textContent = 'dropdown';
    parent.appendChild(dropDownButton);
    const optionsDiv = document.createElement('div');
    for (let i = 0; i < options.length; i++) {
      const newSelection = document.createElement('button');
      newSelection.textContent = options[i];
      optionsDiv.appendChild(newSelection);
    }
    parent.appendChild(optionsDiv);
  }
  finishDropdown();
}
export default createDropdown;
