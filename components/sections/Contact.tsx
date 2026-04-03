"use client";
import * as React from "react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Textarea } from "@/components/retroui/Textarea";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("✅ Message sent successfully!");

      // Clear status after 2 seconds
      setTimeout(() => {
        setSubmitStatus("");
      }, 2000);
    } catch (error) {
      setSubmitStatus("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Badge
              variant="default"
              className="bg-black text-[#ffdb33] border-2 border-black px-6 py-3 font-bold text-xl"
            >
              <span>📬</span> GET IN TOUCH
            </Badge>
          </div>
          <h2 className="text-6xl font-head text-black mb-6 border-b-4 border-black inline-block px-8 py-3">
            Contact Me
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </p>
        </div>

        {/* Contact Grid - Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Card */}
              <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300">
                <Card.Content className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#ffdb33] border-2 border-black rounded-none flex items-center justify-center">
                      <Mail className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Email</h3>
                  <p className="text-gray-700 mb-3">sergio@example.com</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-[#ffdb33] hover:text-black font-bold w-full"
                  >
                    <a href="mailto:sergio@example.com">
                      <Send className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </Card.Content>
              </Card>

              {/* Phone Card */}
              <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300">
                <Card.Content className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#e63946] border-2 border-black rounded-none flex items-center justify-center">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Phone</h3>
                  <p className="text-gray-700 mb-3">+62 812-3456-7890</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-[#e63946] hover:text-white font-bold w-full"
                  >
                    <a href="tel:+6281234567890">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Me
                    </a>
                  </Button>
                </Card.Content>
              </Card>

              {/* Location Card */}
              <Card className="border-2 border-black hover:shadow-2xl transition-all duration-300">
                <Card.Content className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#000000] border-2 border-black rounded-none flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-[#ffdb33]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Location
                  </h3>
                  <p className="text-gray-700 mb-3">Jakarta, Indonesia</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-black text-black hover:bg-[#000000] hover:text-[#ffdb33] font-bold w-full"
                  >
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View Map
                    </a>
                  </Button>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            <Card className="border-2 border-black">
              <Card.Content className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-head text-black mb-2">
                    Send Me a Message
                  </h3>
                  <p className="text-gray-700">
                    Fill out the form below and I'll get back to you as soon as
                    possible!
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-6"
                >
                  <div className="flex flex-col space-y-2">
                    <Label className="text-black font-bold">Name</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-2 border-black rounded-none"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label className="text-black font-bold">Email</Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-2 border-black rounded-none"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label className="text-black font-bold">Subject</Label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-2 border-black rounded-none"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label className="text-black font-bold">Message</Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Your message here..."
                      required
                      className="border-2 border-black rounded-none resize-none"
                    />
                  </div>

                  {submitStatus && (
                    <div
                      className={`p-4 rounded-none font-bold text-center ${
                        submitStatus.includes("✅")
                          ? "bg-[#e6f7ee] text-green-700"
                          : "bg-[#fff2f2] text-red-700"
                      }`}
                    >
                      {submitStatus}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-[#ffdb33] text-black border-2 border-black hover:bg-[#ffcc00] font-bold w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 border-black text-black hover:bg-gray-200 font-bold w-full"
                      onClick={() => {
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                        setSubmitStatus("");
                      }}
                    >
                      Clear
                    </Button>
                  </div>
                </form>
              </Card.Content>
            </Card>

            {/* Social Media Links */}
            <div>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-head text-black mb-2">
                  Connect With Me
                </h3>
                <p className="text-gray-700">Follow me on social media</p>
              </div>

              <div className="flex justify-center gap-6 flex-wrap">
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-black hover:text-[#ffdb33] font-bold px-6 py-3 text-lg"
                >
                  <a
                    href="https://github.com/sergio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6 mr-2" />
                    GitHub
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-[#0077b5] hover:text-white font-bold px-6 py-3 text-lg"
                >
                  <a
                    href="https://linkedin.com/in/sergio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6 mr-2" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-[#1da1f2] hover:text-white font-bold px-6 py-3 text-lg"
                >
                  <a
                    href="https://twitter.com/sergio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-6 w-6 mr-2" />
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
