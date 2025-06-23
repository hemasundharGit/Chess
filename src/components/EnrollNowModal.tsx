"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import React from "react";

const COACH_PHONE_NUMBER = "911234567890"; // Replace with actual number

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().regex(/^\d{10,15}$/, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  availability: z.enum(["15 mins", "30 mins", "1 hour"], {
    required_error: "Please select your availability.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function EnrollNowModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  function onSubmit(values: FormValues) {
    try {
      const message = `Hello! I'm interested in Chess Ascent Academy.
Name: ${values.name}
Phone: ${values.phone}
Email: ${values.email}
I'm available for a ${values.availability} call.
Please get back to me. Thank you!`;

      const whatsappUrl = `https://wa.me/${COACH_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Please continue the conversation there.",
      });

      setOpen(false);
      form.reset();

    } catch (error) {
       toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem preparing your message. Please try again.",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Enquire Now</DialogTitle>
          <DialogDescription>
            Learn more about our Chess Coaching and how we can help your game. Fill out the form and we'll get in touch.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="9876543210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability for a callback</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="15 mins">15 mins</SelectItem>
                      <SelectItem value="30 mins">30 mins</SelectItem>
                      <SelectItem value="1 hour">1 hour</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Request a Callback</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
