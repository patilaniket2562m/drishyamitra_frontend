/* ======================================
DARK MODE TOGGLE
====================================== */

function toggleDark() {

document.body.classList.toggle("light")

localStorage.setItem(
"theme",
document.body.classList.contains("light") ? "light" : "dark"
)

}


/* ======================================
LOAD SAVED THEME
====================================== */

document.addEventListener("DOMContentLoaded", () => {

const theme = localStorage.getItem("theme")

if(theme === "light"){

document.body.classList.add("light")

}

})



/* ======================================
LIGHTBOX IMAGE VIEWER
====================================== */

function openLightbox(src){

const box = document.getElementById("lightbox")
const img = document.getElementById("lightbox-img")

if(!box || !img) return

img.src = src
box.style.display = "flex"

}

function closeLightbox(){

const box = document.getElementById("lightbox")

if(box) box.style.display = "none"

}



/* ======================================
DRAG & DROP UPLOAD
====================================== */

function allowDrop(e){

e.preventDefault()

}

function dropHandler(e){

e.preventDefault()

const files = e.dataTransfer.files

previewImages(files)

}



/* ======================================
IMAGE PREVIEW
====================================== */

function previewImages(files){

const preview = document.getElementById("preview")

if(!preview) return

preview.innerHTML = ""

Array.from(files).forEach(file => {

const reader = new FileReader()

reader.onload = function(e){

const img = document.createElement("img")

img.src = e.target.result
img.className = "preview-img"

preview.appendChild(img)

}

reader.readAsDataURL(file)

})

}



/* ======================================
AI TAGGING SYSTEM
====================================== */

function addTag(){

const input = document.getElementById("tagInput")
const container = document.getElementById("tags")

if(!input || !container) return

const value = input.value.trim()

if(value === "") return

const tag = document.createElement("span")

tag.className = "tag"
tag.textContent = value

container.appendChild(tag)

input.value = ""

}



/* REMOVE TAG */

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("tag")){

e.target.remove()

}

})



/* ======================================
MOBILE NAVBAR
====================================== */

function toggleMenu(){

const menu = document.getElementById("mobileMenu")

if(menu){

menu.classList.toggle("show")

}

}



/* ======================================
AI SEARCH DEMO
====================================== */

function searchPhotos(){

const input = document.getElementById("searchInput")

if(!input) return

const query = input.value.trim()

if(query === ""){

alert("Enter search query")

return

}

alert("AI searching for: " + query)

}



/* ======================================
WHATSAPP SHARE
====================================== */

function shareWhatsApp(){

const url = window.location.href
const text = "Check out these photos"

window.open(

"https://wa.me/?text=" +
encodeURIComponent(text + " " + url)

)

}



/* ======================================
EMAIL SHARE
====================================== */

function shareEmail(){

const subject = "Shared Photos"
const body = "Check out these photos: " + window.location.href

window.location.href =
`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

}



/* ======================================
ANALYTICS COUNTER ANIMATION
====================================== */

function animateCounter(id,target){

const el = document.getElementById(id)

if(!el) return

let count = 0
const speed = target / 100

const interval = setInterval(()=>{

count += speed

if(count >= target){

count = target
clearInterval(interval)

}

el.textContent = Math.floor(count)

},20)

}



/* ======================================
RUN COUNTERS
====================================== */

document.addEventListener("DOMContentLoaded",()=>{

animateCounter("photosCount",15432)
animateCounter("peopleCount",48)
animateCounter("eventsCount",120)
animateCounter("sharedCount",3200)

})



/* ======================================
LOGIN SYSTEM
====================================== */

function loginUser(event){

event.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(email && password){

localStorage.setItem("userLoggedIn","true")

window.location.href = "dashboard.html"

}

}



/* ======================================
REGISTER SYSTEM
====================================== */

function registerUser(event){

event.preventDefault()

const password = document.getElementById("password").value
const confirm = document.getElementById("confirmPassword").value

if(password !== confirm){

alert("Passwords do not match")
return

}

localStorage.setItem("userLoggedIn","true")

window.location.href = "dashboard.html"

}



/* ======================================
LOGOUT
====================================== */

function logout(){

localStorage.removeItem("userLoggedIn")

window.location.href = "../index.html"

}



/* ======================================
PROTECT DASHBOARD PAGES
====================================== */

document.addEventListener("DOMContentLoaded",()=>{

const protectedPages = [
"dashboard.html",
"gallery.html",
"upload.html",
"faces.html",
"analytics.html",
"settings.html"
]

const page = window.location.pathname.split("/").pop()

if(protectedPages.includes(page)){

if(!localStorage.getItem("userLoggedIn")){

window.location.href = "login.html"

}

}

})



/* ======================================
MASONRY IMAGE CLICK HANDLER
====================================== */

document.addEventListener("DOMContentLoaded",()=>{

const images = document.querySelectorAll(".masonry img")

images.forEach(img => {

img.addEventListener("click",()=>{

openLightbox(img.src)

})

})

})
