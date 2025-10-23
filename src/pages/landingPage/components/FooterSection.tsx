
import Logo from "../../../assets/Logo2.png";
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons'

export const FooterSection = () => {
  return (
    <>
      <footer className="py-12 bg-secondary">
        {/* <footer className="py-12 bg-gradient-to-r from-blue-900 to-blue-950"> */}
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex flex-row items-center justify-between w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={Logo} alt="" className="" />
              {/* <img src={heroImage} alt="PayInfra Logo" className="w-auto h-12" /> */}
            </motion.div>

            {/* Social Media Icons */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              
              <motion.a  
                className="p-2 text-blue-300 transition-colors rounded-full hover:text-white hover:bg-blue-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <SocialIcon url="https://x.com/payinfra?t=tXHkKCcI8eriSQDYX4kkUA&s=09" label="X"/>
              </motion.a>
              <motion.a 
                
                className="p-2 text-blue-300 transition-colors rounded-full hover:text-white hover:bg-blue-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <SocialIcon  label="linkedin" url="https://www.linkedin.com/company/payinfra-io"/>
              </motion.a>
              <motion.a  
                className="p-2 text-blue-300 transition-colors rounded-full hover:text-white hover:bg-blue-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <SocialIcon url="https://www.instagram.com/payinfra.io?igsh=MXB4M2Y1cjZjdW1scQ==" label="instagram"/>
              </motion.a>
              
            </motion.div>
           </div>
          
            <div className="w-full border-t border-blue-800"></div>

          
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-2 text-blue-300">
                © 2025 PayInfra. A product of Mercator Technologies Ltd.
              </p>
              <p className="max-w-2xl mx-auto text-sm text-blue-400">
                Built with enterprise-grade security and reliability — trusted by banks and leading payment providers.
              </p>
            </motion.div>
          </div>
        </div>
        {/* <div className="px-4 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-row justify-between items-center pt-7 border-b border-[#D9D9D996] ">
            <img src={Logo} alt="" className="ml-6" />
            <p className="text-[#D9D9D996] font-medium">
              The engine behind smarter fuel payments and loyalty.
            </p>
          </div>
          <p className="text-[#D9D9D996] text-center font-medium mt-2">© 2025 PayInfra. All rights reserved.</p>
        </div> */}
      </footer>
    </>
  );
};
