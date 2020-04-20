const content = document.querySelector('#content');
const headerText = 'Todo List By:Alex Rhine';
const headerClasses = 'header-title center-text';
const noMargin = 'margin-0';
const 

function createHeader() {
    removeBodyMargin();

    var header = document.createElement('header');
    header.className = headerClasses;

    var headerTitle = document.createElement('h1');
    headerTitle.className = noMargin;
    headerTitle.innerHTML = headerText;

    header.appendChild(headerTitle);

    content.appendChild(header);
}

function removeBodyMargin() {
    var body = document.getElementsByTagName('body')[0];
    body.className = noMargin;
}

export {createHeader}