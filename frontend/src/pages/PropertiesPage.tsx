import { useEffect } from 'react';
import { useGetAllProperties } from '@/hooks/useQueries';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, DollarSign } from 'lucide-react';

export default function PropertiesPage() {
  const { data: properties, isLoading } = useGetAllProperties();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.property-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [properties]);

  const formatPrice = (price: bigint) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(price));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            Featured Properties
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            Explore our curated collection of exceptional luxury properties
          </p>
        </div>

        {/* Properties Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : properties && properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card
                key={property.id}
                className="property-card overflow-hidden group hover:luxury-shadow transition-all duration-300 cursor-pointer opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image.getDirectURL()}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {property.propertyType}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                      {property.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm mb-3">
                      <MapPin size={16} className="mr-1" />
                      {property.location}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {property.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-accent font-semibold text-lg">
                      <DollarSign size={20} />
                      {formatPrice(property.price)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              No properties available at the moment. Please check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
