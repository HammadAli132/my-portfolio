import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProjectProvider } from "./contexts/ProjectContext";

export const metadata = {
  title: "Hammad's Portfolio",
  description: "Get your dream website built with Hammad",
  keywords: "Hammad, Portfolio, Web Development, Web Design",
  authors: [
    {
      name: "Hammad",
      url: "",
    },
  ],
  creator: "Hammad",
  publisher: "Hammad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <ProjectProvider>
            {children}
          </ProjectProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
