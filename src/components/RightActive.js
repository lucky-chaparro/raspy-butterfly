import React from 'react';

const RightActive = ({ content_choice }) => {

  let side = content_choice;

  return (
    <p>i'm right: {side}</p>
  )
}

export default RightActive;