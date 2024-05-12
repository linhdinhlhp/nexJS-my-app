import { NextUIProvider } from "@nextui-org/react";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    // Use at the root of our app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
export default MyApp;
