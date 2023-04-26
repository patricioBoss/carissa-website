import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

const login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    axios
      .post("/api/auth/login", user)
      .then((res) => {
        if (res.data.data.role === "Admin") {
          router.push("/admin/home");
          toast.success("login successful");
        } else {
          toast.error("UnAuthorized");
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err.message);
        }
      })
      .finally(() => setIsSubmitting(false));
  };
  return (
    <section className="md:h-screen py-36 flex items-center bg-indigo-600 bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="container">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white shadow-md  rounded-md">
            <a href="index.html">
              <img
                src="assets/images/logo-icon-64.png"
                className="mx-auto"
                alt=""
              />
            </a>
            <h5 className="my-6 text-xl font-semibold">Admin Login</h5>
            <form className="text-left" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="font-semibold" htmlFor="LoginEmail">
                    Email Address:
                  </label>
                  <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    required
                    className="form-input mt-3 text-black"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold" htmlFor="LoginPassword">
                    Password:
                  </label>
                  <input
                    type="password"
                    onChange={handleChange}
                    name="password"
                    className="form-input mt-3 text-black"
                    placeholder="Password:"
                  />
                </div>

                <div className="flex justify-between mb-4">
                  <p className="text-slate-400 mb-0">
                    <a href="auth-re-password.html" className="text-slate-400">
                      Forgot password ?
                    </a>
                  </p>
                </div>

                <div className="mb-4">
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    <span> Login</span>
                  </LoadingButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
