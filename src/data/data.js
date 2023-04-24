import { v4 as uuidv4 } from "uuid";
import short from "short-uuid";

import chairs from "../assets/images/Books/99-Chairs.webp";
import coctails from "../assets/images/Books/Coctails-The-Ultimate-Guide.webp";
import healingHerbs from "../assets/images/Books/Healing-Herbs.webp";
import hikingInTheAlps from "../assets/images/Books/Hiking-in-the-Alps.webp";
import interiorDesing from "../assets/images/Books/Interior-Design.webp";
import khalo from "../assets/images/Books/Khalo.webp";
import lookingForNini from "../assets/images/Books/Looking-for-Nini.webp";
import origami from "../assets/images/Books/Origami.webp";
import picasso from "../assets/images/Books/Picasso-Sketches-and-Untold-Truths.webp";
import spokenWord from "../assets/images/Books/Spoken-Word.webp";
import theMissingC from "../assets/images/Books/The-Missing-C.webp";
import theSahara from "../assets/images/Books/The-Sahara.webp";
import vegetarianChild from "../assets/images/Books/Vegetarian-Child.webp";
import waitedLongEnough from "../assets/images/Books/Waited-Long-Enough.webp";
import youreNotAHoarder from "../assets/images/Books/Youre-not-a-Hoarder.webp";

const translator = short(short.constants.flickrBase58, {
    consistentLength: false,
});

