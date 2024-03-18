import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
    </>
  );
}
