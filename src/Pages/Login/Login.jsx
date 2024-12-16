
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {login}= useContext(AuthContext)
    const [disabled, setDisabled] =useState(true)
 const capthaRef = useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin= event =>{
event.preventDefault()
const form = event.target;
const email = form.email.value;
const password = form.password.value;
console.log(email, password);

 // Call the login function from the context
 login(email, password)
 .then((result) => {
     console.log("Login successful:", result.user);
     // Reset the form after a successful login
     form.reset();
     // Redirect or perform additional actions if needed
     alert("Login successful! Welcome!");
 })
 .catch((error) => {
     console.error("Login error:", error.message);
     alert(`Login failed: ${error.message}`);
 });
    }


    const handleValidedCapctha= ()=>{
            
        const user_captcha_value =capthaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required  />
              </div>
              <div className="form-control">
                
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={capthaRef}  name="captha" placeholder="type the above captha" className="input input-bordered" required />
                <button onClick={handleValidedCapctha} className="btn btn-outline btn-sm mt-2">Valided </button>
              </div>
              
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;