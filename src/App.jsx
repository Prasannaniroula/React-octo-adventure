import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const[numberAllow,setNumber]=useState(false)
  const[symbolAllow,setSymbol]=useState(false)
  const [password, setPassword]=useState("")
  const passwordgenerator =useCallback(()=>{
   let alpha= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   let symbol ="~!@#%^&*()_+{}[]"
   let number = "1234567890"
   let pass=""
   if(numberAllow) alpha+=number
   if(symbolAllow) alpha+=symbol
   for(i=0;i<=alpha.length;i++){
    let char = Math.floor(Math.random()*alpha.length+1)
    pass =pass+char
   }
   console.log(pass);

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
     
      <input className='h-16 w-1/3 text-3xl text-center text-black bg-white mt-10 rounded-lg' type='text' placeholder='Your password here' readOnly></input>
     </div>
     <div>
      <div className='flex items-center justify-center gap-16 mt-5 text-white' >
     <input className='flex items-center justify-center' id='range' type='range' min={8} max={30}/>
     <p><input id='check' type='checkbox'/> Number</p>
     <p><input id='check' type='checkbox'/> Symbol</p>
     </div>
     </div>
     
     </div>
    </div>
      
    </>
  )
}

export default App
