import { useEffect, useRef } from 'react';

export default function MusicPlayer({ isOn }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;
    if (isOn) {
      const play = async () => {
        try {
          await audio.play();
        } catch (e) {
          // Autoplay may be blocked until user interacts
        }
      };
      play();
    } else {
      audio.pause();
    }
  }, [isOn]);

  return (
    <audio ref={audioRef} loop>
      <source src="https://cdn.pixabay.com/download/audio/2022/10/22/audio_2ae2b4ad94.mp3?filename=future-technology-ambient-124564.mp3" type="audio/mpeg" />
    </audio>
  );
}
