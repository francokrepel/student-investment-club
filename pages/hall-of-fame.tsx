import React from 'react';
import Header from '../components/Header';

const hallOfFameData = [
  {
    semester: 'Fall 2022',
    winner: 'Joey Alaimo',
    profileImg: '/derp.png',
    gain: '910.012%',
  },
  // Add more winners here...
];

export default function HallOfFame() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="container mx-auto mt-12 px-4 md:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-teal-400">Hall of Fame</h1>
          <p className="text-lg mb-8">Meet the winners of our MarketWatch investing challenges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {hallOfFameData.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <img src={item.profileImg} alt={item.winner} className="mx-auto h-32 w-32 rounded-full mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">{item.winner}</h3>
              <p className="text-lg mb-2">Semester: {item.semester}</p>
              <p className="text-lg text-yellow-400">Overall Gains: {item.gain}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
