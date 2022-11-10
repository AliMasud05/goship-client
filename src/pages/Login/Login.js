import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {
    const {login}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(err=>console.error(err));
        
    }


    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                        Sign in
                    </h1>
                    <form onSubmit={handleLogin} className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <a
                            href="/"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>
                    
                    <p className='text-lg my-3 font-serif font-semibold'> New to goShip <Link className='text-orange-400' to='/signup'>Sign Up</Link></p>
                        

                    
                </div>
            </div>
            
        </div>
    );
};

export default Login;