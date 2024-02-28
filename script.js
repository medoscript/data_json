const title = document.getElementById("title")
const year = document.getElementById("year")
const director = document.getElementById("director")
const description = document.getElementById("description")
const poster = document.getElementById("poster")

async function getData() {
    const res = await fetch("")
    const data = await res.json()
    const{} = data
}