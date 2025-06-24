import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Users, Star, ArrowRight } from 'lucide-react';
import { RotatingChessPiece } from '@/components/RotatingChessPiece';
import { EnrollNowModal } from '@/components/EnrollNowModal';

export default function Home() {
  const testimonials = [
    {
      name: 'Anika Sharma',
      title: 'Parent of a Student',
      quote: "The coaching is exceptional. My son's rating jumped 200 points in just three months. The personalized attention to his weaknesses was key.",
      avatar: 'AS',
    },
    {
      name: 'Rohan Verma',
      title: 'Intermediate Player',
      quote: 'I finally broke the 1600 barrier thanks to the advanced strategy sessions. The structured curriculum makes a huge difference.',
      avatar: 'RV',
    },
     {
      name: 'Priya K.',
      title: 'Beginner Student',
      quote: 'I was a complete beginner and felt intimidated by chess. The academy made learning fun and accessible. I now play confidently in tournaments!',
      avatar: 'PK',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-background">
      {/* Hero Section */}
      <section className="w-full bg-card py-20 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
              Master Chess with Expert Coaching
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Unlock your potential with personalized training programs at Vardhan Chess Academy. From beginner fundamentals to advanced strategies, we pave your path to mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="font-bold">
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <EnrollNowModal>
                <Button size="lg" variant="outline" className="font-bold">
                  Enroll Now
                </Button>
              </EnrollNowModal>
            </div>
          </div>
          <div className="flex items-center justify-center">
             <RotatingChessPiece />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="border-primary/40 bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl pt-2">2500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80">Students Trained</p>
              </CardContent>
            </Card>
            <Card className="border-primary/40 bg-card">
              <CardHeader>
                 <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl pt-2">9.2 / 10</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80">Average Rating</p>
              </CardContent>
            </Card>
            <Card className="border-primary/40 bg-card">
              <CardHeader>
                 <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                  <Crown className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl pt-2">Limited Seats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground/80">For Personalized Attention</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Coach Bio Section */}
      <section className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Coach"
                width={300}
                height={300}
                data-ai-hint="chess coach portrait"
                className="rounded-full border-4 border-primary shadow-2xl aspect-square object-cover"
              />
            </div>
            <div className="md:col-span-3 space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Meet Your Coach</h2>
              <p className="text-lg text-foreground/80">
                With over 15 years of competitive chess experience and a FIDE rating of 2200+, our head coach brings a wealth of knowledge, passion, and a proven track record of nurturing talent. His coaching philosophy centers on building strong fundamentals and developing sharp tactical and strategic thinking.
              </p>
              <Button asChild variant="link" className="text-lg font-bold text-primary px-0">
                <Link href="/contact">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between bg-card border-primary/40">
                <CardContent className="pt-6">
                  <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg font-bold">{testimonial.name}</CardTitle>
                      <p className="text-sm text-foreground/70">{testimonial.title}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
