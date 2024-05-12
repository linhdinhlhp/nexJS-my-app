"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";
// import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <nav>
      <div className="logo">
        {/* <Image src="/linh.jpg" alt="logo nine dev" width={128} height={77} /> */}
        <Image
          isZoomed
          width={240}
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
        />
      </div>
      <Link href="/about">About Page</Link>
      <Link href="/dashboard "> Dashboard</Link>
      {/* <Link href="/files"> Create a new file</Link> */}
      <button onClick={() => router.push("/files")}> create a new file</button>
    </nav>
  );
};
export default Navbar;
