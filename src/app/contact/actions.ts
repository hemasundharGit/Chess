"use server";

import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type FormValues = z.infer<typeof formSchema>;

export async function submitContactForm(data: FormValues) {
    // This is a server action. In a real app, you would send an email here.
    // For this example, we'll just log the data to the console.
    console.log("Contact form submitted:", data);
    
    // You can add email sending logic here using a library like Nodemailer or an API like SendGrid.
    
    return { success: true, message: "Thank you for your message! We will get back to you soon." };
}
