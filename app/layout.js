
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter=Inter({subsets:["latin"]});


export const metadata = {
  title: "App",
  description: "one stop Finance platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={'$(inter.className'}>
       {/* header */}
      <Header />
      
      <main className="min-h-screen">{children}</main>
      <Toaster/>
      <Toaster richColors/>
      
       {/* footer */}
        <footer className= "bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center
          text-gray-600">
            <p>made with love by Roadsider</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
