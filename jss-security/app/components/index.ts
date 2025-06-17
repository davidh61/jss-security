import React from 'react';

export const MissionStatement: React.FC = () => {
    return (
        <section className="p-4">
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p>
                Our mission is to provide our customers with the peace of mind that comes from knowing that their home or business is protected from fire, theft, and other threats. We believe that everyone deserves to feel safe and secure, and we are committed to providing our customers with the highest quality fire and security services.
            </p>
        </section>
    );
};

export const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl">Welcome to Our Security Services</h1>
        </header>
    );
};

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} Our Security Company. All rights reserved.</p>
        </footer>
    );
};