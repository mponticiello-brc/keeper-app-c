import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note'
import notes from './notes'

function App() {
    return (
      <div className="App">
        <Header/>
        {notes.map(entry =>
          <Note
          key={entry.key}
          title={entry.title}
          content={entry.content}
          />
        )}
        <Footer/>
      </div>
    );
  }
  
  export default App;