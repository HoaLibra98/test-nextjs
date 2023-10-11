import Footer from "@/components/layout/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Domine&family=Josefin+Sans&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
