import { ArrowRight } from 'lucide-react'

interface FinalCTASectionProps {
  openModal: (value: boolean) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ openModal }) => {
  return (
    <>
    <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-white" >
              Ready to Power Your Corporate Customers?
            </h2>
            <p className="max-w-[850px] text-xl text-primaryContrast">
              Join fuel marketers building their own wallet and payment ecosystems with 
PayInfra infrastructure.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
                  className="flex items-center gap-2 px-12 py-4 text-2xl font-medium text-white transition-all duration-300 rounded-md bg-primary hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95 card-shadow"
                  onClick={()=>openModal(true)}
                >
                  Request a Demo{" "}
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <button
                  className="px-12 py-4 text-2xl font-medium text-white transition-all duration-300 border-white rounded-md border-3 hover:bg-gray-50 hover:scale-105 hover:shadow-lg active:scale-95 card-shadow"
                >
                  Partner with Us
                </button>
          </div>
        </div>
      </section>
    </>
  )
}
