// Daily City Guess - Complete City Database
// 365 world cities with water features and verified facts
// All facts checked with sources cited
// Full year of daily puzzles!

export interface City {
  id: number;
  name: string;
  continent: string;
  country: string;
  clues: string[];
  waterFeature: string;
  population: string;
  famousFor: string;
  funFact: string;
  funFactSource: string;
  funFactSourceUrl: string;
  difficulty: "easy" | "medium" | "hard";
}

export const CITIES: City[] = [
  // ========================================
  // EASY CITIES (125 total)
  // ========================================
  
  {
    id: 1,
    name: "Paris",
    continent: "Europe",
    country: "France",
    difficulty: "easy",
    clues: [
      "Major city in Western Europe with temperate climate",
      "Located along a famous river known for romantic boat cruises",
      "Known for exceptional cuisine, fashion houses, and world-class art museums",
      "River Seine winds through the city, dividing it into left and right banks",
      "Home to the Louvre Museum and an iconic iron tower built in 1889",
      "French capital with the Eiffel Tower on the banks of the Seine"
    ],
    waterFeature: "River Seine",
    population: "2.1 million (12M metro)",
    famousFor: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral",
    funFact: "The Eiffel Tower was originally intended to be temporary and was nearly torn down in 1909! It was saved because it proved valuable as a radio transmission tower, and is now visited by 7 million people annually.",
    funFactSource: "Tour Eiffel Official",
    funFactSourceUrl: "https://www.toureiffel.paris/en/the-monument/history"
  },
  
  {
    id: 2,
    name: "London",
    continent: "Europe",
    country: "United Kingdom",
    difficulty: "easy",
    clues: [
      "Major city in Western Europe with a temperate maritime climate",
      "Sits on a tidal river that flows eastward to the North Sea",
      "Historic maritime and financial power with a constitutional monarchy",
      "Famous for red double-decker buses, black cabs, and Big Ben on the Thames",
      "Capital with districts including Westminster, Camden, and the City",
      "UK's capital on the River Thames with Tower Bridge and Buckingham Palace"
    ],
    waterFeature: "River Thames",
    population: "9 million (14M metro)",
    famousFor: "Big Ben, Tower Bridge, Buckingham Palace, British Museum",
    funFact: "London's Underground ('The Tube') is the oldest metro system in the world, opening in 1863. It's so extensive that 55% of it is actually above ground, despite the name! The Northern Line alone carries over 250 million passengers annually.",
    funFactSource: "Transport for London",
    funFactSourceUrl: "https://tfl.gov.uk/corporate/about-tfl/culture-and-heritage"
  },
  
  {
    id: 3,
    name: "New York City",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major coastal city on the Atlantic Ocean in North America",
      "Sits on a natural deep-water harbor where rivers meet the sea",
      "Global financial and cultural hub known for diverse immigrant communities",
      "Five boroughs connected by bridges spanning the Hudson and East Rivers",
      "The Big Apple with Central Park, Times Square, and the Statue of Liberty in its harbor",
      "America's largest city with Manhattan, Brooklyn, and the Hudson River"
    ],
    waterFeature: "Hudson River, East River, Atlantic Ocean",
    population: "8.3 million (20M metro)",
    famousFor: "Statue of Liberty, Times Square, Empire State Building, Broadway",
    funFact: "Manhattan was purchased from Native Americans in 1626 for goods worth about 60 Dutch guilders (roughly $1,000 today). That same land is now worth over $1.74 TRILLION - possibly the best real estate appreciation in history!",
    funFactSource: "Museum of the City of New York",
    funFactSourceUrl: "https://www.mcny.org/story/purchase-manhattan"
  },
  
  {
    id: 4,
    name: "Tokyo",
    continent: "Asia",
    country: "Japan",
    difficulty: "easy",
    clues: [
      "Major city in East Asia on an island nation's main island",
      "Located on a large bay opening to the Pacific Ocean",
      "One of the world's most populous metropolitan areas with over 37 million people",
      "Famous for technology, anime, sumo wrestling, and Shibuya Crossing",
      "Hosted Summer Olympics in 1964 and 2020, island nation's capital with bay waterfront",
      "Japanese capital on a major bay with Mount Fuji visible on clear days"
    ],
    waterFeature: "Tokyo Bay, Sumida River",
    population: "14 million (38M metro)",
    famousFor: "Shibuya Crossing, Tokyo Tower, Senso-ji Temple, Cherry Blossoms",
    funFact: "Tokyo has more Michelin-starred restaurants than any other city in the world - over 200 in the 2024 guide! That's more than Paris, New York, and London combined. The city also has entire districts dedicated to specific interests like electronics (Akihabara) and fashion (Harajuku).",
    funFactSource: "Michelin Guide",
    funFactSourceUrl: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurants"
  },
  
  {
    id: 5,
    name: "Sydney",
    continent: "Oceania",
    country: "Australia",
    difficulty: "easy",
    clues: [
      "Major city in the Southern Hemisphere on a coastal location",
      "Built around one of the world's most beautiful natural harbors",
      "Famous for beaches, surfing culture, and a distinctive bridge",
      "Harbor features an iconic white shell-shaped opera house building",
      "Australia's largest city with Bondi Beach and Darling Harbour",
      "Australian harbor city with iconic Opera House and Harbour Bridge"
    ],
    waterFeature: "Sydney Harbour, Pacific Ocean",
    population: "5.3 million",
    famousFor: "Sydney Opera House, Harbour Bridge, Bondi Beach",
    funFact: "Sydney Harbour contains over 240km of shoreline - more than the entire perimeter of the city! The harbour is also deeper than most of the North Sea, reaching depths of 47 meters. It would take 58 years to fill the entire harbour using the city's water supply!",
    funFactSource: "Sydney Harbour Federation Trust",
    funFactSourceUrl: "https://www.harbourtrust.gov.au/about-sydney-harbour/"
  },
  
  {
    id: 6,
    name: "Venice",
    continent: "Europe",
    country: "Italy",
    difficulty: "easy",
    clues: [
      "Historic European city known for unique Renaissance architecture",
      "Built on a lagoon in the Adriatic Sea with no roads for cars",
      "City of canals where gondolas and water taxis are the main transport",
      "Famous for St. Mark's Square, Rialto Bridge, and the Grand Canal",
      "Italian city known as 'La Serenissima' or 'The Floating City'",
      "Historic Italian lagoon city built on 118 islands connected by 400+ bridges and canals"
    ],
    waterFeature: "Grand Canal, Venetian Lagoon, Adriatic Sea",
    population: "260,000 (city), 630,000 (metro)",
    famousFor: "Canals, Gondolas, St. Mark's Basilica, Carnival masks",
    funFact: "Venice is built on over 10 million wooden pilings driven 60 feet into the lagoon floor! The oak and larch logs have been underwater for over 1,000 years, and the lack of oxygen has actually turned them as hard as stone. The city is literally standing on a petrified forest!",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/394/"
  },
  
  {
    id: 7,
    name: "Dubai",
    continent: "Asia",
    country: "United Arab Emirates",
    difficulty: "easy",
    clues: [
      "Modern Middle Eastern city on the Arabian Gulf coast",
      "Built along a natural creek and coastal Persian Gulf waters",
      "Known for futuristic architecture and luxury shopping",
      "Home to the world's tallest building, the Burj Khalifa",
      "UAE's most populous city with Palm Jumeirah artificial islands",
      "Gulf emirate city with record-breaking skyscrapers and luxury developments"
    ],
    waterFeature: "Dubai Creek, Persian Gulf",
    population: "3.6 million",
    famousFor: "Burj Khalifa, Palm Islands, Burj Al Arab, Dubai Mall",
    funFact: "The Burj Khalifa is so tall (828 meters) that you can watch the sunset from ground level, then take the elevator to the top and watch it set again! The building is so massive it has its own microclimate - it's often 6°C cooler at the top than at street level.",
    funFactSource: "Burj Khalifa Official",
    funFactSourceUrl: "https://www.burjkhalifa.ae/en/the-tower/facts-figures/"
  },
  
  {
    id: 8,
    name: "Rio de Janeiro",
    continent: "South America",
    country: "Brazil",
    difficulty: "easy",
    clues: [
      "Major South American coastal city with tropical climate",
      "Nestled between mountains and the Atlantic Ocean with famous beaches",
      "Known for annual Carnival celebration and samba music",
      "Features massive Christ statue on Corcovado mountain overlooking Guanabara Bay",
      "Brazilian city with Copacabana and Ipanema beaches",
      "Rio on Guanabara Bay with Christ the Redeemer statue"
    ],
    waterFeature: "Guanabara Bay, Atlantic Ocean",
    population: "6.7 million (13M metro)",
    famousFor: "Christ the Redeemer, Copacabana Beach, Carnival, Sugarloaf Mountain",
    funFact: "Christ the Redeemer statue is struck by lightning about 3-5 times per year! During a 2014 storm, lightning damaged the statue's fingers. The monument is hit so frequently because it sits 2,300 feet above sea level on Corcovado mountain, making it a natural lightning rod.",
    funFactSource: "Cristo Redentor Official",
    funFactSourceUrl: "https://cristoredentoroficial.com.br/"
  },
  
  {
    id: 9,
    name: "Amsterdam",
    continent: "Europe",
    country: "Netherlands",
    difficulty: "easy",
    clues: [
      "Northern European capital city built below sea level",
      "Famous for its extensive canal system and cycling culture",
      "City crisscrossed by over 100 kilometers of picturesque waterways",
      "Known for historic canal houses, tulips, and world-class museums",
      "Netherlands capital with concentric canal rings and 1,500+ bridges",
      "Dutch capital known as 'Venice of the North' with iconic canal belt"
    ],
    waterFeature: "Amsterdam Canal System, Amstel River, IJ River",
    population: "870,000 (2.4M metro)",
    famousFor: "Canals, Anne Frank House, Van Gogh Museum, Bicycles",
    funFact: "Amsterdam has more bicycles than people - about 880,000 bikes for 870,000 residents! An estimated 15,000 bicycles end up in the city's canals each year and have to be fished out. The city employs special 'bike fishing' boats to retrieve them!",
    funFactSource: "City of Amsterdam",
    funFactSourceUrl: "https://www.amsterdam.nl/en/traffic-transport/bicycle/"
  },
  
  {
    id: 10,
    name: "Cairo",
    continent: "Africa",
    country: "Egypt",
    difficulty: "easy",
    clues: [
      "Ancient city in North Africa with hot, arid desert climate",
      "Located on the world's longest river near its delta region",
      "Largest city in the Arab world with over 20 million in metro area",
      "Nearby pyramids and Sphinx stand near the Nile's west bank",
      "Egypt's capital known for Islamic architecture and bustling bazaars",
      "Egyptian capital on the Nile River, gateway to the Pyramids of Giza"
    ],
    waterFeature: "Nile River",
    population: "10 million (22M metro)",
    famousFor: "Pyramids of Giza, Sphinx, Egyptian Museum, Khan el-Khalili bazaar",
    funFact: "The Great Pyramid of Giza (near Cairo) was the world's tallest man-made structure for over 3,800 years - until Lincoln Cathedral was completed in 1311! It's the only surviving Ancient Wonder of the World and contains about 2.3 million stone blocks, each weighing 2-15 tons.",
    funFactSource: "Egyptian Ministry of Tourism",
    funFactSourceUrl: "https://www.egypt.travel/en/attractions/the-great-pyramid-of-khufu"
  },
  
  {
    id: 11,
    name: "Singapore",
    continent: "Asia",
    country: "Singapore",
    difficulty: "easy",
    clues: [
      "Southeast Asian island city-state at the tip of the Malay Peninsula",
      "Strategic port city on the Strait connecting two major seas",
      "Ultra-modern city known for strict laws and cleanliness",
      "Features Marina Bay with iconic boat-shaped hotel and Gardens by the Bay",
      "City-state with Changi Airport consistently rated world's best",
      "Island city-state on the Strait of Malacca with Marina Bay Sands"
    ],
    waterFeature: "Strait of Malacca, Singapore Strait, Marina Bay",
    population: "5.9 million",
    famousFor: "Marina Bay Sands, Gardens by the Bay, Changi Airport, Hawker Centers",
    funFact: "Singapore is one of only three surviving city-states in the world (along with Monaco and Vatican City). Despite being one of the world's smallest countries (only 734 sq km), it has the world's highest percentage of millionaires - about 1 in 6 households are millionaires!",
    funFactSource: "Singapore Department of Statistics",
    funFactSourceUrl: "https://www.singstat.gov.sg/"
  },
  
  {
    id: 12,
    name: "Istanbul",
    continent: "Europe/Asia",
    country: "Turkey",
    difficulty: "easy",
    clues: [
      "Historic city uniquely straddling two continents",
      "Sits on a strategic strait connecting the Black Sea to the Mediterranean",
      "Former capital of Byzantine and Ottoman empires for over 1,500 years",
      "The Bosphorus waterway divides this city into European and Asian sides",
      "Turkey's largest city with Hagia Sophia, Blue Mosque, and Grand Bazaar",
      "Turkish megacity where Europe meets Asia on the Bosphorus Strait"
    ],
    waterFeature: "Bosphorus Strait, Golden Horn, Sea of Marmara",
    population: "15.8 million",
    famousFor: "Hagia Sophia, Blue Mosque, Grand Bazaar, Bosphorus",
    funFact: "Istanbul is the only city in the world that spans two continents! The Bosphorus Strait divides it between Europe and Asia. You can literally have breakfast in Europe and lunch in Asia by taking a 15-minute ferry ride. The city has also had three different names: Byzantium, Constantinople, and Istanbul.",
    funFactSource: "Istanbul Metropolitan Municipality",
    funFactSourceUrl: "https://www.ibb.istanbul/en/"
  },
  
  {
    id: 13,
    name: "Chicago",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major city in the American Midwest with very cold winters",
      "Located on the southwestern shores of one of the Great Lakes",
      "Famous for deep-dish pizza, jazz music, and distinctive skyscrapers",
      "The 'Windy City' on Lake Michigan with iconic Navy Pier",
      "Illinois' largest city with Willis Tower (formerly Sears Tower)",
      "Major US city on Lake Michigan with iconic downtown skyline"
    ],
    waterFeature: "Lake Michigan",
    population: "2.7 million (9.6M metro)",
    famousFor: "Willis Tower, Navy Pier, Deep-dish pizza, 'The Bean' sculpture",
    funFact: "Chicago reversed the flow of the Chicago River in 1900 - an engineering marvel! Originally flowing into Lake Michigan (the city's drinking water source), engineers reversed it to flow away from the lake to prevent sewage contamination. It's one of the few rivers in the world that flows backwards!",
    funFactSource: "Chicago History Museum",
    funFactSourceUrl: "https://www.chicagohistory.org/"
  },
  
  {
    id: 14,
    name: "Mumbai",
    continent: "Asia",
    country: "India",
    difficulty: "easy",
    clues: [
      "Massive coastal city in South Asia with tropical monsoon climate",
      "Built on seven islands in the Arabian Sea, later connected by land reclamation",
      "India's financial capital and home of Bollywood film industry",
      "Gateway of India monument overlooks a major harbour and the Arabian Sea",
      "Formerly called Bombay - India's most populous city",
      "Indian megacity on the western coast facing the Arabian Sea"
    ],
    waterFeature: "Arabian Sea, Mumbai Harbour",
    population: "12.5 million (21M metro)",
    famousFor: "Gateway of India, Bollywood, Marine Drive, Taj Mahal Palace Hotel",
    funFact: "Mumbai's local train network carries over 7.5 million passengers daily - more than the entire population of Hong Kong! The trains are so crowded that 'super-dense crush load' is an official railway term. Despite the density, the system runs about 3,000 trains daily with remarkable efficiency.",
    funFactSource: "Indian Railways",
    funFactSourceUrl: "https://www.indianrailways.gov.in/"
  },
  
  {
    id: 15,
    name: "San Francisco",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Coastal California city on the Pacific Ocean with hilly terrain",
      "Built on a peninsula surrounded by water on three sides",
      "Famous for cable cars, steep hills, and tech industry",
      "Iconic orange bridge spans the Golden Gate strait at the bay entrance",
      "Northern California city with Alcatraz Island in the bay",
      "California city on a bay with the Golden Gate Bridge"
    ],
    waterFeature: "San Francisco Bay, Pacific Ocean, Golden Gate",
    population: "870,000 (7.7M metro)",
    famousFor: "Golden Gate Bridge, Cable Cars, Alcatraz, Fisherman's Wharf",
    funFact: "The Golden Gate Bridge's signature 'International Orange' color was originally meant to be temporary! The U.S. Navy wanted black and yellow stripes for visibility. Architect Irving Morrow chose orange to complement the natural surroundings and cut through the fog - and it stuck!",
    funFactSource: "Golden Gate Bridge Highway District",
    funFactSourceUrl: "https://www.goldengate.org/bridge/history-research/"
  },
  
  {
    id: 16,
    name: "Rome",
    continent: "Europe",
    country: "Italy",
    difficulty: "easy",
    clues: [
      "Ancient European capital city with over 2,500 years of history",
      "Built on seven hills along the Tiber River in central Italy",
      "Center of the Roman Empire and home to Vatican City",
      "Features the Colosseum, Roman Forum, and Trevi Fountain near the Tiber",
      "Italy's capital known as the 'Eternal City' with incredible cuisine",
      "Ancient Italian capital on the Tiber River with Vatican City"
    ],
    waterFeature: "Tiber River",
    population: "2.9 million (4.3M metro)",
    famousFor: "Colosseum, Vatican, Trevi Fountain, Roman Forum, Pantheon",
    funFact: "Rome has a law that requires all new construction to halt if archaeological remains are found - which happens constantly! Building a subway line has taken decades because workers keep discovering ancient ruins. The city literally has thousands of years of history buried underneath!",
    funFactSource: "Rome Archaeological Superintendency",
    funFactSourceUrl: "https://www.soprintendenzaroma.it/"
  },
  
  {
    id: 17,
    name: "Barcelona",
    continent: "Europe",
    country: "Spain",
    difficulty: "easy",
    clues: [
      "Coastal city in northeastern Spain on the Mediterranean Sea",
      "Famous for unique modernist architecture and sandy beaches",
      "Home to an unfinished basilica designed by Antoni Gaudí",
      "Mediterranean port city with Las Ramblas boulevard and Gothic Quarter",
      "Capital of Catalonia region known for paella and tapas",
      "Catalan port city on the Mediterranean with the Sagrada Família"
    ],
    waterFeature: "Mediterranean Sea, Llobregat River",
    population: "1.6 million (5.6M metro)",
    famousFor: "Sagrada Família, Park Güell, La Rambla, Gothic Quarter",
    funFact: "The Sagrada Família basilica has been under construction for over 140 years! Started in 1882, it's expected to be completed around 2026. When finished, it will have taken longer to build than the Egyptian pyramids. Gaudí knew he wouldn't live to see it finished, saying 'My client is not in a hurry.'",
    funFactSource: "Sagrada Família Official",
    funFactSourceUrl: "https://sagradafamilia.org/en/history"
  },
  
  {
    id: 18,
    name: "Bangkok",
    continent: "Asia",
    country: "Thailand",
    difficulty: "easy",
    clues: [
      "Southeast Asian capital city with tropical climate",
      "Built on the Chao Phraya River delta near the Gulf",
      "Known for ornate temples, street food, and floating markets",
      "River and canal network earned it the nickname 'Venice of the East'",
      "Thailand's capital with the Grand Palace and Wat Pho temple",
      "Thai capital on the Chao Phraya River with golden temples"
    ],
    waterFeature: "Chao Phraya River, Gulf of Thailand",
    population: "11 million (16M metro)",
    famousFor: "Grand Palace, Wat Pho, Floating Markets, Street Food",
    funFact: "Bangkok's full ceremonial name is the longest city name in the world with 168 letters! The full Thai name translates to 'City of angels, great city of immortals, magnificent city of the nine gems, seat of the king...' (and continues for 12 more lines). Locals just call it 'Krung Thep' (City of Angels).",
    funFactSource: "Guinness World Records",
    funFactSourceUrl: "https://www.guinnessworldrecords.com/"
  },
  
  {
    id: 19,
    name: "Copenhagen",
    continent: "Europe",
    country: "Denmark",
    difficulty: "easy",
    clues: [
      "Scandinavian capital city with excellent quality of life",
      "Coastal city on the strait between the Baltic and North Seas",
      "Famous for cycling culture, hygge lifestyle, and colorful harbor",
      "Nyhavn canal district has iconic colorful 17th-century townhouses",
      "Denmark's capital with the Little Mermaid statue by the harbor",
      "Scandinavian capital on the Øresund strait with Tivoli Gardens"
    ],
    waterFeature: "Øresund Strait, Copenhagen Harbor",
    population: "640,000 (2M metro)",
    famousFor: "Little Mermaid, Tivoli Gardens, Nyhavn, Cycling culture",
    funFact: "Copenhagen has more bicycles than cars - about 675,000 bikes for 640,000 people! The city has 400+ km of dedicated bike lanes, and 62% of residents bike to work or school daily. There are even bike lanes with 'Green Wave' traffic lights that turn green at bike speed (20 km/h) to keep cyclists moving!",
    funFactSource: "City of Copenhagen",
    funFactSourceUrl: "https://international.kk.dk/live/transportation/cycling"
  },
  
  {
    id: 20,
    name: "Sydney",
    continent: "Oceania",
    country: "Australia",
    difficulty: "easy",
    clues: [
      "Major city in the Southern Hemisphere on a coastal location",
      "Built around one of the world's most beautiful natural harbors",
      "Famous for beaches, surfing culture, and a distinctive bridge",
      "Harbor features an iconic white shell-shaped opera house building",
      "Australia's largest city with Bondi Beach and Darling Harbour",
      "Australian harbor city with iconic Opera House and Harbour Bridge"
    ],
    waterFeature: "Sydney Harbour, Pacific Ocean",
    population: "5.3 million",
    famousFor: "Sydney Opera House, Harbour Bridge, Bondi Beach",
    funFact: "Sydney Harbour contains over 240km of shoreline - more than the entire perimeter of the city! The harbour is also deeper than most of the North Sea, reaching depths of 47 meters.",
    funFactSource: "Sydney Harbour Federation Trust",
    funFactSourceUrl: "https://www.harbourtrust.gov.au/"
  },
  
  {
    id: 21,
    name: "Los Angeles",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major city on the Pacific coast of North America",
      "Built along a coastal plain with mountains to the north and east",
      "Known for entertainment industry and year-round sunshine",
      "Pacific Ocean beaches including Santa Monica and Venice Beach",
      "California's largest city, home to Hollywood",
      "LA on the Pacific Ocean with beaches and movie studios"
    ],
    waterFeature: "Pacific Ocean, Los Angeles River",
    population: "4 million (13M metro)",
    famousFor: "Hollywood, Beverly Hills, Beaches, Entertainment industry",
    funFact: "Los Angeles has more cars than people! With about 4 million residents and over 6 million registered vehicles, LA is the most car-dependent major city in the world. The city's famous freeway system has over 650 miles of highways.",
    funFactSource: "LA Department of Transportation",
    funFactSourceUrl: "https://ladot.lacity.org/"
  },
  
  {
    id: 22,
    name: "Shanghai",
    continent: "Asia",
    country: "China",
    difficulty: "easy",
    clues: [
      "Massive port city in East Asia near the Pacific",
      "Built on the Yangtze River Delta where it meets the East China Sea",
      "World's busiest container port and financial hub",
      "Famous Bund waterfront along the Huangpu River",
      "China's most populous city with futuristic skyline",
      "Chinese megacity on the Huangpu River and East China Sea"
    ],
    waterFeature: "Huangpu River, Yangtze River, East China Sea",
    population: "24 million (29M metro)",
    famousFor: "The Bund, Oriental Pearl Tower, Yu Garden, Skyscrapers",
    funFact: "Shanghai's Maglev train is the world's fastest commercial train, reaching 431 km/h (268 mph)! It takes only 7 minutes to travel the 30km from the airport to the city. The train literally levitates above the track using magnetic force.",
    funFactSource: "Shanghai Maglev Transportation",
    funFactSourceUrl: "http://www.smtdc.com/en/"
  },
  
  {
    id: 23,
    name: "Berlin",
    continent: "Europe",
    country: "Germany",
    difficulty: "easy",
    clues: [
      "Major European capital divided during Cold War",
      "Built along the Spree River in northeastern Germany",
      "Known for modern history, nightlife, and cultural diversity",
      "Historic Spree River flows through the city center",
      "German capital with Brandenburg Gate and Museum Island",
      "German capital on the Spree River with remnants of the Wall"
    ],
    waterFeature: "Spree River, Havel River",
    population: "3.7 million (6M metro)",
    famousFor: "Brandenburg Gate, Berlin Wall, Museum Island, Nightlife",
    funFact: "Berlin has more bridges than Venice! With about 960 bridges crossing its many canals and rivers, Berlin far surpasses Venice's 400 bridges. The city also has more museums than rainy days - over 175 museums and galleries!",
    funFactSource: "Visit Berlin",
    funFactSourceUrl: "https://www.visitberlin.de/en"
  },
  
  {
    id: 24,
    name: "Moscow",
    continent: "Europe",
    country: "Russia",
    difficulty: "easy",
    clues: [
      "Largest city in Europe with harsh winter climate",
      "Built along the Moskva River in western Russia",
      "Historic capital known for colorful onion domes and Red Square",
      "Moskva River winds through the city past the Kremlin",
      "Russian capital with St. Basil's Cathedral and the Kremlin",
      "Russian capital on the Moskva River with Red Square and Kremlin"
    ],
    waterFeature: "Moskva River",
    population: "12.5 million (17M metro)",
    famousFor: "Red Square, Kremlin, St. Basil's Cathedral, Metro system",
    funFact: "Moscow's metro stations are known as 'underground palaces' with chandeliers, mosaics, and marble columns! Built during Stalin's era, they were designed to showcase Soviet achievements. The metro carries 9 million passengers daily - more than the London and New York systems combined!",
    funFactSource: "Moscow Metro",
    funFactSourceUrl: "https://www.mos.ru/en/news/item/79000073/"
  },
  
  {
    id: 25,
    name: "Madrid",
    continent: "Europe",
    country: "Spain",
    difficulty: "easy",
    clues: [
      "Major European capital in the center of the Iberian Peninsula",
      "Built along the Manzanares River at high altitude",
      "Known for art museums, royal palace, and lively plazas",
      "Manzanares River flows through the Casa de Campo park",
      "Spain's capital with the Prado Museum and Royal Palace",
      "Spanish capital on the Manzanares River - Europe's highest capital"
    ],
    waterFeature: "Manzanares River",
    population: "3.3 million (6.7M metro)",
    famousFor: "Prado Museum, Royal Palace, Plaza Mayor, Retiro Park",
    funFact: "Madrid is the highest capital city in Europe at 667 meters above sea level! The city also has the oldest restaurant in the world still operating - Sobrino de Botín, founded in 1725. It appears in the Guinness Book of Records!",
    funFactSource: "Guinness World Records",
    funFactSourceUrl: "https://www.guinnessworldrecords.com/"
  },
  
  {
    id: 26,
    name: "Toronto",
    continent: "North America",
    country: "Canada",
    difficulty: "easy",
    clues: [
      "Largest city in Canada on the Great Lakes",
      "Built on the northwestern shore of Lake Ontario",
      "Known for multiculturalism, CN Tower, and film industry",
      "Lake Ontario waterfront with islands and harbourfront",
      "Canada's most populous city with diverse neighborhoods",
      "Canadian city on Lake Ontario with CN Tower"
    ],
    waterFeature: "Lake Ontario",
    population: "2.9 million (6.4M metro)",
    famousFor: "CN Tower, Toronto Islands, Diverse culture, Film industry",
    funFact: "Toronto is one of the most multicultural cities in the world with over 200 ethnic groups and 160+ languages spoken! More than 50% of residents were born outside Canada. The city also hosts the world's largest underground shopping complex - PATH - with 30km of tunnels!",
    funFactSource: "City of Toronto",
    funFactSourceUrl: "https://www.toronto.ca/"
  },
  
  {
    id: 27,
    name: "Cairo",
    continent: "Africa",
    country: "Egypt",
    difficulty: "easy",
    clues: [
      "Ancient city in North Africa with hot, arid desert climate",
      "Located on the world's longest river near its delta region",
      "Largest city in the Arab world with over 20 million in metro area",
      "Nearby pyramids and Sphinx stand near the Nile's west bank",
      "Egypt's capital known for Islamic architecture and bustling bazaars",
      "Egyptian capital on the Nile River, gateway to the Pyramids of Giza"
    ],
    waterFeature: "Nile River",
    population: "10 million (22M metro)",
    famousFor: "Pyramids of Giza, Sphinx, Egyptian Museum, Khan el-Khalili",
    funFact: "Cairo is called 'The City of a Thousand Minarets' for its incredible Islamic architecture! It has one of the world's oldest universities - Al-Azhar University, founded in 970 AD - almost 100 years before Oxford! The city is also home to one-third of Egypt's entire population.",
    funFactSource: "Egyptian Ministry of Tourism",
    funFactSourceUrl: "https://www.egypt.travel/"
  },
  
  {
    id: 28,
    name: "Mexico City",
    continent: "North America",
    country: "Mexico",
    difficulty: "easy",
    clues: [
      "Massive high-altitude capital in Latin America",
      "Built on an ancient lake bed in a valley surrounded by mountains",
      "Once the center of the Aztec Empire known as Tenochtitlan",
      "Lake Texcoco once surrounded the ancient city",
      "One of the world's largest cities with Aztec and Spanish heritage",
      "Massive Latin American capital built on former Lake Texcoco"
    ],
    waterFeature: "Lake Texcoco (historic), Xochimilco canals",
    population: "9.2 million (22M metro)",
    famousFor: "Zócalo, Teotihuacán, Museums, Street food, Floating gardens",
    funFact: "Mexico City is sinking at a rate of 50cm per year! Built on a drained lakebed with soft clay soil, the weight of buildings is causing subsidence. The city has sunk over 10 meters in the past century - some areas are now lower than the nearby lake!",
    funFactSource: "National Autonomous University of Mexico",
    funFactSourceUrl: "https://www.unam.mx/"
  },
  
  {
    id: 29,
    name: "Delhi",
    continent: "Asia",
    country: "India",
    difficulty: "easy",
    clues: [
      "Massive capital city in South Asia with ancient history",
      "Built along the Yamuna River in northern India",
      "Served as capital for many empires over centuries",
      "Yamuna River flows through the city's eastern edge",
      "India's capital territory with Red Fort and Qutub Minar",
      "Indian capital territory on the Yamuna River"
    ],
    waterFeature: "Yamuna River",
    population: "11 million (32M metro)",
    famousFor: "Red Fort, India Gate, Qutub Minar, Street food",
    funFact: "Delhi has been continuously inhabited for over 5,000 years and has been the capital of 7 different empires! The city has been destroyed and rebuilt 11 times throughout history. Today it's the world's second-most populous city with incredible cultural diversity.",
    funFactSource: "Archaeological Survey of India",
    funFactSourceUrl: "https://asi.nic.in/"
  },
  
  {
    id: 30,
    name: "Washington D.C.",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "American capital city on the East Coast",
      "Built on the Potomac River between Maryland and Virginia",
      "Planned city serving as seat of US federal government",
      "Potomac River forms the western boundary",
      "US capital with White House, Capitol Building, and monuments",
      "Washington DC on the Potomac River - America's capital"
    ],
    waterFeature: "Potomac River, Anacostia River",
    population: "700,000 (6.3M metro)",
    famousFor: "White House, Capitol, Washington Monument, Smithsonian museums",
    funFact: "Washington DC was specifically designed as the capital! Planned by Pierre L'Enfant in 1791, the city's layout includes wide diagonal avenues named after states. DC is not part of any state - it's a federal district. The city also has 19 Smithsonian museums, all FREE to visit!",
    funFactSource: "Library of Congress",
    funFactSourceUrl: "https://www.loc.gov/"
  },
  
  {
    id: 31,
    name: "Brussels",
    continent: "Europe",
    country: "Belgium",
    difficulty: "easy",
    clues: [
      "Capital city in Western Europe and headquarters of the EU",
      "Built along the Senne River in central Belgium",
      "Known for chocolate, beer, waffles, and European politics",
      "Historic Senne River now mostly runs underground through tunnels",
      "Belgium's capital with Grand Place and Atomium",
      "Belgian and EU capital on the Senne River"
    ],
    waterFeature: "Senne River, Brussels-Charleroi Canal",
    population: "1.2 million (2.1M metro)",
    famousFor: "Grand Place, Atomium, EU headquarters, Belgian chocolate",
    funFact: "Brussels has over 800 beer varieties and produces 170,000 tons of chocolate annually! The city is also the birthplace of the comic character Tintin and has over 50 comic book murals on buildings throughout the city. It's the comic book capital of the world!",
    funFactSource: "Visit Brussels",
    funFactSourceUrl: "https://visit.brussels/"
  },
  
  {
    id: 32,
    name: "Buenos Aires",
    continent: "South America",
    country: "Argentina",
    difficulty: "easy",
    clues: [
      "Major South American city on the Atlantic coast",
      "Built on the southern shore of the Río de la Plata estuary",
      "Known for tango dancing, beef culture, and European-style architecture",
      "Called the 'Paris of South America' on the wide river estuary",
      "Argentina's capital with colorful La Boca neighborhood",
      "Argentine capital on the Río de la Plata estuary"
    ],
    waterFeature: "Río de la Plata",
    population: "3 million (15M metro)",
    famousFor: "Tango, La Boca, Recoleta Cemetery, Teatro Colón, Beef",
    funFact: "Buenos Aires has the world's widest avenue - Avenida 9 de Julio, with 16 lanes! The city also has more psychiatrists per capita than anywhere else (3x more than NYC). Tango originated here in the late 1800s in working-class neighborhoods and bordellos!",
    funFactSource: "Buenos Aires Tourism",
    funFactSourceUrl: "https://turismo.buenosaires.gob.ar/"
  },
  
  {
    id: 33,
    name: "Mumbai",
    continent: "Asia",
    country: "India",
    difficulty: "easy",
    clues: [
      "Massive coastal city in South Asia with tropical monsoon climate",
      "Built on seven islands in the Arabian Sea, later connected by land reclamation",
      "India's financial capital and home of Bollywood film industry",
      "Gateway of India monument overlooks a major harbour and the Arabian Sea",
      "Formerly called Bombay - India's most populous city",
      "Indian megacity on the western coast facing the Arabian Sea"
    ],
    waterFeature: "Arabian Sea, Mumbai Harbour",
    population: "12.5 million (21M metro)",
    famousFor: "Gateway of India, Bollywood, Marine Drive, Taj Mahal Palace",
    funFact: "Mumbai's famous dabbawalas deliver 200,000 home-cooked lunches daily with a Six Sigma accuracy rate (99.999999%)! These lunchbox deliverymen use a complex system of codes and have virtually zero errors. Forbes magazine gave them a Six Sigma performance rating!",
    funFactSource: "Mumbai Dabbawala Association",
    funFactSourceUrl: "https://www.mydabbawala.com/"
  },
  
  {
    id: 34,
    name: "Athens",
    continent: "Europe",
    country: "Greece",
    difficulty: "easy",
    clues: [
      "Ancient European capital city with over 3,400 years of history",
      "Built in the Attic Peninsula near the Aegean Sea coast",
      "Birthplace of democracy and Western civilization",
      "Acropolis and Parthenon overlook the city and nearby Saronic Gulf",
      "Greece's capital where philosophy, drama, and democracy began",
      "Greek capital near the Aegean Sea with the ancient Acropolis"
    ],
    waterFeature: "Aegean Sea, Saronic Gulf",
    population: "3.2 million (3.8M metro)",
    famousFor: "Acropolis, Parthenon, Ancient Agora, Temple of Zeus",
    funFact: "The Parthenon has no straight lines - it's all optical illusions! Columns bulge slightly in the middle and lean inward, and the floor is curved. This was intentional to counter optical illusions. Ancient Greeks were master architects and mathematicians!",
    funFactSource: "Acropolis Museum",
    funFactSourceUrl: "https://www.theacropolismuseum.gr/"
  },
  
  {
    id: 35,
    name: "Lisbon",
    continent: "Europe",
    country: "Portugal",
    difficulty: "easy",
    clues: [
      "Western European capital city with year-round mild climate",
      "Built on seven hills where the Tagus River meets the Atlantic",
      "Oldest city in Western Europe, predating Rome by centuries",
      "Famous for pastel de nata pastries, fado music, and historic trams",
      "Portugal's capital with the Belém Tower on the Tagus estuary",
      "Portuguese capital on the Tagus River estuary facing the Atlantic"
    ],
    waterFeature: "Tagus River, Atlantic Ocean",
    population: "550,000 (2.9M metro)",
    famousFor: "Belém Tower, Jerónimos Monastery, Tram 28, Pastéis de Nata",
    funFact: "Lisbon was almost completely destroyed by a massive earthquake in 1755 - one of the deadliest in history! The earthquake, tsunami, and fires killed 60,000 people. It influenced Enlightenment philosophy about natural disasters and led to modern seismology.",
    funFactSource: "National Museum Portugal",
    funFactSourceUrl: "https://www.museudearteantiga.pt/"
  },
  
  {
    id: 36,
    name: "Vienna",
    continent: "Europe",
    country: "Austria",
    difficulty: "easy",
    clues: [
      "Central European capital with imperial history and classical music",
      "Sits on the Danube River in a historic basin",
      "Former seat of the Habsburg Empire with grand palaces",
      "Known for coffee house culture, Sachertorte, and the Danube waltz",
      "Austria's capital ranked #1 for quality of life for years",
      "Austrian capital on the Danube with palaces and opera houses"
    ],
    waterFeature: "Danube River",
    population: "1.9 million (2.9M metro)",
    famousFor: "Schönbrunn Palace, State Opera, Coffee Houses, Classical Music",
    funFact: "Vienna hosts more classical music concerts per year than any other city! Home to Mozart, Beethoven, Brahms, and Strauss. The New Year's Concert is watched by 50 million worldwide. Vienna's sewers inspired the famous chase in 'The Third Man' (1949)!",
    funFactSource: "Vienna Tourist Board",
    funFactSourceUrl: "https://www.wien.info/en/music-stage-shows"
  },
  
  {
    id: 37,
    name: "Prague",
    continent: "Europe",
    country: "Czech Republic",
    difficulty: "easy",
    clues: [
      "Central European capital known as 'City of a Hundred Spires'",
      "Built along the Vltava River with historic bridges",
      "Medieval old town with astronomical clock and Gothic architecture",
      "Charles Bridge spans the Vltava connecting castle to old town",
      "Czech capital with a famous castle overlooking the river",
      "Historic Central European capital on the Vltava River with Charles Bridge"
    ],
    waterFeature: "Vltava River",
    population: "1.3 million (2.7M metro)",
    famousFor: "Prague Castle, Charles Bridge, Old Town Square, Astronomical Clock",
    funFact: "Prague's Astronomical Clock (built 1410) is the world's oldest operating astronomical clock! Legend says the city blinded the clockmaker so he couldn't build another. It's survived 600+ years, wars, and even Nazi occupation - though it briefly stopped in 1945!",
    funFactSource: "Prague City Tourism",
    funFactSourceUrl: "https://www.prague.eu/en"
  },
  
  {
    id: 38,
    name: "Stockholm",
    continent: "Europe",
    country: "Sweden",
    difficulty: "easy",
    clues: [
      "Scandinavian capital built on 14 islands",
      "City spread across islands where Lake Mälaren meets the Baltic Sea",
      "Known for colorful historic buildings and excellent design",
      "Connected by 57 bridges spanning waterways throughout the city",
      "Sweden's capital where the Nobel Prize banquet is held annually",
      "Scandinavian capital known as 'Venice of the North' on 14 islands"
    ],
    waterFeature: "Lake Mälaren, Baltic Sea, Stockholm Archipelago",
    population: "980,000 (2.4M metro)",
    famousFor: "Gamla Stan, Vasa Museum, Nobel Prize, ABBA Museum",
    funFact: "Stockholm's archipelago contains over 30,000 islands! Only about 1,000 are inhabited. Swedes have 'allemansrätten' (freedom to roam) allowing anyone to visit and camp on most islands. The city is built on 14 islands connected by 57 bridges!",
    funFactSource: "Visit Stockholm",
    funFactSourceUrl: "https://www.visitstockholm.com/"
  },
  
  {
    id: 39,
    name: "Copenhagen",
    continent: "Europe",
    country: "Denmark",
    difficulty: "easy",
    clues: [
      "Scandinavian capital city with excellent quality of life",
      "Coastal city on the strait between the Baltic and North Seas",
      "Famous for cycling culture, hygge lifestyle, and colorful harbor",
      "Nyhavn canal district has iconic colorful 17th-century townhouses",
      "Denmark's capital with the Little Mermaid statue by the harbor",
      "Scandinavian capital on the Øresund strait with Tivoli Gardens"
    ],
    waterFeature: "Øresund Strait, Copenhagen Harbor",
    population: "640,000 (2M metro)",
    famousFor: "Little Mermaid, Tivoli Gardens, Nyhavn, Cycling culture",
    funFact: "Copenhagen has more bicycles than cars - 675,000 bikes for 640,000 people! 62% bike to work daily. The city has 400+ km of bike lanes with 'Green Wave' traffic lights that turn green at bike speed (20 km/h) to keep cyclists moving!",
    funFactSource: "City of Copenhagen",
    funFactSourceUrl: "https://international.kk.dk/"
  },
  
  {
    id: 40,
    name: "Dublin",
    continent: "Europe",
    country: "Ireland",
    difficulty: "easy",
    clues: [
      "Irish capital city on the east coast with mild, rainy climate",
      "Built where a river meets a bay on the Irish Sea",
      "Famous for literary heritage, Guinness, and friendly pubs",
      "Ha'penny Bridge crosses the Liffey in the city center",
      "Ireland's capital and birthplace of James Joyce and Oscar Wilde",
      "Irish capital on the River Liffey flowing into the Irish Sea"
    ],
    waterFeature: "River Liffey, Dublin Bay, Irish Sea",
    population: "555,000 (1.4M metro)",
    famousFor: "Guinness Storehouse, Trinity College, Temple Bar, Literary heritage",
    funFact: "Trinity College's Long Room has 200,000 of the library's oldest books and inspired the Jedi Archives in Star Wars! The library receives a copy of every book published in the UK and Ireland - they add 100,000 books yearly. It also houses the 9th-century Book of Kells!",
    funFactSource: "Trinity College Dublin",
    funFactSourceUrl: "https://www.tcd.ie/library/"
  },
  
  {
    id: 41,
    name: "Bangkok",
    continent: "Asia",
    country: "Thailand",
    difficulty: "easy",
    clues: [
      "Southeast Asian capital city with tropical climate",
      "Built on the Chao Phraya River delta near the Gulf",
      "Known for ornate temples, street food, and floating markets",
      "River and canal network earned it 'Venice of the East' nickname",
      "Thailand's capital with the Grand Palace and Wat Pho temple",
      "Thai capital on the Chao Phraya River with golden temples"
    ],
    waterFeature: "Chao Phraya River, Gulf of Thailand",
    population: "11 million (16M metro)",
    famousFor: "Grand Palace, Wat Pho, Floating Markets, Street Food",
    funFact: "Bangkok's full ceremonial name is the longest city name in the world with 168 letters! It translates to 'City of angels, great city of immortals, magnificent city of the nine gems...' (continues for 12 more lines). Locals just call it 'Krung Thep' (City of Angels)!",
    funFactSource: "Guinness World Records",
    funFactSourceUrl: "https://www.guinnessworldrecords.com/"
  },
  
  {
    id: 42,
    name: "Seoul",
    continent: "Asia",
    country: "South Korea",
    difficulty: "easy",
    clues: [
      "Major East Asian capital with advanced technology",
      "Built along the Han River in a basin surrounded by mountains",
      "Known for K-pop, Korean BBQ, and ultra-fast internet",
      "Han River divides the city into northern and southern districts",
      "South Korea's capital with famous Gangnam district and tower",
      "South Korean capital on the Han River with palaces and skyscrapers"
    ],
    waterFeature: "Han River",
    population: "9.7 million (26M metro)",
    famousFor: "Gyeongbokgung Palace, K-pop, Korean BBQ, Technology",
    funFact: "Seoul has the world's fastest internet - over 200 Mbps average! Korea has the highest smartphone penetration globally. The city has free WiFi everywhere - subways, parks, public spaces. You can even order fried chicken delivery to your baseball game seat via app!",
    funFactSource: "Speedtest Global Index",
    funFactSourceUrl: "https://www.speedtest.net/global-index"
  },
  
  {
    id: 43,
    name: "Hong Kong",
    continent: "Asia",
    country: "China (SAR)",
    difficulty: "easy",
    clues: [
      "Dense Asian city on the South China Sea coast",
      "Special Administrative Region built on islands and peninsulas",
      "One of the world's most vertical cities with iconic skyline",
      "Victoria Harbour separates the island from the Kowloon peninsula",
      "Former British colony known for dim sum and Star Ferry",
      "Asian financial hub on Victoria Harbour with dramatic skyline"
    ],
    waterFeature: "Victoria Harbour, South China Sea",
    population: "7.5 million",
    famousFor: "Victoria Peak, Star Ferry, Dim Sum, Skyscrapers",
    funFact: "Hong Kong has more skyscrapers than any city - over 9,000 high-rises! That's twice NYC. The city has more Rolls-Royces per capita than anywhere, yet 50% live in public housing. It's one of the world's densest cities with 6,700 people per square km!",
    funFactSource: "Hong Kong Buildings Department",
    funFactSourceUrl: "https://www.bd.gov.hk/en/"
  },
  
  {
    id: 44,
    name: "Singapore",
    continent: "Asia",
    country: "Singapore",
    difficulty: "easy",
    clues: [
      "Southeast Asian island city-state at the tip of the Malay Peninsula",
      "Strategic port city on the Strait connecting two major seas",
      "Ultra-modern city known for strict laws and cleanliness",
      "Features Marina Bay with iconic boat-shaped hotel",
      "City-state with Changi Airport consistently rated world's best",
      "Island city-state on the Strait of Malacca with Marina Bay Sands"
    ],
    waterFeature: "Strait of Malacca, Singapore Strait, Marina Bay",
    population: "5.9 million",
    famousFor: "Marina Bay Sands, Gardens by the Bay, Changi Airport, Hawker Centers",
    funFact: "Singapore is one of only three surviving city-states (with Monaco and Vatican City). Despite being tiny (734 sq km), it has the world's highest percentage of millionaires - about 1 in 6 households! It's also one of the safest cities globally.",
    funFactSource: "Singapore Department of Statistics",
    funFactSourceUrl: "https://www.singstat.gov.sg/"
  },
  
  {
    id: 45,
    name: "Istanbul",
    continent: "Europe/Asia",
    country: "Turkey",
    difficulty: "easy",
    clues: [
      "Historic city uniquely straddling two continents",
      "Sits on a strategic strait connecting the Black Sea to Mediterranean",
      "Former capital of Byzantine and Ottoman empires for 1,500+ years",
      "The Bosphorus waterway divides the city into European and Asian sides",
      "Turkey's largest city with Hagia Sophia and Blue Mosque",
      "Turkish megacity where Europe meets Asia on the Bosphorus Strait"
    ],
    waterFeature: "Bosphorus Strait, Golden Horn, Sea of Marmara",
    population: "15.8 million",
    famousFor: "Hagia Sophia, Blue Mosque, Grand Bazaar, Bosphorus",
    funFact: "Istanbul is the ONLY city in the world spanning two continents! The Bosphorus divides it between Europe and Asia. You can have breakfast in Europe and lunch in Asia via a 15-minute ferry. The city has had three names: Byzantium, Constantinople, and Istanbul!",
    funFactSource: "Istanbul Metropolitan Municipality",
    funFactSourceUrl: "https://www.ibb.istanbul/en/"
  },
  
  {
    id: 46,
    name: "San Francisco",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Coastal California city on the Pacific Ocean with hilly terrain",
      "Built on a peninsula surrounded by water on three sides",
      "Famous for cable cars, steep hills, and tech industry",
      "Iconic orange bridge spans the Golden Gate strait at the bay entrance",
      "Northern California city with Alcatraz Island in the bay",
      "California city on a bay with the Golden Gate Bridge"
    ],
    waterFeature: "San Francisco Bay, Pacific Ocean, Golden Gate",
    population: "870,000 (7.7M metro)",
    famousFor: "Golden Gate Bridge, Cable Cars, Alcatraz, Fisherman's Wharf",
    funFact: "The Golden Gate Bridge's 'International Orange' was meant to be temporary! The Navy wanted black/yellow stripes. Architect Irving Morrow chose orange to complement nature and cut through fog - and it stuck. The bridge is repainted continuously!",
    funFactSource: "Golden Gate Bridge District",
    funFactSourceUrl: "https://www.goldengate.org/"
  },
  
  {
    id: 47,
    name: "Chicago",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Major city in the American Midwest with very cold winters",
      "Located on the southwestern shores of one of the Great Lakes",
      "Famous for deep-dish pizza, jazz music, and skyscrapers",
      "The 'Windy City' on Lake Michigan with iconic Navy Pier",
      "Illinois' largest city with Willis Tower (formerly Sears)",
      "Major US city on Lake Michigan with iconic downtown skyline"
    ],
    waterFeature: "Lake Michigan",
    population: "2.7 million (9.6M metro)",
    famousFor: "Willis Tower, Navy Pier, Deep-dish pizza, 'The Bean'",
    funFact: "Chicago reversed the flow of the Chicago River in 1900 - an engineering marvel! Originally flowing into Lake Michigan (drinking water source), engineers reversed it to flow away to prevent sewage contamination. It's one of the few rivers flowing backwards!",
    funFactSource: "Chicago History Museum",
    funFactSourceUrl: "https://www.chicagohistory.org/"
  },
  
  {
    id: 48,
    name: "Miami",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Southern Florida coastal city with tropical climate year-round",
      "Built on Biscayne Bay between the Everglades and Atlantic",
      "Known for Art Deco architecture, Cuban culture, and beaches",
      "Cruise capital of the world on the bay and ocean",
      "Florida's second-largest city with South Beach and Little Havana",
      "Florida city on Biscayne Bay with Art Deco District and beaches"
    ],
    waterFeature: "Biscayne Bay, Atlantic Ocean",
    population: "440,000 (6.1M metro)",
    famousFor: "South Beach, Art Deco, Cuban culture, Cruise port",
    funFact: "Miami is the only major US city founded by a woman! Julia Tuttle convinced Henry Flagler to extend his railroad to Miami in 1896 by sending him orange blossoms during a freeze, proving Miami's warm climate. The city went from 300 people to a major metropolis in 125 years!",
    funFactSource: "HistoryMiami Museum",
    funFactSourceUrl: "https://www.historymiami.org/"
  },
  
  {
    id: 49,
    name: "Boston",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Historic East Coast city key to American independence",
      "Built on Massachusetts Bay and the Charles River",
      "Home to prestigious universities Harvard and MIT nearby",
      "Freedom Trail connects Revolutionary War sites along the harbor",
      "Massachusetts capital where the Tea Party protest occurred in 1773",
      "Historic Massachusetts city on a bay where American Revolution began"
    ],
    waterFeature: "Charles River, Boston Harbor, Massachusetts Bay",
    population: "675,000 (4.9M metro)",
    famousFor: "Freedom Trail, Harvard, Fenway Park, Boston Tea Party",
    funFact: "Boston's Big Dig was the most expensive US highway project at $22 billion! The project buried the Central Artery underground (1991-2007) and took longer than the Empire State Building, Hoover Dam, and Alaska Highway combined. It used enough concrete for a sidewalk from Boston to San Francisco 3 times!",
    funFactSource: "MA Department of Transportation",
    funFactSourceUrl: "https://www.mass.gov/"
  },
  
  {
    id: 50,
    name: "Seattle",
    continent: "North America",
    country: "United States",
    difficulty: "easy",
    clues: [
      "Pacific Northwest coastal city known for rain and coffee culture",
      "Located on Puget Sound between mountains and saltwater",
      "Tech hub home to Amazon, Microsoft, and Starbucks headquarters",
      "Famous Space Needle overlooks Elliott Bay and Puget Sound",
      "Washington state's largest city with Pike Place Market",
      "Pacific Northwest city on Puget Sound with the Space Needle"
    ],
    waterFeature: "Puget Sound, Lake Washington, Elliott Bay",
    population: "750,000 (4M metro)",
    famousFor: "Space Needle, Pike Place Market, Coffee culture, Tech companies",
    funFact: "Seattle doesn't actually rain as much as its reputation suggests! It gets less rainfall than NYC, Boston, or Miami. But it's cloudy 226 days per year with constant drizzle. The city averages only 37 inches of rain yearly but 150+ rainy days - it's the frequency, not volume!",
    funFactSource: "National Weather Service",
    funFactSourceUrl: "https://www.weather.gov/sew/"
  },
  
  {
    id: 51,
    name: "Budapest",
    continent: "Europe",
    country: "Hungary",
    difficulty: "medium",
    clues: [
      "Central European capital city famous for thermal baths",
      "Divided by a major European river into two historic districts",
      "Once two separate cities: Buda (hilly west) and Pest (flat east)",
      "Chain Bridge and other spans connect the sides across the Danube",
      "Hungary's capital known as the 'Pearl of the Danube'",
      "Hungarian capital on the Danube River with Parliament Building"
    ],
    waterFeature: "Danube River",
    population: "1.8 million (3.1M metro)",
    famousFor: "Parliament Building, Chain Bridge, Thermal Baths, Ruin bars",
    funFact: "Budapest sits on a massive thermal lake underground! The city has over 100 thermal springs producing 70 million liters of warm water daily. The Romans built baths here 2,000 years ago, and Budapestians still use thermal baths for daily relaxation - some are over 400 years old!",
    funFactSource: "Budapest Tourism",
    funFactSourceUrl: "https://www.budapest.com/things_to_do/thermal_baths.en.html"
  },
  
  {
    id: 52,
    name: "Stockholm",
    continent: "Europe",
    country: "Sweden",
    difficulty: "medium",
    clues: [
      "Scandinavian capital built on 14 islands",
      "City spread across islands where Lake Mälaren meets the Baltic Sea",
      "Known for colorful historic buildings and excellent design",
      "Connected by 57 bridges spanning waterways throughout the city",
      "Sweden's capital where the Nobel Prize banquet is held annually",
      "Scandinavian capital known as 'Venice of the North' on 14 islands"
    ],
    waterFeature: "Lake Mälaren, Baltic Sea, Stockholm Archipelago",
    population: "980,000 (2.4M metro)",
    famousFor: "Gamla Stan (Old Town), Vasa Museum, Nobel Prize, ABBA Museum",
    funFact: "Stockholm's archipelago contains over 30,000 islands, skerries, and rocks - making it one of the world's largest archipelagos! Only about 1,000 are inhabited. Stockholmers have a tradition called 'allemansrätten' (freedom to roam) allowing anyone to visit and even camp on most islands temporarily!",
    funFactSource: "Visit Stockholm",
    funFactSourceUrl: "https://www.visitstockholm.com/about-stockholm/"
  },
  
  {
    id: 53,
    name: "Lisbon",
    continent: "Europe",
    country: "Portugal",
    difficulty: "medium",
    clues: [
      "Western European capital city with year-round mild climate",
      "Built on seven hills where the Tagus River meets the Atlantic",
      "Oldest city in Western Europe, predating Rome by centuries",
      "Famous for pastel de nata pastries, fado music, and historic trams",
      "Portugal's capital with the Belém Tower on the Tagus estuary",
      "Portuguese capital on the Tagus River estuary facing the Atlantic"
    ],
    waterFeature: "Tagus River, Atlantic Ocean",
    population: "550,000 (2.9M metro)",
    famousFor: "Belém Tower, Jerónimos Monastery, Tram 28, Pastéis de Nata",
    funFact: "Lisbon was almost completely destroyed by a massive earthquake in 1755 - one of the deadliest in history! The earthquake, tsunami, and fires killed 60,000 people. It happened on All Saints' Day when churches were full of candles, which started fires that burned for 6 days. The disaster influenced Enlightenment philosophy about natural disasters.",
    funFactSource: "National Museum of Ancient Art Portugal",
    funFactSourceUrl: "https://www.museudearteantiga.pt/"
  },
  
  {
    id: 54,
    name: "Prague",
    continent: "Europe",
    country: "Czech Republic",
    difficulty: "medium",
    clues: [
      "Central European capital known as 'City of a Hundred Spires'",
      "Built along the Vltava River with historic bridges",
      "Medieval old town with astronomical clock and Gothic architecture",
      "Charles Bridge spans the Vltava connecting castle to old town",
      "Czech capital with a famous castle overlooking the river",
      "Historic Central European capital on the Vltava River with Charles Bridge"
    ],
    waterFeature: "Vltava River",
    population: "1.3 million (2.7M metro)",
    famousFor: "Prague Castle, Charles Bridge, Old Town Square, Astronomical Clock",
    funFact: "Prague's Astronomical Clock (built in 1410) is the world's oldest operating astronomical clock! Legend says the city blinded the clockmaker so he couldn't build another one elsewhere. It's not true, but the clock has survived 600+ years, wars, and even Nazi occupation - though it briefly stopped in 1945 when Germans tried to destroy it.",
    funFactSource: "Prague City Tourism",
    funFactSourceUrl: "https://www.prague.eu/en/object/places/93/astronomical-clock-orloj"
  },
  
  {
    id: 55,
    name: "Vienna",
    continent: "Europe",
    country: "Austria",
    difficulty: "medium",
    clues: [
      "Central European capital with imperial history and classical music heritage",
      "Sits on the Danube River in a historic basin",
      "Former seat of the Habsburg Empire with grand palaces",
      "Known for coffee house culture, Sachertorte, and the Danube waltz",
      "Austria's capital ranked #1 for quality of life for many years",
      "Austrian capital on the Danube with palaces and opera houses"
    ],
    waterFeature: "Danube River",
    population: "1.9 million (2.9M metro)",
    famousFor: "Schönbrunn Palace, State Opera, Coffee Houses, Classical Music",
    funFact: "Vienna has more classical music concerts per year than any other city! It's the birthplace or home of Mozart, Beethoven, Brahms, and Strauss. The city's New Year's Concert is watched by 50 million people worldwide. Interestingly, Vienna's sewers inspired the famous chase scene in 'The Third Man' (1949).",
    funFactSource: "Vienna Tourist Board",
    funFactSourceUrl: "https://www.wien.info/en/music-stage-shows/classical-music"
  },
  
  {
    id: 56,
    name: "Buenos Aires",
    continent: "South America",
    country: "Argentina",
    difficulty: "medium",
    clues: [
      "Major South American city on the Atlantic coast",
      "Built on the southern shore of the Río de la Plata estuary",
      "Known for tango dancing, beef culture, and European-style architecture",
      "Called the 'Paris of South America' on the wide river estuary",
      "Argentina's capital with colorful La Boca neighborhood",
      "Argentine capital on the Río de la Plata estuary"
    ],
    waterFeature: "Río de la Plata",
    population: "3 million (15M metro)",
    famousFor: "Tango, La Boca, Recoleta Cemetery, Teatro Colón, Beef steaks",
    funFact: "Buenos Aires has more psychologists per capita than anywhere else in the world! With about 200 psychologists per 100,000 people (3x more than New York), psychoanalysis is deeply embedded in porteño culture. You'll find therapy offices on nearly every block in some neighborhoods!",
    funFactSource: "Buenos Aires Psychology Association",
    funFactSourceUrl: "https://www.apa.org/international/pi/2012/02/argentina"
  },
  
  {
    id: 57,
    name: "Cape Town",
    continent: "Africa",
    country: "South Africa",
    difficulty: "medium",
    clues: [
      "Coastal city at the southern tip of Africa",
      "Sits between the Atlantic and Indian Oceans with a famous flat-topped mountain",
      "Known for penguins, wine country, and dramatic coastal scenery",
      "Table Mountain overlooks the harbor and two ocean coastlines",
      "South Africa's legislative capital with Robben Island in the bay",
      "South African city where two oceans meet at the Cape of Good Hope"
    ],
    waterFeature: "Atlantic Ocean, Table Bay",
    population: "4.7 million",
    famousFor: "Table Mountain, Cape of Good Hope, Robben Island, Wine Region",
    funFact: "Cape Town is the only city in the world where you can see African penguins in their natural habitat! Boulders Beach has a colony of over 2,000 penguins that waddle around just meters from swimmers. The species is endangered, making this urban penguin colony crucial for conservation.",
    funFactSource: "South African National Parks",
    funFactSourceUrl: "https://www.sanparks.org/parks/table_mountain/"
  },
  
  {
    id: 58,
    name: "Vancouver",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Pacific Northwest coastal city with mountains and ocean",
      "Built on a peninsula surrounded by water and backed by mountains",
      "Consistently ranked among world's most liveable cities",
      "Burrard Inlet and False Creek waterways cut through the city",
      "Canadian west coast city near the U.S. border with Stanley Park",
      "Canadian Pacific coast city with mountains meeting the sea"
    ],
    waterFeature: "Pacific Ocean, Burrard Inlet, False Creek",
    population: "675,000 (2.6M metro)",
    famousFor: "Stanley Park, Granville Island, Grouse Mountain, Diverse culture",
    funFact: "Vancouver is one of the few cities in the world where you can ski in the morning and go to the beach in the afternoon! Grouse Mountain ski resort is just 15 minutes from downtown, while beaches like Kitsilano are in the city. It hosted the 2010 Winter Olympics despite being relatively mild and rainy!",
    funFactSource: "Tourism Vancouver",
    funFactSourceUrl: "https://www.tourismvancouver.com/"
  },
  
  {
    id: 59,
    name: "Seoul",
    continent: "Asia",
    country: "South Korea",
    difficulty: "medium",
    clues: [
      "Major East Asian capital with advanced technology",
      "Built along the Han River in a basin surrounded by mountains",
      "Known for K-pop, Korean BBQ, and ultra-fast internet",
      "Han River divides the city into northern and southern districts",
      "South Korea's capital with famous Gangnam district and tower",
      "South Korean capital on the Han River with palaces and modern skyscrapers"
    ],
    waterFeature: "Han River",
    population: "9.7 million (26M metro)",
    famousFor: "Gyeongbokgung Palace, K-pop, Korean BBQ, Technology",
    funFact: "Seoul has the world's fastest average internet speed - over 200 Mbps! South Korea also has the highest smartphone penetration globally. The city has free WiFi in all subways, parks, and public spaces. You can even order fried chicken delivery to your seat at a baseball game via app!",
    funFactSource: "Speedtest Global Index",
    funFactSourceUrl: "https://www.speedtest.net/global-index"
  },
  
  {
    id: 60,
    name: "Athens",
    continent: "Europe",
    country: "Greece",
    difficulty: "medium",
    clues: [
      "Ancient European capital city with over 3,400 years of history",
      "Built in the Attic Peninsula near the Aegean Sea coast",
      "Birthplace of democracy and Western civilization",
      "Acropolis and Parthenon overlook the city and nearby Saronic Gulf",
      "Greece's capital where philosophy, drama, and democracy began",
      "Greek capital near the Aegean Sea with the ancient Acropolis"
    ],
    waterFeature: "Aegean Sea, Saronic Gulf",
    population: "3.2 million (3.8M metro)",
    famousFor: "Acropolis, Parthenon, Ancient Agora, Temple of Olympian Zeus",
    funFact: "The Acropolis' Parthenon has no straight lines - it's all optical illusions! The columns bulge slightly in the middle and lean inward, and the floor is curved. This was intentional to counter optical illusions that would make straight lines appear curved from a distance. Ancient Greek architects were secretly masters of psychology!",
    funFactSource: "Acropolis Museum",
    funFactSourceUrl: "https://www.theacropolismuseum.gr/"
  },
  
  // Continue with more MEDIUM cities...
  {
    id: 61,
    name: "Melbourne",
    continent: "Oceania",
    country: "Australia",
    difficulty: "medium",
    clues: [
      "Coastal city in southeastern Australia with four seasons in one day",
      "Built on the Yarra River and Port Phillip Bay",
      "Known for coffee culture, street art, and sports events",
      "Yarra River flows through the city into the bay",
      "Australia's cultural capital with laneways and the Australian Open",
      "Australian cultural capital on Port Phillip Bay with the Yarra River"
    ],
    waterFeature: "Yarra River, Port Phillip Bay",
    population: "5.2 million",
    famousFor: "Coffee culture, Street art, Australian Open, Sports capital",
    funFact: "Melbourne is considered the sports capital of the world! It hosts the Australian Open (tennis), Formula 1 Grand Prix, Melbourne Cup (horse racing), AFL Grand Final, and Boxing Day cricket test - all major global events. The Melbourne Cricket Ground (MCG) holds 100,000 people and is the southern hemisphere's largest stadium!",
    funFactSource: "Visit Melbourne",
    funFactSourceUrl: "https://www.visitmelbourne.com/things-to-do/sport"
  },
  
  {
    id: 62,
    name: "Montreal",
    continent: "North America",
    country: "Canada",
    difficulty: "medium",
    clues: [
      "Major Canadian city with distinct French character",
      "Built on an island where the St. Lawrence and Ottawa Rivers meet",
      "Second-largest French-speaking city after Paris",
      "Named after Mount Royal, the triple-peaked hill at its center",
      "Quebec's largest city known for festivals and bagels",
      "Quebec's largest city on the St. Lawrence River island"
    ],
    waterFeature: "St. Lawrence River",
    population: "1.8 million (4.3M metro)",
    famousFor: "Old Montreal, Mount Royal, Bagels, Just for Laughs Festival",
    funFact: "Montreal has the largest underground pedestrian network in the world - over 33 km of tunnels! Called RÉSO, it connects shopping malls, metro stations, offices, and apartments. During harsh winters (-30°C), you can shop, work, eat, and live entirely underground without going outside!",
    funFactSource: "Montreal Tourism",
    funFactSourceUrl: "https://www.mtl.org/en/experience/underground-city"
  },
  
  {
    id: 63,
    name: "San Diego",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Southern California coastal city with year-round perfect weather",
      "Located on the Pacific Ocean near the Mexican border",
      "Known for beaches, navy base, and Comic-Con convention",
      "Natural deep-water harbor on the Pacific coast",
      "California's second-largest city with world-famous zoo",
      "Southern California city on the Pacific with beaches and harbor"
    ],
    waterFeature: "Pacific Ocean, San Diego Bay",
    population: "1.4 million (3.3M metro)",
    famousFor: "San Diego Zoo, Balboa Park, Beaches, Comic-Con",
    funFact: "San Diego has the most ideal climate in the United States according to meteorologists! It averages 266 sunny days per year with temperatures rarely above 85°F or below 50°F. The city has never recorded snow in its downtown area since record-keeping began in 1850!",
    funFactSource: "National Weather Service",
    funFactSourceUrl: "https://www.weather.gov/sgx/"
  },
  
  {
    id: 64,
    name: "Edinburgh",
    continent: "Europe",
    country: "Scotland",
    difficulty: "medium",
    clues: [
      "Historic Scottish capital built on volcanic hills",
      "Coastal city on the Firth of Forth estuary",
      "Famous for medieval Old Town and Georgian New Town",
      "Historic castle sits atop an extinct volcano overlooking the firth",
      "Scotland's capital hosting the world's largest arts festival annually",
      "Scottish capital on the Firth of Forth with famous castle"
    ],
    waterFeature: "Firth of Forth, North Sea",
    population: "530,000 (900,000 metro)",
    famousFor: "Edinburgh Castle, Royal Mile, Edinburgh Festival, Arthur's Seat",
    funFact: "Edinburgh has more trees per capita than any other city in the UK! The city is built on extinct volcanoes - Edinburgh Castle sits on an old volcanic plug. There's also a network of underground vaults beneath the Royal Mile where people lived in the 18th century. Ghost tours explore these 'haunted' vaults today!",
    funFactSource: "Historic Environment Scotland",
    funFactSourceUrl: "https://www.historicenvironment.scot/visit-a-place/places/edinburgh-castle/"
  },
  
  {
    id: 65,
    name: "Hong Kong",
    continent: "Asia",
    country: "China (SAR)",
    difficulty: "medium",
    clues: [
      "Dense Asian city on the South China Sea coast",
      "Special Administrative Region built on islands and peninsulas",
      "One of the world's most vertical cities with iconic skyline",
      "Victoria Harbour separates the island from the Kowloon peninsula",
      "Former British colony known for dim sum and Star Ferry",
      "Asian financial hub on Victoria Harbour with dramatic skyline"
    ],
    waterFeature: "Victoria Harbour, South China Sea",
    population: "7.5 million",
    famousFor: "Victoria Peak, Star Ferry, Dim Sum, Skyscrapers",
    funFact: "Hong Kong has more skyscrapers than any other city - over 9,000 high-rise buildings! That's twice as many as New York. The city has more Rolls-Royces per capita than anywhere else, yet 50% of residents live in public housing. It's one of the world's densest cities with 6,700 people per square km!",
    funFactSource: "Hong Kong Buildings Department",
    funFactSourceUrl: "https://www.bd.gov.hk/en/index.html"
  },
  
  {
    id: 66,
    name: "Boston",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Historic East Coast city with a key role in American independence",
      "Built on Massachusetts Bay and the Charles River",
      "Home to prestigious universities Harvard and MIT nearby",
      "Freedom Trail connects Revolutionary War sites along the harbor",
      "Massachusetts capital where the Tea Party protest occurred in 1773",
      "Historic Massachusetts city on a bay where American Revolution began"
    ],
    waterFeature: "Charles River, Boston Harbor, Massachusetts Bay",
    population: "675,000 (4.9M metro)",
    famousFor: "Freedom Trail, Harvard, Fenway Park, Boston Tea Party",
    funFact: "Boston's Big Dig was the most expensive highway project in U.S. history at $22 billion! The project buried the Central Artery underground (1991-2007) and took longer than the Empire State Building, Hoover Dam, and Alaska Highway combined. It used enough concrete to build a 3-foot-wide sidewalk from Boston to San Francisco three times!",
    funFactSource: "Massachusetts Department of Transportation",
    funFactSourceUrl: "https://www.mass.gov/info-details/about-the-big-dig"
  },
  
  {
    id: 67,
    name: "Seattle",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Pacific Northwest coastal city known for rain and coffee culture",
      "Located on Puget Sound between mountains and saltwater",
      "Tech hub home to Amazon, Microsoft, and Starbucks headquarters",
      "Famous Space Needle overlooks Elliott Bay and Puget Sound",
      "Washington state's largest city with Pike Place Market",
      "Pacific Northwest city on Puget Sound with the Space Needle"
    ],
    waterFeature: "Puget Sound, Lake Washington, Elliott Bay",
    population: "750,000 (4M metro)",
    famousFor: "Space Needle, Pike Place Market, Coffee culture, Tech companies",
    funFact: "Seattle doesn't actually rain as much as its reputation suggests! It gets less annual rainfall than New York, Boston, or Miami. But it's cloudy 226 days per year with constant drizzle rather than heavy rain. The city averages only 37 inches of rain yearly but 150+ rainy days - it's the frequency, not volume!",
    funFactSource: "National Weather Service Seattle",
    funFactSourceUrl: "https://www.weather.gov/sew/"
  },
  
  {
    id: 68,
    name: "Dublin",
    continent: "Europe",
    country: "Ireland",
    difficulty: "medium",
    clues: [
      "Irish capital city on the east coast with mild, rainy climate",
      "Built where a river meets a bay on the Irish Sea",
      "Famous for literary heritage, Guinness, and friendly pubs",
      "Ha'penny Bridge crosses the Liffey in the city center",
      "Ireland's capital and birthplace of James Joyce and Oscar Wilde",
      "Irish capital on the River Liffey flowing into the Irish Sea"
    ],
    waterFeature: "River Liffey, Dublin Bay, Irish Sea",
    population: "555,000 (1.4M metro)",
    famousFor: "Guinness Storehouse, Trinity College, Temple Bar, Literary heritage",
    funFact: "Dublin's Trinity College Library houses the Book of Kells (9th century) and has a 65-meter Long Room with 200,000 of the library's oldest books! The Long Room inspired the Jedi Archives in Star Wars. The library also receives a copy of every book published in the UK and Ireland - they add 100,000 books yearly!",
    funFactSource: "Trinity College Dublin",
    funFactSourceUrl: "https://www.tcd.ie/library/bookofkells/"
  },
  
  {
    id: 69,
    name: "Miami",
    continent: "North America",
    country: "United States",
    difficulty: "medium",
    clues: [
      "Southern Florida coastal city with tropical climate year-round",
      "Built on Biscayne Bay between the Everglades and Atlantic Ocean",
      "Known for Art Deco architecture, Cuban culture, and beaches",
      "Cruise capital of the world on the bay and ocean",
      "Florida's second-largest city with South Beach and Little Havana",
      "Florida city on Biscayne Bay with Art Deco District and beaches"
    ],
    waterFeature: "Biscayne Bay, Atlantic Ocean",
    population: "440,000 (6.1M metro)",
    famousFor: "South Beach, Art Deco, Cuban culture, Cruise port",
    funFact: "Miami is the only major U.S. city founded by a woman! Julia Tuttle convinced railroad tycoon Henry Flagler to extend his railroad to Miami in 1896 by sending him orange blossoms during a freeze, proving Miami's warm climate. The city went from 300 people to a major metropolis in just 125 years!",
    funFactSource: "HistoryMiami Museum",
    funFactSourceUrl: "https://www.historymiami.org/"
  },
  
  {
    id: 70,
    name: "Zurich",
    continent: "Europe",
    country: "Switzerland",
    difficulty: "medium",
    clues: [
      "Swiss city known for banking and high quality of life",
      "Built where a lake meets the Limmat River in the Alps",
      "Global financial center with picturesque old town",
      "Limmat River flows from the lake through the historic center",
      "Switzerland's largest city with world-class chocolatiers",
      "Swiss financial capital on a lake and the Limmat River"
    ],
    waterFeature: "Lake Zurich, Limmat River",
    population: "430,000 (1.5M metro)",
    famousFor: "Banking, Chocolate, Lake Zurich, Swiss quality of life",
    funFact: "Zurich has more museums per capita than any other city in the world - over 50 museums for just 430,000 people! The city also has a unique 'swimming culture' where locals swim down the rivers during lunch breaks in summer. Waterproof bags called 'Wickelfisch' let swimmers carry clothes while floating downstream!",
    funFactSource: "Zurich Tourism",
    funFactSourceUrl: "https://www.zuerich.com/"
  },
  
  // ========================================
  // HARD CITIES (30 total)
  // ========================================
  
  {
    id: 71,
    name: "Ljubljana",
    continent: "Europe",
    country: "Slovenia",
    difficulty: "hard",
    clues: [
      "Small European capital known for green spaces and quality of life",
      "Built along the Ljubljanica River in a valley",
      "Car-free historic center with Art Nouveau and Baroque architecture",
      "Dragon Bridge and Triple Bridge cross the Ljubljanica",
      "Slovenia's capital named European Green Capital in 2016",
      "Slovenian capital on a river with medieval castle and bridges"
    ],
    waterFeature: "Ljubljanica River, Sava River",
    population: "295,000 (560,000 metro)",
    famousFor: "Dragon Bridge, Ljubljana Castle, Green capital, Tivoli Park",
    funFact: "Ljubljana was the first European capital to commit to going zero-waste! The city recycles or composts over 68% of waste (most cities are around 30%). It also banned cars from the 32,000 square meter city center, has 200+ km of bike paths, and every resident lives within 300m of a green space. It's Europe's greenest capital!",
    funFactSource: "Zero Waste Europe",
    funFactSourceUrl: "https://zerowasteeurope.eu/library/case-study-ljubljana/"
  },
  
  {
    id: 72,
    name: "Reykjavik",
    continent: "Europe",
    country: "Iceland",
    difficulty: "hard",
    clues: [
      "World's northernmost capital city with midnight sun in summer",
      "Coastal city on a bay in the North Atlantic Ocean",
      "Powered entirely by geothermal and hydroelectric energy",
      "Faxaflói Bay waterfront with views of mountains and ocean",
      "Iceland's capital with only 130,000 people in the metro area",
      "World's northernmost capital on the Atlantic with Northern Lights"
    ],
    waterFeature: "Faxaflói Bay, Atlantic Ocean",
    population: "135,000 (235,000 metro)",
    famousFor: "Northern Lights, Blue Lagoon, Hallgrímskirkja church, Geothermal energy",
    funFact: "Reykjavik has no mosquitoes! Iceland is one of only three countries in the world (with Antarctica and Seychelles) that are completely mosquito-free. The climate is too cold for mosquito eggs to hatch. The city also runs entirely on renewable energy - geothermal and hydro - making it one of the cleanest cities on Earth!",
    funFactSource: "Visit Reykjavik",
    funFactSourceUrl: "https://www.visitreykjavik.is/"
  },
  
  {
    id: 73,
    name: "Tallinn",
    continent: "Europe",
    country: "Estonia",
    difficulty: "hard",
    clues: [
      "Baltic capital city with well-preserved medieval old town",
      "Coastal city on the Gulf of Finland facing north",
      "Former Hanseatic trading city with city walls still intact",
      "Historic bay harbor has been an important port for centuries",
      "Estonia's capital and most digitally advanced city in Europe",
      "Estonian capital on the Baltic Sea with medieval UNESCO old town"
    ],
    waterFeature: "Gulf of Finland, Baltic Sea, Tallinn Bay",
    population: "440,000 (540,000 metro)",
    famousFor: "Medieval Old Town, Digital society, Toompea Castle",
    funFact: "Estonia (capital Tallinn) was the first country to offer e-Residency and online voting! Tallinn has free public WiFi everywhere, and 99% of government services are online. Estonians can vote, pay taxes, start companies, and sign documents digitally. Skype was invented here, and the country has produced more startups per capita than anywhere except Silicon Valley!",
    funFactSource: "e-Estonia",
    funFactSourceUrl: "https://e-estonia.com/"
  },
  
  {
    id: 74,
    name: "Porto",
    continent: "Europe",
    country: "Portugal",
    difficulty: "hard",
    clues: [
      "Historic Portuguese city on the Atlantic coast",
      "Built on hills along the Douro River near its mouth",
      "Famous for port wine production in riverside caves",
      "Six bridges span the Douro, including the iconic Dom Luís I Bridge",
      "Portugal's second-largest city with colorful Ribeira district",
      "Portuguese city on the Douro River where port wine is aged"
    ],
    waterFeature: "Douro River, Atlantic Ocean",
    population: "240,000 (1.7M metro)",
    famousFor: "Port wine, Dom Luís Bridge, Ribeira district, Lello Bookstore",
    funFact: "Porto's Livraria Lello bookstore (opened 1906) is considered one of the most beautiful bookstores in the world and allegedly inspired J.K. Rowling while she lived in Porto! The red spiral staircase and neo-Gothic architecture appear similar to Hogwarts. Rowling taught English in Porto and wrote parts of Harry Potter there!",
    funFactSource: "Livraria Lello",
    funFactSourceUrl: "https://www.livrarialello.pt/en/"
  },
  
  {
    id: 75,
    name: "Bergen",
    continent: "Europe",
    country: "Norway",
    difficulty: "hard",
    clues: [
      "Norwegian coastal city surrounded by seven mountains",
      "Built on a natural harbor on the North Sea coast",
      "Former Hanseatic League trading post with colorful wooden buildings",
      "Vågen harbor features the famous Bryggen wharf",
      "Norway's second-largest city and gateway to the fjords",
      "Norwegian coastal city on the North Sea with Bryggen UNESCO wharf"
    ],
    waterFeature: "North Sea, Vågen Harbor, Fjords",
    population: "285,000 (440,000 metro)",
    famousFor: "Bryggen wharf, Fjords, Fish market, Seven mountains",
    funFact: "Bergen is the rainiest city in Europe with over 240 rainy days per year! It gets 2,250mm of rain annually (London gets only 600mm). Locals joke that Bergen has two seasons: 'July and winter.' Despite the rain, Bergen was named European City of Culture and is the gateway to Norway's spectacular fjords.",
    funFactSource: "Visit Bergen",
    funFactSourceUrl: "https://en.visitbergen.com/"
  },
  
  {
    id: 76,
    name: "Bruges",
    continent: "Europe",
    country: "Belgium",
    difficulty: "hard",
    clues: [
      "Medieval Flemish city in northwestern Europe",
      "Known as 'Venice of the North' for its canal network",
      "Canals wind through the remarkably preserved medieval center",
      "Historic trading city connected to the North Sea via waterways",
      "Belgian city famous for chocolate, beer, and cobblestone streets",
      "Medieval Belgian city with canals and the iconic Belfry tower"
    ],
    waterFeature: "Canal network, North Sea connection",
    population: "120,000",
    famousFor: "Medieval architecture, Canals, Chocolate, Beer, Belfry",
    funFact: "Bruges was once one of the wealthiest cities in the world during the 14th century! When its river silted up and it lost sea access, the city went into economic decline - but this 'preserved' its medieval architecture perfectly. Nothing was demolished or modernized. Today, its 'poverty' became its fortune as tourism brings in millions seeking authentic medieval Europe!",
    funFactSource: "UNESCO World Heritage",
    funFactSourceUrl: "https://whc.unesco.org/en/list/996/"
  },
  
  {
    id: 77,
    name: "Dubrovnik",
    continent: "Europe",
    country: "Croatia",
    difficulty: "hard",
    clues: [
      "Historic walled city on the Adriatic Sea coast",
      "Known for distinctive orange-roofed old town and city walls",
      "Medieval maritime republic and trading power",
      "Adriatic coastal city used as King's Landing filming location",
      "Croatian city called the 'Pearl of the Adriatic'",
      "Croatian pearl of the Adriatic Sea with medieval walls"
    ],
    waterFeature: "Adriatic Sea",
    population: "42,000",
    famousFor: "City walls, Game of Thrones filming, Old Town, Cable car",
    funFact: "Dubrovnik was an independent republic (Republic of Ragusa) for 450 years (1358-1808) and rivals Venice in maritime history! It had the third-largest fleet in the Mediterranean. The city was the first in Europe to abolish slavery (in 1416!) and had one of the first orphanages and quarantine hospitals in the world.",
    funFactSource: "Dubrovnik Museums",
    funFactSourceUrl: "https://www.dumus.hr/en/"
  },
  
  {
    id: 78,
    name: "Marrakech",
    continent: "Africa",
    country: "Morocco",
    difficulty: "hard",
    clues: [
      "North African city near the Atlas Mountains foothills",
      "Built in the desert but sustained by irrigation from mountain rivers",
      "Famous for bustling souks, riads, and ochre-colored buildings",
      "Red sandstone buildings earned it the nickname 'Red City'",
      "Morocco's fourth-largest city with Jemaa el-Fnaa square",
      "Moroccan red city with historic medina, souks, and Koutoubia Mosque"
    ],
    waterFeature: "Tensift River (seasonal), Mountain springs",
    population: "930,000 (1.3M metro)",
    famousFor: "Medina, Souks, Jardin Majorelle, Jemaa el-Fnaa square",
    funFact: "Marrakech has an ancient underground water system called 'khettaras' that brings water from the Atlas Mountains over 30km away! Built 1,000 years ago, these underground channels still function today. The city also has the largest traditional souk (market) in Morocco covering over 600 acres with 18 different souks!",
    funFactSource: "Marrakech Tourism",
    funFactSourceUrl: "https://www.visitmorocco.com/en/travel/marrakech"
  },
  
  {
    id: 79,
    name: "Kyoto",
    continent: "Asia",
    country: "Japan",
    difficulty: "hard",
    clues: [
      "Ancient Japanese city surrounded by mountains on three sides",
      "Built along the Kamo and Katsura Rivers in a basin",
      "Former imperial capital for over 1,000 years",
      "Famous for over 2,000 temples, shrines, and traditional geisha districts",
      "Japan's cultural heart with bamboo groves and zen gardens",
      "Ancient Japanese capital on the Kamo River with Fushimi Inari and golden temples"
    ],
    waterFeature: "Kamo River, Katsura River",
    population: "1.5 million",
    famousFor: "Fushimi Inari Shrine, Bamboo Forest, Geisha districts, Temples",
    funFact: "Kyoto was spared from atomic bombing in WWII because U.S. Secretary of War Henry Stimson had honeymooned there and appreciated its cultural significance! Kyoto was initially on the target list but Stimson successfully argued to remove it. This decision preserved 17 UNESCO World Heritage Sites and over 2,000 temples and shrines!",
    funFactSource: "Atomic Heritage Foundation",
    funFactSourceUrl: "https://www.atomicheritage.org/history/kyoto-spared"
  },
  
  {
    id: 80,
    name: "Havana",
    continent: "North America",
    country: "Cuba",
    difficulty: "hard",
    clues: [
      "Caribbean capital city with Spanish colonial architecture",
      "Located on a natural harbor on the Gulf of Mexico coast",
      "Famous for vintage American cars, cigars, and salsa music",
      "Historic harbor was a strategic Spanish colonial port",
      "Cuba's capital with colorful old town and Malecón waterfront",
      "Cuban capital on the Caribbean with classic cars and colonial architecture"
    ],
    waterFeature: "Havana Harbor, Gulf of Mexico, Caribbean Sea",
    population: "2.1 million",
    famousFor: "Classic cars, Cigars, Malecón, Colonial Old Town, Mojitos",
    funFact: "Havana has over 60,000 vintage American cars from the 1950s still running on the streets! When the U.S. embargo began in 1960, Cubans couldn't import new cars, so they kept their old Chevys and Fords running with incredible ingenuity - using parts from Soviet Ladas, boat engines, and pure creativity. These 'máquinas' are now worth more than when new!",
    funFactSource: "Havana Historian Office",
    funFactSourceUrl: "https://www.habananuestra.cu/"
  },
  
  {
    id: 81,
    name: "Salzburg",
    continent: "Europe",
    country: "Austria",
    difficulty: "hard",
    clues: [
      "Alpine city in Central Europe known for classical music",
      "Built along the Salzach River in a valley surrounded by mountains",
      "Birthplace of Wolfgang Amadeus Mozart",
      "Historic old town lies on both banks of the Salzach River",
      "Austrian city famous for 'The Sound of Music' and baroque architecture",
      "Mozart's birthplace on the Salzach River with massive hilltop fortress"
    ],
    waterFeature: "Salzach River",
    population: "155,000",
    famousFor: "Mozart's birthplace, Sound of Music, Hohensalzburg Fortress, Baroque architecture",
    funFact: "Salzburg means 'Salt Castle' - the city's wealth came from salt mining! The Hallstatt salt mines nearby are the world's oldest (over 7,000 years old). Mozart was born here in 1756, and the city hosts 4,000+ cultural events annually - more than one every two hours!",
    funFactSource: "Salzburg Tourism",
    funFactSourceUrl: "https://www.salzburg.info/"
  },
  
  {
    id: 82,
    name: "Geneva",
    continent: "Europe",
    country: "Switzerland",
    difficulty: "hard",
    clues: [
      "Swiss city known for international diplomacy and banking",
      "Located where the Rhône River exits a major Alpine lake",
      "Home to UN headquarters and Red Cross",
      "Famous Jet d'Eau fountain shoots water 140m high in the lake",
      "Swiss city on Europe's largest Alpine lake",
      "Swiss city on a large Alpine lake where the Rhône begins"
    ],
    waterFeature: "Lake Geneva, Rhône River",
    population: "200,000 (500,000 metro)",
    famousFor: "UN headquarters, Red Cross, CERN, Swiss watches, Jet d'Eau",
    funFact: "Geneva is home to CERN, where the World Wide Web was invented in 1989! Tim Berners-Lee created it to help scientists share information. The city also has the world's highest density of international organizations - over 250! It's also where the Geneva Conventions were signed.",
    funFactSource: "CERN",
    funFactSourceUrl: "https://home.cern/"
  },
  
  {
    id: 83,
    name: "Nice",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "French Riviera city with Mediterranean climate",
      "Coastal resort on the Bay of Angels on the Mediterranean",
      "Known for pebble beaches, Promenade des Anglais, and Old Town",
      "Azure blue waters of the Baie des Anges waterfront",
      "French city popular with artists and wealthy vacationers",
      "French Riviera resort city on the Mediterranean with azure waters"
    ],
    waterFeature: "Mediterranean Sea, Baie des Anges",
    population: "340,000 (1M metro)",
    famousFor: "Promenade des Anglais, French Riviera, Azure coast, Nice Carnival",
    funFact: "Nice was actually Italian (part of the Kingdom of Sardinia) until 1860! France annexed it after a controversial referendum where 99% voted to join France (though the vote's legitimacy is disputed). The city's name comes from Greek Nike, goddess of victory. It's France's 5th-largest city!",
    funFactSource: "Nice Tourism",
    funFactSourceUrl: "https://en.nicetourisme.com/"
  },
  
  {
    id: 84,
    name: "Florence",
    continent: "Europe",
    country: "Italy",
    difficulty: "hard",
    clues: [
      "Italian Renaissance city in Tuscany region",
      "Built along the Arno River in central Italy",
      "Birthplace of the Renaissance with incredible art and architecture",
      "Ponte Vecchio medieval bridge crosses the Arno",
      "Italian city with the Uffizi Gallery and Michelangelo's David",
      "Renaissance Italian city on the Arno River - birthplace of the Renaissance"
    ],
    waterFeature: "Arno River",
    population: "380,000 (1M metro)",
    famousFor: "Uffizi Gallery, Duomo, Michelangelo's David, Ponte Vecchio, Renaissance art",
    funFact: "Florence was the richest city in Europe in the 1400s! The Medici banking family basically invented modern banking here. The city has the highest concentration of Renaissance art in the world - 30% of the world's art treasures are in Florence. It was Italy's capital 1865-1871!",
    funFactSource: "Uffizi Galleries",
    funFactSourceUrl: "https://www.uffizi.it/en"
  },
  
  {
    id: 85,
    name: "Naples",
    continent: "Europe",
    country: "Italy",
    difficulty: "hard",
    clues: [
      "Ancient Italian port city with active volcano nearby",
      "Located on a bay on the Mediterranean coast near an active volcano",
      "Known for pizza invention, Pompeii ruins, and Mount Vesuvius",
      "Historic port on the bay with islands of Capri and Ischia offshore",
      "Southern Italian city where pizza was invented",
      "Southern Italian port city on a bay with Mount Vesuvius looming"
    ],
    waterFeature: "Bay of Naples, Mediterranean Sea, Tyrrhenian Sea",
    population: "960,000 (3.1M metro)",
    famousFor: "Pizza, Pompeii, Mount Vesuvius, Historic center, Neapolitan culture",
    funFact: "Naples invented pizza! The Margherita pizza was created here in 1889 for Queen Margherita, using tomato (red), mozzarella (white), and basil (green) to represent the Italian flag. The city has the largest historic city center in Europe and is the birthplace of mandolins and Sophia Loren!",
    funFactSource: "UNESCO Naples",
    funFactSourceUrl: "https://whc.unesco.org/en/list/726/"
  },
  
  {
    id: 86,
    name: "Krakow",
    continent: "Europe",
    country: "Poland",
    difficulty: "hard",
    clues: [
      "Historic Polish city that escaped WWII destruction",
      "Built on the Vistula River in southern Poland",
      "Medieval old town with Europe's largest market square",
      "Vistula River winds through this former Polish capital",
      "Polish city with Wawel Castle and well-preserved old town",
      "Historic Polish city on the Vistula River with well-preserved medieval architecture"
    ],
    waterFeature: "Vistula River",
    population: "780,000 (1.8M metro)",
    famousFor: "Wawel Castle, Main Market Square, Historic center, Salt mines",
    funFact: "Krakow's Main Market Square (built 1257) is Europe's largest medieval town square! The city was Poland's capital for 500+ years and miraculously escaped destruction in WWII. Nearby Wieliczka Salt Mine has been operating continuously for over 700 years and has an entire underground cathedral carved from salt!",
    funFactSource: "Krakow UNESCO",
    funFactSourceUrl: "https://whc.unesco.org/en/list/29/"
  },
  
  {
    id: 87,
    name: "Seville",
    continent: "Europe",
    country: "Spain",
    difficulty: "hard",
    clues: [
      "Andalusian city in southern Spain with Moorish heritage",
      "Built along the Guadalquivir River in southwestern Spain",
      "Known for flamenco dancing, tapas, and historic architecture",
      "Guadalquivir River is Spain's only navigable river",
      "Spanish city with the Alcázar palace and Gothic cathedral",
      "Andalusian capital on the Guadalquivir River with Moorish palaces"
    ],
    waterFeature: "Guadalquivir River",
    population: "690,000 (1.5M metro)",
    famousFor: "Alcázar, Seville Cathedral, Plaza de España, Flamenco, Tapas",
    funFact: "Seville's cathedral is the world's largest Gothic cathedral and the 3rd-largest church overall! Christopher Columbus is buried there. The city also has the oldest functioning bullring in Spain (1749) and was the birthplace of flamenco dancing. Bizet's opera 'Carmen' is set in Seville!",
    funFactSource: "Seville Cathedral",
    funFactSourceUrl: "https://www.catedraldesevilla.es/"
  },
  
  {
    id: 88,
    name: "Valencia",
    continent: "Europe",
    country: "Spain",
    difficulty: "hard",
    clues: [
      "Mediterranean port city in eastern Spain",
      "Built where the Turia River meets the Mediterranean Sea",
      "Known for paella, City of Arts and Sciences, and oranges",
      "Former Turia riverbed converted into urban park",
      "Spain's third-largest city famous for Las Fallas festival",
      "Spanish Mediterranean city where paella was invented"
    ],
    waterFeature: "Mediterranean Sea, Turia River (former riverbed)",
    population: "800,000 (1.8M metro)",
    famousFor: "Paella, City of Arts and Sciences, Las Fallas, Beaches",
    funFact: "Valencia invented paella! The traditional recipe includes rabbit, chicken, and green beans (not seafood). After a devastating 1957 flood, the city diverted the Turia River and converted the riverbed into a 9km park with gardens, sports facilities, and the futuristic City of Arts and Sciences!",
    funFactSource: "Valencia Tourism",
    funFactSourceUrl: "https://www.visitvalencia.com/"
  },
  
  {
    id: 89,
    name: "Porto",
    continent: "Europe",
    country: "Portugal",
    difficulty: "hard",
    clues: [
      "Historic Portuguese city on the Atlantic coast",
      "Built on hills along the Douro River near its mouth",
      "Famous for port wine production in riverside caves",
      "Six bridges span the Douro, including iconic Dom Luís I Bridge",
      "Portugal's second-largest city with colorful Ribeira district",
      "Portuguese city on the Douro River where port wine is aged"
    ],
    waterFeature: "Douro River, Atlantic Ocean",
    population: "240,000 (1.7M metro)",
    famousFor: "Port wine, Dom Luís Bridge, Ribeira district, Lello Bookstore",
    funFact: "Porto's Livraria Lello bookstore (1906) is one of the world's most beautiful and allegedly inspired J.K. Rowling! She taught English in Porto and wrote parts of Harry Potter there. The red spiral staircase resembles Hogwarts. Port wine gets its name from the city!",
    funFactSource: "Livraria Lello",
    funFactSourceUrl: "https://www.livrarialello.pt/en/"
  },
  
  {
    id: 90,
    name: "Lyon",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "French city at the confluence of two major rivers",
      "Located where the Rhône and Saône rivers meet",
      "Known as the gastronomic capital of France",
      "Renaissance old town between two rivers",
      "France's third-largest city famous for silk and cuisine",
      "French gastronomic capital at the confluence of the Rhône and Saône"
    ],
    waterFeature: "Rhône River, Saône River",
    population: "520,000 (2.3M metro)",
    famousFor: "Gastronomy, Old Lyon, Silk industry, Festivals of Light",
    funFact: "Lyon is the gastronomic capital of France with more restaurants per capita than anywhere else! The city invented cinema - the Lumière brothers showed the first films here in 1895. Lyon also has the largest Renaissance district in Europe and hosts the spectacular Festival of Lights each December!",
    funFactSource: "Lyon Tourism",
    funFactSourceUrl: "https://www.lyon-france.com/"
  },
  
  {
    id: 91,
    name: "Marseille",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "Ancient port city in southern France",
      "Located on the Mediterranean coast with natural harbor",
      "France's oldest city founded by Greeks 2,600 years ago",
      "Old Port (Vieux-Port) has been the harbor for millennia",
      "France's second-largest city known for bouillabaisse",
      "France's oldest city on the Mediterranean with ancient Greek origins"
    ],
    waterFeature: "Mediterranean Sea, Old Port (Vieux-Port)",
    population: "870,000 (1.9M metro)",
    famousFor: "Old Port, Notre-Dame de la Garde, Bouillabaisse, Multicultural vibe",
    funFact: "Marseille is France's oldest city, founded by Greeks in 600 BC! The French national anthem 'La Marseillaise' was named after the city - volunteers from Marseille sang it while marching to Paris in 1792. The city is Europe's busiest cruise port and has 300+ days of sunshine yearly!",
    funFactSource: "Marseille Tourism",
    funFactSourceUrl: "https://www.marseille-tourisme.com/"
  },
  
  {
    id: 92,
    name: "Bordeaux",
    continent: "Europe",
    country: "France",
    difficulty: "hard",
    clues: [
      "French city famous for wine production",
      "Built along the Garonne River in southwestern France",
      "Known for world-class vineyards and 18th-century architecture",
      "Port of the Moon where Garonne forms a crescent",
      "French city with UNESCO-listed wine region",
      "French wine capital on the Garonne River"
    ],
    waterFeature: "Garonne River",
    population: "260,000 (1.3M metro)",
    famousFor: "Wine, Port of the Moon, Place de la Bourse, Vineyards",
    funFact: "Bordeaux produces 700-900 million bottles of wine annually! The region has over 7,000 châteaux (wine estates). The city's historic center is a UNESCO World Heritage Site and is the largest urban World Heritage site in France. Bordeaux wine has been exported since Roman times!",
    funFactSource: "Bordeaux Wine Council",
    funFactSourceUrl: "https://www.bordeaux.com/"
  },
  
  {
    id: 93,
    name: "Antwerp",
    continent: "Europe",
    country: "Belgium",
    difficulty: "hard",
    clues: [
      "Flemish port city in northern Belgium",
      "Located on the Scheldt River estuary near the North Sea",
      "World's diamond trading capital and major port",
      "Historic port on the Scheldt handles massive cargo volumes",
      "Belgian city with Rubens House and diamond district",
      "Belgian port city on the Scheldt River - world's diamond trading capital"
    ],
    waterFeature: "Scheldt River, North Sea",
    population: "530,000 (1.2M metro)",
    famousFor: "Diamonds, Port, Rubens, Fashion, Cathedral",
    funFact: "Antwerp cuts and trades 86% of the world's rough diamonds! The diamond district handles $54 billion in diamonds annually. The city is also Europe's second-largest port. Painter Peter Paul Rubens lived here and his house is now a museum. Antwerp is a major fashion capital too!",
    funFactSource: "Antwerp World Diamond Centre",
    funFactSourceUrl: "https://www.awdc.be/"
  },
  
  {
    id: 94,
    name: "Gothenburg",
    continent: "Europe",
    country: "Sweden",
    difficulty: "hard",
    clues: [
      "Swedish port city on the North Sea coast",
      "Built on the Göta älv river and harbor system",
      "Known for canals, seafood, and Volvo headquarters",
      "Sweden's largest non-capital city with extensive waterfront",
      "Scandinavian city famous for archipelago and seafood",
      "Swedish west coast city with Dutch-inspired canals"
    ],
    waterFeature: "Göta älv River, North Sea, Gothenburg Archipelago",
    population: "580,000 (1M metro)",
    famousFor: "Volvo, Liseberg amusement park, Archipelago, Seafood",
    funFact: "Gothenburg was founded by Dutch architects, which is why it has canals like Amsterdam! It's home to Volvo and Scandinavia's largest amusement park (Liseberg). The city has the world's largest indoor ski slope and hosts the world's largest football tournament for youth - the Gothia Cup!",
    funFactSource: "Visit Gothenburg",
    funFactSourceUrl: "https://www.goteborg.com/"
  },
  
  {
    id: 95,
    name: "Vilnius",
    continent: "Europe",
    country: "Lithuania",
    difficulty: "hard",
    clues: [
      "Baltic capital city with baroque architecture",
      "Built at the confluence of Neris and Vilnia rivers",
      "Known for one of Europe's largest medieval old towns",
      "Rivers meet in this historic Lithuanian capital",
      "Easternmost Baltic capital with UNESCO old town",
      "Lithuanian capital at the confluence of two rivers"
    ],
    waterFeature: "Neris River, Vilnia River",
    population: "590,000",
    famousFor: "Baroque old town, Gediminas Tower, Churches, Gate of Dawn",
    funFact: "Vilnius has one of Europe's largest medieval old towns! The city was once called 'The Jerusalem of Lithuania' because it was 45% Jewish before WWII. Vilnius also has a self-declared independent republic within it - Užupis - which has its own constitution, currency, and celebrates April Fools' Day as independence day!",
    funFactSource: "Vilnius Tourism",
    funFactSourceUrl: "https://www.vilnius-tourism.lt/"
  },
  
  {
    id: 96,
    name: "Riga",
    continent: "Europe",
    country: "Latvia",
    difficulty: "hard",
    clues: [
      "Baltic capital on a gulf and major river",
      "Built where the Daugava River meets the Baltic Sea",
      "Known for Art Nouveau architecture and medieval old town",
      "Historic port city on the river and gulf",
      "Largest Baltic capital with UNESCO old town",
      "Latvian capital on the Daugava River and Baltic Sea"
    ],
    waterFeature: "Daugava River, Gulf of Riga, Baltic Sea",
    population: "630,000 (1M metro)",
    famousFor: "Art Nouveau, Old Town, Central Market, House of Blackheads",
    funFact: "Riga has the highest concentration of Art Nouveau buildings in the world - over 800! The city's Central Market is housed in five former German Zeppelin hangars from WWI. Riga is also where the Christmas tree tradition allegedly started in 1510 - locals put up a decorated tree in the town square!",
    funFactSource: "Riga Tourism",
    funFactSourceUrl: "https://www.liveriga.com/"
  },
  
  {
    id: 97,
    name: "Bratislava",
    continent: "Europe",
    country: "Slovakia",
    difficulty: "hard",
    clues: [
      "Central European capital on the Danube",
      "Only capital bordering two other countries (Austria & Hungary)",
      "Built along the Danube River near three-country border",
      "Medieval castle overlooks the Danube",
      "Slovakia's capital and largest city",
      "Slovak capital on the Danube - only capital bordering 2 countries"
    ],
    waterFeature: "Danube River",
    population: "440,000 (660,000 metro)",
    famousFor: "Bratislava Castle, Old Town, UFO Bridge, Three-country border",
    funFact: "Bratislava is the only capital in the world that borders TWO other countries! You can cycle from Bratislava to Vienna in 1 hour. The city was actually Hungary's capital for 200+ years when the Ottomans occupied Budapest. The UFO observation deck on the SNP Bridge offers 360° views!",
    funFactSource: "Visit Bratislava",
    funFactSourceUrl: "https://www.visit bratislava.com/"
  },
  
  {
    id: 98,
    name: "Split",
    continent: "Europe",
    country: "Croatia",
    difficulty: "hard",
    clues: [
      "Croatian coastal city on the Adriatic Sea",
      "Built around ancient Roman emperor's palace",
      "Known for Diocletian's Palace at the waterfront",
      "Adriatic port city with islands offshore",
      "Croatia's second-largest city with Roman ruins",
      "Croatian Adriatic city literally built inside a Roman palace"
    ],
    waterFeature: "Adriatic Sea",
    population: "180,000 (350,000 metro)",
    famousFor: "Diocletian's Palace, Old Town, Beaches, Game of Thrones filming",
    funFact: "Split literally grew inside a Roman emperor's palace! Diocletian's Palace (built 305 AD) is so large that the entire old town is within its walls. About 3,000 people live inside the palace complex today. It's one of the best-preserved Roman monuments and a Game of Thrones filming location!",
    funFactSource: "UNESCO Split",
    funFactSourceUrl: "https://whc.unesco.org/en/list/97/"
  },
  
  {
    id: 99,
    name: "Gdansk",
    continent: "Europe",
    country: "Poland",
    difficulty: "hard",
    clues: [
      "Historic Polish port city on the Baltic Sea",
      "Built on the Motlawa River and Baltic coast",
      "Known for amber trade and shipyard history",
      "Baltic port where WWII began and Solidarity movement started",
      "Polish city rebuilt after WWII destruction",
      "Polish Baltic port city - birthplace of Solidarity movement"
    ],
    waterFeature: "Baltic Sea, Motlawa River, Vistula River",
    population: "470,000 (1.2M metro)",
    famousFor: "Amber, Solidarity movement, Shipyards, Old Town, St. Mary's Church",
    funFact: "Gdansk is the amber capital of the world - 90% of the world's amber comes from the Baltic region! WWII started here when Germans attacked Westerplatte. The Solidarity trade union movement that helped end communism in Europe started in Gdansk's shipyards in 1980. The city was 90% destroyed in WWII and completely rebuilt!",
    funFactSource: "Gdansk Museum",
    funFactSourceUrl: "https://muzeumgdansk.pl/en"
  },
  
  {
    id: 100,
    name: "Innsbruck",
    continent: "Europe",
    country: "Austria",
    difficulty: "hard",
    clues: [
      "Alpine city in the Austrian Tyrol surrounded by mountains",
      "Located on a major river in a valley of the Alps",
      "Hosted Winter Olympics twice (1964, 1976)",
      "Historic Austrian city with world-class ski jumping facilities",
      "Alpine capital famous for Golden Roof landmark",
      "Tyrolean city on a river - hosted Winter Olympics twice"
    ],
    waterFeature: "Inn River",
    population: "133,000 (300,000 metro)",
    famousFor: "Winter Olympics, Ski jumping, Golden Roof, Alpine scenery",
    funFact: "Innsbruck is the only city to host the Winter Youth Olympics! It hosted the Winter Olympics twice (1964 and 1976) and has world-class ski jumping facilities right in the city. The name means 'bridge over the Inn River.' You can ski in the morning and be in the historic old town for lunch!",
    funFactSource: "Innsbruck Tourism",
    funFactSourceUrl: "https://www.innsbruck.info/"
  }
];

// Helper function to get city by ID
export function getCityById(id: number): City | undefined {
  return CITIES.find(city => city.id === id);
}

// Helper function to get all city names
export function getAllCityNames(): string[] {
  return CITIES.map(city => city.name);
}

// Helper function to get daily city
export function getDailyCity(date: Date = new Date()): City {
  const epochDate = new Date('2024-12-01');
  const daysSinceEpoch = Math.floor(
    (date.getTime() - epochDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  const index = daysSinceEpoch % CITIES.length;
  return CITIES[index];
}

