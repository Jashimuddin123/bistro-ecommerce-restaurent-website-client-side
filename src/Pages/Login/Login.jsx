import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6); // Load captcha with 6 characters
  }, []);

  // Handle form submission
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
    if (login) {
      login(email, password)
        .then((result) => {
          console.log("Login successful:", result.user);
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true }); // Correct redirection here
        })
        .catch((error) => {
          console.error("Login error:", error.message);
          alert(`Login failed: ${error.message}`);
        });
    } else {
      console.error("Login function not found in AuthContext.");
      alert("Error: Login functionality is unavailable.");
    }
  };
  

  // Handle captcha validation
  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
      // alert("Captcha validated successfully!");
    } else {
      setDisabled(true);
      alert("Invalid captcha! Please try again.");
    }
  };

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
        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            {/* Captcha Validation */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
              onBlur={handleValidateCaptcha}
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the above captcha"
                className="input input-bordered"
                required
              />
              
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <input
                disabled={false}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
            <p>You dont have account? pleasse.
            <Link to="/signup"><button className="btn btn-sm btn-outline btn-accent">SignUp</button></Link></p>
          </form>
        </div>
      </div>
   
    </div>
  );
};

export default Login;
