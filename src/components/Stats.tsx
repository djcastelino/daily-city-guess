import { getStats } from '../utils/storage';
import './Stats.css';

interface StatsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Stats({ isOpen, onClose }: StatsProps) {
  if (!isOpen) return null;

  const stats = getStats();
  const winRate = stats.gamesPlayed > 0 
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) 
    : 0;

  const totalGuesses = Object.entries(stats.guessDistribution).reduce(
    (sum, [guesses, count]) => sum + (parseInt(guesses) * (count as number)),
    0
  );
  const averageGuesses = stats.gamesWon > 0 
    ? (totalGuesses / stats.gamesWon).toFixed(1) 
    : '0';

  const maxCount = Math.max(...(Object.values(stats.guessDistribution) as number[]), 1);

  return (
    <div className="stats-overlay" onClick={onClose}>
      <div className="stats-modal" onClick={(e) => e.stopPropagation()}>
        <div className="stats-header">
          <h2>📊 Your Statistics</h2>
          <button onClick={onClose} className="stats-close-btn">✕</button>
        </div>

        <div className="stats-summary">
          <div className="stat-box">
            <div className="stat-value">{stats.gamesPlayed}</div>
            <div className="stat-label">Played</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{winRate}%</div>
            <div className="stat-label">Win Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.currentStreak}</div>
            <div className="stat-label">Current Streak</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.maxStreak}</div>
            <div className="stat-label">Max Streak</div>
          </div>
        </div>

        <div className="stats-details">
          <h3>Guess Distribution (Wins)</h3>
          <div className="guess-distribution-chart">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="guess-bar-row">
                <span className="guess-number">{num}</span>
                <div className="bar-container">
                  <div 
                    className="bar" 
                    style={{ width: `${((stats.guessDistribution[num] || 0) / maxCount) * 100}%` }}
                  ></div>
                  <span className="bar-count">{stats.guessDistribution[num] || 0}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="average-guesses">Average Guesses (on wins): {averageGuesses}</p>
        </div>

        <button onClick={onClose} className="stats-close-btn-bottom">Close</button>
      </div>
    </div>
  );
}

