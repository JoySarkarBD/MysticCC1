import { Link } from "react-router-dom";
import userSvg from "./../../assets/User 2.svg";
import keySvg from "./../../assets/key 2.svg";
const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-[34.1875rem] h-[32.125rem] shadow-2xl bg-[#231B498C] ">
        <div className="card-body justify-center">
          <div className="text-center text-white font-bold">
            <h2 className="text-4xl">MysticCC</h2>
            <p className="text-xl mt-6">
              Please register an account.
            </p>
          </div>

          {/* Username */}
          <div className="mb-6 mt-6">
            <div className="flex items-center form-control flex-row bg-[#442EA482] py-4 px-5 space-x-3">
              <div className="">
                <img src={userSvg} alt="" />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent border-none w-full outline-none text-white"
              />
            </div>
          </div>

          {/* Password */}
          <div className="">
            <div className="flex items-center form-control flex-row bg-[#442EA482] py-4 px-5 space-x-3">
              <div className="">
                <img src={keySvg} alt="" />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent border-none w-full outline-none text-white"
              />
            </div>
          </div>

          {/* Login btn */}
          <div className="form-control mt-6">
            <button className="bg-[#442EA482] py-4 px-5 text-white border-2 border-[#795FF3]">
              Sign Up
            </button>
          </div>

          <div>
            <div className="w-full flex items-center justify-between text-white mt-4">
              <p>
                <Link to="forgetPass" className="underline">
                  Forget Password?
                </Link>
              </p>
              <p className="text-end decoration decoration-slate-50">
                <Link to="/signUp" className="underline">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
