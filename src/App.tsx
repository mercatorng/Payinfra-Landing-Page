import React from 'react';
import { 
  Wallet, 
  CreditCard, 
  Zap, 
  Gift, 
  BarChart3, 
  Shield, 
  Fuel, 
  Truck, 
  ShoppingBag, 
  Receipt, 
  Building, 
  Users,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const features = [
    {
      icon: Wallet,
      title: "Branded Wallets & Apps",
      description: "Launch mobile (iOS/Android) and web apps under your brand with full control over UI and user experience."
    },
    {
      icon: CreditCard,
      title: "Virtual Accounts (VAPP)",
      description: "Automated reconciliation for each wallet via virtual account IDs — no manual matching, ever."
    },
    {
      icon: Zap,
      title: "Flexible Payment Options",
      description: "Enable top-ups via bank transfer, card, QR/NFC, or third-party wallets like Apple Pay."
    },
    {
      icon: Gift,
      title: "Built-in Loyalty Engine",
      description: "Create points systems, in-app discounts, vouchers, and personalized offers."
    },
    {
      icon: BarChart3,
      title: "Merchant & Backoffice Dashboard",
      description: "Track transactions in real time, manage user accounts, and access analytics across channels."
    },
    {
      icon: Shield,
      title: "Secure & Scalable Architecture",
      description: "PCI-DSS compliant, tokenized, API-first deployable on cloud or on-prem."
    }
  ];

  const useCases = [
    {
      icon: Fuel,
      title: "Fuel Stations & C-Stores",
      description: "Customers pay at pumps or in-store, earn rewards, and track receipts all in-app."
    },
    {
      icon: Truck,
      title: "Fleet & Logistics",
      description: "Issue fuel wallets to drivers, track corporate spend, and manage payments per location."
    },
    {
      icon: ShoppingBag,
      title: "Retail & QSR Chains",
      description: "Offer in-app checkouts, loyalty rewards, and promotions to boost repeat purchases."
    },
    {
      icon: Receipt,
      title: "Utility & Bill Payments",
      description: "Enable recurring or one-click payments while automating reconciliation with virtual IDs."
    },
    {
      icon: Building,
      title: "Corporate Allowances & Payroll",
      description: "Disburse stipends or benefits via branded digital cards with transaction controls."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Full Brand Ownership",
      description: "Your design. Your experience. Your customer relationship, not a third party's."
    },
    {
      icon: Zap,
      title: "Faster Time-to-Market",
      description: "Launch a scalable wallet product in weeks, not months."
    },
    {
      icon: CreditCard,
      title: "Lower Transaction Costs",
      description: "Cut out intermediaries and reduce fees with a closed-loop system."
    },
    {
      icon: BarChart3,
      title: "Rich First-Party Data",
      description: "Unlock actionable insights to drive retention, upsells, and smarter promos."
    }
  ];

  const industries = [
    "Energy & Fuel Retail",
    "Logistics & Transport",
    "Retail & FMCG Chains",
    "Fintechs & Neobanks",
    "Utilities & Billers",
    "Large Corporates"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PayInfra</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">Features</a>
              <a href="#use-cases" className="text-gray-700 hover:text-teal-600 transition-colors">Use Cases</a>
              <a href="#benefits" className="text-gray-700 hover:text-teal-600 transition-colors">Why PayInfra</a>
              <a href="#industries" className="text-gray-700 hover:text-teal-600 transition-colors">Industries</a>
              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Request Demo
              </button>
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">Features</a>
              <a href="#use-cases" className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">Use Cases</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">Why PayInfra</a>
              <a href="#industries" className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors">Industries</a>
              <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ccfbf1%22 fill-opacity=%220.3%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Turn Every Transaction Into a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                Brand Experience
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Launch Your Own Branded Wallet & Payment Ecosystem with PayInfra, a branded virtual wallet platform that powers seamless payments, loyalty, and data-driven growth.
            </p>
            <div className="text-lg text-gray-500 mb-8 font-medium">
              Your Brand. Your Wallet. Every Transaction, On Your Terms.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg flex items-center">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Power Your Wallet Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build the operational simplicity your business needs with our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:border-teal-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              One Platform, Multiple Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Versatile solutions that adapt to your industry needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PayInfra Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why PayInfra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The competitive advantages that set us apart
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Modern Transaction-Heavy Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Payments Should Do More Than Process Transactions
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                Traditional payment systems are generic, disconnected, and loyalty-blind. Businesses miss out on engagement, insights, and efficiency.
              </p>
              <div className="text-2xl font-semibold text-teal-600 mb-8">
                PayInfra fixes this.
              </div>
              <p className="text-lg text-gray-700">
                We turn payments into a brand-owned engagement engine with automated reconciliation, loyalty features, and seamless omnichannel integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Owning Your Payment Experience Today
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Let us help you launch your branded wallet and unlock the full value of every transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Speak to Sales
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <Wallet className="h-8 w-8 text-teal-400" />
                <span className="ml-2 text-xl font-bold">PayInfra</span>
              </div>
              <p className="text-gray-400 mb-4">
                Powering the future of branded payment experiences
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Product Overview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Use Cases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Meet the Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 PayInfra (Powered by Mercator). All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;