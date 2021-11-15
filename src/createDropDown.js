function createDropdown(parent, labelText, [options]) {
  const x = document.createElement('LABEL');
  const t = document.createTextNode(labelText);
  x.setAttribute('for', labelText);
  x.appendChild(t);
  parent.appendChild(x);
  console.log('creating dropdown');
}
export default createDropdown;
