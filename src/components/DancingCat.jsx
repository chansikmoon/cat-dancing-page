import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const SPEED_MAP = {
  slow: '2s',
  normal: '1s',
  fast: '0.5s',
};

export default function DancingCat({ isPlaying, speed }) {
  const duration = SPEED_MAP[speed] || '1s';

  const style = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    '--dance-duration': duration,
  };

  return (
    <div className="cat-stage">
      <div className="cat-shadow" style={{ animationPlayState: isPlaying ? 'running' : 'paused', '--dance-duration': duration }} />
      <div className="cat-wrapper" style={style}>
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
          draggable={false}
        />
      </div>
      <div className="music-notes" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="note note-1" style={{ '--dance-duration': duration }}>♪</span>
            <span className="note note-2" style={{ '--dance-duration': duration }}>♫</span>
            <span className="note note-3" style={{ '--dance-duration': duration }}>♩</span>
            <span className="note note-4" style={{ '--dance-duration': duration }}>♬</span>
          </>
        )}
      </div>
    </div>
  );
}
