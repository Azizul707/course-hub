/* eslint-disable react/prop-types */

const AddCourse = ( { addCourse } ) => {

    return (
        <div className="p-4 w-96 bg-white">
            <h1 className="text-[#2F80ED] text-lg font-semibold ">Credit Hour Remaining{ addCourse.course_credit }</h1>
            <h4 className="text-lg font-semibold">Course Name</h4>
            {
                addCourse.map( selectCourse => {
                    return <ol key={ selectCourse.id }>
                        <li>{ selectCourse.course_name }</li>
                    </ol>

                } )
            }

        </div>
    );
};
export default AddCourse;