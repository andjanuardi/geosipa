import Loader from "@/components/loading";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider
      session={pageProps.session}
      basePath={`${process.env.BASE_URL}/api/auth`}
    >
      <Component {...pageProps} />
    </SessionProvider>
  );
}
