import Image from "next/image";
import Link from "next/link";
import profile from "../../../public/profile.png";
import CONSTANT from "../../constant";

const Header = () => {
  return (
    <header className=" h-32 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image
          className="h-7"
          height={28}
          width={28}
          src={profile}
          alt="Nandhakumar's Display Picture"
        />
        <p className="font-bold text-2xl text-white ml-2">Nandhakumar</p>
      </Link>
      <nav>
        {CONSTANT.ROUTES.map((route, index) => (
          <Link
            key={index}
            className="font-bold text-base text-white ml-2 hover:bg-app-primary-700 px-3 py-1 rounded-sm"
            href={route.href}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
