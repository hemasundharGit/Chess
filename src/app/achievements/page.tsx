import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";
import Image from 'next/image';

const achievements = [
  {
    title: "2025 national school chess championship",
    student: "Y. Premi Rakshitha",
    year: "",
    description: "Y. Premi Rakshitha demonstrated exceptional skill and determination, securing 12th place against a field of over 200 talented players from across the country.",
    icon: <Trophy className="h-10 w-10 text-primary" />,
    image: "/animations/images/ach1.jfif",
    dataAiHint: "chess tournament winner",
  },
  {
    title: "Ap state open chess tournament U-9 age category 1st place",
    student: "Karthik Vihan",
    year: "",
    description: "A stunning performance in the blitz category, showcasing quick thinking and sharp tactical awareness to win the championship.",
    icon: <Award className="h-10 w-10 text-primary" />,
    image: "/animations/images/ach2.jfif",
    dataAiHint: "boy playing chess",
  },
  {
    title: "AP State Open Chess Tournament U-13 Age Category 2nd Place",
    student: "charith sai",
    year: "",
    description: "A fantastic result in a highly competitive state-level tournament, securing the runner-up position in the U-13 category.",
    icon: <Award className="h-10 w-10 text-primary" />,
    image: "/animations/images/ach3.jfif",
    dataAiHint: "chess award",
  },
   {
    title: "Supernationals 2025 and securing Class championship 1000-1099 section.",
    student: "Student Name",
    year: "2025",
    description: "An outstanding victory at Supernationals 2025, securing the Class Championship in the 1000-1099 rating section.",
    icon: <Trophy className="h-10 w-10 text-primary" />,
    image: "/animations/images/ach4.jfif",
    dataAiHint: "chess championship",
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
                    <CardDescription className="text-md font-semibold">{achievement.student}{achievement.year && ` - ${achievement.year}`}</CardDescription>
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
