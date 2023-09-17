import React from 'react'

function Card(props) {
    let  course = props.course
  return (

    <div>

    <div>
   <img src={course.image.url }alt="" />
    </div>

    <div>
        <p>{course.description}</p>
        <p>{course.title}</p>
    </div>
    </div>

    
  )
}

export default Card
