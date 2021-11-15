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
    const split = labelText.split(' ');
    const joined = split.join('-');
    dropDownButton.id = `${joined}-dropDownButton`;
    dropDownButton.setAttribute('name', labelText);
    dropDownButton.textContent = 'dropdown';
    parent.appendChild(dropDownButton);
  }
  createDropDownButton();
  function changeDropDownSelection(newValue) {
    const split = labelText.split(' ');
    const joined = split.join('-');
    const dropDownButton = document.querySelector(`#${joined}-dropDownButton`);
    dropDownButton.textContent = newValue;
  }
  function createOptions() {
    const optionsDiv = document.createElement('div');

    for (let i = 0; i < options.length; i++) {
      const newSelection = document.createElement('button');
      newSelection.textContent = options[i];
      newSelection.classList.add('dropDown-Options');
      optionsDiv.appendChild(newSelection);
      newSelection.addEventListener('click', () => {
        newSelection.classList.add('currently-Selected');
        changeDropDownSelection(options[i]);
      });
    }
    parent.appendChild(optionsDiv);
  }
  createOptions();
}
export default createDropdown;
