/* destrutturing */
const { createApp } = Vue;
const app = createApp({

    /***** DATA **************************************/
    data() {
        return {
            /* current index dovrà sempre riferirsi alla posizione dell'oggetto[] nell'array slides.*/
            current_Index: 0,
            isPaused: false,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
        };
    },
    /***** METHODS *********************************/
    methods: {
        /* INIZIO FUNZIONE NEXT  ****/
        nextSlide() {
            // è uguale a scrivere if(this.current_Index>slides.lenght) 
            //se sono all'ultima (4) quando clicco ricomincio dalla prima
            if (this.current_Index === this.slides.length - 1) {
                // ricomincia d'accapo
                this.current_Index = 0;
            } else {
                this.current_Index++;
            }
        },
        /* INIZIO FUNZIONE PREVIEW  ****/
        prevSlide() {

            //è uguale a scrivere if(this.current_Index<0) 
            if (this.current_Index === 0) {
                this.current_Index = this.slides.length - 1;
            } else {
                this.current_Index--;
            }
        },
        /* FUNZIONE THUMBNAIL CLICK (selectSlide) */
        //l'argomento di questa funzione deve essere lìindice della thumbnail cliccata
        selectThumbnail_onClick(clickedThumbnil_Index) {
            this.current_Index = clickedThumbnil_Index;
            /*     console.log(this.current_Index) era il this. (ti odio comunque) */
        },

        /* FUNZIONE STOP AUTOPLAY*/
        stopAutoplay() {
            console.log(this.isPaused);
            return this.isPaused = true;
        },

        /* FUNZIONE AUTOPLAY*/
        autoplay(callbackfunction) {
            let autoplay_interval

            if (!this.isPaused) {
                autoplay_interval = setInterval(callbackfunction, 3000);
                console.log(this.isPaused)
            } else {
                clearInterval(autoplay_interval);
                console.log(this.isPaused)
            }
        },


    },
    /***** MOUNTED ****************************************/
    mounted() {
        this.autoplay(this.nextSlide),
           /*  setInterval(this.autoplay, 3000), */
     
        console.log("mounted called");
    }
}).mount('#app');

/* const slider_El = document.querySelector(".slider-wrapper");
console.log(slider_El)

slider_El.addEventListener("mouseover", () => {

}); */