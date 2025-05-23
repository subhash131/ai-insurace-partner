import React from "react";
import Navbar from "../components/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
