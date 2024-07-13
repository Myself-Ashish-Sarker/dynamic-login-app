import { Link } from "react-router-dom";
import wall from "/wall.jpg";

const SignUp = () => {

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const signUp = { name, email, password };
        console.log(signUp);
    }

    return (
        <div style={{ backgroundImage: `url(${wall}`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-black h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-[28rem] shadow-xl">

                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Let's Get <span className="text-blue-700">Stared</span></h2>

                    <form onSubmit={handleSignUp} className="card-body bg-transparent">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <p>Already Here? <Link className="text-blue-700 hover:underline" to="/signin">Sign In</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;