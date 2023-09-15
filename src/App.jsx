/* eslint-disable no-undef */
import { useState } from "react"
import AddCourse from "./Component/AddCourse/AddCourse"
import Blogs from "./Component/Blogs/Blogs"
import Header from "./Component/Header/Header"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App () {

  const [ addCourse, setaddCourse ] = useState( [] );
  const [ creditHr, setCreditHr ] = useState( 0 );
  const [ remainingHr, setRemainingHr ] = useState( 20 );
  const [ price, setPrice ] = useState( 0 );


  const handleAddCourse = ( course ) => {

    const isSelected = addCourse.find( item => item.id == course.id )
    if ( isSelected || remainingHr <= 2 ) {
      return toast.error( "You have already added the course or your credit limit is crossed" );

    }
    else {
      const newAddCourse = [ ...addCourse, course ];
      setaddCourse( newAddCourse );

      const newCreditHr = ( creditHr + course.course_credit );
      setCreditHr( newCreditHr )

      const newRemaining = ( remainingHr - course.course_credit );
      setRemainingHr( newRemaining );
      
      const newPrice = ( price + course.course_price );
      setPrice( newPrice );
    }

  }


  return (
    <div className="bg-[#F3F3F3]">
      <Header></Header>
      <div className="max-w-screen-xl mx-auto flex gap-5 ">
        <div className="w-4/5 mx-auto">
          <Blogs handleAddCourse={ handleAddCourse } ></Blogs>
        </div>
        <div className="">
          <AddCourse addCourse={ addCourse } creditHr={ creditHr } remainingHr={ remainingHr } price={ price }></AddCourse>
        </div>
      </div>
      <div className="">
        <ToastContainer></ToastContainer>
      </div>

    </div>
  )
}

export default App
