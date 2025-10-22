
import { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png"
import { Sheet, SheetContent } from '../../../components/ui/sheet';
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface HeaderProps {
  openModal: (value: boolean) => void;
}


export const Header: React.FC<HeaderProps> = ({ openModal }) => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    <header className="border-b border-[#0000008C]">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-auto h-8" />
            </div>
            <nav className="items-center hidden gap-8 font-medium md:flex">
              <a href="#" className="hover:text-gray-700">Problem</a>
              <a href="#" className="hover:text-gray-700">Infrastructure</a>
              <a href="#" className="hover:text-gray-700">Case Study</a>
              <a href="#" className="hover:text-gray-700">White-Label</a>
              <button className="px-4 py-1 text-white transition-all duration-300 rounded-md bg-primary hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95" onClick={()=>openModal(true)}> 
                Request Demo
              </button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

<div className="md:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} >
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white px-4">
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col gap-6 mt-8"
          >
            {["Problem", "Infrastructure", "Case Study", "White-label"].map(
                  (item, i) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="text-gray-900 hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
            <motion.button 
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all duration-300 mt-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </motion.nav>
        </SheetContent>
      </Sheet>
</div>
      </header>
      </>
  )
}
