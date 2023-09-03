import "./globals.css";
import { GlobalStateProvider } from '../components/context/GlobalState';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
        <GlobalStateProvider>{children}</GlobalStateProvider></body>
    </html>
  );
}
