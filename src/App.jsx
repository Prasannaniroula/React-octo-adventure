import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const[numberAllow,setNumber]=useState(false)
  const[symbolAllow,setSymbol]=useState(false)
  const [password, setPassword]=useState("")
  const passwordgenerator =useCallback(()=>{
   let alpha= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   let pass=""
   if(numberAllow) alpha+= "1234567890"
   if(symbolAllow) alpha+="~!@#%^&*()_+{}[]"
   for(let i=0;i<=length;i++){
    let char = Math.floor(Math.random()*alpha.length+1)
    pass = pass+alpha.charAt(char)
   }
   console.log(pass)
   setPassword(pass)

  },[length,numberAllow,symbolAllow,setPassword])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllow,symbolAllow,setPassword])


  return (
    <>
    <div className='bg-white h-screen w-full text-black'>
      
     <div className='flex justify-center pt-10'>
     <h1 className='text-6xl'>Random Pass Generator</h1>
     </div>
     <div className='bg-black pt-10 pb-10'>
      <div className='flex justify-center items-center'>
      <h1 className='text-white text-2xl'>Generated Password: </h1>
      </div>
     <div className='flex justify-center items-center '>
     
      <input className='h-16 w-2/3 text-3xl text-center text-black bg-white mt-10 rounded-l-lg' type='text' placeholder='Your password here' value={password} readOnly></input>
      <button className='bg-yellow-100 w-28 h-16 mt-10 text-3xl rounded-r-lg'>Copy</button>
     </div>
     <div>
      <div className='flex items-center justify-center gap-16 mt-5 text-white' >
     <input className='flex items-center justify-center' id='range' type='range' min={8} max={30}
     onChange={(e)=>{setLength(e.target.value)}}
     value={0}/>
     <p>Length:{length}</p>
     <p><input id='check' type='checkbox'
     onChange={()=>{setNumber((prev=>!prev))}}
     /> Number</p>
     <p><input id='check' type='checkbox'
     onChange={()=>{setSymbol ((prev=>!prev))}}
     /> Symbol</p>
     </div>
     </div>
     
     </div>
    </div>
      
    </>
  )
}

export default App
