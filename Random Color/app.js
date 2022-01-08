const button = document.querySelector('button');
const text = document.querySelector('h1');

button.addEventListener('click', function() {

    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    text.innerText = newColor;


})

const makeRandColor = () => {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if (r < 155 && g < 155 && b < 155) {
        text.style.color = "white";
    } else {
        text.style.color = 'black';
    }

    return `rgb(${r},${g},${b})`;

}