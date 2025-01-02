import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <section className="bg-gray-100">
      <div className="wrapper flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-md w-full">
          <h1 className="capitalize text-center text-2xl font-bold font-[family-name:var(--font-asul-sans)]">
            sign in
          </h1>

          <form>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold capitalize"
                >
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold capitalize"
                >
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="bg-[#2f2f31] text-white py-3 rounded-md capitalize"
              >
                sign in
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">
              create an account?{" "}
              <Link href={"/"} className="text-[#3e0fcc] capitalize">
                sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
