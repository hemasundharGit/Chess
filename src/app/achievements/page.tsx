import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";
import Image from 'next/image';

const achievements = [
  {
    title: "National U-14 Championship Victory",
    student: "Rohan Verma",
    year: "2024",
    description: "Rohan demonstrated exceptional skill and determination, securing first place against a field of over 200 talented players from across the country.",
    icon: <Trophy className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "chess tournament winner",
  },
  {
    title: "State Level Blitz Tournament Winner",
    student: "Anika Sharma's Son",
    year: "2023",
    description: "A stunning performance in the blitz category, showcasing quick thinking and sharp tactical awareness to win the championship.",
    icon: <Award className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "boy playing chess",
  },
  {
    title: "200+ FIDE Rating Gain in 3 Months",
    student: "Multiple Students",
    year: "Ongoing",
    description: "Our structured intermediate program has consistently helped dedicated students achieve significant FIDE rating improvements in a short period.",
    icon: <Star className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "chess rating graph",
  },
   {
    title: "School District Chess League Champions",
    student: "The Visionary Rooks Team",
    year: "2023",
    description: "Our academy team dominated the local school district league, winning the team trophy and several individual board prizes.",
    icon: <Trophy className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "chess team photo",
  },
  {
    title: "City Junior Chess Championship",
    student: "Aarav Singh",
    year: "2023",
    description: "Aarav clinched the title in the city-level junior championship, showcasing his growing strategic prowess and cool-headed play under pressure.",
    icon: <Award className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/600x400.png",
    dataAiHint: "young chess player",
  },
];

export default function AchievementsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Hall of Fame</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Celebrating the success and hard work of our talented students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="bg-card border-primary/40 flex flex-col">
               <div className="relative h-56 w-full">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={achievement.dataAiHint}
                  />
                </div>
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="bg-primary/20 p-3 rounded-full">
                    {achievement.icon}
                 </div>
                 <div>
                    <CardTitle className="font-headline text-2xl text-primary">{achievement.title}</CardTitle>
                    <CardDescription className="text-md font-semibold">{achievement.student} - {achievement.year}</CardDescription>
                 </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/90">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
