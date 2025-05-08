import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Registration = () => {
  const { signUp, updateUser, googleSignIn } = use(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(name, url, email, password);
    setError("");
    if (!/[A-Z]/.test(password)) {
      setError("Password must have an upperCase letter");
      toast.error("Password must have an upperCase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must have a lowerCase letter");
      toast.error("Password must have an upperCase letter");
      return;
    } else if (!/^.{6,}$/.test(password)) {
      setError("Length must be at least 6 character");
      toast.error("Password must have an upperCase letter");
      return;
    }

    setLoading(true);

    signUp(email, password)
      .then(() => {
        // console.log(res);
        setLoading(false);
        updateUser({
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            // console.log(res);
            toast.success("Registration Successful !!");
            navigate("/");
          })
          .catch((err) => {
            setLoading(false);
            setError(err.code.slice(5));
            toast.error(`${err.code.slice(5)} !!`);
          });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.code.slice(5));
        toast.error(`${err.code.slice(5)} !!`);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        // console.log(res);
        setLoading(false);
        toast.success("Registration Successful !!");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(`${err.code.slice(5)} !!`);
      });
  };
  return (
    <div className="min-h-[calc(100vh-115px)] w-11/12 mx-auto mb-[70px]">
      <title>AppOcean | Registration</title>

      <div className="card bg-[#39455f6d] w-full mx-auto max-w-sm shrink-0 shadow-sm shadow-primary">
        <div className="card-body">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Name"
              required
              name="name"
            />
            <label className="label">Photo url</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Photo url"
              required
              name="url"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              required
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              required
              name="password"
            />

            {error && <p className="text-red-400">{error}</p>}
            <button
              type="submit"
              className="btn mt-4 mb-2 text-primary text-center">
              SignUp
              {loading && (
                <span class="loading loading-spinner text-primary ml-[4px]"></span>
              )}
            </button>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              SignUp with Google
            </button>
            <p className="text-base">
              Already have an account?{" "}
              <Link
                className="text-[#F471B5] font-semibold border-b"
                to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
