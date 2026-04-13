import { Check, ShieldCheck } from "lucide-react";

const items = [
  "Vaccinate your pets regularly",
  "Avoid approaching stray animals",
  "Teach children not to tease dogs",
  "Report stray animal sightings",
  "Supervise children around animals",
  "Keep your pets leashed in public",
];

const PreventionSection = () => (
  <section id="prevention" className="bg-white py-20 border-t border-slate-100">
    <div className="container max-w-5xl px-4">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
          <ShieldCheck className="text-green-600" size={36} /> 
          Prevention is Key
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mt-4 text-lg">
          Simple habits can protect you, your family, and your community from the threat of rabies.
        </p>
      </div>

      {/* Checklist Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div 
            key={item} 
            className="group flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-green-900/5 hover:border-green-200"
          >
            {/* Neat Check Indicator */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center transition-colors group-hover:bg-green-600">
              <Check className="text-green-600 transition-colors group-hover:text-white" size={18} strokeWidth={3} />
            </div>
            
            <p className="text-sm font-bold text-slate-700 leading-snug">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Visual Note */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 border border-green-100">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          <p className="text-xs font-black text-green-700 uppercase tracking-widest">
            Be a Responsible Pet Owner
          </p>
        </div>
      </div>

    </div>
  </section>
);

export default PreventionSection;