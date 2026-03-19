import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Scroll() {
    const pathe = useLocation()

    useEffect(()=>{
        window.scrollTo({
            top:0,
        })
    },[pathe])

  return<></>
  
}
