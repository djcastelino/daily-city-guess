import type { City } from '../types';
import { generateShareText } from '../utils/storage';
import './GameOver.css';

interface GameOverProps {
  isWon: boolean;
  city: City;
  guessCount: number;
  puzzleNumber: number;
  guesses: string[];
  onStatsClick: () => void;
  onArchiveClick: () => void;
  onShare?: () => void;
}

export default function GameOver({ isWon, city, guessCount, puzzleNumber, guesses, onStatsClick, onArchiveClick, onShare }: GameOverProps) {
  const handleShare = () => {
    const shareText = generateShareText(isWon, guesses, puzzleNumber);
    
    // Track share event
    if (onShare) {
      onShare();
    }
    
    if (navigator.share) {
      navigator.share({
        text: shareText
      }).catch(() => {
        navigator.clipboard.writeText(shareText);
        alert('Copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Copied to clipboard!');
    }
  };

  return (
    <div className="game-over">
      <div className="result-banner-wrapper">
        <div className={`result-banner ${isWon ? 'won' : 'lost'}`}>
          {isWon ? (
            <>
              <div className="result-icon">🎉</div>
              <h2 className="result-title">Correct!</h2>
              <p className="result-subtitle">You got it in {guessCount} {guessCount === 1 ? 'guess' : 'guesses'}!</p>
            </>
          ) : (
            <>
              <div className="result-icon">😔</div>
              <h2 className="result-title">The answer was:</h2>
            </>
          )}
        </div>
      </div>

      <div className="city-info-card">
        <h3 className="city-name">🌍 {city.name}</h3>
        
        <div className="fun-fact-section">
          <h3>💡 Did You Know?</h3>
          <p className="fun-fact-text">{city.funFact}</p>
          <p className="fun-fact-source">
            Source:{" "}
            <a 
              href={city.funFactSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {city.funFactSource}
            </a>
          </p>
        </div>

        <div className="city-details">
          <p><strong>Country:</strong> {city.country}</p>
          <p><strong>Continent:</strong> {city.continent}</p>
          <p><strong>Water Feature:</strong> {city.waterFeature}</p>
          <p><strong>Population:</strong> {city.population}</p>
          <p><strong>Famous For:</strong> {city.famousFor}</p>
          <p><strong>Difficulty:</strong> {city.difficulty.charAt(0).toUpperCase() + city.difficulty.slice(1)}</p>
        </div>
      </div>

      <div className="action-buttons">
        <button onClick={handleShare} className="share-button">
          📤 Share Result & Invite Friends
        </button>
        <div className="secondary-buttons">
          <button onClick={onStatsClick} className="stats-button">
            📊 View Stats
          </button>
          <button onClick={onArchiveClick} className="archive-button">
            📚 Archive
          </button>
        </div>
      </div>
    </div>
  );
}

