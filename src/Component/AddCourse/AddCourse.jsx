/* eslint-disable react/prop-types */
const AddCourse = ( { addCourse,creditHr,remainingHr,price } ) => {

    return (
        <div className="p-4 w-96 bg-white">
            <div className="border-b-2 pb-4">
            <h1 className="text-[#2F80ED] text-lg font-semibold ">Credit Hour Remaining { remainingHr } hr</h1>
            <h4 className="text-lg font-semibold">Course Name</h4>
            {
                addCourse.map( (selectCourse,idx) => {
                    return <ol key={ selectCourse.id }>
                        <li className="text-[#1C1B1B99]">{idx +1 }. { selectCourse.course_name }</li>
                        
                    </ol>
                    
                } )
            }
            </div>
            <div className="border-b-2 pb-4 text-base font-semibold text-[#1C1B1BCC]">Total Credit Hour: { creditHr }</div>
            <div className="border-b-2 pb-4 text-lg text-[#1C1B1BCC] font-semibold">Total Price:{ price }</div>
        </div>
    );
};
export default AddCourse;