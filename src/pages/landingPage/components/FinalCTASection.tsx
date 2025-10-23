import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';



export const FinalCTASection = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    fleetSize: '',
    message: ''
  });


  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success('Thank you! We\'ll be in touch soon.');
    
    // Reset form and close dialog
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      fleetSize: '',
      message: ''
    });
    
  };
 
  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <section className="grid gap-6 md:grid-cols-2" id="form">
        <div className="flex flex-col justify-center bg-gradient-to-r from-green-500 to-green-600">
          <div className="px-4 mx-auto text-center max-w-[40rem] sm:px-6 lg:px-8 py-16 ">
            <div className="flex flex-col items-center text-center mb-14 ">
              <h2 className="mb-4 text-5xl tracking-wide text-white h2-font">
                Ready to Power the Next Fuel Payment Revolution?
              </h2>
              <p className="max-w-[850px] text-xl text-primaryContrast">
                Partner with PayInfra, the infrastructure helping fuel marketers and fleet operators digitize payments and loyalty across Africa 
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="flex items-center gap-2 px-6 py-3 text-xl font-medium text-white border-[3px] transition-all duration-300 rounded-md bg-primary hover:bg-green-700 hover:scale-105 hover:shadow-xl active:scale-95 card-shadow"
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

        <div className="w-full px-4 py-10 mx-auto text-center sm:px-8 lg:px-24 md:py-20">
          <h2 className="mb-3 text-4xl font-bold text-primary">Get Started with PayInfra</h2>
          <p className="mb-8">Fill out the form below and our team will reach out to you within 24 hours.</p>
          {/* 
          <div className="flex flex-col gap-4 px-16">
            <div className="flex flex-row items-center justify-between gap-4 bg-slate-700"><Input title="Full Name" /><Input title="Full Name" /></div>
            <Input title="Full Name" />
            <Input title="Email Address" />
            <Input title="Company/ Brand Name" />
            <Input title="Company Size/ Segment" placeholder="E.g Fuel Marketer, Fleet Operator, Retail Network, etc"/>
          </div> */}

          <form onSubmit={handleSubmit} className="mt-4 space-y-6 ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                placeholder="John"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Work Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="john.doe@company.com"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">
              Company Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="company"
              required
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              placeholder="Your Company Inc."
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Fleet Size */}
            {/* <div className="space-y-2">
              <Label htmlFor="fleetSize">
                Fleet Size <span className="text-red-500">*</span>
              </Label>
              <Select
                required
                value={formData.fleetSize}
                onValueChange={(value) => handleChange('fleetSize', value)}
              >
                <SelectTrigger id="fleetSize">
                  <SelectValue placeholder="Select fleet size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 vehicles</SelectItem>
                  <SelectItem value="11-50">11-50 vehicles</SelectItem>
                  <SelectItem value="51-100">51-100 vehicles</SelectItem>
                  <SelectItem value="101-500">101-500 vehicles</SelectItem>
                  <SelectItem value="500+">500+ vehicles</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Tell us about your needs
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="What are your main challenges with fuel management?"
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-8 py-3 text-white transition-all duration-300 bg-green-600 rounded-md hover:bg-green-700 hover:scale-105 active:scale-95 card-shadow"
            >
              Submit Request
            </button>
            
          </div>
        </form>
        </div>
      </section>
    </>
  );
};
