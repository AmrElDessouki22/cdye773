'use client';

import React from 'react';
import { useNotes } from '@/contexts/NotesContext';
import NoteItem from '@/components/features/NoteItem';

const NoteList: React.FC = () => {
  const { notes } = useNotes();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map(note => <NoteItem key={note.id} note={note} />)}
    </div>
  );
};

export default NoteList;
