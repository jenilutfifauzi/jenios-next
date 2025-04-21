import { AnimatedHero } from "@/components/AnimatedHero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TabsDemo } from "@/components/ui/TabsDemo";

export default function Home() {
  return (
    <div className="min-h-screen space-y-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="py-1">
          <div>
            <AnimatedHero />
          </div>
        </div>
        {/* End of Hero section */}
      </div>
      
      <div className="container mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 mt-16">
        {/* Tabs Section */}
        <TabsDemo />
      </div>

      <div className="container mx-auto mt-24 max-w-7xl px-8 sm:px-6 lg:px-8">
        {/* Feature Section */}
        <FeaturesSection />
      </div>
    </div>
  );
}
