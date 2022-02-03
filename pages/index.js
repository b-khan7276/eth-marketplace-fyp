import { Hero,  } from "@components/common"
import { CourseList,  } from "@components/course"
import BaseLayout from "@components/layout/base"
import { getAllCourses } from "@content/courses/fetcher"
// import { Card } from "@components/order"
// import { EthRates, WalletBar } from "@components/web3"
export default function Home(courses) {
  return (
   
 <>
       
         <Hero/>
         {JSON.stringify(courses)}
    {/* <Breadcrumns/>
        <EthRates/>
          <WalletBar/>
             <Card/> */}
     <CourseList/>
       
 
         </>
  )
}
export function getStaticProps(){
  const {data} = getAllCourses()
  return{
    props:{
      courses:data
    }
  }
}

Home.Layout = BaseLayout