import ClientProvider from "@/ClientProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientProvider>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </ClientProvider>
  );
}
