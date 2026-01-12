import { Share2, ShieldCheck, Zap, Globe } from "lucide-react";

export function Features() {
    const FEATURES = [
        {
            icon: <Zap className="w-8 h-8 text-primary" />,
            title: "Lightning Fast",
            desc: "Optimized for speed and performance."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Private & Secure",
            desc: "End-to-end encryption for all messages."
        },
        {
            icon: <Share2 className="w-8 h-8 text-primary" />,
            title: "Easy Sharing",
            desc: "Share moments instantly with friends."
        },
        {
            icon: <Globe className="w-8 h-8 text-primary" />,
            title: "Global Reach",
            desc: "Connect with communities worldwide."
        }
    ];

    return (
        <section className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose AppVibe?</h2>
                    <p className="opacity-60 max-w-2xl mx-auto">Build meaningful connections with tools designed for the modern social experience.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-base-200/50 hover:bg-base-200 transition-colors border border-white/5">
                            <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                            <p className="text-sm opacity-60">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
