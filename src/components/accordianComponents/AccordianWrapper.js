import React from 'react';

import AccordianParent from './AccordianParent';

const AccordianWrapper = props => {
  const department = {};

  if (props.credits.cast) {
    const cast = props.credits.cast;
    department.cast = cast;
  }
  //need to change so that determines if it should use {props.credits.crew} or {props.credits.credits}

  props.credits.crew.filter(item => {
    const departmentName = item.department.toLowerCase();
    if (!department.hasOwnProperty(departmentName)) {
      department[departmentName] = props.credits.crew.filter(
        innerItem => innerItem.department.toLowerCase() === departmentName
      );
    }
  });

  const categoryList = Object.keys(department);

  let categories = [];

  categoryList.forEach(key => {
    categories.push(department[key]);
  });

  return (
    <div>
      {categories.map(category => {
        return (
          <AccordianParent
            key={category.index}
            category={category[0].job}
            contents={category}
          />
        );
      })}
    </div>
  );
};

export default AccordianWrapper;
