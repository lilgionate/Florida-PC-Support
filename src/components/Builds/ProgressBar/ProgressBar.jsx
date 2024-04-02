import React from 'react';
import './progressBar.scss';

const Progress = ({ done }) => {
  const style = {
    opacity: 1,
    width: `${done}%`
  };

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
      </div>
    </div>
  );
};

const ProgressBar = ({ done }) => {
  return (
    <div className='bars'>
      <Progress done={done} />
    </div>
  );
};

export default ProgressBar;