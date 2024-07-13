import { Link } from "react-router-dom";
import wall from "/wall.jpg";

const SignIn = () => {

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const signIn = { name, email, password };
        console.log(signIn);
    }

    return (
        <div style={{ backgroundImage: `url(${wall}`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-black h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-[28rem] shadow-xl">

                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold"><span className="text-blue-700">Bump</span> On</h2>

                    <form onSubmit={handleSignIn} className="card-body bg-transparent">
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
                            <p>Never Before? <Link className="text-blue-700 hover:underline" to="/signup">Sign Up</Link></p>
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

export default SignIn;