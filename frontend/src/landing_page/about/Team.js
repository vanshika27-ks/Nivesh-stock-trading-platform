import React from 'react';
function Team() {
    return ( 
        <div className='container'>
        <div className='row p-3 mt-5 border-top'>
       <h1 className='text-center mt-5 '>
       People
         </h1>
           
        </div>

        <div className='row p-5 mt-5 text-muted' style={{lineHeight:"1.8",fontSize:"1.2em"}}>
            <div className='col-6 p-5 text-center'>
            <img
         src="/media/Vanshika.jpeg"
         alt="Vanshika profile photo"
         className="img-fluid"
         style={{
        width: "340px",
        height: "340px",
        objectFit: "cover",
        borderRadius: "50%"
  }}/>
      <h4 className='mt-5'>Vanshika Salaria</h4>
      <h6>Software Developer</h6> 


            </div>
    <div className='col-6 p-3'>
    <p>
    I am the sole developer of NIVESH, a Full Stack Stock Trading Platform, responsible for the 
    end-to-end design and implementation of the system. The project was initiated on 26 January with 
    the objective of building a scalable, secure, and user-centric trading platform using modern full-stack technologies.
</p>
<p>
My role involved developing the frontend interface, implementing backend business logic, 
designing the database schema, and ensuring seamless integration across all layers of the 
application. NIVESH emphasizes clean architecture, performance optimization, and 
extensibility to support future enhancements.
</p>
<p>
This project serves as a comprehensive demonstration of my full-stack development skills, 
problem-solving approach, and ability to independently design and implement a complex, 
real-world application.
</p>
<p>
    Connect on <a href='https://github.com/vanshika27-ks'>GitHub</a>  / <a href='https://linkedin.com/in/vanshika-salaria'>LinkedIn</a>
</p>
    </div>
           
        </div>
       </div>
     );
}

export default Team;