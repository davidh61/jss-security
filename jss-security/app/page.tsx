import ServicesComponent from "@/components/Services";
import ContactComponent from "@/components/Contact";
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <div> {/* Changed to a simple div to contain both sections */}
      <div className="flex items-center justify-center  min-h-screen bg-gradient-to-t from-blue-900 to-blue-950">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">JSS Security Systems LTD</h1>

          <p className="text-lg mb-8 text-center text-gray-300">
            Installers of Fire & Security Systems for Domestic & Commercial Premises
          </p>

          <p className="text-lg mb-8 text-center text-gray-300">
            Based in Essex & Kent
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
            <a
              href="#services"
              className="rounded-full justify-center border border-solid  transition-colors flex items-center justify-center   gap-2 hover:bg-[white] dark:hover:bg-[#ccc] text-white-500 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            >
              Our Services <ArrowDown width="20" />
            </a>
          </div>
        </div>
      </div>
      <ServicesComponent />

      <ContactComponent />
    </div>
  );
}

