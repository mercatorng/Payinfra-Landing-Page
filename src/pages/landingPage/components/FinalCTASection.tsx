import { ArrowRight } from "lucide-react";
import { Input } from "../../../components/Input";

interface FinalCTASectionProps {
  openModal: (value: boolean) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  openModal,
}) => {
  return (
    <>
      <section className=" grid gap-6 md:grid-cols-2">
        <div className="bg-gradient-to-r from-green-500 to-green-600 justify-center flex flex-col">
          <div className="px-4 mx-auto text-center max-w-[40rem] sm:px-6 lg:px-8 py-16 ">
            <div className="flex flex-col items-center mb-14 text-center ">
              <h2 className="mb-4 text-5xl text-white tracking-wide h2-font">
                Ready to Power Your Corporate Customers?
              </h2>
              <p className="max-w-[850px] text-xl text-primaryContrast">
                Join fuel marketers building their own wallet and payment
                ecosystems with PayInfra infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="flex items-center gap-2 px-6 py-3 text-xl font-medium text-white border-[3px] transition-all duration-300 rounded-md bg-primary hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95 card-shadow"
                onClick={() => openModal(true)}
              >
                Request a Demo{" "}
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="px- mx-auto text-center w-full sm:px-6 lg:px-8 py-10 ">
          <h2 className="font-bold text-4xl text-primary mb-3">Lead Capture Form</h2>
          <div className="gap-4 flex flex-col px-16">
            <Input title="Full Name" />
            <Input title="Email Address" />
            <Input title="Company/ Brand Name" />
            <Input title="Company Size/ Segment" placeholder="E.g Fuel Marketer, Fleet Operator, Retail Network, etc"/>
          </div>
        </div>
      </section>
    </>
  );
};
