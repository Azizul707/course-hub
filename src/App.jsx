/* eslint-disable no-undef */
import { useState } from "react"
import AddCourse from "./Component/AddCourse/AddCourse"
import Blogs from "./Component/Blogs/Blogs"
import Header from "./Component/Header/Header"



function App () {
  
  const [ addCourse, setaddCourse ] = useState( [] );
  const [ creditHr, setCreditHr ] = useState(0);
  console.log();
  
  const handleAddCourse = ( course ) => {
    const isSelected = addCourse.find( item => item.id == course.id )
    if ( isSelected ) {
      alert('all ready added')

    } else {
      const newAddCourse = [...addCourse,course];
    setaddCourse( newAddCourse );
    }
    
    const newCreditHr = ( creditHr + course.course_credit );
    setCreditHr( newCreditHr )
    console.log(creditHr);
  }
  

  return (
    <div className="bg-[#F3F3F3]">
      <Header></Header>
      <div className="max-w-screen-xl mx-auto flex gap-5 ">
        <div className="w-4/5 mx-auto">
        <Blogs handleAddCourse={handleAddCourse}  ></Blogs>
        </div>
        <div className="">
          <AddCourse  addCourse={addCourse}></AddCourse>
        </div>
        
      
      </div>
      
    </div>
  )
}

export default App
