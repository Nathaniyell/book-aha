import React, { useRef, useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";

const Footer = () => {
  const nameInputRef = useRef(null); 
  const emailInputRef = useRef(null); 
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;

    if (isChecked) {
      console.log("The user wants to join the beta test.");
    } else {
      console.log("The user does not want to join the beta test.");
    }
    console.log(name, email, isChecked)
    return{
        name,
        email,
        isChecked
    }

  };

  return (
    <footer className="bg-black">
      <div className="w-10/12 md:w-1/2 mx-auto pt-8">
        <h1 className="text-white text-4xl font-[700]">
          Be the first to know when we launch
        </h1>
        <form
          action=""
          onSubmit={submitFormHandler}
          className="flex flex-row md:flex-row items-center justify-between w-full my-10"
        >
          <input
            className="bg-slate-200 text-black text-lg px-2 py-1"
            type="text"
            placeholder="Name"
            ref={nameInputRef}
          />
          <input
            className="bg-slate-200 text-black text-lg px-2 py-1"
            type="email"
            placeholder="Email Address"
            ref={emailInputRef}
          />
        </form>
        <form className="flex flex-col md:flex-row justify-between w-full gap-4">
          <Button
            title="Notify Me"
            fontSize="lg"
            marginRight={0}
            padding={2}
            type="submit"
          />
          <div>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              name="check"
              id="check"
              className="inline mr-2"
            />
            <label htmlFor="check" className="text-white">
              I would love to join the beta test
            </label>
          </div>
        </form>
      </div>
      <section className="mt-14 pb-4 w-11/12 md:w-2/3 mx-auto flex items-center justify-between">
        <img src={logo} alt="Logo" />
        <pre className="text-white text-xl mt-5">
          <a
            className="text-white text-lg"
            href="https://twitter.com/_kvngNath"
          >
            UruaEkpa TechBros
          </a>
        </pre>
      </section>
    </footer>
  );
};

export default Footer;
