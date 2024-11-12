// src/components/Flashcard.js
import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
    const [flipped, setFlipped] = useState(false);

    // Check if flashcard is defined and contains the properties needed
    if (!flashcard || !flashcard.question) {
        return <div className="flashcard">Flashcard data is missing</div>;
    }

    return (
        <div className="flashcard" onClick={() => setFlipped(!flipped)}>
            <div className={`flashcard-content ${flipped ? 'flipped' : ''}`}>
                {flipped ? flashcard.answer : flashcard.question}
            </div>
        </div>
    );
};

export default Flashcard;
