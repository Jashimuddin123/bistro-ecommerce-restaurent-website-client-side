
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

const {createUser} =useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data);
        
        createUser(data.email, data.password, data.name)
            .then((result) => {
                console.log("User Created Successfully:", result.user);
                alert("User Created Successfully!");
            })
            .catch((error) => {
                console.error("Error Creating User:", error.message);
                alert(`Error: ${error.message}`);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6">
                        Create your account to get started and explore amazing features.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered"
                            />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register("email", { 
                                    required: "Email is required", 
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format"
                                    }
                                })}
                                className="input input-bordered"
                            />
                            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                                className="input input-bordered"
                            />
                            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                        <p>You dont have account? pleasse.
                        <Link to="/login"><button className="btn btn-sm btn-outline btn-primary">Login</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
