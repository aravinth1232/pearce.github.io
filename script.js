

const open = document.getElementById("open")
const close = document.getElementById("close")

const side = document.getElementById("sidemenu")

function on(){
    side.style.display ="flex"
   side.style.left= "60"

    open.style.display = "none"

}

function off(){
    side.style.display ="none"
    open.style.display = "flex"
}