"use client";

import { ReactNode } from "react";
import { useMantineProgress } from "@/hooks/useMantineProgress";
// import { Header } from "./Header";
// import { Footer } from "./Footer";
// import { Notification } from "../Notification";

export default function ClientLayout({ children }: { children: ReactNode }) {
  useMantineProgress(); // Gọi hook client tại đây

  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen">{children}</main>
      {/* <Footer /> */}
      {/* <Notification /> */}
    </>
  );
}
