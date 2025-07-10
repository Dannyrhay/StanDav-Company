import HeroSlider from "../components/HeroSlider";
import PropertyCard from "../components/PropertyCard";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import ConsultingCta from "../components/ConsultingCta";
import MapSection from "../components/MapSection";

const Home = () => {
    // Define the slides specifically for the homepage hero
    const homeSlides = [
        {
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop",
          title: "Find Your Dream Home",
          subtitle: "We have the best properties for you",
        },
        {
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
          title: "Luxury Apartments",
          subtitle: "Experience the best of city living",
        },
        {
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
          title: "Stunning Villas",
          subtitle: "Live in your own private paradise",
        },
    ];

    const properties = [
        { id: 1, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop', price: '$500,000', title: 'Modern Family Home', address: '123 Main St, Anytown, USA', bedrooms: 4, bathrooms: 3, area: 2400 },
        { id: 2, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', price: '$750,000', title: 'Luxury Villa with Pool', address: '456 Oak Ave, Beachtown, USA', bedrooms: 5, bathrooms: 5, area: 4500 },
        { id: 3, image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop', price: '$350,000', title: 'Cozy Suburban House', address: '789 Pine Ln, Suburbia, USA', bedrooms: 3, bathrooms: 2, area: 1800 },
    ];

    return (
        <div>
            {/* Pass the defined slides array as a prop */}
            <HeroSlider slides={homeSlides} />
            <MissionSection />
            <TeamSection />

            <div className="bg-gray-50">
              <div className="container mx-auto px-4 py-16">
                  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {properties.map((property) => (
                          <PropertyCard key={property.id} property={property} />
                      ))}
                  </div>
              </div>
            </div>

            <ConsultingCta />
            <MapSection />
        </div>
    );
};

export default Home;