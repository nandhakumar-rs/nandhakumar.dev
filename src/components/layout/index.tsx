import { FC } from "react";
import Footer from "./Footer.component";
import Header from "./Header.component";

const Layout: FC<any> = ({ children }) => {
  return (
    <div className="bg-app-primary-900 min-h-screen w-full relative">
      <div className="mx-auto w-full max-w-[960px] px-5 pb-32 sm:px-6">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
