import React, { useState, useEffect } from 'react';
import './CharacterDisplay.css';

function CharacterDisplay(s) {
  const text = s.text
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const displayCharacters = (currentIndex) => {
    if (currentIndex < text.length) {
      setDisplayedText(prevText => prevText + text[currentIndex]);
      setShowCursor(true);
      setTimeout(() => {
        setShowCursor(false);
        displayCharacters(currentIndex + 1);
      }, 100);
    }
  };

  useEffect(() => {
    displayCharacters(0);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
    <div className="text-container">
      {displayedText}
      <span className={`cursor ${showCursor ? 'blink' : ''}`}>|</span>
    </div>
  </div>
  );
}

export default CharacterDisplay;
