import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequestNotes = () => {
  const [entry, setEntry] = useState(false);
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);
      setNotes(null);
      setError(null);

      axios.get(`http://localhost:5000/notes?search=${entry}`)
        .then(res => {
          setLoading(false);
          if (res.data.notes) {
            console.log(res.data.notes);
            setNotes(res.data.notes);
          } else {
            setNotes([]);
          }
        })
        .catch(err => {
          setError(err.response.data);
          setLoading(false);
        })
    };
    if (entry !== false) fetchData();
  }, [entry]);

  return [{ notes, loading, error }, setEntry];
};
