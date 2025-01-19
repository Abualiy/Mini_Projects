const h1 = document.querySelector('h1')
const colorBox = document.querySelector('.color-box')
const colorText = document.querySelector('.color')
const copy = document.getElementById('copy')
const color = document.getElementById('color')
const pick = document.querySelector('.pick')
const copyImg = document.getElementById('img')



color.addEventListener('change', (e) => {
    const col = color.value
    console.log(col)
    h1.style = `color: ${col};`
    colorBox.style = `background-color: ${col};`
    colorText.style = `color: ${col};`
    pick.style = `color: ${col};`

    colorText.innerHTML = col
})

copy.addEventListener('click', () => {
    const col = colorText.innerHTML
    copyToClipboard(col)
})

function copyToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
        copyImg.src = './icons/done.svg'
    }).catch(err => {
        console.error(err)
    });
}

setInterval(() => {
    copyImg.src = './icons/copy.svg'
}, 5000)