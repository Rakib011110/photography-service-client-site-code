import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)

    const location = useLocation();

    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/';


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user



                const currentUser = {
                    email: user.email
                }

                console.log(currentUser)

                fetch('https://assignment-11-server-site-mu.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                    body: JSON.stringify(currentUser)


                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        // localStorage.setItem('genius-token', data.token);
                        // navigate(from, { replace: true });
                    })

                // navigate(from, { replace: true });




            })
            .catch(err => console.error(err))

    }




    const handleGoogleSignin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))


    }


    return (
        <div className="hero w-full min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="text-center  w-full lg:text-left">

                    <img className=' shadow-xl  w-10/12 rounded-3xl' src="https://developer.mytsi.org/image/images/login.jpg" alt="" />
                </div>
                <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Login</button>
                        </div>
                        <div>

                            <button onClick={handleGoogleSignin} className='btn btn-circle'>Google</button>

                        </div>
                    </form>



                    <p className='mb-5'> Dont't Have Any Acccount Please  <Link className=' text-info font-bold ' to="/register">  Register</Link>   </p>
                </div>

            </div>
        </div>
    );
};

export default Login;