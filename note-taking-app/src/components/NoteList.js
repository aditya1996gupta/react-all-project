import React, { useState } from 'react';

const NoteList = ({ notes, deleteNote, editNote }) => {
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');

  const startEditing = (note) => {
    setEditingId(note.id);
    setNewText(note.text);
  };

  const stopEditing = () => {
    setEditingId(null);
    setNewText('');
  };

  const handleEdit = (id) => {
    editNote(id, newText);
    stopEditing();
  };

  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id}>
          {editingId === note.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={() => handleEdit(note.id)}>Save</button>
              <button onClick={stopEditing}>Cancel</button>
            </>
          ) : (
            <>
              <span>{note.text}</span>
              <button onClick={() => startEditing(note)}>Edit</button>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
