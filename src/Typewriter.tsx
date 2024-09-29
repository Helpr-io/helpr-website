import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have CSS styling in this file

const Typewriter: React.FC = () => {
  const questions: string[] = [
    "How do I put my kids in school?",
    "What activities are available for my kids in Sweden?"
  ];

  // Define types for the useState variables
  const [displayText, setDisplayText] = useState<string>('');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentQuestion = questions[questionIndex];

      if (isDeleting) {
        // Delete characters
        setDisplayText(currentQuestion.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(50); // Speed up deletion
      } else {
        // Add characters
        setDisplayText(currentQuestion.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTypingSpeed(150); // Regular typing speed
      }

      // When text is fully typed or deleted
      if (!isDeleting && charIndex === currentQuestion.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before starting deletion
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setQuestionIndex((prevIndex: number) => (prevIndex + 1) % questions.length); // Move to the next question
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer); // Clear the timeout on component unmount
  }, [charIndex, isDeleting, typingSpeed, questionIndex, questions]);

  return (
    <div className="typewriter-container">
      <input 
        type="text" 
        className="typewriter-input" 
        value={displayText} 
        readOnly
      />
    </div>
  );
}

export default Typewriter;
