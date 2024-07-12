import wall from "/wall.jpg"

const login = () => {
    return (
        <div style={{ backgroundImage: `url(${wall}`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-black h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-[28rem] shadow-xl">

                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Let's Get <span className="text-blue-700">Stared</span></h2>

                    <form className="card-body bg-transparent">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <p></p>
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

export default login