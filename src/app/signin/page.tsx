/* eslint-disable @next/next/no-img-element */
"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="bg"></div>
      

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <img
          className="logo"
          src="/Logo.png"
          width={144}
          alt="logo"
        />

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white-800"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-lg border-gray-300 bg-white py-2 px-4 text-white-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white-800"
                >
                  Password
                </label>
                <div className="text-sm">
                  <div
                    onClick={() => router.push("/forgot-password")}
                    className="cursor-pointer font-semibold text-red-500 hover:text-red-800"
                  >
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-lg border-gray-300 bg-white py-2 px-4 text-white-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() =>
                  signIn("credentials", {
                    email,
                    password,
                    redirect: true,
                    callbackUrl: "/",
                  })
                }
                disabled={!email || !password}
                className="cursor-pointer  flex w-full justify-center rounded-lg bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-white-800">
            Not a member?{" "}
            <button
              onClick={() => router.push("signup")}
              className="cursor-pointer font-semibold leading-6 text-blue-500 hover:text-blue-600 
              "
            >
              Sign Up
            </button>
          </p>
        </div>
        <footer>
          <h5>
            <b>
              Designed & Maintained with{" "}
              <span className="text-white-800">&#9825;</span> by{" "}
              <a href="https://linktr.ee/i_m_k_s_s" target="_blank">
                Ajay Rai
              </a>{" "}
              &copy; 2023 All rights reserved by Ajay Rai
            </b>
          </h5>
        </footer>
      </div>
    </>
  );
}
