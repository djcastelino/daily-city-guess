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

export interface GameState {
  targetCity: City | null;
  guesses: string[];
  isComplete: boolean;
  isWon: boolean;
  currentStreak: number;
  maxStreak: number;
  gamesPlayed: number;
  gamesWon: number;
  lastPlayedDate: string;
  guessDistribution: { [key: number]: number };
}

export interface Stats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: { [key: number]: number };
}

