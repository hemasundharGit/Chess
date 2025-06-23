import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const scheduleData = [
  { level: 'Beginner (Batch A)', day: 'Monday & Wednesday', time: '4:00 PM - 5:00 PM', status: 'Open' },
  { level: 'Beginner (Batch B)', day: 'Tuesday & Thursday', time: '5:00 PM - 6:00 PM', status: 'Full' },
  { level: 'Intermediate (Batch A)', day: 'Monday & Wednesday', time: '6:00 PM - 7:30 PM', status: 'Open' },
  { level: 'Intermediate (Batch B)', day: 'Tuesday & Thursday', time: '6:30 PM - 8:00 PM', status: 'Few Seats Left' },
  { level: 'Advanced (Batch A)', day: 'Friday & Saturday', time: '7:00 PM - 9:00 PM', status: 'Open' },
  { level: 'Weekend All-Levels', day: 'Saturday & Sunday', time: '10:00 AM - 12:00 PM', status: 'Few Seats Left' },
];

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case 'Open':
      return 'default';
    case 'Few Seats Left':
      return 'secondary';
    case 'Full':
      return 'destructive';
    default:
      return 'outline';
  }
};

export default function SchedulePage() {
  return (
    <div className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Class Schedule</h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Find the perfect batch that fits your schedule. Enrollment is on a first-come, first-served basis.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%] font-headline text-lg">Program Level</TableHead>
                  <TableHead className="font-headline text-lg">Days</TableHead>
                  <TableHead className="font-headline text-lg">Time</TableHead>
                  <TableHead className="text-right font-headline text-lg">Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((item) => (
                  <TableRow key={item.level} className="text-md">
                    <TableCell className="font-medium text-primary">{item.level}</TableCell>
                    <TableCell>{item.day}</TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell className="text-right">
                       <Badge 
                          className={
                            item.status === 'Open' ? 'bg-green-500 hover:bg-green-600' :
                            item.status === 'Few Seats Left' ? 'bg-yellow-500 hover:bg-yellow-600 text-black' :
                            item.status === 'Full' ? 'bg-red-600 hover:bg-red-700' : ''
                          }
                        >
                        {item.status}
                       </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <p className="text-center mt-8 text-foreground/70">
          * Please use the 'Enroll Now' button to inquire about batch availability and secure your spot.
        </p>
      </div>
    </div>
  );
}
