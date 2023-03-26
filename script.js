// Fortsätt: https://www.youtube.com/watch?v=JkeyKeK3V24 10:55


const loadText = document.querySelector('.loading-text')  // Använd heller queryselector än getelementbyid enl Fred
const bg = document.querySelector('.bg')                  // Hoovra variabel-namnet så ser du att den kan vara element eller null, dvs jag måste kolla att bg finns i html, annars kan det bli strul senare

let percentage = 0

let intervalId = setInterval(increaseBlur, 30)                     //Jag säger till att jag vill att increaseBlur (egenpåhittat namn) ska ske med intervall av 30ms, setintervall är global funktion, och blurring är en lokal funktion på rad 11

function increaseBlur() {
    percentage++
        if(percentage > 99) {
            clearInterval(intervalId)
        }

    loadText.innerText = `${percentage}%`
    loadText.style.opacity = scale(percentage, 0, 100, 1, 0) // https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
    bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)` // https://developer.mozilla.org/en-US/docs/Web/CSS/filter
} 

//style.opacity kan skrivas såhär:
// const loadTextObj = {
//     style: {
//         opacity: 0;
//         color: 
//     }
// }

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {                        // loadText.style.opacity = scale(percentage, 0, 100, 1, 0)
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min   // bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`. Slutresutlatet kommer vara en siffra
  }