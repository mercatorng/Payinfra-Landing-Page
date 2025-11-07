import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";

export const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const payload = {
  //     to: ["payinfra@mercator.ng"],
  //     subject: "Test Email from Payinfra",
  //     from: "website@mercator.ng",
  //     senderName: "Payinfra",
  //     message: `
  //       Hello this is a test email from payinfra:
        
  //        Name: ${formData.firstName} ${formData.lastName}
  //        Email: ${formData.email}
  //        Phone: ${formData.phone}
  //        Company: ${formData.company}

  //        Message:
  //       ${formData.message || "No message provided."}
  //     `,
  //   };

  //   try {
  //     const response = await fetch("http://oliverdejohnson-001-site1.gtempurl.com/api/Message/Send", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (response.ok) {
  //       toast.success("✅ Thank you! We'll be in touch soon.");
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         company: "",
  //         phone: "",
  //         fleetSize: "",
  //         message: "",
  //       });
  //     } else {
  //       toast.error("❌ Failed to send message. Please try again.");
  //     }
  //   } catch (err) {
  //     console.error("Email send error:", err);
  //     toast.error("Something went wrong. Please try again.");
  //   }
  // };

   const [loading, setLoading] = useState(false);

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
     
      const res = await fetch("https://payinf.onrender.com/api/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.firstName,
          lastname: formData.lastName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          request: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("✅ Thank you! We'll be in touch soon.");
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: any) {
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <section className="grid gap-6 md:grid-cols-2" id="form">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center bg-gradient-to-r from-green-500 to-green-600">
          <div className="px-4 mx-auto text-center max-w-[40rem] sm:px-6 lg:px-8 py-16 ">
            <div className="flex flex-col items-center text-center mb-14 ">
              <h2 className="mb-4 text-5xl tracking-wide text-white h2-font">
                Ready to Power the Next Fuel Payment Revolution?
              </h2>
              <p className="max-w-[850px] text-xl text-primaryContrast">
                Partner with PayInfra, the infrastructure helping fuel marketers and fleet operators digitize payments and loyalty across Africa.
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

        {/* RIGHT SIDE FORM */}
        <div className="w-full px-4 py-10 mx-auto text-center sm:px-8 lg:px-24 md:py-20">
          <h2 className="mb-3 text-4xl font-bold text-primary">
            Get Started with PayInfra
          </h2>
          <p className="mb-8">
            Fill out the form below and our team will reach out to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 space-y-6">
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
                  onChange={(e) => handleChange("firstName", e.target.value)}
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
                  onChange={(e) => handleChange("lastName", e.target.value)}
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
                onChange={(e) => handleChange("email", e.target.value)}
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
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Your Company Inc."
              />
            </div>

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
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your needs</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
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
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
