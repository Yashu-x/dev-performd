"use client";
import BrandsSection from "../../components/socialMediaAds/BrandsSection";
import FAQSection from "../../components/contactUs/FAQSection";
import ReviewsInSocialMediaAdsPage from "../../components/socialMediaAds/ReviewsInSocialMediaAdsPage";
import WorkflowSection from "../../components/socialMediaAds/WorkflowSection";
import SocialMediaAdsSection from "../../components/socialMediaAds/SocialMediaAdsSection";

const stepsData = [
    {
        title: "Audience & Data Analysis",
        description:
            "We begin by deep-diving into your existing social data and target audience behavior. We identify where your customers spend their time and what content resonates with them most.",
    },
    {
        title: "Creative Strategy & Campaign Setup",
        description:
            "Once we have the data, we develop a tailored creative strategy. This includes designing high-impact ad creatives and setting up complex audience segments for precise targeting and retargeting.",
    },
    {
        title: "Scale & Optimize",
        description:
            "We launch the campaigns and continuously monitor performance. Through constant A/B testing of creatives and targeting, we scale winning campaigns to maximize your ROI and business growth.",
    },
];

export default function socialMediaAds() {
    return (
        <div className="bg-background">
            <SocialMediaAdsSection
                tag="Social Media Marketing"
                title="Transform Your Brand with Strategic"
                highlight="Social Media Ads"
                description="Unlock the power of social platforms. We help you reach the right audience, at the right time, with the right message to drive conversions and scale your brand."
                buttonText="Get Started"
                imageSrc=""
            />
            <WorkflowSection steps={stepsData} />
            <BrandsSection />
            <ReviewsInSocialMediaAdsPage />
            <FAQSection />
        </div>
    );
}
