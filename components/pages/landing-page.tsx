'use client'
import Link from "next/link"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Code, Brush, Pen, Database, Video, Smartphone, LucideIcon, BugIcon, StarIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import Title from "../common/title"

export function LandingPage() {
  //state
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstSectionRef = useRef<HTMLElement>(null);
//effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    //observer
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (firstSectionRef.current) {
        const firstSectionBottom = firstSectionRef.current.getBoundingClientRect().bottom;
        setIsHeaderSticky(firstSectionBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
 
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
<Title title="Welcome to Vrajitor" />
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the best freelance talent for your projects. Vrajitor connects you with skilled
                    professionals across a wide range of industries.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Hire a Freelancer
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Become a Freelancer
                  </Link>
                </div>
              </div>
              <img
                src="/mainPage.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Talented Freelancers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the amazing work done by our freelancers across various industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden rounded-xl">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">E-commerce Website</h3>
                    <p className="text-sm text-muted-foreground">
                      Designed and developed a modern e-commerce website for a local clothing brand.
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">Web Developer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Mobile App Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Crafted a visually stunning and user-friendly mobile app design for a fitness startup.
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Sarah Anderson</p>
                        <p className="text-xs text-muted-foreground">UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Content Marketing Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      Developed a comprehensive content marketing strategy to increase brand awareness and drive lead
                      generation.
                    </p>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>LM</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Lisa Mayer</p>
                        <p className="text-xs text-muted-foreground">Content Strategist</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover the Power of Vrajitor</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vrajitor offers a wide range of services to help you find the perfect freelancer for your project.
                  From web development to graphic design, we've got you covered.
                </p>
              </div>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  icon={service.icon} 
                  title={service.title} 
                  animationClass={service.animationClass}
                  isVisible={isVisible} 
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Top Freelancers</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Talented Freelancers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the profiles of our top-rated freelancers and find the perfect match for your project.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden rounded-xl">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Freelancer"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">Web Developer</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Experienced web developer with a passion for creating user-friendly and visually appealing websites.
                    </p>
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-muted-foreground">(125 reviews)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Freelancer"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Sarah Anderson</p>
                        <p className="text-xs text-muted-foreground">UI/UX Designer</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Creative UI/UX designer specializing in intuitive and aesthetically pleasing digital experiences.
                    </p>
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-muted-foreground">(98 reviews)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden rounded-xl">
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Freelancer"
                    className="aspect-video object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Michael Johnson</p>
                        <p className="text-xs text-muted-foreground">Data Scientist</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Expert data scientist with a knack for transforming complex data into actionable insights.
                    </p>
                    <div className="flex items-center gap-2">
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <StarIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-muted-foreground">(87 reviews)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  animationClass: string;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, animationClass, isVisible }) => (
  <Card className={`p-4 transition-colors hover:bg-secondary hover:text-white group ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <div className={`relative h-12 w-12 mb-2 ${isVisible ? animationClass : ''}`}>
      <Icon className="h-8 w-8 absolute top-0 left-0 text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
  </Card>
);

interface Service {
  icon: LucideIcon;
  title: string;
  animationClass: string;
}

const services = [
  { icon: Code, title: "Web Development", animationClass: "animate-[bounce_1s_ease-in-out_3]" },
  { icon: Brush, title: "Graphic Design", animationClass: "animate-[spin_1s_linear_3]" },
  { icon: Pen, title: "Content Writing", animationClass: "animate-[write_1s_ease-in-out_3]" },
  { icon: Database, title: "Data Analysis", animationClass: "animate-[pulse_1s_ease-in-out_3]" },
  { icon: Video, title: "Video Production", animationClass: "animate-[record_1s_ease-in-out_3]" },
  { icon: Smartphone, title: "Mobile Development", animationClass: "animate-[vibrate_0.6s_linear_3]" }
];