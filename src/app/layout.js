import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "E-Commerce App",
  description: "Next.js E-Commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
