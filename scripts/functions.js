function generateFunny() {
    const num1 = Math.floor(Math.random() * funnyAdj.length);
    const num2 = Math.floor(Math.random() * funnyNouns.length);
    const num3 = Math.floor(Math.random() * 100) + 1;

    return `${funnyAdj[num1]}${funnyNouns[num2]}${num3}`
}

function renderFunny () {
    display.innerText = generateFunny();
}

function generateSerious() {
    const num1 = Math.floor(Math.random() * seriousAdj.length);
    const num2 = Math.floor(Math.random() * seriousNouns.length);
    const num3 = Math.floor(Math.random() * 100) + 1;

    return `${seriousAdj[num1]}${seriousNouns[num2]}${num3}`
}

function renderSerious() {
    display.innerText = generateSerious();
}