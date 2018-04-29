import React from 'react';

import AccordianParent from './AccordianParent'

const AccordianWrapper = (props) => {

  const cast = props.credits.cast;

  const directing = props.credits.crew.filter(item => 
     item.department === 'Directing' );

  const production = props.credits.crew.filter(item => 
    item.department === 'Production' );

  const writing = props.credits.crew.filter(item => 
    item.department === 'Writing' );

  let categories = [cast, directing, production, writing];
  
  categories = categories.filter(item => 
    item.length > 0
  );

  return (
    <div>
      {categories.map(category => {
        return <AccordianParent
        key={category.index}
        category={category[0].job}
        contents={category} />
      })}
    </div>
  );
}

export default AccordianWrapper;