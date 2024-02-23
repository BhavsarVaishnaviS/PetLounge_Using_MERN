// import React, { useState } from 'react'

// export default function Register() {

//   const [credentials, setcredentials] = useState({ username: "", useremail: "", usermobile: 0, userpwd: "" })

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response =await fetch("http://localhost:5550/api/createUser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username: credentials.username, useremail: credentials.useremail, usermobile: credentials.usermobile, userpwd: credentials.userpwd })
//     });
//     const resjson = await  response.json()
//         console.log(resjson);

//     if (!resjson.success) {
//       alert("enter valid credentials")
//     }

//   }


//   const onChange = (event) => {
//     setcredentials({ ...credentials, [event.target.name]: event.target.value })
//   }

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input name='username' value={credentials.username} type='text' placeholder='enter name...' onChange={onChange} />
//           <label>Email</label>
//           <input name='useremail' value={credentials.useremail} type='email' placeholder='enter email...' onChange={onChange} />
//           <label>Mobile No</label>
//           <input name='usermobile' value={credentials.usermobile} type='number' placeholder='enter Mobile No...' onChange={onChange} />

//           <label>Password</label>
//           <input name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
//           <a href='/login'>Already a user</a>
//           <button type="submit">Submit</button>
         
//         </form>
//       </div>

//     </>
//   )
// }
// import React, { useState } from 'react'
// import {Link, useNavigate} from 'react-router-dom'
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// export default function Register() {

//   const [credentials, setcredentials] = useState({ username: "", useremail: "", usermobile: 0, userpwd: "" })

//   let navigate = useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5550/api/createUser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ username: credentials.username, useremail: credentials.useremail, usermobile: credentials.usermobile, userpwd: credentials.userpwd })
//     });
//     const resjson = await response.json()
//     console.log(resjson);

//     if (resjson.success) {
//       //localStorage.setItem('token', json.authToken)
//       navigate("/login")
      
//     }
//     else{
//       alert("enter valid credentials")
//     }

//   }
//   const onChange = (event) => {
//     setcredentials({ ...credentials, [event.target.name]: event.target.value })
//   }

//   return (
//     <>
//     <div><Navbar/></div>
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3" onSubmit={handleSubmit}>
//           <label htmlFor="labelName" className="form-label">Name</label>
//           <input name='username' value={credentials.username} type="text" className="form-control" id="labelName" placeholder='enter name...' onChange={onChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="labelEmail" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="labelEmail" aria-describedby="emailHelp" name='useremail' value={credentials.useremail} placeholder='enter email...' onChange={onChange} />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="labelNumber" className="form-label">Mobile No</label>
//           <input className="form-control" id="labelNumber" name='usermobile' value={credentials.usermobile} type='number' placeholder='enter Mobile No...' onChange={onChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="labelPassword" className="form-label">Password</label>
//           <input className="form-control" id="labelPassword" name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//         <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
//       </form>
//       </div>
//      < div> <Footer/></div>
//     </>
//   )
// }

import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
import "./Register.css"
import Footer from '../components/Footer';

export default function Register() {

  const [credentials, setcredentials] = useState({ username: "", useremail: "", usermobile: 0, userpwd: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5550/api/createUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, useremail: credentials.useremail, usermobile: credentials.usermobile, userpwd: credentials.userpwd })
    });
    const resjson = await response.json()
    console.log(resjson);

       if (resjson.success) {
      //localStorage.setItem('token', json.authToken)
      navigate("/login")
      
    }
    else{
      alert("enter valid credentials")
    }

  }


  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>
    <div style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708473600&semt=ais")', backgroundSize: 'cover' }}>
      <div>
      <Navbar />
      </div>
    <div className='container '>
      <div className='row d-flex m-5 pt-5'>
      
      <form className='w-50 col-12 m-auto p-auto border bg-dark-light border-secondary rounded' onSubmit={handleSubmit}>
      <h2 className='text-center text-info'>Register</h2>
        <div className="m-3">
          <label htmlFor="labelName" className="form-label">Name</label>
          <input name='username' value={credentials.username} type="text" className="form-control"  required id="labelName" placeholder='enter name...' onChange={onChange} />
        </div>
        <div className="m-3">
          <label htmlFor="labelEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="labelEmail" aria-describedby="emailHelp" name='useremail' required value={credentials.useremail} placeholder='enter email...' onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="m-3">
          <label htmlFor="labelNumber" className="form-label">Mobile No</label>
          <input className="form-control" id="labelNumber" name='usermobile' value={credentials.usermobile} type='text' required placeholder='enter Mobile No...' onChange={onChange} />
        </div>
        <div className="m-3">
          <label htmlFor="labelPassword" className="form-label">Password</label>
          <input className="form-control" id="labelPassword" name='userpwd' value={credentials.userpwd} type='password'  required placeholder='enter password...' onChange={onChange} />
        </div>
        <div className='text-center m-3'>
        <button type="submit" className="btn btn-info">Sign up</button>
        <Link to="/login" className='m-3 mx-1'><a className='text-info' >Click here to login</a></Link>
        </div>
      </form>
      </div>
      </div>
      <Footer/>
    </div>
    
    </div>
  )
}