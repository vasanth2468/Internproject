import logo from './logo.svg';

import './App.css';
import React from 'react';
import Guest from './guest';
import { render } from '@testing-library/react';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div className='nav'>
        <img src='vector.png' className='vector'></img>
        <img src='vector-1.png' className='vector_1'></img>

        <img src='vector 1.png' className='vector1'></img>
        <h1 className='heading'>Zetgo</h1>
        <img src='rec1.png' className='rec1'></img>
        <img src='rec2.png' className='rec2'></img>
        <img src='rec3.png' className='rec3'></img>

      </div>
      <div className='container'>
        <h1 className='head1'>Zetgo — amazing hostel for the free spirited traveler</h1>
        <img src='line1.png' className='line1'></img>
        <p>Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed</p>
      </div>
      <div className='container1'>
        <h1 className='head2'>Check-in</h1>
        <img src='date.png' className='date'/>
        <span className='add1'>Add Date</span>
        <img src='down.png' className='down'/>

        <h1 className='head3'>Check-Out</h1>
        <img src='date.png' className='date1'/>
        <span className='add2'>Add Date</span>
        <img src='down.png' className='down1'/>

        <h1 className='head4'>Guests</h1>
        <img src='profile.png' className='down2'/>
        <span className='add3'>1 adult</span>
        <button type='submit' className='btn'>Search</button>
      </div>
    </div>
  );
}
}
export default App;
