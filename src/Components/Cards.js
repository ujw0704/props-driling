import React from 'react';
import Card from './Card';

function Cards(props) {
  let courses = props.courses;
//   console.log("printing data");
//   console.log(courses);

  function getcourses() {
    let allcourses = [];

    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allcourses.push(courseData);
    });
    
    
});


return allcourses;
}
    

  
  return (
    <div>
     {
        getcourses().map((course)=>(
            
            <Card key={course.id}course={course}/>
        ))}
     

    </div>
  );
}

 export default Cards;
