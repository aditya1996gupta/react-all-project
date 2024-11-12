// src/App.js
import React from 'react';
import FlashcardList from './components/FlashcardList';

function App() {
    const flashcards = [
        { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
        { id: 2, question: 'What is 2 + 2?', answer: '4' },
        { id: 3, question: 'What is the tallest mountain?', answer: 'Mount Everest' }
    ];

    console.log(flashcards); // Check if this array is correctly structured

    return (
        <div className="App">
            <h1>Flashcard Quiz App</h1>
            <FlashcardList flashcards={flashcards} />
        </div>
    );
}

export default App;
