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

var btnMobile = document.getElementById("btnMobile");

function menuMobile(corMenu) {
    var nav = document.getElementById("nav");
    nav.classList.toggle('active');
    var main = document.getElementById("main");
    main.classList.toggle('active');

    if (main.classList == 'container active') {
        main.style.backgroundColor = 'rgba(0,0,0,0.5)';
        main.style.color = 'rgba(218, 165, 32, 0.5)';
    }
    else {
        main.style.backgroundColor = 'rgb(77,77,77)';
        main.style.color = 'rgba(218, 165, 32)';
    }
    
    return corMenu;
}

btnMobile.addEventListener('click', menuMobile);

document.getElementById("default").click();