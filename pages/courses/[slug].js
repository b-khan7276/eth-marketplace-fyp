import { Modal } from "@components/common";
import { CourseHero, Curriculum, Keypoints } from "@components/course";
import BaseLayout from "@components/layout/base";
import { getAllCourses } from "@content/courses/fetcher";



export default function Course({course}) {

 
  
    return (
   <>
   {course.title}
   <div className="py-4">
       <CourseHero/>
       </div>
        <Keypoints/>
       <Curriculum/>
       <Modal/>
       </>
    )
  }
//  To get the static paths 
export function getStaticPaths(){
    //  Fetch all our courses
    const {data} = getAllCourses()
    //  Now many pages you want to return 
    return{
        paths: data.map(c =>({
            params:{
                slug: c.slug
            }
        })), fallback:false

    }
}
//  Adding the props also 
export function getStaticProps({params}) {
    const { data } = getAllCourses()
    //  Search for single course
    const course = data.filter(c => c.slug === params.slug)[0]
    return {
      props: {
        course
      }
    }
  }
  




  Course.Layout = BaseLayout
