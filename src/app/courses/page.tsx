import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const COACH_PHONE_NUMBER = '911234567890'; // Replace with actual number

const courses = [
  {
    title: 'Beginner Program',
    description: 'Master the fundamentals of chess, from piece movement to basic checkmates and opening principles.',
    features: ['Rules & Board Setup', 'Basic Tactics & Puzzles', 'Opening Principles', 'Simple Endgames'],
    duration: '12 Weeks',
    fee: '₹6,000',
    enquiryMessage: "Hello! I'm interested in the Beginner Program at Vardhan Chess Academy. Could you please provide more details?",
  },
  {
    title: 'Intermediate Program',
    description: 'Deepen your strategic understanding, learn complex tactics, and improve your positional play.',
    features: ['Advanced Tactics', 'Positional Understanding', 'Middlegame Strategy', 'Complex Endgames'],
    duration: '16 Weeks',
    fee: '₹9,000',
    enquiryMessage: "Hello! I'm interested in the Intermediate Program at Vardhan Chess Academy. Could you please provide more details?",
  },
  {
    title: 'Advanced Program',
    description: 'For serious tournament players looking to refine their opening repertoire and master advanced concepts.',
    features: ['Opening Repertoire Building', 'Advanced Strategic Planning', 'Prophylactic Thinking', 'Grandmaster Game Analysis'],
    duration: '20 Weeks',
    fee: '₹15,000',
    enquiryMessage: "Hello! I'm interested in the Advanced Program at Vardhan Chess Academy. Could you please provide more details?",
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Chess Programs</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Structured courses designed to take your game to the next level, no matter your current skill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4 pt-6">
                <div className="w-full flex justify-between items-baseline">
                   <div>
                      <p className="text-sm text-foreground/70">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                   </div>
                   <div>
                      <p className="text-sm text-foreground/70">Fee</p>
                      <p className="text-2xl font-bold font-headline text-primary">{course.fee}</p>
                   </div>
                </div>
                 <Button asChild className="w-full">
                  <Link href={`https://wa.me/${COACH_PHONE_NUMBER}?text=${encodeURIComponent(course.enquiryMessage)}`} target="_blank" rel="noopener noreferrer">
                    Know More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
