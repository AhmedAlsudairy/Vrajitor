import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Mail, Phone, Globe, Calendar, DollarSign, ThumbsUp, Award, Briefcase, Camera, Image } from 'lucide-react'

// Mock data for the freelancer
const freelancer = {
  id: 1,
  name: "Alice Johnson",
  title: "Senior Web Developer & Designer",
  rating: 4.9,
  hourlyRate: 85,
  imageUrl: "/placeholder.svg?height=300&width=300",
  location: "New York, NY",
  email: "alice@example.com",
  phone: "+1 (555) 123-4567",
  website: "www.alicejohnson.com",
  joinDate: "January 2018",
  bio: "Passionate web developer with over 8 years of experience in creating responsive and user-friendly websites. Specialized in React, Node.js, and modern CSS frameworks.",
  skills: [
    { name: "React", level: 95 },
    { name: "Node.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "GraphQL", level: 75 },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Intermediate" },
  ],
  education: [
    { degree: "M.S. in Computer Science", school: "Stanford University", year: "2015" },
    { degree: "B.S. in Software Engineering", school: "MIT", year: "2013" },
  ],
  certifications: [
    { name: "AWS Certified Developer", year: "2020" },
    { name: "Google Cloud Professional Developer", year: "2019" },
  ],
  experience: [
    { title: "Senior Web Developer", company: "Tech Innovators Inc.", period: "2018 - Present" },
    { title: "Full Stack Developer", company: "WebSolutions Co.", period: "2015 - 2018" },
  ],
  portfolio: [
    { title: "E-commerce Platform", description: "Built a scalable e-commerce solution using React and Node.js", imageUrl: "/placeholder.svg?height=200&width=300" },
    { title: "Social Media Dashboard", description: "Designed and developed a real-time analytics dashboard", imageUrl: "/placeholder.svg?height=200&width=300" },
    { title: "Mobile Banking App", description: "Led the frontend development of a secure banking application", imageUrl: "/placeholder.svg?height=200&width=300" },
  ],
  reviews: [
    { client: "John Doe", rating: 5, comment: "Alice is an exceptional developer. Her attention to detail and problem-solving skills are outstanding." },
    { client: "Jane Smith", rating: 5, comment: "Working with Alice was a pleasure. She delivered the project ahead of schedule and exceeded our expectations." },
  ],
}

export default function FreelancerProfile() {
  const [activeSection, setActiveSection] = useState("overview")
//fix it
  const SidebarLink = ({ section, icon }:{ section:any; icon :any}) => (
    <Button
      variant={activeSection === section ? "secondary" : "ghost"}
      className="w-full justify-start"
      onClick={() => setActiveSection(section)}
    >
      {icon}
      <span className="ml-2 capitalize">{section}</span>
    </Button>
  )

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="lg:w-1/4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{freelancer.name}</CardTitle>
            <p className="text-muted-foreground">{freelancer.title}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <SidebarLink section="overview" icon={<Briefcase className="h-4 w-4" />} />
              <SidebarLink section="skills" icon={<Award className="h-4 w-4" />} />
              <SidebarLink section="portfolio" icon={<Image className="h-4 w-4" />} />
              <SidebarLink section="experience" icon={<Briefcase className="h-4 w-4" />} />
              <SidebarLink section="education" icon={<Award className="h-4 w-4" />} />
              <SidebarLink section="reviews" icon={<ThumbsUp className="h-4 w-4" />} />
            </div>
          </CardContent>
        </Card>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4">
        <Card>
          <CardContent className="p-6">
            <Tabs value={activeSection} onValueChange={setActiveSection}>
              <TabsContent value="overview">
                <div className="flex flex-col md:flex-row gap-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={freelancer.imageUrl} alt={freelancer.name} />
                    <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{freelancer.name}</h2>
                    <p className="text-muted-foreground">{freelancer.title}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-bold">{freelancer.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{freelancer.location}</span>
                    </div>
                    <Badge variant="secondary" className="mt-2">${freelancer.hourlyRate}/hr</Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">About Me</h3>
                  <p>{freelancer.bio}</p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{freelancer.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{freelancer.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>{freelancer.website}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Member since {freelancer.joinDate}</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="space-y-4">
                  {freelancer.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-4">Languages</h3>
                <div className="space-y-2">
                  {freelancer.languages.map((language, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{language.name}</span>
                      <span>{language.level}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portfolio">
                <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {freelancer.portfolio.map((project, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h4 className="font-semibold">{project.title}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="experience">
                <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
                <div className="space-y-4">
                  {freelancer.experience.map((job, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">{job.title}</h4>
                      <p className="text-muted-foreground">{job.company}</p>
                      <p className="text-sm">{job.period}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-4">Certifications</h3>
                <div className="space-y-2">
                  {freelancer.certifications.map((cert, index) => (
                    <div key={index}>
                      <span>{cert.name}</span>
                      <span className="text-muted-foreground ml-2">({cert.year})</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  {freelancer.education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p>{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <h3 className="text-xl font-semibold mb-4">Client Reviews</h3>
                <div className="space-y-4">
                  {freelancer.reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-bold">{review.rating.toFixed(1)}</span>
                        </div>
                        <p className="mb-2">{review.comment}</p>
                        <p className="text-sm text-muted-foreground">- {review.client}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}