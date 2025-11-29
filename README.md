# Daily City Guess - Daily Geography Challenge

Welcome to Daily City Guess, your daily puzzle game to test your geography knowledge! Guess world cities from 6 progressive clues, including water features. A new challenge awaits you every day!

## Features

- **Daily Puzzle:** A new mystery city to guess every day from 50 world cities.
- **Progressive Clues:** Six clues, starting vague and becoming more specific with each incorrect guess.
- **Water Feature Clues:** Every city includes clues about rivers, oceans, lakes, or other bodies of water.
- **Autocomplete Input:** Smart suggestions help you find the correct answer.
- **Educational Win/Lose Screen:** Learn more about the city with a "Did You Know?" fun fact and a source link.
- **Statistics:** Track your games played, win rate, current streak, max streak, and guess distribution.
- **Archive:** Play yesterday's puzzle if you missed it (does not affect your streak).
- **Progressive Web App (PWA):** Installable to your home screen, works offline, and provides a native app-like experience.
- **Emerald Teal Theme:** A fresh and modern color scheme inspired by the ocean and earth.

## How to Play

1. **Guess the Mystery City:** Each day, you'll be presented with a world city puzzle.
2. **Progressive Clues:** You get 6 guesses. With each incorrect guess, a new, more specific clue is revealed.
3. **Water Feature Clues:** Every city includes clues about nearby rivers, oceans, seas, bays, or other water features.
4. **Win or Learn:** Guess correctly to win! If you run out of guesses, the answer is revealed. Either way, you'll get an interesting "Did You Know?" fact with a source to learn more.
5. **Track Your Progress:** Check your stats to see your performance over time.
6. **Catch Up:** Missed yesterday's puzzle? Head to the Archive to play it without affecting your streak.

## Development

This project is built using React, TypeScript, and Vite, configured as a Progressive Web App (PWA).

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/djcastelino/dailycityguess.git
   cd dailycityguess
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run in development mode:**
   ```bash
   npm run dev
   ```
   This will open the app in your browser at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```
This command compiles the app into the `dist` directory, ready for deployment.

### Deployment

The app is designed for easy deployment to platforms like Vercel.
1. Link your GitHub repository to Vercel.
2. Vercel will automatically build and deploy your app on every push to the `main` branch.
3. Connect your custom domain (`dailycityguess.com`) in Vercel settings.

## Content

The game features 50 carefully curated world cities from all continents, including:
- 20 Easy cities (major world capitals and tourist destinations)
- 20 Medium cities (regional capitals and well-known cities)
- 10 Hard cities (smaller capitals and lesser-known cities)

Each city includes:
- 6 progressive clues (including water features)
- A verified "Did You Know?" fun fact
- A source link for further learning
- Geographic and demographic information

## Contributing

Ideas for new cities, features, or improvements are welcome!

## License

[Specify your license here, e.g., MIT License]

