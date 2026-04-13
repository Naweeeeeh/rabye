import { MapPin, Phone } from "lucide-react";

const GetHelpSection = () => (
  <section id="get-help" className="bg-card py-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-3">
        <MapPin className="text-primary" size={32} /> Get Help
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Find Animal Bite Treatment Centers (ABTCs) near you for free rabies vaccination and treatment.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Map placeholder */}
        <div className="bg-background rounded-xl overflow-hidden shadow-sm border border-border">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="text-primary mx-auto mb-2" size={32} />
              <p className="text-sm text-muted-foreground font-medium">Interactive Map</p>
              <p className="text-xs text-muted-foreground">Coming soon</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
            <h3 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2"><Phone size={18} className="text-primary" /> Emergency Hotline</h3>
            <p className="text-muted-foreground text-sm mb-3">Department of Health — Philippines</p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Phone size={16} />
              <span>(02) 8651-7800</span>
            </div>
          </div>
          <a href="#first-aid" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity">
            Review First Aid Steps
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default GetHelpSection;
