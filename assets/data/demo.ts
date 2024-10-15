const IMAGE_01 = require("../images/01.jpg");
const IMAGE_02 = require("../images/02.jpg");
const IMAGE_03 = require("../images/03.jpg");
const IMAGE_04 = require("../images/04.jpg");
const IMAGE_05 = require("../images/05.jpg");
const IMAGE_06 = require("../images/06.jpg");
const IMAGE_07 = require("../images/07.jpg");
const IMAGE_08 = require("../images/08.jpg");
const IMAGE_09 = require("../images/09.jpg");
const IMAGE_10 = require("../images/10.jpg");

const data = [
  {
    name: "Krish M",
    id: 1,
    place: "Taj Mahal, Agra",
    isOnline: true,
    match: "78",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    image: IMAGE_01,
    budget: "₹10,000 - ₹20,000",
  },
  {
    id: 2,
    name: "Rahul M",
    place: "Goa, Maharashtra",
    match: "93",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
    budget: "₹5,000 - ₹10,000",
  },
  {
    id: 3,
    name: "Saurabh M",
    place: "Hampi, Karnataka",
    match: "45",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
    budget: "₹3,000 - ₹6,000",
  },
  {
    id: 4,
    name: "Preeti V",
    place: "Darjeeling, West Bengal",
    match: "88",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
    budget: "₹8,000 - ₹15,000",
  },
  {
    id: 5,
    name: "Rahul K",
    place: "Pondicherry, Tamil Nadu",
    match: "76",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
    budget: "₹4,000 - ₹8,000",
  },
  {
    id: 6,
    name: "Harsh S",
    place: "Ladakh, Jammu and Kashmir",
    match: "95",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
    budget: "₹12,000 - ₹25,000",
  },
  {
    id: 7,
    name: "Arjun P",
    place: "Varanasi, Uttar Pradesh",
    match: "67",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
    budget: "₹6,000 - ₹12,000",
  },
  {
    id: 8,
    name: "Mamta B",
    place: "Udaipur, Rajasthan",
    match: "90",
    description:
      "Passionate Traveler. Art Enthusiast. History Buff. Enjoys Culinary Experiences.",
    age: "30",
    location: "San Francisco, CA",
    info1: 'Straight, Single, 6"0',
    info2: "Vegetarian, Loves Art & History",
    info3: "Palaces, Lakes, Museums, Fine Dining",
    info4: "Last seen: 10h ago",
    isOnline: true,
    message: "Life is either a daring adventure or nothing at all.",
    image: IMAGE_08,
    budget: "₹6,000 - ₹12,000",
  },

  {
    id: 9,
    name: "Narendra M",
    place: "Delhi Gate, New Delhi",
    match: "85",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_09,
    budget: "₹6,000 - ₹12,000",
  },
  {
    id: 10,
    name: "Virat K",
    place: "Statue of unity, Gujarat",
    match: "88",
    description:
      "Wildlife Enthusiast. Nature Lover. Conservation Advocate. Avid Hiker.",
    age: "32",
    location: "Seattle, WA",
    info1: 'Straight, Single, 5"8',
    info2: "Animal Lover, Enjoys Hiking & Wildlife Photography",
    info3: "Safari, National Parks, Eco-Tourism",
    info4: "Last seen: 5h ago",
    isOnline: true,
    message: "In the heart of nature, we find ourselves.",
    image: IMAGE_10,
    budget: "₹6,000 - ₹12,000",
  },
];

export default data;
