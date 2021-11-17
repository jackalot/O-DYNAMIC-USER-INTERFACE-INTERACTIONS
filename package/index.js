function createDropdown(parent, labelText, options) {
    const split = labelText.split(' ');
    const joined = split.join('-');
    //  creates the label and the text for the label
    function createLabel() {
      const x = document.createElement('LABEL');
      const t = document.createTextNode(labelText);
      x.setAttribute('for', labelText);
      x.appendChild(t);
      parent.appendChild(x);
    }
    createLabel();
    function displayOrHideOptionsDiv() {
      const optionsDiv = document.querySelector(`#${joined}-optionsDiv`);
      if (optionsDiv.style.display === 'block') {
        optionsDiv.style.display = 'none';
      } else {
        optionsDiv.style.display = 'block';
      }
    }
    function createDropDownButton() {
      //  creates the dropdown button, gives it an id, and appends it
      const dropDownButton = document.createElement('button');
      dropDownButton.id = `${joined}-dropDownButton`;
      dropDownButton.setAttribute('name', labelText);
      dropDownButton.textContent = 'dropdown';
      parent.appendChild(dropDownButton);
      dropDownButton.addEventListener('click', displayOrHideOptionsDiv);
    }
    createDropDownButton();
    function createOptionsDiv() {
      const optionsDiv = document.createElement('div');
      optionsDiv.style.display = 'none';
      optionsDiv.id = `${joined}-optionsDiv`;
      parent.appendChild(optionsDiv);
      console.log(`#${joined}-optionsDiv`);
    }
    createOptionsDiv();
    function changeDropDownSelection(newValue) {
      //  changes the current dropdown selection according to which button clicks it
      const dropDownButton = document.querySelector(`#${joined}-dropDownButton`);
      dropDownButton.textContent = newValue;
    }
    function createOptions() {
      //    creates the options for the dropdown and makes it so that each option has a button that
      //    calls changeDropDownSelection with their value.
      console.log(`#${joined}-optionsDiv`);
      const optionsDiv = document.querySelector(`#${joined}-optionsDiv`);
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
  module.exports = createDropdown
  