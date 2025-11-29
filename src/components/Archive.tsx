import { getDailyCity, getPuzzleNumber, loadArchivePuzzleState } from '../utils/storage';
import type { City } from '../types';
import './Archive.css';

interface ArchiveProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPuzzle: (city: City, puzzleNumber: number) => void;
}

export default function Archive({ isOpen, onClose, onSelectPuzzle }: ArchiveProps) {
  if (!isOpen) return null;

  const generatePuzzleList = () => {
    const puzzles: Array<{ number: number; city: City; completed?: { solved: boolean; guesses: number } }> = [];
    const today = new Date();
    
    // Only show yesterday's puzzle for catch-up
    const yesterdayDate = new Date(today);
    yesterdayDate.setDate(today.getDate() - 1);
    const yesterdayPuzzleNumber = getPuzzleNumber(yesterdayDate);
    const yesterdayCity = getDailyCity(yesterdayDate);
    
    puzzles.push({
      number: yesterdayPuzzleNumber,
      city: yesterdayCity,
      completed: loadArchivePuzzleState(yesterdayPuzzleNumber)
    });
    
    return puzzles;
  };

  const puzzles = generatePuzzleList();

  const handlePuzzleClick = (puzzleItem: typeof puzzles[0]) => {
    onSelectPuzzle(puzzleItem.city, puzzleItem.number);
  };

  return (
    <div className="archive-overlay" onClick={onClose}>
      <div className="archive-modal" onClick={(e) => e.stopPropagation()}>
        <div className="archive-header">
          <h2>📚 Previous Puzzles</h2>
          <button className="archive-close" onClick={onClose}>✕</button>
        </div>

        <div className="archive-info">
          💡 Missed yesterday? Play it now! (Doesn't affect your streak)
        </div>

        <div className="archive-list">
          {puzzles.map((puzzleItem) => {
            return (
              <div
                key={puzzleItem.number}
                className={`archive-item ${puzzleItem.completed ? 'completed' : ''}`}
                onClick={() => handlePuzzleClick(puzzleItem)}
              >
                <div className="archive-item-number">
                  ⏮️ Yesterday
                </div>
                <div className="archive-item-name">
                  {puzzleItem.completed ? puzzleItem.city.name : 'Mystery City'}
                </div>
                <div className="archive-item-status">
                  {puzzleItem.completed ? (
                    puzzleItem.completed.solved ? (
                      <span className="solved">✅ {puzzleItem.completed.guesses}/6</span>
                    ) : (
                      <span className="failed">❌ Failed</span>
                    )
                  ) : (
                    <span className="not-played">
                      🌍 World City
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="archive-footer">
          Come back tomorrow for another catch-up puzzle! 🌍
        </div>
      </div>
    </div>
  );
}

