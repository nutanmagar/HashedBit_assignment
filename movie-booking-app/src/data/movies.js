const movies = [
  {
    id: 1,
    title: "Avengers: Doomsday",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-doomsday-et00439706-1743060959.jpg",
    description: "Earth’s mightiest heroes reunite to face a powerful cosmic threat that could end the universe. Packed with action, emotions, and epic battles.",
    cast: "Robert Downey Jr., Chris Hemsworth, Scarlett Johansson",
    genres: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    id: 2,
    title: "Supergirl",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/supergirl-et00475569-1765440485.jpg",
    description: "Kara Zor-El embraces her powers to protect Earth from alien threats. A story of courage, identity, and heroism.",
    cast: "Sasha Calle, David Harewood, Helen Slater",
    genres: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    id: 3,
    title: "Swapped (2026)",
    image: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/245591/swapped2026.jpg",
    description: "Two strangers mysteriously switch lives and must adapt quickly. A mix of comedy, drama, and unexpected twists.",
    cast: "Emma Stone, Ryan Reynolds",
    genres: ["Comedy", "Drama"]
  },
  {
    id: 4,
    title: "Avatar",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avatar-fire-and-ash-et00473158-1765890787.jpg",
    description: "Journey back to Pandora where new conflicts arise between humans and Na'vi. A visually stunning fantasy adventure.",
    cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    genres: ["Fantasy", "Adventure", "Sci-Fi"]
  },
  {
    id: 5,
    title: "Avatar Aang: The Last Airbender (2026)",
    image: "https://cdn.moviefone.com/image-assets/980431/29Jdsak3SrwGds5k1t43kH6Khed.jpg?d=360x540&q=80",
    description: "Aang, the last Airbender, must master all elements to bring peace. A powerful story of balance and destiny.",
    cast: "Gordon Cormier, Kiawentiio, Ian Ousley",
    genres: ["Fantasy", "Adventure"]
  },
  {
    id: 6,
    title: "Hoppers",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hoppers-et00481905-1768475047.jpg",
    description: "A gripping psychological drama exploring human fears and survival instincts. Dark, intense, and emotional.",
    cast: "Jake Gyllenhaal, Florence Pugh",
    genres: ["Drama", "Thriller"]
  },
  {
    id: 7,
    title: "Street Fighter",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/street-fighter-et00481645-1768310531.jpg",
    description: "Legendary fighters battle in a global tournament. Action-packed sequences with iconic characters.",
    cast: "Noah Centineo, Andrew Koji",
    genres: ["Action", "Fighting"]
  },
  {
    id: 8,
    title: "Spider-Man: Brand New Day",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-brand-new-day-et00447840-1776148371.jpg",
    description: "Peter Parker starts fresh while facing new villains. A thrilling superhero journey with emotional depth.",
    cast: "Tom Holland, Zendaya, Jacob Batalon",
    genres: ["Action", "Adventure", "Superhero"]
  },
  {
    id: 9,
    title: "The Drama",
    image: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/243663/Damage_DOM_Online_1-Sheet_Fin21_R-Z_HR.jpg",
    description: "An emotional story of relationships, struggles, and human connections. Deep and relatable storytelling.",
    cast: "Saoirse Ronan, Timothée Chalamet",
    genres: ["Drama"]
  },
  {
    id: 10,
    title: "Shrek: 25th Anniversary",
    image: "https://evo-assets-01.s3.us-east-2.amazonaws.com/uploads/croppedImage1774958471097.webp",
    description: "Celebrate the beloved ogre’s journey with humor and heart. A nostalgic animated adventure for all ages.",
    cast: "Mike Myers, Eddie Murphy, Cameron Diaz",
    genres: ["Animation", "Comedy", "Family"]
  },
  {
    id: 11,
    title: "Michael (2026)",
    image: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/243301/MAVEN_27x40_1SHT_KA_VRT_RGB_V16_ONLINE_CROP.jpg",
    description: "A musical biopic showcasing the life and legacy of a legendary performer. Inspiring and emotional.",
    cast: "Jaafar Jackson, Colman Domingo",
    genres: ["Music", "Biography"]
  },
  {
    id: 12,
    title: "Hokum",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hokum-et00492368-1774246828.jpg",
    description: "A chilling horror story filled with suspense and mystery. Not for the faint-hearted.",
    cast: "Anya Taylor-Joy, Bill Skarsgård",
    genres: ["Horror", "Thriller"]
  },
  {
    id: 13,
    title: "Project Hail Mary (2026)",
    image: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/243816/projecthailmary-finalart.jpg",
    description: "A lone astronaut must save humanity from extinction. A gripping sci-fi survival story.",
    cast: "Ryan Gosling, Sandra Hüller",
    genres: ["Sci-Fi", "Adventure"]
  },
  {
    id: 14,
    title: "Ek Din",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ek-din-et00482044-1768556183.jpg",
    description: "A heartfelt romantic story about love, loss, and second chances. Emotional and touching.",
    cast: "Irrfan Khan, Deepika Padukone",
    genres: ["Romance", "Drama"]
  },
  {
    id: 15,
    title: "The Super Mario Galaxy Movie (2026)",
    image: "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/242307/MOG_Payoff_1Sheet_1080x1920_2_adjusted.jpg",
    description: "Mario embarks on a cosmic adventure across galaxies. Fun-filled animation with action and humor.",
    cast: "Chris Pratt, Anya Taylor-Joy, Jack Black",
    genres: ["Animation", "Adventure", "Comedy"]
  },
  {
    id: 16,
    title: "The Devil Wears Prada 2",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-devil-wears-prada-2-et00482763-1777267896.jpg",
    description: "The fashion world returns with drama, ambition, and style. A glamorous and engaging sequel.",
    cast: "Meryl Streep, Anne Hathaway, Emily Blunt",
    genres: ["Comedy", "Drama"]
  }
];

export default movies;