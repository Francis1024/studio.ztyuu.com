import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 ">
      <div className="h-8 md:h-12 relative w-32 md:w-48">
        <Image
          src="/images/logo.png"
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </header>
  );
};

export default Header;
