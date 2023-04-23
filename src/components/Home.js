import React from 'react';

function Home() {
  return (
    <div className="home-outer">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
        <p className="text-gray-500 mb-8">Explore my work and projects.</p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </div>
    </div>
  );
}

export default Home;