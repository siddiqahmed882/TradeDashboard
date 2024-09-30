import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import background from '../assets/images/login.jpg';
import panelBG from '../assets/images/panel.png';
import logo from '../assets/images/loginLogo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <form
            onSubmit={submitHandler}
            className="h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div
                className="md:w-1/2 max-w-sm p-10 bg-opacity-30 rounded-lg shadow-lg bg-cover bg-center bg-no-repeat h-[535px] "
                style={{
                    backgroundImage: `url(${panelBG})`,
                }}
            >
                <div className="text-center md:text-left p-8">
                    <img src={logo} alt="logo" />
                </div>

                <div className="flex justify-center ">
                    <p className="text-white font text-center text-[33px] border-b-2 border-solid border-b-white mb-[75px] h-[58px] w-[250px]">
                        Sign in
                    </p>
                </div>

                <input
                    className="text-sm w-full px-4 py-2 border-2 border-solid border-white rounded-lg bg-transparent placeholder-white placeholder:font-semibold text-white"
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={''}
                />
                <input
                    className="text-sm w-full px-4 py-2 border-2 border-solid border-white rounded-lg mt-4 bg-transparent placeholder-white placeholder:font-semibold text-white"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue={''}
                />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    {/* <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input
                            className="mr-1 opacity-0 border-solid border-2 border-white"
                            type="checkbox"
                        />
                        <span className="text-white">Remember Me</span>
                    </label> */}
                    <div className="inline-flex items-center">
                        <label
                            className="relative flex items-center p-3 rounded-full cursor-pointer"
                            htmlFor="check"
                        >
                            <input
                                type="checkbox"
                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-white before:opacity-0 before:transition-opacity checked:border-white checked:bg-transparent checked:before:bg-white hover:before:opacity-10"
                                id="check"
                            />
                            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width="1"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </span>
                        </label>
                        <label
                            className="mt-px font-light text-white cursor-pointer select-none"
                            htmlFor="check"
                        >
                            Remember Me
                        </label>
                    </div>

                    <a
                        className="text-white hover:text-purple-200 hover:underline hover:underline-offset-4 font-thin flex items-center"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className="text-center md:text-left flex justify-center ">
                    <button
                        className="mt-4 bg-white hover:bg-purple-200 px-4 py-2 text-black uppercase rounded text-xs tracking-wider font-bold"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                {/* <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Don't have an account?{' '}
                    <Link
                        to="/register"
                        className="text-red-600 hover:underline hover:underline-offset-4"
                    >
                        Sign up
                    </Link>
                </div> */}
            </div>
        </form>
    );
};

export default Login;
