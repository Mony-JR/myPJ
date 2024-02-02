import React, { useRef } from 'react';

const Me_bar = ({ handleItemClick,hand1}) => {
  const Me = useRef(null);
  const Se = useRef(null);

  return (
    <div className='me_bar1'>
      <h1>Rorn Mony</h1>
      <ul className='me_ul'>
        <li onClick={() => handleItemClick(Me)}>About ME</li>
        <li onClick={() => hand1(Se)}>My Project</li>
        <li> <a href='https://monyjr2.github.io/CAFE2/' target='coffee'>Project only js</a></li>
      </ul>
    </div>
  );
};

export default Me_bar;
