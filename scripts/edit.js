document.addEventListener("DOMContentLoaded", () => {
    const templateName = new URLSearchParams(window.location.search).get("template");
    loadTemplate(templateName);
});

function loadTemplate(templateName) {
    fetch(`${templateName}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("editable-template").innerHTML = data;
            makeEditable();
        });
}

function makeEditable() {
    const elements = document.querySelectorAll("#editable-template h2, #editable-template p, #editable-template ul li");
    elements.forEach(element => {
        element.setAttribute("contenteditable", "true");
    });
}

function saveTemplate() {
    const content = document.getElementById("editable-template").innerHTML;
    localStorage.setItem("savedTemplate", content);
    alert("Template saved!");
}
