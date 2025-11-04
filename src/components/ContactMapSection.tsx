// src/components/ContactMapSection.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea'; // ← AGORA EXISTE!

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message too short'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactMapSection() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log('Contact form:', data);
    form.reset();
  };

  return (
    <section id="contact" className="relative py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Mapa */}
        <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e5c7e5c7f%3A0x9c9c9c9c9c9c9c9c!2sSan+Francisco!5e0!3m2!1sen!2sus!4v1630000000000"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
          />
        </div>

        {/* Formulário Flutuante */}
        <div className="absolute top-10 right-10 w-full max-w-md md:w-[470px] bg-white p-6 rounded-lg shadow-xl animate-fade-in z-10 md:top-10 md:right-10">
          <h3 className="text-xl font-bold text-[#333] mb-4">Contact Us</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Name</FormLabel>
                    <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Email</FormLabel>
                    <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Subject</FormLabel>
                  <FormControl><Input placeholder="How can we help?" {...field} /></FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )} />

              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      rows={4}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )} />

              <Button type="submit" className="w-full bg-[#69c6ba] hover:bg-[#c66995] text-white font-medium">
                SEND MESSAGE NOW
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}