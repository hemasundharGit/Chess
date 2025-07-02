import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

const coaches = [
  {
    name: "P.satya sai vardhan",
    title: "Head Coach & Founder",
    rating: "FIDE Rating: 2200+",
    bio: "With over 15 years of competitive chess experience, he has a passion for teaching and a proven track record of nurturing talent. His coaching philosophy centers on building strong fundamentals and developing sharp tactical and strategic thinking.",
    image: "/animations/images/Coach.jpg",
    accolades: ["National Level Champion", "Certified FIDE Instructor"],
  },
  {
    name: "Jane Doe",
    title: "Assistant Coach",
    rating: "FIDE Rating: 1900+",
    bio: "Jane specializes in working with beginner and intermediate players, making chess fun and accessible. She focuses on tactical puzzles and endgame principles to build a solid foundation for her students.",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "woman portrait",
    accolades: ["State Women's Champion", "Expert in Youth Coaching"],
  },
];

export default function CoachesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Meet Our Coaches</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Experienced, passionate, and dedicated to helping you achieve your chess goals.
          </p>
        </div>

        <div className="space-y-12">
          {coaches.map((coach, index) => (
            <Card key={coach.name} className="overflow-hidden border-primary/40 bg-card">
              <div className={`grid grid-cols-1 md:grid-cols-3 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
                <div className={`relative h-64 md:h-full w-full ${index % 2 !== 0 ? 'md:col-start-3' : ''}`}>
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover"
                    {...(coach.dataAiHint ? {'data-ai-hint': coach.dataAiHint} : {})}
                  />
                </div>
                <div className="md:col-span-2 p-8">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-3xl text-primary">{coach.name}</CardTitle>
                    <CardDescription className="text-lg text-accent font-semibold">{coach.title}</CardDescription>
                    <p className="text-md font-bold text-foreground/80">{coach.rating}</p>
                  </CardHeader>
                  <CardContent className="p-0 mt-4">
                    <p className="text-foreground/90 mb-6">{coach.bio}</p>
                    <div className="space-y-3">
                      {coach.accolades.map((accolade) => (
                        <div key={accolade} className="flex items-center gap-3">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                          <span className="font-semibold">{accolade}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
