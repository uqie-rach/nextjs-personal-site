import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Portofolio - Achmad Furqon Rachmadie",
  description: "Achmad Furqon Rachmadie's portofolio website.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <script
          src="https://kit.fontawesome.com/55a635dc45.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <html lang="en">
        <body className={jetbrainsMono.variable}>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </body>
      </html>
    </>
  );
}
