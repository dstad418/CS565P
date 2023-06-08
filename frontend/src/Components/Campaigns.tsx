import React from 'react';


export const Campaign= ({ content }) => {
  return (
    <div className="campaign-page">
      <header>
        <h1>My Webpage</h1>
      </header>
      <main>
        {content};
        <p>Test!</p>
      </main>
    </div>
  );
};
