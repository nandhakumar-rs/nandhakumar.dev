import { FC } from "react";
import Footer from "./Footer.component";
import Header from "./Header.component";

const Layout: FC<any> = ({ children }) => {
  return (
    <div className="bg-app-primary-900 min-h-screen w-full relative">
      <div className="max-w-screen-lg my-0 mx-auto max-md:mx-5 pb-32">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
