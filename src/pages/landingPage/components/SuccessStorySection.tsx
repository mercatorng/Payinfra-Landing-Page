
import { CheckCircle } from "lucide-react";
import arrowDown from "../../../assets/Vector.png";

export const SuccessStorySection = () => {
  const point = [
    {
      title: "30%",
      description: "Reduction in fuel spend fraud",
    },
    {
      title: "Instant",
      description: "Reconciliation and reporting",
    },
    {
      title: "Real-time",
      description: "Control over every driver and vehicle transaction",
    },
  ];
  return (
    <>
      <section className="bg-secondary">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-24">
          <div className="flex flex-col items-center justify-center mb-20 gap-7">
            <span className="px-8 py-2 font-medium border-2 rounded-full text-primary border-primary bg-white/17 ">
              Success Story
            </span>
            <h2 className="text-5xl text-white h2-font " >
              Real Results, Real Infrastructure.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 ">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6 max-w-[373px]">
                <h1 className="text-2xl font-bold text-white">
                  Northwest Petroleum
                </h1>
                <p className="text-white">
                  Northwest Petroleum leveraged PayInfra to launch
                  <span className="font-bold text-primary"> NW Vita</span>, a
                  corporate wallet system that changed how their business
                  clients pay for fuel:
                </p>
              </div>

              <div className="flex flex-col gap-7">
                {point.map((keypoint, index) => (
                  <div className="flex flex-row gap-5" key={index}>
                    <CheckCircle size={26} className="text-primary" />
                    <div>
                      <h1 className="text-xl font-bold text-primaryContrast">
                        {keypoint.title}
                      </h1>
                      <p className="text-white">{keypoint.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="font-bold px-4 py-5 text-white text-[17px] border rounded-[10px] bg-white/10 ">
                What Northwest achieved, your brand can too, with your own name,
                design, and data.
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  className="flex items-center gap-2 px-12 py-4 text-xl font-semibold text-black transition-all duration-300 bg-white rounded-md card-shadow hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95"
        
                >
                  Speak to Sales{" "}
                  {/* <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  /> */}
                </button>
              </div>
            </div>
            <div className="border border-white/30 px-8 py-16 rounded-[20px] h-fit flex flex-col items-center gap-8">
              <div className="flex flex-col py-7 px-6 gap-4 bg-white/20 border border-primaryContrast/50 rounded-[10px] w-full">
               <h2 className="font-bold text-primary">Before PayInfra</h2>

               <ul className="text-white list-disc list-inside">
                <li>Manual fuel voucher distribution</li>
                <li>Hours spent on reconciliation</li>
                <li>Frequent unauthorized purchases</li>
                <li>Zero real-time visibility</li>
               </ul>
              </div>
               <img src={arrowDown} alt="" className="" width={32}/>
                <div className="flex flex-col w-full py-7 px-6 gap-4 bg-primaryContrast/45 border border-primaryContrast/50 rounded-[10px]">
               <h2 className="font-bold text-primary">After PayInfra</h2>

               <ul className="text-white list-disc list-inside">
                <li>Digital wallet ecosystem</li>
                <li>Instant automated reconciliation</li>
                <li>Strict spend controls enforced</li>
                <li>Complete transaction visibility</li>
               </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
