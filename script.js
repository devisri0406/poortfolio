var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu")
function openmenu() {
sidemeu.style.right = "0";
}
function closemenu() {
sidemeu.style.right = "-200px";
} 

const scriptURL = 'https://script.google.com/macros/s/AKfycbybuJvD6URBPL19Z91fUjVjkc5oDs4ZBvIsCG1s8Hgv7ih7XL1LnlfuljWUzBr8d68yRw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Succeddfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})







