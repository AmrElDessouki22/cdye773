'use client';

import React from 'react';
import { Note } from '@/types';
import Button from '@/components/ui/Button';
import { useNotes } from '@/contexts/NotesContext';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { removeNote } = useNotes();

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.content}</p>
      <Button label="Delete" onClick={() => removeNote(note.id)} className="mt-4 bg-red-500" />
    </div>
  );
};

export default NoteItem;
