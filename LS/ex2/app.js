let truths = ["Did you ever use float?", "Did you read the pre-work?"]
let dares = ["Make a navbar with flex", "Read the pre-work"]

const output = document.getElementById('output')
const btns = document.querySelectorAll('button')

for (btn of btns) {
    
    btn.addEventListener('click', (e) => {
        let random = Math.floor(Math.random() * 2)
        output.innerHTML = ""

        if(e.target.id == "truth") {
            let p = document.createElement('p')
            p.textContent = truths[random]
            output.append(p)
        } else {
            let p = document.createElement('p')
            p.textContent = dares[random]
            output.append(p)
        }

    })
}