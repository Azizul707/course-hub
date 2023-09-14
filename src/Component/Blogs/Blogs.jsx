/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";


const Blogs = ( { handleAddCourse } ) => {

    const [ courses, setCourses ] = useState( [] );
    useEffect( () => {
        fetch( 'courses.json' )
            .then( res => res.json() )
            .then( data => setCourses( data ) )
        
    },[])
    return (
        <div className="">
            <div className=" grid grid-cols-3 gap-5">
                {
                    courses.map((course,idx) => <Blog key={idx} course={course} handleAddCourse={handleAddCourse} ></Blog> )
                }
            </div>
            
            
        </div>
    );
};

export default Blogs;