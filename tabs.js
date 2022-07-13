function altTab(evt, tabNome) {
    var i, tabCont, tabBtn;

    // Esconder as divs com a classe "tabCont"
    tabCont = document.getElementsByClassName("tabCont");
    for (i = 0; i < tabCont.length; i++) {
        tabCont[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabBtn = document.getElementsByClassName("tabBtn");
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabNome).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("default").click();