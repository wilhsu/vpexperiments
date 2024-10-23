const slider = document.getElementById('fontSizeSlider');
const opSlider = document.getElementById('opacitySlider')
const sizeDisplay = document.getElementById('fontSizeDisplay');
const inputText = document.getElementById('textInput');


const Gfonts = [
    "Roboto",
    "Open Sans",
    "Noto Sans JP",
    "Montserrat",
    "Lato",
    "Roboto Condensed",
    "Oswald",
    "Poppins",
    "Raleway",
    "Slabo 27px",
    "PT Sans",
    "Noto Sans",
    "Roboto Mono",
    "Roboto Slab",
    "Ubuntu",
    "Merriweather",
    "Lora",
    "Inter",
    "Playfair Display",
    "Nunito",
    "PT Serif",
    "Rubik",
    "Titillium Web",
    "Nunito Sans",
    "Noto Sans Korean",
    "Work Sans",
    "PT Sans Narrow",
    "Arimo",
    "Fira Sans",
    "Mukta",
   " Noto Serif",
    "Quicksand",
    "Inconsolata",
    "Noto Sans Traditional Chinese",
    "Nanum Gothic",
    "Dosis",
    "Oxygen",
    "Bitter",
    "Karla",
    "Josefin Sans",
    "Barlow",
    "Cabin",
    "Heebo",
    "Kanit",
    "Lobster",
    "Anton",
    "Hind Siliguri",
    "Libre Baskerville",
    "Yanone Kaffeesatz",
    "Fjalla One",
    "Arvo",
    "Libre Franklin",
    "Indie Flower",
    "Hind",
    "Crimson Text",
    "Abel",
    "IBM Plex Sans",
    "Mulish",
    "Dancing Script",
    "Source Code Pro",
    "Pacifico",
    "DM Sans",
    "Exo 2",
    "Varela Round",
    "Shadows Into Light",
    "EB Garamond",
    "Merriweather Sans",
    "Asap",
    "Bebas Neue",
    "Cairo",
    "Maven Pro",
    "Comfortaa",
    "Manrope",
    "Teko",
    "Bree Serif",
    "Abril Fatface",
    "Play",
    "Noto Sans SC",
    "Questrial",
    "Barlow Condensed",
    "Archivo Narrow",
    "Signika",
    "Ubuntu Condensed",
    "Prompt",
    "Catamaran",
    "Francois One",
    "Exo",
    "Vollkorn",
    "Amatic SC",
    "Overpass",
    "Rajdhani",
    "Assistant",
    "Acme",
    "Righteous",
    "Cuprum",
    "Rokkitt",
    "Permanent Marker",
    "Signika Negative",
    "Poiret One",
    "Cormorant Garamond",

];

// console.log(Gfonts.length);


for (let i=0; i<Gfonts.length; i++){
    const tb = document.createElement('div');
    document.getElementById('canvas').appendChild(tb);
    tb.classList.add('textbox');
    tb.classList.add(`textbox${i}`);
    tb.classList.add(`font${i}`);
    tb.innerText = 'A';

    tb.style.fontFamily = `${Gfonts[i]}`;
    tb.style.fontWeight = '400';
    tb.style.fontStyle = 'normal';

    // const text.[i] = document.getElementById(`font${i}`);
    // let text(i) = document.getElementById(`font${i}`);
    // console.log(tb);

    opSlider.addEventListener("change", function() {
        tb.style.opacity = this.value / this.max;
        opacityDisplay.innerText = this.value + "%";
    });

    slider.addEventListener("input", () => {
        const size = slider.value;
        tb.style.fontSize = `${size}px`;
        sizeDisplay.innerText = size + 'px';
    });

    const inputHandler = function(e) {
        tb.innerText = e.target.value;
    }

    inputText.addEventListener('input', inputHandler);
    inputText.addEventListener('propertychange', inputHandler);

    const fontbox = document.createElement('div');
    const fbInput = document.createElement('input');
    const fbLabel = document.createElement('label');
    
    // fbInput.innerHTML = `<input type="checkbox" name"${Gfonts[i]}" checked onchange="toggleTextVisibility()">`;
    // fbLabel.innerHTML = `<label>${Gfonts[i]}</label>`
    document.getElementById('fontPairingControls').appendChild(fontbox);

    fontbox.appendChild(fbInput);
    fontbox.appendChild(fbLabel);

    fbInput.type = "checkbox";
    fbInput.name = `${Gfonts[i]}`;
    fbInput.onchange = "toggleTextVisibility()";
    fbInput.checked = true;

    fbLabel.innerText = `${Gfonts[i]}`;

    const cboxes = document.querySelectorAll("input[type=checkbox]");

    function toggleTextVisibility(){
        const isChecked = cboxes[i].checked;

        if(isChecked){
            tb.classList.remove('hideText');
        }else{
            tb.classList.add('hideText');
        }
    }

    cboxes.forEach(function(cbox) {
        cbox.addEventListener('change', toggleTextVisibility);
    });

}