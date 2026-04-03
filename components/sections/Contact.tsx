"use client";
import * as React from "react";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Textarea } from "@/components/retroui/Textarea";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import { contactInfo, socialLinks } from "@/app/config/personal";
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("✅ Message sent successfully!");
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
              className="bg-[var(--secondary)] text-[var(--primary)] border-2 border-[var(--border-color)] px-6 py-3 font-bold text-xl"
            >
              <span>📬</span> GET IN TOUCH
            </Badge>
          </div>
          <h2 className="text-6xl font-head text-[var(--text-primary)] mb-6 border-b-4 border-[var(--border-color)] inline-block px-8 py-3">
            Contact Me
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Card */}
              <Card className="border-2 border-[var(--border-color)] hover:shadow-2xl transition-all duration-300">
                <Card.Content className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[var(--primary)] border-2 border-[var(--border-color)] rounded-none flex items-center justify-center">
                      <Mail className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Email</h3>
                  <p className="text-[var(--text-secondary)] mb-3">{contactInfo.email}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--primary)] hover:text-black font-bold w-full"
                  >
                    <a href="mailto:{contactInfo.email}">
                      <Send className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </Card.Content>
              </Card>

              {/* Phone Card */}
              <Card className="border-2 border-[var(--border-color)] hover:shadow-2xl transition-all duration-300">
                <Card.Content className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#e63946] border-2 border-[var(--border-color)] rounded-none flex items-center justify-center">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Phone</h3>
                  <p className="text-[var(--text-secondary)] mb-3">{contactInfo.phone}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[#e63946] hover:text-white font-bold w-full"
                  >
                    <a href="tel:+6281234567890">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Me
                    </a>
                  </Button>
                </Card.Content>
              </Card>

              {/* Location Card */}
              <Card className="border-2 border-[var(--border-color)] hover:shadow-2xl transition-all duration-300">
                <Card.Content className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[var(--secondary)] border-2 border-[var(--border-color)] rounded-none flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-[var(--primary)]" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    Location
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-3">{contactInfo.location}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] font-bold w-full"
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
            <Card className="border-2 border-[var(--border-color)]">
              <Card.Content className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-head text-[var(--text-primary)] mb-2">
                    Send Me a Message
                  </h3>
                  <p className="text-[var(--text-secondary)]">
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
                    <Label className="text-[var(--text-primary)] font-bold">Name</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-2 border-[var(--border-color)] rounded-none bg-[var(--card)] text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label className="text-[var(--text-primary)] font-bold">Email</Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-2 border-[var(--border-color)] rounded-none bg-[var(--card)] text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label className="text-[var(--text-primary)] font-bold">Subject</Label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-2 border-[var(--border-color)] rounded-none bg-[var(--card)] text-[var(--text-primary)]"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Label className="text-[var(--text-primary)] font-bold">Message</Label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Your message here..."
                      required
                      className="border-2 border-[var(--border-color)] rounded-none resize-none bg-[var(--card)] text-[var(--text-primary)]"
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
                      disabled={isSubmitting}
                      className="bg-[var(--primary)] text-black border-2 border-[var(--border-color)] hover:bg-[var(--primary-hover)] font-bold w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--muted)] font-bold w-full"
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
                <h3 className="text-2xl font-head text-[var(--text-primary)] mb-2">
                  Connect With Me
                </h3>
                <p className="text-[var(--text-secondary)]">Follow me on social media</p>
              </div>

              <div className="flex justify-center gap-6 flex-wrap">
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] font-bold px-6 py-3 text-lg"
                >
                  <a
                    href={socialLinks.github}
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
                  className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[#0077b5] hover:text-white font-bold px-6 py-3 text-lg"
                >
                  <a
                    href={socialLinks.linkedin}
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
                  className="border-2 border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[#1da1f2] hover:text-white font-bold px-6 py-3 text-lg"
                >
                  <a
                    href={socialLinks.twitter}
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
