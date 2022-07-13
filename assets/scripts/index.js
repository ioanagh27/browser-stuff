document.getElementById("main-title").textContent = "Hi everyone!"

document.querySelector("#main-title").textContent = "Have a good day"

const divs = document.querySelectorAll("div");

for (let d of divs) {
    d.innerText = "Changed"
}

divs.forEach((d,i ) => {
    d.textContent = `I am at index ${i}`
})
