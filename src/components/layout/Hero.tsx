import { motion } from "framer-motion";
import { AppStoreButtons } from "../ui/AppStoreButtons";
import { PhoneMockup } from "../ui/PhoneMockup";

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-base-100 pt-16 pb-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <span className="badge badge-primary badge-outline mb-6 font-bold tracking-wider">VERSION 2.0 AVAILABLE</span>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            Experience the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Future of Social</span>
                        </h1>
                        <p className="text-xl opacity-70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Connect with friends, share moments, and discover communities like never before.
                            Built for speed, privacy, and pure enjoyment.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <AppStoreButtons />
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="font-bold">Featured on:</span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-6" alt="Google" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-6" alt="Amazon" />
                        </div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-secondary/30 blur-[60px] rounded-full transform scale-90" />
                            <PhoneMockup image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=700" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
