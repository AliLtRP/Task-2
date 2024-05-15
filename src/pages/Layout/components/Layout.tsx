import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="padding-x">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
