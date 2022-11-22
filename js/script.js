/* destrutturing */
const { createApp } = Vue;

const app = createApp({

    /***** DATA ****************************************************************************************/
    data() {
        return {
            /* current index dovrà sempre riferirsi alla posizione dell'oggetto[] nell'array slides.*/
            current_Index: 0,
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

    /***** METHODS ****************************************************************************************/
    methods: {


        /* INIZIO FUNZIONE NEXT  ****/
        nextSlide() {
            // è uguale a scrivere if(this.current_Index>slides.lenght) 
            if (this.current_Index === this.slides.length - 1) {
                // ricomincia d'accapo
                this.current_Index = 0;
            } else {
                this.current_Index++;
            }
        },

        /* INIZIO FUNZIONE PREVIEW  ****/
        /*        prevSlide() {
       
                   //è uguale a scrivere if(this.current_Index<0) 
                   if (this.current_Index === 0) {
                       this.current_Index = this.slides.length - 1;
                   } else {
                       this.current_Index--;
                   }
               }, */

        /* FUNZIONE THUMBNAIL CLICK (selectSlide) */
        //l'argomento di questa funzione deve essere lìindice della thumbnail cliccata
        selectThumbnail_onClick(clickedThumbnil_Index) {
            this.current_Index = clickedThumbnil_Index;
            console.log(current_Idex, clickedThumbnil_Index);
        /*     this.classList.add("active"); */

            /*    
            //aggiungo classe alla thumb cliccata
        this.classList.add("active");
            
            //disattiva tutte le thumbnail con dataset diverso da quello della thumb appena cliccata
                disactiveOldThumbnails()
            
                //sostituzione slide
                replaceSlide() 
                 */
        }
    },

    /***** MOUNTED ****************************************************************************************/
    mounted() {
        console.log("mounted called");
    }

}).mount('#app');



/********* FUNZIONE GENERICA SWITCH CALLBACKFUNCTION DI FUNZIONE ESTERNA  *********************/
/* 
//conta i click di revertBtn
let revertCounter = 0
//conta i click di playBtn
let playBtnCounter = 0
//callbackfunction è argomento di autoplay() e di default ha valore funzione nextSlide
//nella funzione switchCallbackFunction il suo valore cambia in base al numero dei click
let callbackfunction = nextSlide;

//aggiungo add event listner al bottone(dovevo farlo sopra ma mi fa comodo tenere sott'occhio questi passaggi in maniera compatta)

//se devo passare degli argomenti ad una funzione che viene invocata con un evento, utilizzo una arrowfunction per invocare la funzione nominale, senò dovrei scriverla così:

// revertBtn_El.addEventListener("click", switchCallbackFunction);
//switchCallbackFunction(nextSlide, prevSlide) 
revertBtn_El.addEventListener("click", () => { switchCallbackFunction(nextSlide, prevSlide) });


function switchCallbackFunction(callbackfunction1, callbackfunction2) {

    revertCounter++
    console.log("switchCallbackFunction revertCounter= ", revertCounter);
    //QUI AVVIENE LA MAGIA
    //se nel momento in cui clicco il revertBtn il playbtn è stato cliccato una sola volta, significa che la funzione autoplay() è nella prima if (modalità play) e ha il playBtnCounter dispari. 
    if (playBtnCounter % 2 !== 0) {
        //occorre invocare una sola volta la funzione autoplay, incrementare il playbtncounter di 1 e ripristinare la "condizione della seconda if (modalità pausa).
        autoplay(callbackfunction);
    }

    if (revertCounter % 2 === 0) {
        callbackfunction = callbackfunction1
    } else {
        callbackfunction = callbackfunction2
    }
    console.log("switchCallbackFunction revertCounter= ", revertCounter, callbackfunction);
    return (callbackfunction);
}

//aggiungo add event listner al bottone(dovevo farlo sopra ma mi fa comodo tenere sott'occhio questi passaggi in maniera compatta)
playBtn_El.addEventListener("click", () => { autoplay(callbackfunction) });
// autoplay(callbackfunction)
 
let autoplay_interval

function autoplay(callbackfunction) {

    playBtnCounter++
    console.log(playBtnCounter, "autoplay   callbackfunction is=", callbackfunction);
    if (playBtnCounter % 2 !== 0) {
        playBtn_El.innerHTML = playBtnIcons[1];
        autoplay_interval = setInterval(callbackfunction, 3000);
    } else {
        playBtn_El.innerHTML = playBtnIcons[0];
        clearInterval(autoplay_interval);
    }
}
 */
