import './App.css';
import data from './components/data';
import React, { useState } from "react";
import Tours from './components/tours';

function App() {
  
  const [tours, setTours] = useState(data);

  function removeTour (id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0){
    return (
      <div className='font-poppins h-[100vh] flex flex-col justify-center items-center gap-5'>
        <h2 className='text-xl font-semibold'>No Tours Left</h2>
        <button className='border py-1 px-7 rounded-sm bg-gray-300' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (

    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );

}

export default App;
