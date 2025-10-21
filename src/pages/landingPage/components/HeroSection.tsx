
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import rectangle3 from "../../../assets/Rectangle3.png";

interface HeroSectionProps {
  openModal: (value: boolean) => void;
}

export const HeroSection = ({ openModal }: HeroSectionProps) => {
  return (
    <>
      <section className="">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="">
              <span className="text-primary bg-primary/15 py-1.5 px-10 rounded-lg font-medium ">
                Trusted by Leading Fuel Marketers
              </span>

              <h1
                className="mb-6 leading-14 tracking-wide text-[50px] mt-14 h2-font "
              >
                Power your fuel business with fin-tech-grade control
              </h1>
              <p className="mb-11 text-[#0000008C]">
                PayInfra powers branded wallets that help your clients control 
spend, and simplify fuel payments.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  className="flex items-center gap-2 px-12 py-4 text-white transition-all duration-300 rounded-md card-shadow bg-primary hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95"
                  
                  onClick={() => openModal(true)}
                >
                  Request Demo{" "}
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                {/* <button
                  className="px-12 py-4 text-gray-700 transition-all duration-300 border border-gray-300 rounded-md hover:bg-gray-50 hover:scale-105 hover:shadow-lg active:scale-95"
                  style={{ boxShadow: "0 3.91px 3.91px rgba(0, 0, 0, 0.25)" }}
                >
                  See Demo
                </button> */}
              </div>
              {/* <p className="text-[13px] font-extralight italic text-secondary/60 mt-7">
                We powered Northwest Petroleum's corporate wallet
                infrastructure; now your brand can own the same success.
              </p> */}
            </div>
            <div className="pt-24">
              <div
                style={{ backgroundImage: `url(${rectangle3})` }}
                className="  rounded-2xl p-8 md:p-12 shadow-2xl relative bg-[url('../assets/Rectangle3.png')] bg-no-repeat bg-cover bg-center w-full"
              >
                <div className="flex items-center justify-center py-16">
                  <div className="flex flex-col items-center gap-3 ">
                    <div className="flex items-center justify-center p-6 transition-all duration-300 border border-white rounded-full cursor-pointer bg-white/20 hover:border-white/60">
                      <Play size={24} color="#ffffff" />
                    </div>
                    <p className="font-semibold text-white">Watch Demo</p>
                    <p className="text-white">See Payinfra in action</p>
                  </div>
                </div>
                <div
                  className="bg-white card-shadow backdrop-blur-sm rounded-lg py-5.5 px-7  absolute -right-4"
               
                >
                  <div className="flex items-center gap-4">
                    <div className="p-1.5 bg-primary/15 rounded-md">
                      <CheckCircle size={24} color="#179A40" />
                    </div>

                    <div className="flex flex-col items-center">
                      <p className="text-xl mb-1.5 font-semibold">
                        30% Fraud Reduction
                      </p>
                      <p className="opacity-55">Real customer results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
