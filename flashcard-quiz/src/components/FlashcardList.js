// src/components/FlashcardList.js
import React from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
    return (
        <div className="flashcard-list">
            {flashcards && flashcards.map((card) => (
                <Flashcard key={card.id} flashcard={card} />
            ))}
        </div>
    );
};

export default FlashcardList;
