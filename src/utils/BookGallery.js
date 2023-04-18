import { v4 as uuidv4 } from "uuid";
import Chairs from "../assets/images/Books/99-Chairs.webp";
import Coctails from "../assets/images/Books/Coctails-The-Ultimate-Guide.webp";
import HealingHerbs from "../assets/images/Books/Healing-Herbs.webp";
import HikingInTheAlps from "../assets/images/Books/Hiking-in-the-Alps.webp";
import InteriorDesing from "../assets/images/Books/Interior-Design.webp";
import Khalo from "../assets/images/Books/Khalo.webp";
import LookingForNini from "../assets/images/Books/Looking-for-Nini.webp";
import Origami from "../assets/images/Books/Origami.webp";
import Picasso from "../assets/images/Books/Picasso-Sketches-and-Untold-Truths.webp";
import SpokenWord from "../assets/images/Books/Spoken-Word.webp";
import TheMissingC from "../assets/images/Books/The-Missing-C.webp";
import TheSahara from "../assets/images/Books/The-Sahara.webp";
import VegetarianChild from "../assets/images/Books/Vegetarian-Child.webp";
import WaitedLongEnough from "../assets/images/Books/Waited-Long-Enough.webp";
import YoureNotAHoarder from "../assets/images/Books/Youre-not-a-Hoarder.webp";

const gallery = [
    {
        id: uuidv4(),
        img: Chairs,
        name: "99 Chairs",
        price: "14.95",
    },
    {
        id: uuidv4(),
        img: Coctails,
        name: "Coctails",
        price: "14.95",
    },
    {
        id: uuidv4(),
        img: HealingHerbs,
        name: "Khalo",
        price: "24.95",
    },
    {
        id: uuidv4(),
        img: HikingInTheAlps,
        name: "Hiking In The Alps",
        price: "19.95",
    },
    {
        id: uuidv4(),
        img: InteriorDesing,
        name: "Interior Design",
        price: "29.95",
    },
    {
        id: uuidv4(),
        img: Khalo,
        name: "Khalo",
        price: "9.95",
    },
    // {
    //     id: uuidv4(),
    //     img: LookingForNini,
    //     name: "Looking For NINI",
    //     price: "4.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: Origami,
    //     name: "Origami",
    //     price: "12.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: Picasso,
    //     name: "Picasso",
    //     price: "15.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: SpokenWord,
    //     name: "Spoken Word",
    //     price: "19.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: TheMissingC,
    //     name: "The Missing C",
    //     price: "19.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: TheSahara,
    //     name: "The Sahara",
    //     price: "12.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: VegetarianChild,
    //     name: "Vegetarian Child",
    //     price: "19.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: WaitedLongEnough,
    //     name: "Waited Long Enough",
    //     price: "25.95",
    // },
    // {
    //     id: uuidv4(),
    //     img: YoureNotAHoarder,
    //     name: "You're not a Hoarder",
    //     price: "29.95",
    // },
];

export default gallery;
