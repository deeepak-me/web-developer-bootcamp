const delayedColorchange(color, delay) => {
    return new Promise(resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    }
}