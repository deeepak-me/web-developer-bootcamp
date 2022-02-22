const delayedColorchange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorchange('red', 1000)
    .then(() => delayedColorchange('orange', 1000))
    .then(() => delayedColorchange('yellow', 1000))
    .then(() => delayedColorchange('green', 1000))
    .then(() => delayedColorchange('blue', 1000))
    .then(() => delayedColorchange('indigo', 1000))
    .then(() => delayedColorchange('violet', 1000))