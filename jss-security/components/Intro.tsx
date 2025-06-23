import { ArrowDown } from 'lucide-react';

export default function Intro() {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-repeat opacity-60 z-0"
                style={{ backgroundImage: "url('/oriental-tiles.png')" }}
                aria-hidden="true"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t  to-blue-950 z-10" aria-hidden="true" />
            <div className="container mx-auto py-12 px-4 relative z-20">
                <h1 className="text-5xl font-bold mb-6 text-center">JSS Security Systems LTD</h1>

                <p className="text-lg mb-8 text-center text-gray-300">
                    Installers of Fire & Security Systems for Domestic & Commercial Premises
                </p>

                <p className="text-md mb-8 text-center text-gray-300">
                    Based in Essex & Kent
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-4">
                    <a
                        href="#services"
                        className="rounded-full justify-center border border-solid  transition-colors flex items-center justify-center gap-2 hover:bg-[grey] dark:hover:bg-[#ccc] text-white-500 font-large text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    >
                        Our Services <ArrowDown width="20" />
                    </a>
                </div>
            </div>
        </div>
    )
}