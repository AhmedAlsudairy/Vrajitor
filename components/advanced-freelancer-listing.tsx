'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Camera, Code, Pencil, PenTool, Megaphone, List } from 'lucide-react'
import Link from 'next/link'
import L from 'leaflet'

// Ensure Leaflet CSS is imported in your _app.tsx or layout.tsx
// import 'leaflet/dist/leaflet.css'

interface Freelancer {
  id: number;
  name: string;
  title: string;
  rating: number;
  hourlyRate: number;
  imageUrl: string;
  location: string;
  skills: string[];
  isPhotographer: boolean;
  completedJobs: number;
  latitude: number;
  longitude: number;
  cameraGear?: string[];
  specialties?: string[];
}

// Expanded mock data for freelancers
const freelancers: Freelancer[] = [
  { 
    id: 1, 
    name: "Alice Johnson", 
    title: "Web Developer", 
    rating: 4.8, 
    hourlyRate: 50, 
    imageUrl: "https://i.pravatar.cc/150?img=1",
    location: "New York, NY",
    skills: ["React", "Node.js", "TypeScript"],
    isPhotographer: false,
    completedJobs: 87,
    latitude: 40.7128,
    longitude: -74.0060
  },
  { 
    id: 2, 
    name: "Bob Smith", 
    title: "Photographer", 
    rating: 4.5, 
    hourlyRate: 75, 
    imageUrl: "https://i.pravatar.cc/150?img=2",
    location: "Los Angeles, CA",
    skills: ["Portrait", "Landscape", "Event"],
    isPhotographer: true,
    completedJobs: 62,
    cameraGear: ["Canon EOS R5", "Sony A7 III"],
    specialties: ["Wedding", "Corporate"],
    latitude: 34.0522,
    longitude: -118.2437
  },
  {
    id: 3,
    name: "Carol Davis",
    title: "Graphic Designer",
    rating: 4.9,
    hourlyRate: 65,
    imageUrl: "https://i.pravatar.cc/150?img=3",
    location: "Chicago, IL",
    skills: ["Adobe Creative Suite", "UI/UX Design", "Branding"],
    isPhotographer: false,
    completedJobs: 105,
    latitude: 41.8781,
    longitude: -87.6298
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Content Writer",
    rating: 4.7,
    hourlyRate: 45,
    imageUrl: "https://i.pravatar.cc/150?img=4",
    location: "Austin, TX",
    skills: ["SEO Writing", "Blogging", "Copywriting"],
    isPhotographer: false,
    completedJobs: 73,
    latitude: 30.2672,
    longitude: -97.7431
  },
  {
    id: 5,
    name: "Eva Brown",
    title: "Digital Marketer",
    rating: 4.6,
    hourlyRate: 55,
    imageUrl: "https://i.pravatar.cc/150?img=5",
    location: "Miami, FL",
    skills: ["Social Media Marketing", "PPC", "Email Marketing"],
    isPhotographer: false,
    completedJobs: 91,
    latitude: 25.7617,
    longitude: -80.1918
  },
  {
    id: 6,
    name: "Frank Miller",
    title: "Video Editor",
    rating: 4.8,
    hourlyRate: 70,
    imageUrl: "https://i.pravatar.cc/150?img=6",
    location: "Seattle, WA",
    skills: ["Adobe Premiere", "After Effects", "Color Grading"],
    isPhotographer: true,
    completedJobs: 58,
    cameraGear: ["Sony FX6", "DJI Ronin"],
    specialties: ["Commercial", "Documentary"],
    latitude: 47.6062,
    longitude: -122.3321
  }
];

