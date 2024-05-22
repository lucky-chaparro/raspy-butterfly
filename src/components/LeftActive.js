import React from 'react';

const LeftActive = ({ content_choice }) => {

  let side = content_choice;

  return(
    <p>i'm left: {side}</p>
  )
}

export default LeftActive;