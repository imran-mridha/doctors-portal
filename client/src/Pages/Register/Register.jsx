import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider()
  const { createUser, updateUserProfile, setLoading, providerLogin } = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleRegister = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('SignUp Success');
        handleUpdateUserProfile(data.name);
        navigate(from, { replace: true });
      })
  }

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Sign In Success');
        navigate(from, { replace: true });
      })
  }

  const handleUpdateUserProfile = (fullName) => {
    const profile = {
      displayName: fullName
    }
    updateUserProfile(profile)
      .then(() => {
        setLoading(false)
        toast.success('Profile Update Successful', { autoClose: 500 })
      })
      .catch(error => {
        toast.error(error.message);
      })
  }
  return (
    <div className='container mx-auto my-20'>
      <div className='flex justify-center items-center'>
        <div className='p-5 shadow-2xl rounded-lg w-full mx-5 md:mx-0 lg:w-96'>
          <h2 className='text-2xl mb-5 text-center'>Sign Up</h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="space-y-3">
              <span className="text-lg block">Name</span>
              <input {...register("name", {
                required: "Name is required"
              })}
                type='text' className="w-full input input-bordered input-md text-xl block" />
              {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
            </div>
            <div className="space-y-3">
              <span className="text-lg block mt-3">Email</span>
              <input {...register("email", {
                required: "Email Address is required"
              })}
                type='email' className="w-full input input-bordered input-md text-xl block" />
              {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="space-y-3">
              <span className="text-lg block mt-3">Password</span>
              <input {...register("password", {
                required: "Password Is Required",
                minLength: { value: 6, message: 'Password should be 6 charecter or longer' }
              })}
                type='password' className="w-full input input-bordered input-md text-xl block" />
              {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
            <input type="submit" value='Sign Up' className='w-full btn bg-accent my-5 text-xl' />
            <span className="text-center text-sm block">Already have an account? <Link to='/login' className='text-primary' >Sign In</Link></span>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
          </form>
          <div>
            <button onClick={handleGoogleLogin} className='btn w-full btn-outline btn-primary text-lg'>Continue With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;