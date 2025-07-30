import React from 'react';
import NoteList from '@/components/features/NoteList';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Notes</h1>
      <NoteList />
    </div>
  );
};

export default HomePage;
