import { useLanguage } from "../lib/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();
    return (
    <footer className="bg-[#142C14] py-10 border-t-4 border-[#2D5128]">
        <div className="container px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Brand and Tagline */}
                <div className="text-center md:text-left">
                    <p className="font-heading font-black text-2xl tracking-tight text-[#E4EB9C]">Ra-Byes!</p>
                    <p className="text-sm font-medium text-[#E4EB9C]/70 mt-1">
                        {t("Saying goodbye to rabies, one bite at a time.")}
                    </p>
                </div>

                <div className="text-center md:text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8DA750] mb-1">
                        {t("A Health Education Initiative")}
                    </p>
                </div>

            </div>
        </div>
    </footer>
    );
};

export default Footer;