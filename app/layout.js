import { Toaster } from "react-hot-toast";
import AppLayout from "./_components/layout/AppLayout";
import { yekanBakh } from "./_utils/fonts";
import "./globals.css";
import NextAuthProvider from "./_providers/NextAuthProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekanBakh.className}>
        <NextAuthProvider>
          <Toaster />
          {<AppLayout>{children}</AppLayout>}
        </NextAuthProvider>
      </body>
    </html>
  );
}
