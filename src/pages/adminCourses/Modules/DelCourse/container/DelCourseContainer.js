import React from 'react'
import { useCallback } from 'react'
import DelCourse from '../components/DelCourse'

function DelCourseContainer({id}) {

  const hdDel = useCallback(()=>{
  },[])
  return (
    <DelCourse cb={hdDel}/>
  )
}

export default DelCourseContainer
