const liczba1 = document.querySelector('#liczba1')
const liczba2 = document.querySelector('#liczba2')
const przeliczBtn = document.querySelector('#przelicz')
const wynikiPojemnik = document.querySelector('#wyniki')

console.dir(liczba1)
przeliczBtn.addEventListener('click', () => {
    console.log(+liczba1.value)
    // parseInnt(liczba1.value)
    wynikiPojemnik.innerHTML = `Wynik: ${(liczba1.value+liczba2.value)}`
})
// Math.min(), .max()