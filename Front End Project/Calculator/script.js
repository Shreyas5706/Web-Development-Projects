let display = document.querySelector("#display")

function sin() {
    display.value = Math.sin(display.value)
}

function cos() {
    display.value = Math.cos(display.value)
}

function tan() {
    display.value = Math.tan(display.value)
}

function sqrt() {
    display.value = Math.sqrt(display.value)
}

function sqr() {
    display.value = eval(display.value * display.value)
}
function log() {
    display.value = Math.log10(display.value)
}
function log2() {
    display.value = Math.log2(display.value)
}
function exp() {
    display.value = Math.exp(display.value)
}