const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const second = document.querySelector('.second')
const times = document.querySelector('.time')
const body = document.querySelector('body')
const time_number = document.querySelector('.time-number')
let s = 0;

function createElement(number) {
    console.log(number)
    const div = document.createElement('div')
    const p = document.createElement('p')
    div.appendChild(p)
    p.textContent = `${number}`
    div.style = `transform: rotate(${number * 30}deg)`
    p.style = `transform: rotate(${-number * 30}deg)`
    time_number.appendChild(div)
}

for (let i = 1; i <= 12; i++) {
    createElement(i)
}

const time = setInterval(() => {
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let sec = date.getSeconds()
    let set = ""

    if (hour >= 12) {
        set = "PM"
        times.innerHTML = `${hour-12} : ${minute} : ${sec} ${set}`
        body.style = "background: url('./image/night.jpg')"
    } else {
        set = "AM"
        times.innerHTML = `${hour} : ${minute} : ${sec} ${set}`
        body.style = "background: url('./image/day.jpg')"

    }
    second.style = `transform: rotate(${sec * 6}deg)`;
    min.style = `transform: rotate(${minute * 6}deg)`
    hr.style = `transform: rotate(${hour * 15}deg)`
}, 1000)
