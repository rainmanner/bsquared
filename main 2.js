
let click_me_btn = document.querySelector("body > div.MuiBox-root.css-j7qwjs > div.MuiBox-root.css-j7qwjs > div > div > div > div > button")



let first_popup = document.querySelector("body > div. tzjbs.overlay")


click_me_btn.onclick = function (e) {
    e.preventDefault();
    first_popup.style.display = "flex"
}
