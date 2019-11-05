import React, { useRef } from 'react';
import { useRequestNotes } from './hooks';
import './App.css';

const App = () => {
  const inputEl = useRef(null);
  const [{ notes, loading, error }, setEntry] = useRequestNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntry(inputEl.current.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Entry:
            <input ref={inputEl} type="text" name="entry" />
          </label>
        </div>
        <div>
          <input type="submit" value="Request" />
        </div>
      </form>
      {loading && (
        <p>processing...</p>
      )}
      {notes && (
        <p className="result-container">
        Result: [{`${notes}`}]
        </p>
      )}
      {error && (
        <p className="error-container">
        Error: {`${error}`}
        </p>
      )}
    </div>
  );
}

export default App;
