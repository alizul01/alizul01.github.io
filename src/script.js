window.onscroll = function() {
    const nav = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if (window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-fix');
    } else {
        nav.classList.remove('navbar-fix');
    }
}

const videoTab = document.querySelector('#videoTab');

let arr = [
    "https://www.youtube.com/embed/BhEZG9p7tf4",
    "https://www.youtube.com/embed/2v4eIDOl8GI",
    "https://www.youtube.com/embed/3z40wBUAtP4",
    "https://www.youtube.com/embed/TZNA1moT-80",
    "https://www.youtube.com/embed/4iDZARijXtw",
    "https://www.youtube.com/embed/a3YERuVhEhU",
    "https://www.youtube.com/embed/TEbbEEK4TnY",
    "https://www.youtube.com/embed/mwcDNqt6m-4",
    "https://www.youtube.com/embed/2v4eIDOl8GI",
    "https://www.youtube.com/embed/mqLkR-I0gi8",
    "https://www.youtube.com/embed/cvqZ-rXiIss",
    "https://www.youtube.com/embed/R7l748otEls"

];

let judul = [
    'Katakanlah (Official Music Video) - Tarish, Ajul',
    'KSSH 32: Expedition - 2nd Teaser',
    'Apa Aja Sih K3 di Rumah Sakit?',
    'Life as Informatics Student | #Dicoding7thAnniversary',
    'Kiprah Seni Smarihasta (32) - Aftermovie',
    'KSSH 32 Behind The Scene',
    'Behind The Scene of Panitia Kiprah Seni Smarihasta 32',
    'KSSH 32: Inception - 1st Teaser',
    'KSSH 32: Expedition - 2nd Teaser',
    'KSSH 32: Terrario - Final Teaser',
    'Porseni 2k19 - Smarihasta',
    'Quarantine Video'
]

for (let i = 0; i < arr.length; i++) {
    videoTab.innerHTML += `
    <div class="mr-8 mt-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <iframe
                                    class="w-full"
                                    height="181px"
                                    src=${arr[i]}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                  ></iframe>
                                </a>
                                <div>
                                    <a>
                                        <h5 class="mb-2 text-2xl p-4 flex justify-center items-center font-bold tracking-tight text-gray-900 dark:text-white">${judul[i]}</h5>
                                    </a>
                                </div>
                            </div>
    `
}

const uiuxTab = document.querySelector('#uiuxTab');

const uiux = [
    "src/img/mobileMockup.png",
    "src/img/Thumbnail.png",
    "src/img/sinakom.png"
]

const juduluiUx = [
    "KuyJahit UI Design",
    "Teachine UI / UX Design",
    "Sinakom UI / UX Design"
]
for (let i = 0; i < uiux.length; i++) {
uiuxTab.innerHTML += `
<div class="max-w-sm mr-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg" src=${uiux[i]} alt="">
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${juduluiUx[i]}</h5>
                                    </a>
                                </div>
                            </div>
`
}