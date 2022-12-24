import Head from "next/head";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <Image
          src="https://rb.gy/ulxxee"
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
