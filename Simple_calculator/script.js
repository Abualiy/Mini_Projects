const display = document.getElementById("display")
const btns = document.querySelectorAll(".btn")

display.addEventListener('input', () => {
    display.scrollLeft = display.scrollWidth
})

var result = 0
var op = '+'
var temp = ""

const math = (num, sim) => {
    if (sim === "+") {
        result = result + Number(num)
    }
    if (sim === "-") {
        result = result - Number(num)
    }
    if (sim === "X") {
        result = result * Number(num)
    }
    if (sim === "/") {
        if (num === "0") {
            result = "Error"
        } else {
            result = result / Number(num)
        }
    }
}

const calculator = (calculatorStatement) => {
    for (let j in calculatorStatement) {
        if ('+-/X'.includes(calculatorStatement[j])) {
            math(temp, op)
            temp = ""
            op = calculatorStatement[j]
        } else {
            temp += calculatorStatement[j]
        }
    }
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === 'clear') {
            display.value = ""
            temp = ""
            result = 0
            op = "+"
        } else if (btn.id === 'back') {
            let inst = display.value
            let local_temp = ""
            for (let i = 0; i < inst.length - 1; i++) {
                local_temp += inst[i]
            }
            display.value = local_temp
        } else if (btn.id === '=') {
            if (display.value === "") {
                display.value = display.value
            } else {
                calculator(display.value)
                math(temp, op)
                display.value = String(result)
                result = 0
                temp = ""
                op = "+"
            }
        } else {
            if (display.value === "0" || display.value === ".") {
                display.value = btn.id
                numbers = btn.id
            } else if (display.value === "" && btn.id === ".") {
                display.value = "0."
            } else if (display.value === "" && btn.id === "0") {
                display.value = display.value
            } else if (display.value[display.value.length - 1] === '.' && btn.id === '.') {
                display.value = display.value
            } else if ('+/-X'.includes(display.value[display.value.length - 1]) && btn.id === '.') {
                display.value = display.value
            } else if ('+-/X'.includes(btn.id) &&( display.value === "" || '+-/X'.includes(display.value[display.value.length - 1]) || display.value[display.value.length - 1] === '.')) {
                display.value = display.value
            }else {
                display.value += btn.id
            }
        }
    })
})