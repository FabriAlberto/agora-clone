import CustomFooter from "@/components/layout/footer/custom-footer";
import CustomNavbar from "@/components/layout/navbar/custom-navbar";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <CustomNavbar />
      </header>
      <main>{children}</main>
      <footer className="min-h-[270px] w-full  px-[50px] py-3 ">
        <CustomFooter />
      </footer>
      
    </div>
  );
};

export default Layout;
