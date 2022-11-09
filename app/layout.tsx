import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="w-[1000px] mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
