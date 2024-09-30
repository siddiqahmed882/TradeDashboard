import Layout from "../components/dashboard/Layout.jsx";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }, [userInfo.email, userInfo.name]);

    const submitHandler = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
      } else {
        try {
          const res = await updateProfile({
            _id: userInfo._id,
            name,
            email,
            password,
          }).unwrap();
          console.log(res);
          dispatch(setCredentials(res));
          toast.success('Profile updated successfully');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      }
    };

    return (
        <Layout>
            <form onSubmit={ submitHandler } className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center md:text-left">
                        <h2 className={'cardTitle'}>Profile</h2>
                    </div>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300" />
                    <input
                      className="inputStyle mb-3"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="inputStyle mb-3"
                      type="text"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="inputStyle mb-3"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      className="inputStyle mb-3"
                      type="password"
                      placeholder="Confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Update</button>
                    </div>
                </div>
            </form>
        </Layout>
    );
};

export default Profile;