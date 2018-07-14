import React from 'react';

const AccordianChild = props => (
    <div>
      {props.item.title ? (
        <div>
          {props.item.character && (
            <p onClick={props.activate}>
              {props.item.title} as {props.item.character}
            </p>
          )}
          {!props.item.character && (
            <p onClick={props.activate}>{props.item.title}</p>
          )}
        </div>
      ) : (
        <div>
          {props.item.character && (
            <p onClick={props.activate}>
              {props.item.name} as {props.item.character}
            </p>
          )}
          {!props.item.character && (
            <p onClick={props.activate}>{props.item.name}</p>
          )}
        </div>
      )}
    </div>
);

export default AccordianChild;
