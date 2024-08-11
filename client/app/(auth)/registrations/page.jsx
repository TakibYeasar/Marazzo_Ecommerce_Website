import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { useRegisterMutation } from '../api/auth';
import { useAuthActions } from '../hooks/useAuthActions';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { registerSchema } from '../utils/registerSchema';
import { RegisterUser, User } from '../../../app/types';
import { Loader } from '../../../components/Loader';
import { toast } from 'react-toastify';
import { teams } from '../../../utils/db/teams';
import { useLoginMutation } from '../api/auth';
import { LoginUser, User } from '../../../app/types';
import { loginSchema } from '../utils/loginSchema';



const Registrations = () => {

    const { setUser } = useAuthActions();
    const [register, { data, isLoading, isSuccess, error }] =
        useRegisterMutation();
    

    useEffect(() => {
        if (isSuccess) {
            setUser(data);
            toast.success(`Welcome ${data?.username}`, {
                toastId: 'registerSuccess',
            });
        } else if (error) {
            const fetchError = error ;
            toast.error(fetchError?.data , {
                toastId: 'registerError',
            });
        }
    }, [isSuccess, data, setUser, error]);

    const onRegister = async (data) => {
        await register({
            username: data.username,
            email: data.email,
            password: data.password,
            team: data.team,
        });
    };

    if (isLoading) return <Loader />;

    // const { setUser } = useAuthActions();
    // const [login, { data, isLoading, isSuccess, error }] = useLoginMutation();

    // useEffect(() => {
    //     if (isSuccess) {
    //         setUser(data as User);
    //         toast.success(`Welcome back ${data?.username}`, {
    //             toastId: 'loginSuccess',
    //         });
    //     } else if (error) {
    //         const fetchError = error as FetchBaseQueryError;
    //         toast.error(fetchError?.data as string, {
    //             toastId: 'loginError',
    //         });
    //     }
    // }, [isSuccess, data, setUser, error]);

    // const onSubmit = (data: LoginUser) => {
    //     login({
    //         email: data.email,
    //         password: data.password,
    //     });
    // };

    // if (isLoading) return <Loader />;

    return (
        <div className="container">
            <ul className="flex list-unstyled">
                <li><a href="" className='text-base mt-4 mr-2 font-normal text-font-color'>Home</a></li>
                <li><a href="" className='text-base mt-4 ml-2 font-normal text-primary-color'>Registrations</a></li>
            </ul>

            <div className="mt-4 mb-4 bg-card-bg p-8 grid grid-cols-12">
                <div className="col-span-6">
                    <h4 className="main-title">Sign in</h4>
                    <p className="">Hello, Welcome to your account.</p>
                    <div className="flex">
                        <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light"><FaFacebook className='mr-2' /> Sign In with Facebook</a>
                        <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light"><FaTwitter className='mr-2' /> Sign In with Twitter</a>
                    </div>
                    <form className="" role="form" schema={registerSchema} onSubmit={onRegister>
                        <div className="grid mr-8">
                            <label className="">Email Address <span>*</span></label>
                            <input type="email" className="p-4 mt-4 mb-4" />
                        </div>
                        <div className="grid mr-8">
                            <label className="">Password <span>*</span></label>
                            <input type="password" className="p-4 mt-4 mb-4" />
                        </div>
                        <div className="">
                            <label>
                                <input type="radio" />Remember me!
                            </label>
                            <a href="#" className="">Forgot your Password?</a>
                        </div>
                        <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Login</button>
                    </form>
                </div>


                <div className="col-span-6">
                    <h4 className="main-title">Create a new account</h4>
                <form className="" schema={loginSchema} onSubmit={onSubmit}>
                        <div className="grid mt-2 mb-2">
                            <label className="text-base mt-2 mb-2">Email Address <span>*</span></label>
                            <input type="email" className="p-4 mt-4 mb-4" placeholder="email" />
                        </div>
                        <div className="grid mt-2 mb-2">
                            <label className="text-base mt-2 mb-2">Username <span>*</span></label>
                            <input type="email" className="p-4 mt-4 mb-4" placeholder="username" />
                        </div>
                        <div className="grid mt-2 mb-2">
                            <label className="text-base mt-2 mb-2">Password <span>*</span></label>
                            <input type="email" className="p-4 mt-4 mb-4" placeholder="password" />
                        </div>
                        <div className="grid mt-2 mb-2">
                            <label className="text-base mt-2 mb-2">Confirm Password <span>*</span></label>
                            <input type="email" className="p-4 mt-4 mb-4" placeholder="confirm_password" />
                        </div>
                        <button type="submit" className="text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-primary-color text-font-light">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registrations