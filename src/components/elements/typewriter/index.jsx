import { useState, useEffect } from "react";

const Typewriter = () => {
  const words = ["Software Engineer", "Fullstack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 150; // typing speed in ms
    const eraseSpeed = 100; // backspace speed in ms
    const pauseBetweenWords = 1500; // pause duration in ms

    let timeout;

    if (isTyping) {
      if (charIndex < words[currentWordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + words[currentWordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseBetweenWords);
      }
    } else {
      if (displayText.length > 0) {
        // Keep "I'm " always visible
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, eraseSpeed);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isTyping, charIndex, words]);

  return (
    <>
      <span className="">Hello, I'm {displayText}</span>
      <span className="animate-pulse">|</span> {/* Cursor */}
      <span className="text-transparent">developer</span>{" "}
      {/* Maintain line height */}
    </>
  );
};

export default Typewriter;
