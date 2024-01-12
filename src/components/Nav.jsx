import { navLinks } from "../constants/index";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img
            src="src/assets/logo.svg"
            alt="logo"
            className="m-0 w-[50px] h-[50px]"
          />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg leading-normal font-montserrat text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign In</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
