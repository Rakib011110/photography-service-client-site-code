import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Registration = () => {

    const { createUser } = useContext(AuthContext)


    const hanldeRegister = (e) => {

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        console.log(email, password, name)
        form.reset()
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .then(err => console.error(err))



    }

    return (
        <div className="hero w-full min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row gap-5">
                <div className="text-center  w-full lg:text-left">

                    <img className=' shadow-xl  w-10/12 rounded-3xl' src="https://developer.mytsi.org/image/images/login.jpg" alt="" />
                </div>
                <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                    <form onSubmit={hanldeRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <a href="#" className="label-text-alt link link-hover" >Forgot password?</a> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Login</button>
                        </div>
                    </form>

                    <p className='mb-5'> Already have an account please  <Link className=' text-info font-bold ' to="/login"> Login</Link>   </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;