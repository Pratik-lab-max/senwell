import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'
import './Signin.css'


const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const postData = () => {
    fetch("http://localhost:5000/signin",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email:email,
          password:password
      })
    }).then(res=>res.json())
    .then(data => {
      if(data.error) {
        alert("Invalid email or Password")
      }else{
        alert("Log in successfully")
      }
    })
  }

  return (
    <>
      <h3>Welcome</h3>
      <p>Log in to your account to continue</p>
      <div className="signIn">
        <div className="loginForm">
          <div>
            <input type="email" name="email" id="email"  value={email} placeholder="awesomeuser@gmail.com" onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <br />
          <div>
            <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
          </div>
          <br />
          <input type="submit" onClick={() => {postData()}} value="Log In" />
          <div className='form1'>
            Don't have an account ? 
            <Link to="/signup"><span style={{color:"blue" , cursor:"pointer"}}>Sign Up</span></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
