import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if (userInfo) {
        navigate('/');
      }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
      } else {
        try {
          const res = await register({ name, email, password }).unwrap();
          dispatch(setCredentials({ ...res }));
          navigate(redirect);
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      }
    };

    return (
        <form onSubmit={ submitHandler } className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image" />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center md:text-left">
                    <label className="mr-1">Sign up</label>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300" />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="text"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="text-center md:text-left">
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Sign up</button>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Do you have already an account? <Link to='/login'  className="text-red-600 hover:underline hover:underline-offset-4">Sign in</Link>
                </div>
            </div>
        </form>
    );
};

export default Register;