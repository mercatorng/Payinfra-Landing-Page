import {
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  Zap,
  Lock,
  SquareCheck
} from "lucide-react";

export const BrandSection = () => {
  const icons = {
    ChartNoAxesColumnIncreasing,
    ShieldCheck,
    Lock,
    Zap,
  };

  const weprovide = [
    {
      icon: "Zap",
      title: "The Technology",
      description: "Banking integrations, security, compliance",
    },
    {
      icon: "ShieldCheck",
      title: "The Infrastructure",
      description: "Scalable backend systems and APIs",
    },
    {
      icon: "Lock",
      title: "The Security",
      description: "PCI-compliant payment processing",
    },
    {
      icon: "ChartNoAxesColumnIncreasing",
      title: "The Support",
      description: "24/7 technical assistance and updates",
    },
  ];

  const youown = [
    {
     
      title: "Your Brand/Wallet Identity",
      description: "Branded wallet apps, terminals, and dashboards",
    },
    {
    
      title: "Your Clients",
      description: "Manage and serve every business account directly",
    },
    {
      title: "Your Data",
      description: "Real-time insights into usage, spend, and engagement",
    },
    {
      title: "Your Rules",
      description: "Set spending policies, product limits, and regional control",
    },
  ];
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="mb-4 text-5xl h2-font " >
              We're the Infrastructure, You're the Brand.
            </h2>
            <p className="max-w-[652px] text-xl text-black/55">
              PayInfra gives you full ownership and visibility over your brand,
              wallet, and customer relationships; we just stay under the hood.
            </p>
          </div>

          <div className="grid gap-12 mb-16 md:grid-cols-2">
            <div className="bg-[#ACF7C540] px-7 py-12 rounded-[20px] flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-primary">You Own</h2>

                 {youown.map((keypoint, index) => (
                  <div className="gap-5.5 flex flex-row" key={index}>
                    <div className="p-3.5 w-fit bg-white rounded-lg flex items-center justify-center">
                        <SquareCheck className="text-primary" />
                    
                  </div>
                <div className="">
                  <h3 className="font-semibold ">{keypoint.title}</h3>
                  <p className="text-gray-600">{keypoint.description}</p>
                  </div>
                  </div>
                ))}
            </div>
            <div className="bg-[#5ACDF729] px-7 py-12 rounded-[20px] flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-primary">We Provide</h2>
            {weprovide.map((card, index) => {
              const Icon = icons[card.icon as keyof typeof icons];
              return (
                <div
                  key={index}
                  className="flex flex-row gap-5.5 "
                >
                  <div className="p-3.5 w-fit bg-white rounded-lg flex items-center justify-center">
                    {Icon && <Icon />}
                  </div>
                  <div className="">
                  <h3 className="font-semibold ">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          <div className="py-12 mt-4 bg-secondary rounded-2xl">
            <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
              <p className="max-w-4xl mx-auto text-3xl font-semibold text-white">
                We power the technology, you power the experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
