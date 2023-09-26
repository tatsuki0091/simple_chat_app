import "./globals.css";
import { GlobalStateProvider, unstable_getServerSession } from '../components/context/GlobalState';
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: any
}) {

  // Only body tag part will rerender in this file
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
