let btn = document.getElementById("getTimezone")
btn.addEventListener("click", timeZone)
function timeZone() {
    let time = document.getElementById("showTimezone")
    time.innerHTML = Date()
}