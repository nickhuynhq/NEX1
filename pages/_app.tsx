import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Server Side Rendering State
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  // If you are SSR, do not return any components
  if (isSSR) return null;

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="dark:bg-darkPrimary h-full">
        <div className="xl:w-[1280px] m-auto px-4 lg:px-10 ">
          <Navbar />
          <div className="flex gap-2 md:gap-20 lg:gap-30">
            <div className="h-full">
              <Sidebar />
            </div>
            <div className="mt-4 flex flex-col gap-10 overflow-auto h-[120vh] w-full">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
