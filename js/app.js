let $menu = document.querySelector(".menu");
let $menuItems = document.querySelectorAll(".menu_item");
var $mediaqueryList_1 = window.matchMedia("(max-width: 1000px)");

if ($mediaqueryList_1.matches) {
    $menu.style.top = -$menu.clientHeight + "px";
}

const btn_menu = document.querySelector(".btn_menu");
const btn_pizza = document.querySelector(".btn_pizza");
const btn_login = document.querySelector(".btn_login");
const menu = document.querySelector(".menu");
const pizza = document.querySelector(".pizza_list");
const login = document.querySelector(".login");

addEventListener("DOMContentLoaded", () => {
    if (btn_menu) {
        btn_menu.addEventListener("click", () => {
            menu.classList.toggle("menu--show");
            pizza.classList.remove("pizza_list--show");
            login.classList.remove("login--show");
            /*Toogle agrega o quita la clase*/
        });
    }
});
addEventListener("DOMContentLoaded", () => {
    if (btn_pizza) {
        btn_pizza.addEventListener("click", () => {
            pizza.classList.toggle("pizza_list--show");
            menu.classList.remove("menu--show");
            login.classList.remove("login--show");
            /*Toogle agrega o quita la clase*/
        });
    }
});
addEventListener("DOMContentLoaded", () => {
    if (btn_login) {
        btn_login.addEventListener("click", () => {
            login.classList.toggle("login--show");
            pizza.classList.remove("pizza_list--show");
            menu.classList.remove("menu--show");
            /*Toogle agrega o quita la clase*/
        });
    }
});

//Listeners de tabsección
const $tabpane1 = document.querySelector("#tab1");
const $tabpane2 = document.querySelector("#tab2");
const $tabpane3 = document.querySelector("#tab3");
const $tabitem1 = document.querySelector("#lab1");
const $tabitem2 = document.querySelector("#lab2");
const $tabitem3 = document.querySelector("#lab3");
const $tabitem_link = document.querySelectorAll(".tabitem_link");

$tabitem_link.forEach(i => {
    let $attribute = i.getAttribute("href");
    if ($attribute === "#tab1") {
        i.addEventListener("click", () => {
            switcher($tabpane1, $tabpane2, $tabpane3, "tabcontent");
            switcher($tabitem1, $tabitem2, $tabitem3, "tabitem");
        });
    } else if ($attribute === "#tab2") {
        i.addEventListener("click", () => {
            switcher($tabpane2, $tabpane1, $tabpane3, "tabcontent");
            switcher($tabitem2, $tabitem1, $tabitem3, "tabitem");
        });
    } else {
        i.addEventListener("click", () => {
            switcher($tabpane3, $tabpane1, $tabpane2, "tabcontent");
            switcher($tabitem3, $tabitem1, $tabitem2, "tabitem");
        });
    }
});

const switcher = (on, off1, off2, str) => {
    on.classList.add(str + "--active");
    off1.classList.remove(str + "--active");
    off2.classList.remove(str + "--active");
}
