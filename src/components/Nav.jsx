import { navLinks } from "../constants/index";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img
            src="/logo.svg"
            alt="logo"
            className="m-0 w-[50px] h-[50px]"
          />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-lg font-semibold leading-normal font-montserrat text-primary drop-shadow-[0_1.5px_2px_rgba(109,152,134,0.8)]
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg font-bold leading-normal font-montserrat max-lg:hidden wide:mr-24 drop-shadow-[0_1.2px_1.2px_rgba(242,231,213,0.8)]">
          <a href="/">Masuk</a>
          <span>/</span>
          <a href="/">Daftar</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
