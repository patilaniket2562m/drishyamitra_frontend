/* ===============================
   DARK MODE TOGGLE
================================ */

function toggleDark() {

document.body.classList.toggle("light")

}


/* ===============================
   LIGHTBOX IMAGE VIEWER
================================ */

function openLightbox(src){

const box = document.getElementById("lightbox")
const img = document.getElementById("lightbox-img")

img.src = src

box.style.display = "flex"

}

function closeLightbox(){

const box = document.getElementById("lightbox")

box.style.display = "none"

}


/* ===============================
   DRAG & DROP UPLOAD
================================ */

function allowDrop(ev){

ev.preventDefault()

}

function dropHandler(ev){

ev.preventDefault()

const files = ev.dataTransfer.files

previewImages(files)

}


/* ===============================
   FILE INPUT PREVIEW
================================ */

function previewImages(files){

const preview = document.getElementById("preview")

if(!preview) return

preview.innerHTML = ""

Array.from(files).forEach(file => {

const reader = new FileReader()

reader.onload = function(e){

const img = document.createElement("img")

img.src = e.target.result
img.style.width = "120px"
img.style.margin = "8px"
img.style.borderRadius = "8px"

preview.appendChild(img)

}

reader.readAsDataURL(file)

})

}


/* ===============================
   AI TAGGING SYSTEM
================================ */

function addTag(){

const input = document.getElementById("tagInput")
const container = document.getElementById("tags")

if(!input || !container) return

if(!input.value.trim()) return

const tag = document.createElement("span")

tag.className = "tag"
tag.innerText = input.value

container.appendChild(tag)

input.value = ""

}


/* ===============================
   REMOVE TAG ON CLICK
================================ */

document.addEventListener("click",function(e){

if(e.target.classList.contains("tag")){

e.target.remove()

}

})


/* ===============================
   MOBILE NAVBAR TOGGLE
================================ */

function toggleMenu(){

const menu = document.getElementById("mobileMenu")

if(menu){

menu.classList.toggle("show")

}

}


/* ===============================
   AI SEARCH DEMO
================================ */

function searchPhotos(){

const query = document.getElementById("searchInput")

if(!query) return

alert("AI searching for: " + query.value)

}


/* ===============================
   WHATSAPP SHARE
================================ */

function shareWhatsApp(){

const url = window.location.href

const text = "Check out these photos"

window.open(

"https://wa.me/?text=" + encodeURIComponent(text + " " + url)

)

}


/* ===============================
   EMAIL SHARE
================================ */

function shareEmail(){

const subject = "Shared Photos"

const body = "Check out these photos: " + window.location.href

window.location.href =

"mailto:?subject=" +

encodeURIComponent(subject) +

"&body=" +

encodeURIComponent(body)

}


/* ===============================
   ANALYTICS COUNTER ANIMATION
================================ */

function animateCounter(id, target){

let element = document.getElementById(id)

if(!element) return

let count = 0

let speed = target / 100

let interval = setInterval(function(){

count += speed

if(count >= target){

count = target

clearInterval(interval)

}

element.innerText = Math.floor(count)

},20)

}


/* ===============================
   RUN COUNTERS ON PAGE LOAD
================================ */

window.onload = function(){

animateCounter("photosCount",15432)

animateCounter("peopleCount",48)

animateCounter("eventsCount",120)

animateCounter("sharedCount",3200)

}


function loginUser(event){

event.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(email && password){

localStorage.setItem("userLoggedIn","true")

window.location.href="dashboard.html"

}

}


/* ===============================
   GALLERY IMAGE CLICK HANDLER
================================ */

document.addEventListener("DOMContentLoaded", function(){

const images = document.querySelectorAll(".masonry img")

images.forEach(img => {

img.addEventListener("click", function(){

openLightbox(this.src)

})

})

})
