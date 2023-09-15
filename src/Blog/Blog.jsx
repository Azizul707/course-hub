/* eslint-disable react/prop-types */


import { FaBookOpen } from 'react-icons/fa';


const Blog = ( { course,handleAddCourse} ) => {

    

    return (
        <div className="bg-white w-auto p-3 rounded-xl space-y-2">
            <div className="space-y-2">
                <img className=" w-full" src={ course.course_image } alt="" />
                <h2 className="text-[#1C1B1B]  font-semibold">{ course.course_name.slice( 0, 27 ) }</h2>
                <p className="text-sm text-[#1C1B1B99]">{ course.description.slice( 0, 100 ) }</p>
            </div>
            <div className="flex justify-around items-center font-semibold text-[#1C1B1B99]">
                <p>$ Price: { course.course_price }</p>
                <span className=''><FaBookOpen></FaBookOpen></span>
                <span>Credit: { course.course_credit }hr</span>
            </div>
            <div className="w-full bg-[#2F80ED] text-white rounded text-center py-1">
                <button onClick={()=> handleAddCourse(course)} className='w-full'>Select</button>
            </div>
        </div>
    );
};

export default Blog;