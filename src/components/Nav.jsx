import { navLinks } from "../constants/index";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src="src/assets/logo.svg"
            alt="logo"
            width={129}
            className="m-0 w-[129px] h-[50px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
