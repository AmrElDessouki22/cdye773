'use client';

import React from 'react';
import { useNotes } from '@/contexts/NotesContext';

const Header: React.FC = () => {
  const { notes } = useNotes();
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-xl">Note App</h1>
      <span>{notes.length} Notes</span>
    </header>
  );
};

export default Header;
