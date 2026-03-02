export interface Chronicle {
  slug: string;
  title: string;
  category: "Imperial Decree" | "Whispers" | "Archives" | "Lore";
  date: string;
  excerpt: string;
  content: string[];
  image?: string;
}

export const CHRONICLES: Chronicle[] = [
  {
    slug: "the-winter-banquet-announced",
    title: "The Winter Banquet Approaches",
    category: "Imperial Decree",
    date: "12th Moon, Year of the Frost",
    excerpt: "An official announcement regarding the upcoming release of the second volume. Prepare your heavy cloaks, for the snows of Baekjoseon are deepening.",
    content: [
      "It is with a heart both heavy with anticipation and light with joy that I announce the completion of the second volume’s first draft.",
      "The Winter Banquet sequence, a pivotal moment in Yi Hwan and Seo Jisoo’s journey, has proven to be the most complex political maneuver I have written to date. The tension in the Great Hall, the unspoken words beneath the guqin’s melody, the blood hidden beneath silk—it is all coming together.",
      "In the coming moons, I will be working closely with my editors to refine the pacing. I want the cold of the White Palace to seep into your very bones as you read.",
      "Expect further dispatches regarding the cover reveal and official release dates soon. Until then, keep the hearth fires burning."
    ],
    image: "/book.webp"
  },
  {
    slug: "on-writing-seo-jisoo",
    title: "Embers in the Snow: Writing Seo Jisoo",
    category: "Whispers",
    date: "8th Moon, Year of the Frost",
    excerpt: "A glimpse into the chaotic, passionate, and often heartbreaking process of defining the Flame Among Ice.",
    content: [
      "There are characters that arrive quietly, politely asking for a place in the narrative. And then there is Seo Jisoo.",
      "Jisoo arrived like a wildfire. He was loud, angry, fiercely loyal, and entirely too smart for his own good. Writing him is an exercise in restraint—knowing when to let his fire burn the page and when to force him to swallow the smoke.",
      "The contrast between him and Yi Hwan is the core of 'The Frost and The Flame'. Where Hwan is silence and calculation, Jisoo is instinct and raw emotion wrapped in a scholar’s robes.",
      "In the latest chapters, pushing Jisoo to his absolute breaking point has been devastating. But fire requires oxygen to burn, and sometimes, the only way to find out how bright a flame can get is to try and smother it."
    ]
  },
  {
    slug: "royal-road-milestone",
    title: "Ten Thousand Eyes on the Frozen Throne",
    category: "Archives",
    date: "4th Moon, Year of the Frost",
    excerpt: "Reflecting on the incredible milestone reached on Royal Road and what it means for the future of the series.",
    content: [
      "When I first began posting 'The Frost and The Flame' on Royal Road, I did not know if a dark, emotional danmei set in a fantasy Joseon would find its audience.",
      "Today, we surpassed 10,000 views. To see so many readers walking the frozen halls alongside Hwan and Jisoo is profoundly humbling.",
      "Your comments, your theories (some terrifyingly accurate, some wonderfully wild), and your unwavering support are the wind beneath this story's wings.",
      "As a token of my gratitude, I will be releasing a special side-story next week, focusing on a day in the life of the Shadow Guard before the rebellion. Thank you for reading, and may the snow guide your path."
    ]
  }
];