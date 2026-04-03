import { Card } from "@/components/retroui/Card";
import Image from "next/image";

export function ProfileCard() {
  return (
    <Card className="max-w-md mx-auto border-2 border-black shadow-2xl hover:shadow-xl transition-all duration-300">
      <Card.Header className="p-0 border-b-2 border-black">
        <div className="relative w-full h-64 bg-linear-to-br from-[#ffdb33] to-[#fae583]">
          {/* Placeholder untuk foto profil - ganti dengan path foto Anda */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-[#000000] border-4 border-[#ffdb33] rounded-full flex items-center justify-center">
              <span className="text-6xl font-head text-[#ffdb33]">S</span>
            </div>
          </div>

          {/* Border decoration */}
          <div className="absolute inset-0 border-4 border-black rounded-t-lg pointer-events-none" />
        </div>
      </Card.Header>

      <Card.Content className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-3xl font-head text-black mb-2 border-b-2 border-black inline-block px-2">
              SERGIO
            </h3>
            <p className="text-lg font-bold text-black">Software Developer</p>
          </div>

          <div className="bg-[#ffdb33] border-2 border-black p-4 rounded-none">
            <p className="text-black text-center font-bold">
              Fresh Graduate Information Systems
            </p>
          </div>

          <div className="border-2 border-black p-4 bg-white">
            <p className="text-black font-bold text-center">
              📍 Available for Work
            </p>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
