// "use client";

// import Link from "next/link";
// import styles from "./styles/home.module.css";
// import homestyles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={homestyles.main}>
//       <h1 className={styles.title}>Homepage</h1>

//       <p className={styles.text}>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
//         ullam qui, provident sequi odit aliquam repudiandae inventore nemo
//         excepturi officiis distinctio, molestias hic veritatis facilis?
//         Exercitationem quia hic praesentium sed!
//       </p>
//       <p className={styles.text}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius
//         aperiam assumenda ducimus necessitatibus exercitationem consequuntur
//         iure dolore doloremque, doloribus molestiae dolores reiciendis optio
//         corrupti voluptas veritatis, suscipit perferendis. Dolores.
//       </p>
//       <Link href="/files">
//         <div className={styles.btn}>See List of all files</div>
//       </Link>
//     </div>
//   );
// }
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function App() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
