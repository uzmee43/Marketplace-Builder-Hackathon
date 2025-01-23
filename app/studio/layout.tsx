import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Furniture web ",
  description: "Furniture_web is a furniture store",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
