import { Facebook, Github, Linkedin } from "lucide-react";
// import ThemeChanger from "./ThemeChanger"
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full z-50">
      <nav className="container mx-auto px-4 sm:px-12 flex justify-between h-20 items-center text-foreground">
        <h1 className="text-xl sm:text-2xl font-bold hover:text-primary duration-150 ease-in-out">
          <Link href="/">Modit Tuladhar</Link>
        </h1>
        <ul className="flex gap-4">
          <li className="group hidden sm:block">
            <Link href="https://github.com/ModitTdr">
              <Github className="group-hover:text-indigo-400 group-hover:scale-110 duration-75 ease-in-out" />
            </Link>
          </li>
          <li className="group hidden sm:block">
            <Link href="https://www.linkedin.com/in/modittuladhar">
              <Linkedin className="group-hover:text-blue-300 group-hover:scale-110 duration-75 ease-in-out" />
            </Link>
          </li>
          <li className="group hidden sm:block">
            <Link href="https://www.facebook.com/modit.tuladhar">
              <Facebook className="group-hover:text-blue-400 group-hover:scale-110 duration-75 ease-in-out" />
            </Link>
          </li>
          {/*<li>
           <ThemeChanger />
         </li>
         */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
