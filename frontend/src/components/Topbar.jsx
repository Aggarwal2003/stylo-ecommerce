import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const messages = [
  "Free returns within 7 days",
  "Cash on Delivery available across India",
  "Fast & reliable shipping worldwide",
  "24×7 customer support",
];

const Topbar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        
        {/* Left: Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Meta"
            className="hover:text-gray-300"
          >
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300"
          >
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter X"
            className="hover:text-gray-300"
          >
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Center: Rotating Message */}
        <div className="text-sm text-center flex-grow transition-opacity duration-500">
          <span>{messages[index]}</span>
        </div>

        {/* Right: Contact */}
        <div className="text-sm hidden md:block">
            <a href="/support" className="hover:text-gray-300">
                Help & Support
            </a>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
