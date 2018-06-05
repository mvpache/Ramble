import React from 'react';

import AccordianParent from './AccordianParent';

const AccordianWrapper = props => {
  const department = {};

  if (props.credits.cast) {
    const cast = props.credits.cast;
    department.cast = cast;
  }

  props.credits.crew.filter(item => {
    const departmentName = item.department.toLowerCase();
    if (!department.hasOwnProperty(departmentName)) {
      //check if department is in the list
      department[departmentName] = props.credits.crew.filter(
        innerItem => innerItem.department.toLowerCase() === departmentName //if it isn't on the list, assign that department to the credit with it
      );
    }
  });

  const categoryList = Object.keys(department);

  let categories = [];

  categoryList.forEach(key => {
    categories.push(department[key]); //make a list of departments
  });

  return (
    <div>
      {categories.map(category => {
        //assign each department a accordian parent
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
