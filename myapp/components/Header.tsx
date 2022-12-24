import Head from "next/head";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
      </div>
      <div></div>
    </header>
  );
};

export default Header;
