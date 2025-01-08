const clickBtn = document.getElementById('click')
const close = document.getElementById('close')
const yes = document.getElementById('yes')
const no = document.getElementById('no')
const dialogBox = document.querySelector('.dialog-box')
const prompt = document.getElementById('prompt')
const alertMessage = document.getElementById('alertMessage')


clickBtn.addEventListener('click', () => {
    dialogBox.classList.remove('hide')
    dialogBox.classList.add('show')
})

close.addEventListener('click', () => {
    dialogBox.classList.remove('show')
    dialogBox.classList.add('hide')
    prompt.style = 'display: flex;'
    alertMessage.style = 'display: none;'
})

yes.addEventListener('click', () => {
    prompt.style = 'display: none;'
    alertMessage.style = 'display: flex;'
})

no.addEventListener('mousemove', () => {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        console.log(mouseX - 400, ' ', mouseY -400)
        // Update magnet position
        no.style.transform = `translate(${mouseX - 250}px, ${mouseY - 250}px)`;
    });
})

yes.addEventListener('mousemove', () => {
    document.addEventListener('mousemove', (e) => {
        no.style.transform = `translate(0px, 0px)`;
    });
})

no.addEventListener {
    this is the best screen recor
}
