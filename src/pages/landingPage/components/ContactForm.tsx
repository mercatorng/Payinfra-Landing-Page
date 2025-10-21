import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../components/ui/dialog';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { toast } from "sonner";



interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
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
    onOpenChange(false);
  };
 
  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle>Get Started with PayInfra</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will reach out to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

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
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="px-8 py-3 text-gray-700 transition-all duration-300 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
