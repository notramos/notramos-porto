"use client";
export default function TestPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl mb-8 font-head">CSS Variables Test</h1>

      <div className="space-y-4">
        {/* Test Background Colors */}
        <div className="flex gap-4">
          <div className="w-32 h-32 bg-(--primary)er-2 border-black">
            Primary
          </div>
          <div className="w-32 h-32 bg-(--primary-hover) border-2 border-black">
            Hover
          </div>
          <div className="w-32 h-32 bg-(--secondary) border-2 border-black">
            Secondary
          </div>
          <div className="w-32 h-32 bg-(--accent) border-2 border-black">
            Accent
          </div>
        </div>

        {/* Test Text Colors */}
        <div className="flex gap-4 p-4 bg-(--card) border-2 border-black">
          <span className="text-(--primary-foreground)">Primary Text</span>
          <span className="text-(--secondary-foreground)">Secondary Text</span>
        </div>

        {/* Test Button dengan Inline Style */}
        <button
          style={{
            backgroundColor: "#ffdb33",
            color: "#000",
            border: "2px solid #000",
            padding: "12px 24px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffcc00")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffdb33")
          }
        >
          Test Inline Yellow
        </button>

        {/* Test Button dengan className langsung */}
        <button className="bg-[#ffdb33] text-black border-2 border-black px-6 py-3 font-bold hover:bg-[#ffcc00] shadow-md">
          Test className Yellow
        </button>
      </div>
    </div>
  );
}
