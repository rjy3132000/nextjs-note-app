'use client'
import Link from "next/link";
import React from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Home() {

  const [formData, setFormData] = React.useState<FormData>({
    name : '',
    email : '',
    password: ''
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.id] : e.target.value
    })
  }

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit', formData);
  } 
  
  return (
    <section className="bg-gray-100">
      <div className="wrapper flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-md w-full">
          <h1 className="capitalize text-center text-2xl font-bold font-[family-name:var(--font-asul-sans)]">sign up</h1>

          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-sm font-semibold capitalize">name</label>
                <input type="name" id="name" className="p-2 border border-gray-300 rounded-md" onChange={handleOnChange} value={formData.name}/>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-semibold capitalize">email</label>
                <input type="email" id="email" className="p-2 border border-gray-300 rounded-md" onChange={handleOnChange} value={formData.email} />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-sm font-semibold capitalize">password</label>
                <input type="password" id="password" className="p-2 border border-gray-300 rounded-md" onChange={handleOnChange} value={formData.password} />
              </div>

              <button type="submit" className="bg-[#2f2f31] text-white py-3 rounded-md capitalize">sign Up</button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm">already have an account? <Link href={"signin"} className="text-[#3e0fcc] capitalize">sign in</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}
