import React from 'react';

const AccordianChild = props => {
  return (
    <div>
      {props.movie.character && (
        <p onClick={props.activate}>
          {props.movie.title} as {props.movie.character}
        </p>
      )}
      {!props.movie.character && <p>{props.movie.title}</p>}
    </div>
  );
};

export default AccordianChild;