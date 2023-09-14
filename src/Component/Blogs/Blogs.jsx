import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";


const Blogs = () => {

    const [ courses, setCourses ] = useState( [] );
    useEffect( () => {
        fetch( 'courses.json' )
            .then( res => res.json() )
            .then( data => setCourses( data ) )
        
    },[])
    return (
        <div className="max-w-screen-xl mx-auto flex gap-5">
            <div className="w-4/5 grid grid-cols-3 gap-5">
                {
                    courses.map((course,idx) => <Blog key={idx} course={course} ></Blog> )
                }
            </div>
            <div className="w-96 bg-white">sidebar</div> 
        </div>
    );
};

export default Blogs;