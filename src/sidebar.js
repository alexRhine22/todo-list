const content = document.querySelector('#content');
const sidebarClass = 'sidebar';
const sidebarTitleClass = 'margin-0 center-text';

var sideBar = document.createElement('aside');
var projectUL = document.createElement('ul');
projectUL.id = 'project-ul';

function createAside() {
    sideBar.className = sidebarClass;

    var title = document.createElement('h3');
    title.className = sidebarTitleClass;
    title.innerHTML = 'Projects';

    var newProjectBtn = projectBtn();

    sideBar.appendChild(title);
    sideBar.appendChild(projectUL);
    sideBar.appendChild(newProjectBtn);

    content.appendChild(sideBar);
}

function projectBtn() {
    var btn = document.createElement('button');
    btn.innerHTML = 'Add New Project';

    btn.addEventListener('click', function () {
        var projectName = validateInput();
        if (projectName != null) {
            var projectItem = document.createElement('li');

            projectItem.addEventListener('click', function () {
                this.classList.toggle('active');
            });

            projectItem.innerHTML = projectName;
            projectUL.appendChild(projectItem);
        }
    });

    return btn;
}

function validateInput() {
    var validateInput = false;
    var noDuplicates = true;

    while (!validateInput) {
        var userInput = prompt("Please enter the project name", "School");

        if (userInput == '') {
            alert('invalid input');
            noDuplicates = false;
        } 
        else if (userInput == null) {
            userInput = null;
            validateInput = true;
        } 
        else if (projectUL.getElementsByTagName("li").length > 0) {
            var items = projectUL.getElementsByTagName("li");
            for (var i = 0; i < items.length; i++) {
                if (userInput === items[i].innerHTML) {
                    alert("A project already has that name");
                    noDuplicates = false;
                    break;
                }
            }
        }
        
        if (noDuplicates) {
            validateInput = true;
        }
    }

    return userInput;
}

export { createAside }