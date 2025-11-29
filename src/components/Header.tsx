import { getStats, getPuzzleNumber } from '../utils/storage';
import './Header.css';

export default function Header() {
  const stats = getStats();
  const puzzleNumber = getPuzzleNumber();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-center">
          <h1 className="title">
            🌍 DAILY CITY GUESS
          </h1>
          <p className="subtitle">Daily Geography Challenge</p>
          <div className="puzzle-info">
            <span className="puzzle-number">
              # {puzzleNumber}
            </span>
          </div>
          {stats.currentStreak > 0 && (
            <div className="streak">
              🔥 {stats.currentStreak} day streak
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

