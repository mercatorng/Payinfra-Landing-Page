import { Wallet, Zap, Users, TrendingUp } from "lucide-react";

type IconKey = "Wallet" | "Zap" | "Users" | "TrendingUp";

export const TimelineSection = () => {
  const icons: Record<IconKey, React.ComponentType<{ className?: string }>> = {
    Wallet,
    Zap,
    Users,
    TrendingUp,
  };

  const launch: Array<{
    id: number;
    icon: IconKey;
    title: string;
    description: string;
  }> = [
    {
      id: 1,
      icon: "Wallet",
      title: "Configure",
      description: "Set up your brand and wallet rules",
    },
    {
      id: 2,
      icon: "Zap",
      title: "Connect",
      description: "Integrate with POS & ERP systems",
    },
    {
      id: 3,
      icon: "Users",
      title: "Train",
      description: "Onboard your staff and partners",
    },
    {
      id: 4,
      icon: "TrendingUp",
      title: "Go Live",
      description: "Launch your wallet ecosystem",
    },
  ];
  return (
    <>
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="mb-4 text-5xl h2-font tracking-wide" >
              From Idea to Launch in Weeks.
            </h2>
            <p className="max-w-[652px] text-xl text-black/55">
              We handle the infrastructure, banking, and integrations. You focus
              on delivering value to your customers.
            </p>
          </div>

          <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4">
            {launch.map((card, index) => {
              const Icon = icons[card.icon];
              return (
            <div className="text-center flex flex-col items-center bg-white border border-[#1FCF58]/45 px-4.5 py-7 rounded-[10px]" key={index}>
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-600 rounded-full">
                <span className="text-xl text-white">{card.id}</span>
              </div>
 
               <div className="flex items-center justify-center p-4 mb-4 rounded-lg w-fit bg-primary/15">
                    {Icon && <Icon className="text-primary" />}
                  </div>

              <h3 className="mb-4 text-[15px] font-bold">{card.title}</h3>
              <p className="text-[13px]">
                {card.description}
              </p>
            </div>)
            })}
          </div>
        </div>
      </section>
    </>
  );
};
