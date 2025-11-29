// Storage utility for Daily City Guess
// Handles game state persistence and stats tracking

import type { GameState, City, Stats } from '../types';
import { CITIES } from '../data/cities';

const STORAGE_KEY = 'dailycityguess-game-state';
const STATS_KEY = 'dailycityguess-stats';
const ARCHIVE_KEY = 'dailycityguess-archive';

export function saveGameState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save game state:', error);
  }
}

export function loadGameState(): GameState | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load game state:', error);
    return null;
  }
}

export function isNewDay(lastPlayedDate: string): boolean {
  const today = new Date().toISOString().split('T')[0];
  return lastPlayedDate !== today;
}

export function getDailyCity(date: Date = new Date()): City {
  const startOfGame = new Date('2024-12-01T00:00:00.000Z');
  const diffTime = Math.abs(date.getTime() - startOfGame.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  const index = diffDays % CITIES.length;
  return CITIES[index];
}

export function getPuzzleNumber(date: Date = new Date()): number {
  const startDate = new Date('2024-12-01T00:00:00.000Z');
  const diffTime = Math.abs(date.getTime() - startDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1;
}

export function updateStats(isWon: boolean, guessCount: number): void {
  try {
    const statsStr = localStorage.getItem(STATS_KEY);
    const stats: Stats = statsStr ? JSON.parse(statsStr) : {
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: {}
    };

    stats.gamesPlayed++;
    
    if (isWon) {
      stats.gamesWon++;
      stats.currentStreak++;
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
      stats.guessDistribution[guessCount] = (stats.guessDistribution[guessCount] || 0) + 1;
    } else {
      stats.currentStreak = 0;
    }

    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Failed to update stats:', error);
  }
}

export function getStats(): Stats {
  try {
    const statsStr = localStorage.getItem(STATS_KEY);
    return statsStr ? JSON.parse(statsStr) : {
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: {}
    };
  } catch (error) {
    console.error('Failed to get stats:', error);
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      currentStreak: 0,
      maxStreak: 0,
      guessDistribution: {}
    };
  }
}

export function generateShareText(isWon: boolean, guesses: string[], puzzleNumber: number): string {
  const guessCount = guesses.length;
  const result = isWon ? `${guessCount}/6` : 'X/6';
  
  let grid = '';
  for (let i = 0; i < 6; i++) {
    if (i < guesses.length - 1) {
      grid += '⬜';
    } else if (i === guesses.length - 1) {
      grid += isWon ? '🟩' : '⬜';
    } else {
      grid += '⬛';
    }
    if ((i + 1) % 3 === 0 && i < 5) grid += '\n';
  }
  
  return `Daily City Guess #${puzzleNumber} ${result}\n\n${grid}\n\nDaily geography challenge! 🌍\nPlay at: dailycityguess.com`;
}

export function saveArchivePuzzleState(puzzleNumber: number, solved: boolean, guesses: number): void {
  try {
    const archiveData = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || '{}');
    archiveData[puzzleNumber] = { solved, guesses };
    localStorage.setItem(ARCHIVE_KEY, JSON.stringify(archiveData));
  } catch (error) {
    console.error('Failed to save archive puzzle state:', error);
  }
}

export function loadArchivePuzzleState(puzzleNumber: number): { solved: boolean; guesses: number } | undefined {
  try {
    const archiveData = JSON.parse(localStorage.getItem(ARCHIVE_KEY) || '{}');
    return archiveData[puzzleNumber];
  } catch (error) {
    console.error('Failed to load archive puzzle state:', error);
    return undefined;
  }
}

