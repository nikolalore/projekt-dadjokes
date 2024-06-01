import { useEffect, useState } from 'react';
import './style.css';
import { Joke } from '../../components/Joke/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(
        'http://localhost:4000/api/jokes',
      );
      const data = await response.json();
      setJokes(data.data);
    };
    fetchJokes();
  }, []);

  if (jokes === null) {
    return <p>Loading... </p>;
  }

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
