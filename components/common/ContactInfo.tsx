import { Card } from "@/components/retroui/Card";
import { Button } from "@/components/retroui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
}

export function ContactInfo({ email, phone, location }: ContactInfoProps) {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: email,
      href: `mailto:${email}`,
      label: "Send Email",
      color: "#ffdb33",
    },
    {
      icon: Phone,
      title: "Phone",
      value: phone,
      href: `tel:${phone}`,
      label: "Call Me",
      color: "#e63946",
    },
    {
      icon: MapPin,
      title: "Location",
      value: location,
      href: "https://maps.google.com",
      label: "View Map",
      color: "#000000",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {contactItems.map((item, idx) => (
        <Card
          key={idx}
          className="border-2 border-black hover:shadow-2xl transition-all duration-300"
        >
          <Card.Content className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 border-2 border-black rounded-none flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <item.icon
                  className="h-8 w-8"
                  style={{
                    color: item.color === "#000000" ? "#ffdb33" : "black",
                  }}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 mb-3">{item.value}</p>
            <Button
              asChild
              variant="outline"
              className="border-2 border-black text-black hover:bg-[#ffdb33] hover:text-black font-bold w-full"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <Send className="h-4 w-4 mr-2" />
                {item.label}
              </a>
            </Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
