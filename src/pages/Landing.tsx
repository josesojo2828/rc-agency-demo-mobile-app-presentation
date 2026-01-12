import { Hero } from "../components/layout/Hero";
import { Features } from "../components/layout/Features";
import { Screens } from "../components/layout/Screens";
import { Testimonials } from "../components/layout/Testimonials";
import { CTA } from "../components/layout/CTA";

export function Landing() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <div id="features">
                <Features />
            </div>
            <div id="screens">
                <Screens />
            </div>
            <div id="reviews">
                <Testimonials />
            </div>
            <CTA />
        </div>
    );
}
