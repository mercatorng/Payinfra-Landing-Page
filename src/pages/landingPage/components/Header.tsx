import { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import { Sheet, SheetContent } from "../../../components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";



export const Header = () => {
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

  // 👇 Smooth scroll handler
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["Problem", "Infrastructure", "Case Study", "White-label"];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  

  return (
    <header className="border-b border-[#0000008C] sticky top-0 bg-white z-50">
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2" onClick={scrollToTop}>
            <img src={Logo} alt="Logo" className="w-auto h-8" />
          </div>

          {/* Desktop Nav */}
          <nav className="items-center hidden gap-8 font-medium md:flex">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className="transition-colors hover:text-gray-700"
                >
                  {item}
                </button>
              );
            })}

            <button
              className="px-4 py-1 text-white transition-all duration-300 rounded-md bg-primary hover:bg-green-800 hover:scale-105 hover:shadow-lg active:scale-95"
              onClick={() => scrollToSection("form")}
            >
              Request Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className="md:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white px-4"
          >
            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col gap-6 mt-8"
            >
              {navItems.map((item, i) => {
                const id = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className="py-2 text-left text-gray-900 transition-colors border-b border-gray-100 hover:text-green-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + i * 0.05,
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.button>
                );
              })}

              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection("form");
                }}
                className="w-full px-6 py-3 mt-4 text-white transition-all duration-300 bg-green-600 rounded-md hover:bg-green-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(22, 163, 74, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
