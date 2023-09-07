/* 
Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo, questa volta usando gli oggetti.

Potete prendere come riferimento il codice scritto insieme nel live, che troverete direttamente nella mia repository di github a questo link: [https://github.com/fabiopacifici/104_js/tree/main/live_slider]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
*/

//create an objects array
const slides = [
    {path: './assets/img/01.webp'},
    {path: './assets/img/02.webp'},
    {path: './assets/img/03.webp'},
    {path: './assets/img/04.webp'},
    {path: './assets/img/05.webp'},
]

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);

const thumbsElement = document.querySelector('.thumbnails')

/* Print all images into the dom */
// loop over the slides 
slides.forEach((path, i) => {

    const slidePath = slides[i];
    console.log(slidePath);
    
    const thumbPath = slides[i];
    const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath['path']}" alt="">`
    console.log(thumbMarkup);
    
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)

    // for each slide we create the markup
    const slideMarkup = `<img class="${activeSlide === i ? 'active' : ''}" src="${slidePath['path']}" alt="">`
    console.log(slideMarkup);
    
    
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
});



// intercept click on the next icon 
nextEl.addEventListener('click', function () {
    console.log('cliccato su next');

    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')


    // activeSlide = 4

    if (activeSlide === slidesImages.length - 1) {
        activeSlide = 0
        // activeSlide = 5
    } else {
        // increment the activeSlide of 1
        activeSlide++
    }


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')


    /* TODO */


    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')


})

// intercept click on the prev icon


// activeSlide = 0
prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');


    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }


    console.log(activeSlide);


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
})