
let click_me_btn = document.querySelector(".MuiButtonBase-root")



let first_popup = document.querySelector(".2tzjbs")


click_me_btn.onclick = function (e) {
    e.preventDefault();
    first_popup.style.display = "flex"
}
