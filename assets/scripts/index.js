document.getElementById("main-title").textContent = "Hi everyone!"

document.querySelector("#main-title").textContent = "Have a good day"

// const divs = document.querySelectorAll("div");

for (let d of divs) {
    d.innerText = "Changed"
}

divs.forEach((d,i ) => {
    d.textContent = `I am at index ${i}`
})


document.getElementById("bitcoin-button").addEventListener("click", () => {
    console.log("HI!")
})


document.getElementById("bitcoin-button").addEventListener("click", () => {
    console.log("Hello!")
})


document.getElementById("bitcoin-button").addEventListener("mouseover", () => {
    console.log("BLA!")
})


document.getElementById("bitcoin-button").addEventListener("click", (e) => {
    e.target.textContent = "Hmm"
})


const divs = document.querySelectorAll("divs");

divs.forEach((d, i) => {
    d.addEventListener("click", (e) => {
      button.textContent = i;
    })
})
