import './styles/global.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🐱 Dancing Cat</h1>
        <p className="app-subtitle">귀여운 고양이의 댄스 타임!</p>
      </header>

      <main className="card">
        <DancingCat isPlaying={isPlaying} speed={speed} />

        <AnimationControls
          isPlaying={isPlaying}
          speed={speed}
          onToggle={toggle}
          onSpeedChange={changeSpeed}
        />

        <span className={`status-badge ${isPlaying ? 'playing' : 'paused'}`}>
          {isPlaying ? '🎵 신나게 춤추는 중...' : '😴 쉬는 중'}
        </span>
      </main>
    </div>
  );
}
