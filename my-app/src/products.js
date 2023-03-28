import Call_of_Duty from "./assets/CoD-MW2-PS5-cover.webp";
import Rocket_League from "./assets/rocket_league.jpg";
import Elden_Ring from "./assets/elden_ring.jpg";
import God_of_War from "./assets/God_of_War.jpg";
import Fifa_23 from "./assets/Fifa_23.jpg";
import Crash_Bandicoot_4 from "./assets/Crash_Bandicoot_4.jpg";

// making a dummy JSON data
export const Products = [
  {
    id: 1,
    productName: "Call of Duty Modern Warefare 2",
    genre: "Shooter",
    price: 49.99,
    year: 2022,
    description:
      "A sequel to 2019's modern warfare",
    image: Call_of_Duty,
  },
  {
    id: 2,
    productName: "Rocket League",
    genre: "Sport",
    price: 29.99,
    year: 2015,
    description:
      "A physics-based online game where players engage in soccer-type matches using rocket powered, customizable cars.",
    image: Rocket_League,
  },
  {
    id: 3,
    productName: "Elden Ring",
    genre: "Adventure",
    price: 49.99,
    year: 2022,
    description:
      "In a dark fantasy world created by Hidetaka Miyazaki (Dark Souls) and George R. R. Martin (A Song of Ice and Fire), the player is a Tarnished who is called back to the Lands Between to restore the Elden Ring and become the Elden Lord.",
    image: Elden_Ring,
  },
  {
    id: 4,
    productName: "God of War: Ragnorok",
    genre: "Adventure",
    price: 49.99,
    year: 2022,
    description:
      "Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.",
    image: God_of_War,
  },
  {
    id: 5,
    productName: "FIFA 23",
    genre: "Sport",
    price: 39.99,
    year: 2022,
    description:
      "FIFA 23 is a football simulation video game. It is the 30th installment in the FIFA series that is developed by EA Sports, and the final installment under the FIFA banner.",
    image: Fifa_23,
  },

  {
    id: 6,
    productName: "Crash Bandicoot 4: It's About Time",
    genre: "Adventure",
    price: 29.99,
    year: 2020,
    description:
      "After Neo Cortex, Dr. N. Tropy and Uka Uka were last stranded on a distant planet. After decades of fruitless attempts, the trio finally make their escape, ripping an Evil-Scientist-sized hole in the fabric of space-time in the process. Now all that stands between them and total dominion over the multiverse are two fuzzy marsupials from N. Sanity Island..",
    image: Crash_Bandicoot_4,
  },
];
