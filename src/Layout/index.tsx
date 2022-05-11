import React from "react";
import LayoutWrapper from "./styles";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <Header />
      <main className="content">{children}</main>
      {/* footer if any */}
    </LayoutWrapper>
  );
}
