import HeroSection from "@/app/ui/HeroSection/HeroSection";
import ServicesPreview from "@/app/ui/ServicesPreview/ServicesPreview";
import WorkShowcase from "@/app/ui/WorkShowcase/WorkShowcase";
import ProcessTimeline from "@/app/ui/ProcessTimeline/ProcessTimeline";
import Testimonials from "@/app/ui/Testimonials/Testimonials";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <ServicesPreview />
            <WorkShowcase />
            <ProcessTimeline />
            <Testimonials />
        </main>
    );
}
