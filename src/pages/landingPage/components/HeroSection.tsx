import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { useState } from "react";
import rectangle4 from "../../../assets/Rectangle4.png";
import { motion, AnimatePresence } from "framer-motion";
import demoVideo from "../../../assets/Payinfra Edited.mp4"; // 👈 your local video file



export const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(false);
  
const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <span className="text-primary bg-primary/15 py-1.5 px-10 rounded-lg font-medium ">
              Trusted by Leading Fuel Marketers
            </span>

            <h1 className="mb-6 leading-tight tracking-wide text-[50px] mt-14 h2-font">
              Power your fuel business with fin-tech-grade control
            </h1>

            <p className="mb-11 text-[#0000008C]">
              PayInfra powers branded wallets that help your clients control
              spend and simplify fuel payments.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="flex items-center gap-2 px-12 py-4 text-white transition-all duration-300 rounded-md card-shadow bg-primary hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95"
                onClick={() => scrollToSection("form")}
              >
                Request Demo{" "}
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}<div className="relative ">
              <div className="relative pt-24 pb-16 mt-16">
                <div
                  style={{
                    backgroundImage: `url(${rectangle4})`,
                  }}
                  className="rounded-2xl p-8 md:p-12 shadow-2xl relative bg-no-repeat bg-cover bg-center w-full h-[400px]"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                      {playVideo ? (
                        <motion.div
                          key="video"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 z-20"
                        >
                          <video
                            className="object-cover w-full h-full rounded-2xl "
                            src={demoVideo}
                            loop
                            controls
                            autoPlay
                            playsInline
                            onEnded={() => setPlayVideo(false)}
                          />
                          <button
                            onClick={() => setPlayVideo(false)}
                            className="absolute z-10 px-3 py-1 text-black transition-all duration-300 rounded-full top-3 right-3 bg-white/80 hover:bg-white hover:scale-105"
                          >
                            ✕
                          </button>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 z-10 flex items-center justify-center"
                        >
                          <div className="flex flex-col items-center gap-3">
                            <div
                              className="flex items-center justify-center p-6 transition-all duration-300 border rounded-full cursor-pointer border-primary bg-white/20 hover:border-primary/60 hover:scale-110"
                              onClick={() => setPlayVideo(true)}
                            >
                              <Play size={24} color="#179a40" className="text-primary"/>
                            </div>
                            <p className="text-primary">Watch Demo</p>
                            <p className="text-primary/80">See Payinfra in action</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {!playVideo && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="absolute z-30 py-5 bg-white rounded-lg card-shadow backdrop-blur-sm px-7 -right-4 -bottom-10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-1.5 bg-green-100 rounded-md">
                          <CheckCircle size={24} color="#179A40" />
                        </div>

                        <div className="flex flex-col">
                          <p className="text-xl mb-1.5">
                            30% Fraud Reduction
                          </p>
                          <p className="text-gray-600">Real customer results</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
