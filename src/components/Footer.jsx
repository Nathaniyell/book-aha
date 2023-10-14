import React from "react";
import Button from "./Button";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-10/12 mx-auto">
        <h1 className="text-white font-4xl font-[700]">
          Be the first to know when we launch
        </h1>
        <form action="" className="flex flex-col md:flex-row items-center justify-between w-full gap-4 my-4">
            <input className="bg-slate-500 text-black text-lg" type="text" placeholder="Name" />
            <input className="bg-slate-500 text-black text-lg" type="text" placeholder="Email Address" />
        </form>
        <form className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <Button 
            title={"Notify Me"}
            fontSize={"lg"}
            marginRight={0}
            padding={2}
            />
            <input type="checkbox" name="check" />
            <label htmlFor="check" id="check">I would love to join the beta test</label>
        </form>
        <section>
            <img src={logo} alt="Logo" />
            <pre>&copy; <a href="https://twitter.com/_kvngNath">UruaEkpa TechBros</a></pre>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