const data = [
    {
        id: translator.new(),
        img: chairs,
        name: "99 Chairs",
        author: "Olivia Davis",
        price: 14.95,
        description: `Discover the art and design of seating with "99 Chairs," the ultimate guide to the world's most iconic chairs. From mid-century modern classics to contemporary masterpieces, this beautifully illustrated book showcases 99 chairs that have made a lasting impact on design history. With insightful commentary and stunning visuals, "99 Chairs" is perfect for anyone interested in furniture design and interior decor. Whether you're a design enthusiast or just looking for inspiration for your next seating purchase, this book is a must-have addition to your collection. Don't miss out on this stylish and informative journey through the world of chairs - order your copy today!`,
    },
    {
        id: translator.new(),
        img: coctails,
        name: "Coctails",
        author: "Ethan Robinson",
        price: 14.95,
        description: `Elevate your bartending skills with "Cocktails," the ultimate guide to crafting delicious and sophisticated drinks. With over 200 recipes, this comprehensive guidebook offers something for every taste and occasion. From classic cocktails to modern twists, you'll learn how to mix, shake, and stir your way to the perfect drink every time. With easy-to-follow instructions and stunning photography, "Cocktails" is the perfect resource for both beginners and experienced mixologists alike. Impress your friends and family with your newfound bartending skills - order your copy today and start shaking things up!`,
    },
    {
        id: translator.new(),
        img: healingHerbs,
        name: "Healing Herbs",
        author: "Sophia Patel",
        price: 24.95,
        description: `Unlock the healing power of nature with "Healing Herbs," the ultimate guide to using herbs for health and wellness. Discover natural remedies for everything from headaches to digestive issues, and learn how to incorporate herbs into your daily life for optimal health and wellness. With stunning photography and easy-to-follow instructions, this book is perfect for beginners and experienced herbalists alike. Don't settle for synthetic drugs with harmful side effects - order your copy today and start your journey to natural healing and wellness!`,
    },
    {
        id: translator.new(),
        img: hikingInTheAlps,
        name: "Hiking in the Alps",
        author: "Alexander Kim",
        price: 19.95,
        description: `Experience the beauty and adventure of the Alps with "Hiking in the Alps," the ultimate guidebook for outdoor enthusiasts. Explore the majestic mountains and stunning landscapes of Europe's most famous range, with detailed information on over 50 hiking trails. Whether you're a seasoned hiker or a beginner, this comprehensive guidebook offers everything you need to plan your next adventure, including trail difficulty, elevation gain, and estimated hiking time. With stunning photography and expert tips, "Hiking in the Alps" is the perfect resource for anyone looking to explore this iconic region. Don't miss out on this unforgettable journey - order your copy today and start planning your next alpine adventure!`,
    },
    {
        id: translator.new(),
        img: interiorDesing,
        name: "Interior Design",
        author: "Mia Nguyen",
        price: 39.95,
        description: `Transform your home with "Interior Design," the ultimate guide to creating your dream space. From selecting the perfect color palette to choosing the right furniture, this comprehensive guidebook covers everything you need to know to design a space that reflects your style and personality. With stunning photography, expert advice, and practical tips, "Interior Design" will help you unlock your creativity and achieve your design goals. Don't settle for a cookie-cutter home - order your copy today and start creating a space that is uniquely yours.`,
    },
    {
        id: translator.new(),
        img: khalo,
        name: "Khalo",
        author: "William Wright",
        price: 9.95,
        description: `Discover the life and art of Frida Kahlo with "Kahlo: The Story of a Mexican Icon." This beautifully illustrated biography provides a comprehensive look at her fascinating life and legacy, from her childhood in Mexico City to her iconic self-portraits and love of Mexican culture. With insightful commentary and stunning visuals, "Kahlo" is a must-read for anyone interested in art and history. Don't miss out on this captivating journey - order your copy today!`,
    },
    {
        id: uuidv4(),
        img: lookingForNini,
        name: "Looking For NINI",
        author: "Charlotte Jackson",
        price: 4.95,
        description: `Samantha sets out to find her grandmother Nini, who left Italy when Samantha's mother was young. Along the way, she learns about Nini's life and adventures, discovering a new appreciation for her family's roots. Though she never finds Nini in person, Samantha's journey of self-discovery leads her to a deeper understanding of her family's legacy.`,
    },
    {
        id: uuidv4(),
        img: origami,
        name: "Origami",
        author: "Noah Hernandez",
        price: 12.95,
        description: `Unfold the magic of paper with "Origami," the ultimate guide to the art of paper folding. This comprehensive book offers over 50 unique origami designs, with easy-to-follow instructions and step-by-step illustrations. From beginner to advanced, "Origami" is perfect for anyone looking to master the craft of paper folding. With expert tips and stunning photography, this book is not only a practical guide, but a visual feast for the eyes. Whether you're looking to create origami animals, flowers, or intricate geometric shapes, "Origami" has something for everyone. Order your copy today and start creating your own paper masterpieces!`,
    },
    {
        id: uuidv4(),
        img: picasso,
        name: "Picasso",
        author: "Emma Reynolds",
        price: 15.95,
        description: `Explore the life and work of one of the greatest artists of the 20th century with "Picasso," the definitive guide to Pablo Picasso's groundbreaking career. From his early Blue and Rose periods to his revolutionary Cubist works and beyond, this comprehensive book offers a deep dive into the art and inspiration of this masterful painter and sculptor. With stunning visuals and insightful commentary, "Picasso" is perfect for anyone looking to learn more about the man behind the art. Whether you're a seasoned art aficionado or a curious newcomer, this book is a must-have addition to your collection. Don't miss out on this captivating journey through the life and legacy of one of the most influential artists of all time - order your copy of "Picasso" today!`,
    },
    {
        id: uuidv4(),
        img: spokenWord,
        name: "Spoken Word",
        author: "Lucas Lee",
        price: 19.95,
        description: `Experience the power of the spoken word with "Spoken Word," the ultimate collection of poems, monologues, and stories performed by some of the world's most talented spoken word artists. From the raw emotion of slam poetry to the lyrical beauty of classic verse, this captivating book features a diverse range of voices and styles, each one guaranteed to leave a lasting impression. With contributions from renowned performers such as Sarah Kay, Rudy Francisco, and Andrea Gibson, "Spoken Word" is a celebration of the art form and the many ways in which words can move us. Whether you're a spoken word enthusiast or simply looking for a new way to experience the power of language, this book is sure to leave you inspired. Order your copy of "Spoken Word" today and discover the transformative power of the spoken word!`,
    },
    {
        id: uuidv4(),
        img: theMissingC,
        name: "The Missing C",
        author: "Isabella Gomez",
        price: 19.95,
        description: `"The Missing C" is a gripping mystery novel that will keep you on the edge of your seat from beginning to end. When a valuable diamond goes missing from a high-security vault, detective Jack Hunter is called in to investigate. As he delves deeper into the case, Jack uncovers a web of secrets and lies that threatens to bring down the entire city. With the clock ticking and the pressure mounting, Jack must race against time to solve the case before it's too late. Along the way, he'll encounter a colorful cast of characters, each with their own hidden motives and agendas. Will Jack be able to crack the case and find the missing diamond, or will his investigation lead him down a dangerous path from which there is no return? Find out in "The Missing C," the thrilling new novel from acclaimed author John Smith. Order your copy today and prepare to be swept away by this unforgettable tale of mystery and intrigue!`,
    },
    {
        id: uuidv4(),
        img: theSahara,
        name: "The Sahara",
        author: "Benjamin Cooper",
        price: 12.95,
        description: `Journey across the endless sands with "The Sahara," a breathtaking photographic exploration of one of the world's most mysterious and awe-inspiring landscapes. With stunning visuals captured by world-renowned photographers, "The Sahara" takes you on a journey through the shifting dunes and ancient oases that make up this vast and beautiful desert. From the majestic beauty of the sand dunes to the intricate patterns of the desert flora and fauna, this book offers a rare glimpse into a world few have ever seen. With informative text and captivating images, "The Sahara" is the perfect addition to any coffee table or bookshelf. Whether you're a seasoned traveler or simply looking for a new perspective on the world around you, this book is sure to leave you inspired. Order your copy of "The Sahara" today and embark on a journey of discovery through this timeless landscape!`,
    },
    {
        id: uuidv4(),
        img: vegetarianChild,
        name: "Vegetarian Child",
        author: "Ava Rodriguez",
        price: 19.95,
        description: `Introduce your child to the joys of vegetarianism with "Vegetarian Child," the ultimate guide to raising happy, healthy kids on a plant-based diet. Written by expert nutritionist and mother of two, Sarah Johnson, this comprehensive book offers practical advice and delicious recipes for every stage of your child's development, from weaning to adolescence. With tips on meal planning, grocery shopping, and cooking for even the pickiest eaters, "Vegetarian Child" makes it easy to give your child the nutrients they need to thrive on a meat-free diet. From colorful smoothie bowls to hearty lentil soups and beyond, these tasty recipes are sure to please even the most discerning young palate. Whether you're a seasoned vegetarian or simply looking to make healthier choices for your family, "Vegetarian Child" is the ultimate resource for raising happy, healthy, plant-powered kids. Order your copy today and give your child the gift of lifelong health and wellness!`,
    },
    {
        id: uuidv4(),
        img: waitedLongEnough,
        name: "Waited Long Enough",
        author: "Elijah Campbell",
        price: 25.95,
        description: `"Waited Long Enough" is a touching novel about a woman's search for love and meaning in her life. As Olivia meets the charming Adam, she must decide whether to settle for a less-than-perfect relationship or take a chance on finding true love elsewhere. With relatable characters and a heartwarming storyline, "Waited Long Enough" is a must-read for anyone who has ever struggled with the search for happiness. Order your copy today and discover the uplifting and inspiring story of one woman's journey!`,
    },
    {
        id: uuidv4(),
        img: youreNotAHoarder,
        name: "You're not a Hoarder",
        author: "Harper Phillips",
        price: 29.95,
        description: `"You're Not a Hoarder" is a practical guide to decluttering and organizing your home. With easy-to-follow tips and practical advice, this book will guide you through the process of letting go of items that no longer serve you and creating a clutter-free living space. Order your copy today and take the first step towards a stress-free life!`,
    },
];

export default data;
