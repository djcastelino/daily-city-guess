import { useState, useEffect } from 'react';
import type { GameState, City } from './types';
import { getDailyCity, loadGameState, saveGameState, isNewDay, updateStats, getPuzzleNumber, saveArchivePuzzleState } from './utils/storage';
import Header from './components/Header';
import ClueDisplay from './components/ClueDisplay';
import GuessInput from './components/GuessInput';
import GuessList from './components/GuessList';
import GameOver from './components/GameOver';
import Stats from './components/Stats';
import Archive from './components/Archive';
import TestMode from './components/TestMode';
import './App.css';

const MAX_GUESSES = 6;

function App() {
  const [isTestMode, setIsTestMode] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    targetCity: null,
    guesses: [],
    isComplete: false,
    isWon: false,
    currentStreak: 0,
    maxStreak: 0,
    gamesPlayed: 0,
    gamesWon: 0,
    lastPlayedDate: '',
    guessDistribution: {},
  });
  const [loading, setLoading] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [archiveMode, setArchiveMode] = useState(false);
  const [archivePuzzleNumber, setArchivePuzzleNumber] = useState<number | null>(null);

  useEffect(() => {
    // Check for test mode in URL
    const urlParams = new URLSearchParams(window.location.search);
    const testParam = urlParams.get('test');
    if (testParam === 'true') {
      setIsTestMode(true);
      setLoading(false);
      return;
    }
    
    initGame();
  }, []);

  function initGame() {
    try {
      const savedState = loadGameState();
      const todayDateOnly = new Date().toISOString().split('T')[0];

      const shouldStartNewGame = !savedState || 
                                !savedState.targetCity || 
                                !savedState.lastPlayedDate ||
                                isNewDay(savedState.lastPlayedDate);

      if (shouldStartNewGame) {
        const dailyCity = getDailyCity();
        
        const newState: GameState = {
          targetCity: dailyCity,
          guesses: [],
          isComplete: false,
          isWon: false,
          currentStreak: savedState?.currentStreak || 0,
          maxStreak: savedState?.maxStreak || 0,
          gamesPlayed: savedState?.gamesPlayed || 0,
          gamesWon: savedState?.gamesWon || 0,
          lastPlayedDate: todayDateOnly,
          guessDistribution: savedState?.guessDistribution || {},
        };
        
        setGameState(newState);
        saveGameState(newState);
      } else if (savedState.targetCity) {
        setGameState(savedState);
      }

      setLoading(false);
    } catch (error) {
      console.error('Failed to initialize game:', error);
      setLoading(false);
    }
  }

  function getVisibleClueCount(guessCount: number): number {
    if (guessCount === 0) return 1;
    if (guessCount === 1) return 2;
    if (guessCount === 2) return 3;
    if (guessCount === 3) return 4;
    if (guessCount === 4) return 5;
    return 6;
  }

  function handleGuess(guessName: string) {
    if (!gameState.targetCity || gameState.isComplete) return;

    const isCorrect = guessName.toLowerCase() === gameState.targetCity.name.toLowerCase();
    const newGuesses = [...gameState.guesses, guessName];
    const isComplete = isCorrect || newGuesses.length >= MAX_GUESSES;

    const newState: GameState = {
      ...gameState,
      guesses: newGuesses,
      isComplete,
      isWon: isCorrect,
    };

    if (isComplete && !archiveMode) {
      updateStats(isCorrect, newGuesses.length);
      
      const stats = JSON.parse(localStorage.getItem('dailycityguess-stats') || '{}');
      newState.currentStreak = stats.currentStreak || 0;
      newState.maxStreak = stats.maxStreak || 0;
      newState.gamesPlayed = stats.gamesPlayed || 0;
      newState.gamesWon = stats.gamesWon || 0;
      newState.guessDistribution = stats.guessDistribution || {};
    }

    // Save archive puzzle completion
    if (isComplete && archiveMode && archivePuzzleNumber) {
      saveArchivePuzzleState(archivePuzzleNumber, isCorrect, newGuesses.length);
    }

    setGameState(newState);
    if (!archiveMode) {
      saveGameState(newState);
    }
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Daily City Guess...</p>
      </div>
    );
  }

  // Test Mode
  if (isTestMode) {
    return (
      <TestMode 
        onSelectCity={(city: City) => {
          setIsTestMode(false);
          setGameState({
            targetCity: city,
            guesses: [],
            isComplete: false,
            isWon: false,
            currentStreak: 0,
            maxStreak: 0,
            gamesPlayed: 0,
            gamesWon: 0,
            lastPlayedDate: new Date().toISOString().split('T')[0],
            guessDistribution: {},
          });
        }}
      />
    );
  }

  if (!gameState.targetCity) {
    return (
      <div className="error-screen">
        <p>Failed to load game. Please refresh the page.</p>
      </div>
    );
  }

  const visibleClues = gameState.isComplete && gameState.isWon
    ? getVisibleClueCount(gameState.guesses.length - 1)
    : gameState.isComplete && !gameState.isWon
    ? 6
    : getVisibleClueCount(gameState.guesses.length);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <ClueDisplay 
          city={gameState.targetCity} 
          visibleClueCount={visibleClues}
        />

        {!gameState.isComplete && (
          <GuessInput
            onGuess={handleGuess}
            disabled={gameState.isComplete}
          />
        )}

        <GuessList 
          guesses={gameState.guesses} 
          maxGuesses={MAX_GUESSES}
          isComplete={gameState.isComplete}
          isWon={gameState.isWon}
        />

        {gameState.isComplete && !archiveMode && (
          <GameOver
            isWon={gameState.isWon}
            city={gameState.targetCity}
            guessCount={gameState.guesses.length}
            puzzleNumber={getPuzzleNumber()}
            guesses={gameState.guesses}
            onStatsClick={() => setShowStats(true)}
            onArchiveClick={() => setShowArchive(true)}
          />
        )}

        {gameState.isComplete && archiveMode && (
          <div className="archive-game-complete">
            <p>✅ Archive puzzle complete! (Doesn't affect streak)</p>
            <button onClick={() => {
              setArchiveMode(false);
              setArchivePuzzleNumber(null);
              initGame();
            }} className="back-to-today">
              ← Back to Today's Puzzle
            </button>
            <button onClick={() => setShowArchive(true)} className="browse-archive">
              📚 Browse More Puzzles
            </button>
          </div>
        )}
      </main>

      <Stats 
        isOpen={showStats}
        onClose={() => setShowStats(false)}
      />

      <Archive
        isOpen={showArchive}
        onClose={() => setShowArchive(false)}
        onSelectPuzzle={(city, puzzleNumber) => {
          setShowArchive(false);
          setArchiveMode(true);
          setArchivePuzzleNumber(puzzleNumber);
          setGameState({
            ...gameState,
            targetCity: city,
            guesses: [],
            isComplete: false,
            isWon: false,
          });
        }}
      />
    </div>
  );
}

export default App;

