import { motion } from "framer-motion";
import { PhoneMockup } from "../ui/PhoneMockup";

const SCREENS = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=700",
        title: "Home Feed",
        desc: "Stay updated with your friends."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=700",
        title: "Discover",
        desc: "Find new communities."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=700",
        title: "Profile",
        desc: "Express yourself fully."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=700",
        title: "Chat",
        desc: "Private secure messaging."
    }
];

export function Screens() {
    return (
        <section className="py-24 bg-base-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="badge badge-secondary badge-outline mb-4">INTERFACE</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Beautifully Crafted</h2>
                    <p className="opacity-60 max-w-2xl mx-auto">Designed with pixel-perfect precision for an unmatched user experience.</p>
                </div>

                {/* Horizontal Scroll / Carousel Effect */}
                <div className="flex flex-wrap justify-center gap-10">
                    {SCREENS.map((screen, index) => (
                        <motion.div
                            key={screen.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group"
                        >
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                <div className="scale-75 md:scale-90 origin-top">
                                    <PhoneMockup image={screen.image} />
                                </div>
                            </div>
                            <div className="text-center mt-[-40px]">
                                <h3 className="text-xl font-bold">{screen.title}</h3>
                                <p className="text-sm opacity-60">{screen.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
