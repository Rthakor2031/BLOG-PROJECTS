import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const Singleblogupdate = () => {
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/posts/${id}`).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div>Singleblogupdate</div>
  )
}

export default Singleblogupdate