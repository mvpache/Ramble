import React from 'react';

import AccordianParent from './AccordianParent';

const AccordianWrapper = (props) => {
  const department = {};

  if (props.credits.cast) {
    const { cast } = props.credits;
    department.cast = cast;
  }

  props.credits.crew.filter((item) => {
    const departmentName = item.department.toLowerCase();
    const hasDepartmentName = Object.prototype.hasOwnProperty.call(
      department,
      departmentName,
    );
    if (!hasDepartmentName) {
      // check if department is in the list
      department[departmentName] = props.credits.crew.filter(
        innerItem => innerItem.department.toLowerCase() === departmentName,
        // if it isn't on the list, assign that department to the credit with it
      );
    }
    return true;
  });

  const categoryList = Object.keys(department);

  const categories = [];

  categoryList.forEach((key) => {
    categories.push(department[key]); // make a list of departments
  });

  return (
    <div>
      {categories.map(category => (
        <AccordianParent
          key={category.index}
          category={category[0].job}
          contents={category}
        />
      ))}
    </div>
  );
};

export default AccordianWrapper;
