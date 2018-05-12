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
      department[departmentName] = props.credits.crew.filter(
        innerItem => innerItem.department.toLowerCase() === departmentName
      );
    }
  });

  console.log('department', department);

  const categoryList = Object.keys(department);

  console.log('list', categoryList);
  let categories = [];

  categoryList.forEach(key => {
    categories.push(department[key]);
  });
  console.log('categories', categories);

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
