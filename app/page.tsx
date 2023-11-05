import React from "react";
import { Button } from "@nexus-ds/button";
import { MonitorMobileIcon, MoonFilledIcon, InfoIcon, AvatarIcon, PetBoldIcon } from "@nexus-ds/shared-icons";
import './globals.css';

const BlankPage: React.FC = () => {
  return (
    <div className="h-screen w-screen relative ">
      <div className="h-full flex flex-col items-center justify-center gap-4 rounded-lg p-8">
        <h2 className="text-5xl font-medium font-inter">Welcome To</h2>
        <img
          src="nexus.png"
          alt="Centered Image"
          width={600}
          height={600}
        />
        <div className="flex gap-8 mt-4">
          <Button variant="flat" color="success" startContent={<PetBoldIcon />}>
            Minimalistic
          </Button>
          <Button variant="flat" color="primary" startContent={<MoonFilledIcon />}>
            Sleek
          </Button>
          <Button variant="flat" color="danger" startContent={<MonitorMobileIcon />}>
            Responsive
          </Button>
          <Button variant="flat" color="warning" startContent={<AvatarIcon />}>
            Elegant
          </Button>
          <Button variant="flat" color="secondary" startContent={<InfoIcon />}>
            Intuitive
          </Button>
        </div>
        <Button variant="shadow" color="default" className="mt-10">
          Get Started by changing this page!
        </Button>
      </div>
    </div>
  );
};

export default BlankPage;
