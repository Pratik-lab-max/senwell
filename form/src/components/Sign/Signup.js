import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"

const Signup = () => {

  const [name, setName] = useState("")
  const [userName, setuserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const postData=()=>{
    fetch("http://localhost:5000/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        userName:userName,
        email:email,
        password:password
      })
    }).then(res=>res.json())
    .then(data => {
      if(data.error){
        alert("Invalid email")
      }else{
        alert("register successful")
      }
    })
  }

//   const fetchData=async()=> {
//     const response = await fetch("http://localhost:5000/")
//     const data = await response.json()
//     console.log(data)
//   }

//   useEffect(() => {
//     fetchData()
//   })

  return (
    <>
    <h3>Welcome</h3>
    <div className='signUp'>
      <div className="form-container">
        <h5>register to your continue</h5>
        <div>
            <input type="text" name="name" id="name" value={name} placeholder="Full Name" onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div>
            <input type="text" name="username" id="username" value={userName} placeholder="username" onChange={(e) => {setuserName(e.target.value)}} />
        </div>
        <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email"  onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
        <div>
            <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        </div>
        <br />
        <input type="submit" id="submit-btn" value="Sign Up" onClick={() => {postData()}}/>
        <div className="form1">
            Already have an account ?
            <Link to="/signin"><span>Sign In</span></Link>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Signup
