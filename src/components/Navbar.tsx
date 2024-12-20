import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="top-0 left-0 right-0 p-4 mt-6 z-10">
      <div className="container mx-auto flex justify-between w-[90%] lg:w-[60rem] items-center">
        <ul className="flex space-x-8 items-center hidden md:flex">
          <li>
            <Link
              href="/#"
              className="relative inline-block text-[#ED9FBE] text-[1.3rem] font-bold transition duration-300 group hover:text-[#ED9FBE]"
            >
              <span>Sooraj</span>
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#ED9FBE] to-[#ED9FBE] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="relative inline-block text-[#f5f5f5] transition duration-300 group hover:text-[#ED9FBE]"
            >
              About
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#ED9FBE] to-[#ED9FBE] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/#experience"
              className="relative inline-block text-[#f5f5f5] transition duration-300 group hover:text-[#ED9FBE]"
            >
              Experience
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#ED9FBE] to-[#ED9FBE] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="relative inline-block text-[#f5f5f5] transition duration-300 group hover:text-[#ED9FBE]"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#ED9FBE] to-[#ED9FBE] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/blogs"
              className="relative inline-block text-[#f5f5f5] transition duration-300 group hover:text-[#ED9FBE]"
            >
              Blogs
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-gradient-to-r from-[#ED9FBE] to-[#ED9FBE] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/sooraj1002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#f5f5f5] transition duration-300 hover:text-[#ED9FBE]"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
