import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/images/auth-light.png')" }}
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      {children}
    </div>
  );
};

export default Layout;
