import "@/assets/styles/globals.css";
import React from "react";

export const metadata = {
  title: "PropertyPulse",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
