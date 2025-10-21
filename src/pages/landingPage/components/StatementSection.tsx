import {
  ChartNoAxesColumnIncreasing, 
  Shield,
  Users,
  CreditCard,
  Lock,
  TrendingUp,
} from "lucide-react";

type IconKey =
  | "ChartNoAxesColumnIncreasing"
  | "Shield"
  | "Users"
  | "CreditCard"
  | "Lock"
  | "TrendingUp";

const icons: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  ChartNoAxesColumnIncreasing,
  Shield,
  Users,
  CreditCard,
  Lock,
  TrendingUp,
};

type StatementCard = {
  icon: IconKey;
  title: string;
  description: string;
};

export const StatementSection = () => {
  const statementcards: StatementCard[] = [
    {
      icon: "ChartNoAxesColumnIncreasing",
      title: "Manual Reconciliation",
      description:
        "Bulk fuel payments take days to process, slowing cash flow and causing errors.",
    },
    {
      icon: "Shield",
      title: "Driver Misuse",
      description:
        "Drivers overspend or buy non-fuel items, leading to wastage and weak accountability.",
    },
    {
      icon: "Users",
      title: "Escort Always Required",
      description:
        "Account managers waste hours following drivers to stations just to prevent fraud.",
    },
    {
      icon: "CreditCard",
      title: "Paper Vouchers",
      description:
        "Loyalty and voucher programs still rely on manual codes, making it hard to scale.",
    },
    {
      icon: "Lock",
      title: "Lost Visibility",
      description:
        "Without real-time tracking, fuel marketers can’t trace spending or stop fraud quickly.",
    },
    {
      icon: "TrendingUp",
      title: "Fading Customer Trust",
      description:
        "Outdated systems make customers lose trust and weaken customer loyalty.",
    },
  ];

  return (
    <section className="bg-[#D9D9D9B2]/70 py-16 md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl h2-font " >
            Corporate fuel payments are broken, and every fuel manager feels it
          </h2>
        </div>

        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {statementcards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={index}
                className="px-6 bg-white border rounded-lg py-9 border-black/35 card-shadow"
        
              >
                <div className="flex items-center justify-center p-4 rounded-lg w-fit bg-red-50 mb-11">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="mb-3 font-semibold">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="py-6 mt-4 bg-secondary rounded-2xl">
          <div className="px-2 mx-auto text-center max-w-7xl sm:px-4 lg:px-6">
            <p className="text-white max-w-4xl mx-auto font-semibold text-[28px]">
              PayInfra solves all this with a digital wallet built for fuel
              marketers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
