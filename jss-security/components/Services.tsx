import { Cctv, BrickWallFire, Siren } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12" id="services">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Fire Alarm Systems"
            description="Installation and maintenance of fire alarm systems for commercial and residential properties."
            icon={<BrickWallFire color="black"/>}
          />
          <ServiceCard
            title="Security Systems"
            description="Comprehensive security solutions, including alarm systems, access control, and monitoring."
            icon={<Siren color="black" />}
          />
          <ServiceCard
            title="CCTV Surveillance"
            description="Installation and maintenance of CCTV surveillance systems for enhanced security."
            icon={<Cctv color="black" />}
          />
        </div>
      </div>
    </div>
  );
}