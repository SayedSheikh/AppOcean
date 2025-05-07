import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import { FaUserEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { resetPassword } = use(AuthContext);
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // if (email !== user.email) {
    //   setError("This email is not being used !!");
    //   toast.error("This email is not being used !!");
    //   return;
    // }

    resetPassword(email)
      .then(() => {
        setEmail("");
        setSuccess("Password reset mail has been sent to your mail");
        toast.success("Password reset mail has been sent");
        // console.log(res);
      })
      .catch((err) => {
        setError(err.code.slice(5));
        toast.error(err.code.slice(5));
      });

    // console.log(obj);
  };
  return (
    <div className="min-h-[calc(100vh-115px)] mb-[70px]">
      <title>AppOcean | Forget Password</title>

      <div className="max-w-md mx-auto p-6 shadow-md rounded-xl bg-base-100 mt-10 shadow-primary border-primary border">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text mb-[10px]">Enter your email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full flex items-center gap-2">
            <FaUserEdit /> Update Profile
          </button>
          {success && <p className="text-success text-sm mt-2">{success}</p>}
          {error && <p className="text-error text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
