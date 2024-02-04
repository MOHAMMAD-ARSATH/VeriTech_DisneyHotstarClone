let movies = [
    {
        name: "Miss Perfect!",
        desc: 'Cleanliness is her obsession. But what happens when this fetish leads to a young highly qualified professional getting mistaken for a housemaid?',
        genre: 'Romance | Comedy | Drama | Family-Friendly',
        image: 'images/slider1.png'
    },
    {
        name: "Fight Club",
        desc: "Selva a college student with football aspirations grows frustrated over lack of opportunity. His anger draws him into conflicts impacting himself and family.",
        genre: 'Action | Thiller',
        image: 'images/slider3.png'
    },
    {
        name: "Karmma Calling",
        desc: "A girl looking for revenge and in mood for no mercy. She wants eye for an eye, blood for blood and deceit to avenge deceit. Nothing matters when the world is at your feet. But can anyone really cheat one's karma?",
        genre: 'Drama | Thiller',
        image: 'images/slider2.png'
    },
    {
        name: "Neru",
        desc: "Former lawyer Vijayamohan takes on the challenging case of a blind girl with unusual evidence. How will he navigate the legal odds and secure justice for her?",
        genre: 'Drama | Courtroom | Suspense | Gripping',
        image: 'images/slider6.png'
    },
    {
        name: "Joe",
        desc: "Joe, who is reeling from a heartbreak by his college sweetheart, reluctantly enters an arranged marriage. What surprises await in this new chapter for him?",
        genre: 'Romance | Drama | First Love | Unrequited Love',
        image: 'images/slider4.png'
    },
    {
        name: "Dance+ Pro",
        desc: "The hunt for India's new dancing superstar is on! With high-end tech and innovative dance acts, emerging talents bring their A-game to bag the coveted title.",
        genre: 'Reality | Competition | Dance | Mind-Blowing',
        image: 'images/slider5.png'
    },
]

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlice = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // Create DOM Elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let h3 = document.createElement('h3');

    // Attaching all Elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].desc));
    h3.appendChild(document.createTextNode(movies[slideIndex].genre));
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(h3);
    slide.appendChild(content); 
    slide.appendChild(imgElement); 
    carousel.appendChild(slide);

    // Setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // Setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-desc';
    h3.className = 'movie-genre';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`
    }
}

for (let i = 0; i < 3; i++) {
    createSlice();
}

setInterval(() => {
    createSlice();
}, 3000);


// Video Cards 

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach((item) => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});


// Card Sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    });
});