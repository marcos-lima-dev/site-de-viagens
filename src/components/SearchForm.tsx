// src/components/SearchForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Bed, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  destination: z.string().min(1, 'Destination is required'),
  rooms: z.string(),
  adults: z.string(),
  children: z.string(),
  checkIn: z.string().min(1, 'Check-in date is required'),
  checkOut: z.string().min(1, 'Check-out date is required'),
});

type FormData = z.infer<typeof formSchema>;

interface SearchFormProps {
  onSubmit?: (data: FormData) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: '',
      rooms: '1',
      adults: '1',
      children: '0',
      checkIn: '',
      checkOut: '',
    },
  });

  const handleSubmit = (data: FormData) => {
    onSubmit?.(data);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-[830px] mx-auto bg-[#f5f6f6] p-[25px_25px_15px] shadow-none border-0 animate-fade-in">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Destination */}
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[0.8rem] font-medium text-gray-700">
                        Choose Your Destination
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            placeholder="Type your destination..."
                            className="h-[45px] pl-10 text-[0.8rem] placeholder:text-gray-400"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                {/* Rooms / Adults / Children */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="rooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[0.8rem] font-medium text-gray-700">
                          How many rooms?
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger className="h-[45px] pl-10 text-[0.8rem]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Room</SelectItem>
                                <SelectItem value="2">2 Rooms</SelectItem>
                                <SelectItem value="3">3 Rooms</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="adults"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[0.8rem] font-medium text-gray-700">Adult</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="h-[45px] pl-10 text-[0.8rem]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                  <SelectItem value="3">3</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="children"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[0.8rem] font-medium text-gray-700">Children</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="h-[45px] pl-10 text-[0.8rem]">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="0">0</SelectItem>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="checkIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[0.8rem] font-medium text-gray-700">Check In Date</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input type="date" className="h-[45px] pl-10 text-[0.8rem]" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="checkOut"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[0.8rem] font-medium text-gray-700">Check Out Date</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input type="date" className="h-[45px] pl-10 text-[0.8rem]" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <div className="flex items-end">
                  <Button
                    type="submit"
                    className="w-full h-[45px] bg-[#69c6ba] hover:bg-[#c66995] text-white font-medium text-[0.85rem]"
                  >
                    CHECK AVAILABILITY
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}