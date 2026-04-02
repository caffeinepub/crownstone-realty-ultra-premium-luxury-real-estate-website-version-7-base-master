import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    requirement: "",
  });

  const submitEnquiry = useSubmitEnquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.requirement) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await submitEnquiry.mutateAsync({
        id: `enquiry-${Date.now()}`,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        requirement: formData.requirement,
        timestamp: BigInt(Date.now()),
      });

      toast.success("Thank you! We will contact you shortly.");
      setFormData({ name: "", phoneNumber: "", requirement: "" });
    } catch (_error) {
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            Let us help you find your dream property. Reach out to our team of
            experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-effect luxury-shadow animate-fade-in-up animate-delay-200">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24
                hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirement">Your Requirements</Label>
                  <Textarea
                    id="requirement"
                    name="requirement"
                    placeholder="Tell us about your property requirements..."
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-background font-semibold transition-all duration-300 hover:scale-105"
                  disabled={submitEnquiry.isPending}
                >
                  {submitEnquiry.isPending ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up animate-delay-300">
            {/* Contact Details */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+918799082034"
                      className="text-muted-foreground hover:text-gold transition-colors duration-200"
                    >
                      +91 87990 82034
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <SiWhatsapp className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/918799082034"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-gold transition-colors duration-200"
                    >
                      +91 87990 82034
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:crownstonerealty.1@gmail.com"
                      className="text-muted-foreground hover:text-gold transition-colors duration-200"
                    >
                      crownstonerealty.1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      Gandhinagar, Gujarat
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Actions</CardTitle>
                <CardDescription>Connect with us instantly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gold/30 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                  onClick={() => {
                    window.location.href = "tel:+918799082034";
                  }}
                >
                  <Phone className="mr-3" size={20} />
                  Call Now
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-gold/30 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://wa.me/918799082034",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  <SiWhatsapp className="mr-3" size={20} />
                  WhatsApp
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-gold/30 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                  onClick={() => {
                    window.location.href = "sms:+918799082034";
                  }}
                >
                  <MessageSquare className="mr-3" size={20} />
                  Send SMS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
