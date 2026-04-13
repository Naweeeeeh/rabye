import { Check, ShieldCheck } from "lucide-react";

const items = [
  "Vaccinate your pets regularly",
  "Avoid approaching stray or unfamiliar animals",
  "Teach children not to tease or provoke dogs",
  "Report stray animal sightings to local authorities",
  "Supervise children around animals at all times",
  "Keep your pets leashed in public spaces",
];

const PreventionSection = () => (
  <section id="prevention" className="bg-background py-20">
    <div className="container max-w-3xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-3">
        <ShieldCheck className="text-primary" size={32} /> Prevention
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        Simple habits can protect you, your family, and your community from rabies.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 bg-card rounded-xl p-5 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="text-secondary-foreground" size={14} />
            </div>
            <p className="text-sm text-foreground">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PreventionSection;
