import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center"> {/* Added min-h-screen, flex, items-center, justify-center */}
      <div className="container mx-auto py-12 px-4 pt-50">
        <h1 className="text-3xl font-bold mb-6 text-center">JSS Security Systems LTD</h1>

        <p className="text-lg mb-8 text-center text-gray-300">
          Installers of Fire & Security Systems for Domestic & Commercial Premises
        </p>

        <p className="text-lg mb-8 text-center text-gray-300">
          Based in Essex & Kent
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
          <a
            href="/contact"
            className="rounded-full justify-center border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
           Get in touch today
          </a>
        </div>
      </div>
    </div>
  );
}

// 

