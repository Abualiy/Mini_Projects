const btn = document.getElementById('btn')
const passwd = document.getElementById('passwd')

let margin = false

btn.addEventListener('mouseenter', (e) => {
    if (passwd.value === 'freshman-code') {
        e.target.style = `margin-left: 0; background: green;`
        e.target.textContent = 'Correct, Click me'
        passwd.style = "border: none;"
    } else if (passwd.value === '') {
        e.target.style = `margin-left: 0;`
        e.target.textContent = "Click me"
        passwd.style = "border: none;"
    } else {
        e.target.textContent = "Don't click me"
        passwd.style = "border: 4px solid #f00;"

        if (margin) {
            e.target.style = `margin-left: 0; background: red;`
            margin = false
        } else {
            e.target.style = `margin-left: 65%; background: red;`
            margin = true
        }
    }
})

passwd.addEventListener('mouseenter', (e) => {
    btn.style = `margin-left: 0;`
    btn.textContent = "Click me"
    e.target.style = "border: none;"
})