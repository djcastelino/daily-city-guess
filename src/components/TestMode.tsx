import { useState } from 'react';
import { CITIES } from '../data/cities';
import type { City } from '../types';
import './TestMode.css';

interface TestModeProps {
  onSelectCity: (city: City) => void;
}

export default function TestMode({ onSelectCity }: TestModeProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  const filteredCities = selectedDifficulty === 'all' 
    ? CITIES 
    : CITIES.filter(city => city.difficulty === selectedDifficulty);

  const counts = {
    total: CITIES.length,
    easy: CITIES.filter(c => c.difficulty === 'easy').length,
    medium: CITIES.filter(c => c.difficulty === 'medium').length,
    hard: CITIES.filter(c => c.difficulty === 'hard').length,
  };

  return (
    <div className="test-mode">
      <div className="test-mode-header">
        <h1>🧪 Test Mode - Daily City Guess</h1>
        <p className="test-mode-subtitle">
          Review all {CITIES.length} cities • Validate clues, answers, and facts
        </p>
      </div>

      <div className="test-mode-stats">
        <div className="stat-card">
          <div className="stat-number">{counts.total}</div>
          <div className="stat-label">Total Cities</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{counts.easy}</div>
          <div className="stat-label">Easy</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{counts.medium}</div>
          <div className="stat-label">Medium</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{counts.hard}</div>
          <div className="stat-label">Hard</div>
        </div>
      </div>

      <div className="test-mode-filters">
        <button 
          className={`filter-btn ${selectedDifficulty === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedDifficulty('all')}
        >
          All Cities ({counts.total})
        </button>
        <button 
          className={`filter-btn ${selectedDifficulty === 'easy' ? 'active' : ''}`}
          onClick={() => setSelectedDifficulty('easy')}
        >
          Easy ({counts.easy})
        </button>
        <button 
          className={`filter-btn ${selectedDifficulty === 'medium' ? 'active' : ''}`}
          onClick={() => setSelectedDifficulty('medium')}
        >
          Medium ({counts.medium})
        </button>
        <button 
          className={`filter-btn ${selectedDifficulty === 'hard' ? 'active' : ''}`}
          onClick={() => setSelectedDifficulty('hard')}
        >
          Hard ({counts.hard})
        </button>
      </div>

      <div className="test-mode-grid">
        {filteredCities.map((city) => (
          <div 
            key={city.id} 
            className={`test-city-card difficulty-${city.difficulty}`}
            onClick={() => onSelectCity(city)}
          >
            <div className="test-city-header">
              <span className="test-city-id">#{city.id}</span>
              <span className={`test-city-difficulty ${city.difficulty}`}>
                {city.difficulty.toUpperCase()}
              </span>
            </div>
            <h3 className="test-city-name">🏙️ {city.name}</h3>
            <p className="test-city-info">
              {city.country}, {city.continent}
            </p>
            <p className="test-city-water">💧 {city.waterFeature}</p>
            <button className="test-play-btn">
              Test This City →
            </button>
          </div>
        ))}
      </div>

      <div className="test-mode-footer">
        <p>💡 Click any city to test its clues, answer, and "Did You Know" fact</p>
        <p>🔍 Check for: clue progression, answer accuracy, fact quality, source links</p>
      </div>
    </div>
  );
}

