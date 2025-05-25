// cardData.js (in a new file, or directly in App.jsx)
import cheep from '../assets/cheep.png';
import cat from '../assets/magiccat.png';
import shinyGif from '../assets/shiny.gif';
import sparkleGif from '../assets/sparkle.gif'

export const cardData = [
  {
    image: cheep,
    texts: ["Cheep Cheep", "Cheep Cheep", "Cheep Cheep"],
    backgroundImage: shinyGif,
    borderStyle: "",
  },
  {
    image: cat,
    texts: ["Eow eow eow", "Eow eow eow"],
    backgroundImage: sparkleGif,
    borderStyle: "",
  },
];
