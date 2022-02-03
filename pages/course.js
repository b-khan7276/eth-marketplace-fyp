import { Modal } from "@components/common";
import { CourseHero, Curriculum, Keypoints } from "@components/course";
import BaseLayout from "@components/layout/base";
import Home from ".";



export default function Course() {

 
  
    return (
   <>
   <div className="py-4">
       <CourseHero/>
       </div>
        <Keypoints/>
       <Curriculum/>
       <Modal/>
       </>
    )
  }

  Course.Layout = BaseLayout
