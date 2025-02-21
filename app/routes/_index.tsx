import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import SearchSection from "~/components/home/SearchSection";
import HowItWorks from "~/components/home/HowItWorks";
import FeaturedSection from "~/components/home/FeaturedSection";
import CityGrid from "~/components/home/CityGrid";

export const loader = async () => {
  return json({
    featured: [
      // Add featured vendors data here
    ],
    cities: [
      // Add cities data here
    ],
  });
};

export default function Index() {
  const { featured, cities } = useLoaderData<typeof loader>();

  return (
    <div className="space-y-16 pb-16">
      <SearchSection />
      <HowItWorks />
      <FeaturedSection vendors={featured} />
      <CityGrid cities={cities} />
    </div>
  );
}
