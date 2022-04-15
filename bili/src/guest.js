import React from 'react';

import './guest.css';


function Guest(){
  return(
    <div className='main'>
      <span className='adult1'>Adult</span>
      <button className='btnbox'>
        <img src='box.png' className='box'/>
        <img src='minus.png' className='minusbox'/>
      </button>
      <input type='number' className='adultvalue' value={1}/>
      <button className='btnboxplus'>
        <img src='box.png' className='plusbox'/>
        <img src='minus.png' className='plus1box'/>
        <img src='plus.png' className='plus2box'/>
      </button>



      <span className='children'>Children</span>
      <button className='btnbox1'>
      <img src='box.png' className='box1'/>
      <img src='minus.png' className='minusbox1'/>
      </button>
      <input type='number' className='childrenvalue' value={1}/>
      <button className='chbtnbox'>
        <img src='box.png' className='chbox'/>
        <img src='minus.png' className='chplusbox'/>
        <img src='plus.png' className='plus2box'/>
      </button>
    </div>
  );
}



export default Guest;