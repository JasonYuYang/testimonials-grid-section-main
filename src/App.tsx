import React, { useState, useEffect } from 'react';
import { Card } from './component';
import { Avatar } from './component';

interface Review {
  user: {
    name: string;
    avatar: string;
  };
  title: string;
  content: string;
}
function App() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then((res) => res.json() as Promise<Review[]>)
      .then(setReviews);
  }, [setReviews]);

  return (
    <main>
      {reviews.map((review) => {
        return (
          <Card key={review.title}>
            <article>
              <header>
                <Avatar {...review.user}></Avatar>
                <h2>{review.title}</h2>
              </header>
              <p>“ {review.content} ”</p>
            </article>
          </Card>
        );
      })}
    </main>
  );
}

export default App;
