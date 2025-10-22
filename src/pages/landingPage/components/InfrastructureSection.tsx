import React from "react";
import {
  ChartNoAxesColumnIncreasing,
  Shield,
  Wallet,
  CreditCard,
  TrendingUp,
} from "lucide-react";

type IconsType = {
  [key: string]: React.ElementType;
};

const icons: IconsType = {
  Wallet,
  Shield,
  CreditCard,
  TrendingUp,
  ChartNoAxesColumnIncreasing,
};

export const InfrastructureSection = () => {
  const statementcards = [
    {
      icon: "Wallet",
      title: "Corporate Wallet Core",
      description:
        "Manage business clients, allocate funds, and track balances in real time.",
    },
    {
      icon: "Shield",
      title: "Spend Control Engine",
      description: "Define limits by driver, vehicle, or plate.",
    },
    {
      icon: "CreditCard",
      title: "Payment & POS Integration",
      description: "Accept wallet or code-based payments instantly.",
    },
    {
      icon: "TrendingUp",
      title: "Loyalty Framework",
      description: "Reward repeat corporate clients and fleet drivers.",
    },
    {
      icon: "ChartNoAxesColumnIncreasing",
      title: "Analytics Dashboard",
      description: "Real-time visibility for smarter business decisions.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-5xl h2-font tracking-wide" >
            The Infrastructure Behind Modern Corporate Fuel Ecosystems
          </h2>
          <p className="text-xl text-black/55">
            PayInfra gives your customers a customized, branded payment
            experience built around your business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {statementcards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={index}
                className="px-6 bg-white border rounded-lg card-shadow py-9 border-[#00000040]"
                
              >
                <div className="flex items-center justify-center p-4 border rounded-lg w-fit bg-primary/15 border-primary/15 mb-11">
                  {Icon && <Icon className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="mb-3 font-semibold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#B6E6F754] py-8 rounded-2xl mx-6 mt-16">
          <div className="px-2 mx-auto text-center max-w-7xl sm:px-4 lg:px-6">
            <p className="max-w-5xl mx-auto font-bold text-[28px]">
              Deploy in weeks, Integrate everywhere and Scale without limits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
