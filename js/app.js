
function toggleDark(){
document.body.classList.toggle("light")
}

function openLightbox(src){
const box=document.getElementById("lightbox")
const img=document.getElementById("lightbox-img")
img.src=src
box.style.display="flex"
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none"
}

function dropHandler(ev){
ev.preventDefault()
const files=ev.dataTransfer.files
alert(files.length+" files dropped (demo)")
}

function allowDrop(ev){
ev.preventDefault()
}

function addTag(){
const input=document.getElementById("tagInput")
const container=document.getElementById("tags")
if(!input.value) return
const tag=document.createElement("span")
tag.className="tag"
tag.innerText=input.value
container.appendChild(tag)
input.value=""
}
