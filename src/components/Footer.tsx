const Footer = () => (
  <footer className="bg-green-600 text-white py-8">
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand and Tagline */}
        <div className="text-center md:text-left">
          <p className="font-heading font-black text-xl tracking-tight">Ra-Byes!</p>
          <p className="text-sm font-medium text-green-50">
            Saying goodbye to rabies, one bite at a time.
          </p>
        </div>

        {/* Legal and Initiative Info */}
        <div className="text-center md:text-right">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-100 mb-1">
            A Health Education Initiative
          </p>
          <p className="text-[10px] text-green-200 font-medium">
            © {new Date().getFullYear()} • Dedicated to a Rabies-Free Philippines
          </p>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;