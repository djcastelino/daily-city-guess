import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-JE60Y6WYH8';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page });
};

// Track game events
export const trackGameStart = (cityName: string) => {
  ReactGA.event({
    category: 'Game',
    action: 'game_started',
    label: cityName,
  });
};

export const trackGameComplete = (won: boolean, guesses: number, cityName: string) => {
  ReactGA.event({
    category: 'Game',
    action: won ? 'game_won' : 'game_lost',
    label: cityName,
    value: guesses,
  });
};

export const trackGuess = (correct: boolean, guessNumber: number) => {
  ReactGA.event({
    category: 'Gameplay',
    action: 'guess_made',
    label: correct ? 'correct' : 'incorrect',
    value: guessNumber,
  });
};

export const trackShare = () => {
  ReactGA.event({
    category: 'Social',
    action: 'result_shared',
  });
};

export const trackStatsView = () => {
  ReactGA.event({
    category: 'Engagement',
    action: 'stats_viewed',
  });
};

export const trackArchiveView = () => {
  ReactGA.event({
    category: 'Engagement',
    action: 'archive_viewed',
  });
};

export const trackTestMode = () => {
  ReactGA.event({
    category: 'Content',
    action: 'test_mode_accessed',
  });
};

export const trackCityView = (cityName: string, difficulty: string) => {
  ReactGA.event({
    category: 'Content',
    action: 'city_viewed',
    label: cityName,
    value: difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3,
  });
};


