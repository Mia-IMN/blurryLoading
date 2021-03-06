const loadingText = document.querySelector('.loading-Text')
const bg = document.querySelector('.bg')

let load = 0

const int = setInterval(count, 30)


function count(){
    load++

    if (load > 99){
        clearInterval(int)
    }
    loadingText.innerHTML = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
