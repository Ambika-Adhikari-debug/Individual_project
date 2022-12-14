import React from 'react'
import { useState } from 'react';
import axios from "axios";
import './Register.css';
import { Link } from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';
import { ImKey } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Header from './Header';
import Footer from './Footer';
import emailjs from 'emailjs-com'



export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage]= useState('');

    const registerPatient=(e)=>{
        e.preventDefault(); //stops the default behaviour i.e refresh
        const patientData = {
            username, password, address, phone, email
        }
        //console.log(patientData);
        axios.post("http://localhost:90/patient/register", patientData)
        .then(result=>{
          if(result.data.success){
            // registered success
            setMessage('Registered Successfully!')
      
          }
          else{
            //not registered
            setMessage('something went wrong! Please try again!');
          }
        })
        .catch();

//code for sending email
        emailjs.sendForm('service_dyfp1sb', 'template_0ntjxwv',e.target,'user_2DlavtV8tyH0QjlBm4S5p')
        .then(res=>{
          console.log(res)
        }).catch(err=>
          console.log('asdas'))
      
      }
        
    return (
      <div>
         <Header />
        <div className="container ">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div className="card-img-left d-none d-md-flex">
            {/* <!-- Background image for card set in CSS! --> */}
          </div>
          
          <div className="card-body p-4 p-sm-5">
            <h4 className="text-center mb-4 ">Register Here!!</h4>
            {message}

            <form onSubmit={registerPatient} >

              <div className="form-floating mb-3">
              
                <input type="text"   name='name'  className="form-control"   
                value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
                  {/* id="floatingInputUsername" placeholder="myusername" required autofocus  */}
                 
                 
                <label for="floatingInputUsername"><BsPeopleFill></BsPeopleFill> Username</label>
                
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                {/* id="floatingInputEmail" placeholder="name@example.com" */}
                <label for="floatingInputPassword"><ImKey></ImKey> Password</label>
              </div>

              <hr/>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}/>
                {/* // id="floatingAddress" placeholder="Address"/> */}
                <label for="floatingAddress"><FaHome></FaHome> Address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" 
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}/>
                {/* id="floatingPassword" placeholder="Password"/> */}
                <label for="floatingPhone"><BsPhoneVibrateFill></BsPhoneVibrateFill> Phone</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                {/* id="floatingPassword" placeholder="Password"/> */}
                <label for="floatingEmail"><MdEmail></MdEmail> E-mail</label>
              </div>

              

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit" >Register</button>
              </div>
              </form>
              <Link className="d-block text-center mt-2 small" to='/login'>Have an account? Sign In</Link>

              <hr className="my-4"/>

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-google me-2"></i> Sign up with Google
                </button>
              </div>

              <div className="d-grid">
                <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                  <i className="fab fa-facebook-f me-2"></i> Sign up with Facebook
                </button>
              </div>
          

            
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
       
    )
}