const FreelancerCard: React.FC<{ freelancer: Freelancer }> = ({ freelancer }) => {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'web developer': return <Code className="w-6 h-6 text-blue-500" />;
      case 'photographer': return <Camera className="w-6 h-6 text-green-500" />;
      case 'graphic designer': return <PenTool className="w-6 h-6 text-purple-500" />;
      case 'content writer': return <Pencil className="w-6 h-6 text-yellow-500" />;
      case 'digital marketer': return <Megaphone className="w-6 h-6 text-red-500" />;
      default: return <Star className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={freelancer.imageUrl} alt={freelancer.name} />
          <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl flex items-center gap-2">
            {getIcon(freelancer.title)}
            {freelancer.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{freelancer.title}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="font-bold text-lg">{freelancer.rating.toFixed(1)}</span>
          <span className="text-muted-foreground ml-2">({freelancer.completedJobs} jobs)</span>
        </div>
        <div className="flex items-center mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{freelancer.location}</span>
        </div>
        <Badge variant="secondary" className="mb-2 text-lg">${freelancer.hourlyRate}/hr</Badge>
        <div className="flex flex-wrap gap-1 mt-2">
          {freelancer.skills.map((skill) => (
            <Badge key={skill} variant="outline">{skill}</Badge>
          ))}
        </div>
        {freelancer.isPhotographer && (
          <div className="mt-2">
            <p className="text-sm font-semibold">Camera Gear:</p>
            <p className="text-sm">{freelancer.cameraGear?.join(', ')}</p>
            <p className="text-sm font-semibold mt-1">Specialties:</p>
            <p className="text-sm">{freelancer.specialties?.join(', ')}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/freelancers34w/${freelancer.id}`} passHref>
          <Button className="w-full">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

const MapComponent: React.FC<{ freelancers: Freelancer[] }> = ({ freelancers }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainer.current).setView([39.8283, -98.5795], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);
    }

    const map = mapRef.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Add markers for freelancers
    freelancers.forEach((freelancer) => {
      L.marker([freelancer.latitude, freelancer.longitude])
        .addTo(map)
        .bindPopup(`<b>${freelancer.name}</b><br>${freelancer.title}`);
    });

    // Adjust map view to fit all markers
    if (freelancers.length > 0) {
      const group = L.featureGroup(freelancers.map(f => L.marker([f.latitude, f.longitude])));
      map.fitBounds(group.getBounds().pad(0.1));
    }

  }, [freelancers]);

  return <div ref={mapContainer} className="h-full rounded-lg" />;
}

export function AdvancedFreelancerListingComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [minRating, setMinRating] = useState(0)
  const [maxDistance, setMaxDistance] = useState(50)
  const [showPhotographers, setShowPhotographers] = useState(false)
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list')

  const userLocation = { latitude: 40.7128, longitude: -74.0060 } // New York City

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c
  }

  const filteredFreelancers = freelancers.filter(freelancer => 
    freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "all" || freelancer.title.toLowerCase().includes(category.toLowerCase())) &&
    freelancer.rating >= minRating &&
    (!showPhotographers || freelancer.isPhotographer) &&
    calculateDistance(userLocation.latitude, userLocation.longitude, freelancer.latitude, freelancer.longitude) <= maxDistance
  )

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-900">Find Talented Freelancers</h1>
      
      {/* Advanced Search and Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 bg-white p-6 rounded-lg shadow-md">
        <Input
          type="text"
          placeholder="Search freelancers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-indigo-200 focus:border-indigo-500"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="photography">Photography</SelectItem>
            <SelectItem value="writing">Writing</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
        <Select value={minRating.toString()} onValueChange={(value) => setMinRating(Number(value))}>
          <SelectTrigger>
            <SelectValue placeholder="Minimum rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">All Ratings</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
            <SelectItem value="4.8">4.8+ Stars</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Switch
            id="photographer-mode"
            checked={showPhotographers}
            onCheckedChange={setShowPhotographers}
          />
          <label htmlFor="photographer-mode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Photographers Only
          </label>
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Max Distance: {maxDistance} km</label>
          <Slider
            value={[maxDistance]}
            onValueChange={(value) => setMaxDistance(value[0])}
            max={100}
            step={1}
          />
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-4">
        <Button
          variant={viewMode === 'list' ? 'default' : 'outline'}
          className="mr-2"
          onClick={() => setViewMode('list')}
        >
          List View
        </Button>
        <Button
          variant={viewMode === 'map' ? 'default' : 'outline'}
          onClick={() => setViewMode('map')}
        >
          Map View
        </Button>
      </div>

      {/* Responsive Map and List View */}
{/* Responsive Map and List View */}
<div className={`grid ${viewMode === 'list' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
        {viewMode === 'map' && (
          <div className="col-span-full h-[600px] bg-white rounded-lg shadow-md overflow-hidden">
            <MapComponent freelancers={filteredFreelancers} />
          </div>
        )}
        {viewMode === 'list' && filteredFreelancers.map(freelancer => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredFreelancers.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No freelancers found matching your criteria.</p>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
        </div>
      )}

      {/* Mobile View Toggle */}
      <div className="md:hidden fixed bottom-4 right-4">
        <Button
          onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
          className="rounded-full w-12 h-12 flex items-center justify-center"
        >
          {viewMode === 'list' ? <MapPin className="w-6 h-6" /> : <List className="w-6 h-6" />}
        </Button>
      </div>
    </div>
  )
}

// If you're using Next.js with App Router, you might need to wrap the component with dynamic import
// to avoid issues with server-side rendering of the map component.
// Uncomment the following lines and use DynamicAdvancedFreelancerListingComponent in your pages.

// import dynamic from 'next/dynamic'
// const DynamicAdvancedFreelancerListingComponent = dynamic(
//   () => import('./AdvancedFreelancerListingComponent'),
//   { ssr: false }
// )

// export default DynamicAdvancedFreelancerListingComponent