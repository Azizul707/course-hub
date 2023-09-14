import { useState } from "react"
import AddCourse from "./Component/AddCourse/AddCourse"
import Blogs from "./Component/Blogs/Blogs"
import Header from "./Component/Header/Header"



function App () {
  
  const [ addCourse, setaddCourse ] = useState( [] )
  
  const handleAddCourse = (course) => {
    const newAddCourse = [...addCourse,course];
    setaddCourse( newAddCourse );
    console.log(addCourse);
  }
  

  return (
    <div className="bg-[#F3F3F3]">
      <Header></Header>
      <div className="max-w-screen-xl mx-auto flex gap-5 ">
        <div className="w-4/5 mx-auto">
        <Blogs handleAddCourse={handleAddCourse} ></Blogs>
        </div>
        <div className="">
          <AddCourse></AddCourse>
        </div>
        
      
      </div>
      
    </div>
  )
}

export default App
