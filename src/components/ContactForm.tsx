// src/components/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactForm() {
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2, t('nameRequired')),
    email: z.string().email(t('emailInvalid')),
    subject: z.string().min(2, t('subjectRequired')),
    message: z.string().min(10, t('messageTooShort')),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log('Formulário enviado:', data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">{t('name')}</FormLabel>
              <FormControl>
                <Input placeholder={t('namePlaceholder')} {...field} />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">{t('email')}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={t('emailPlaceholder')} {...field} />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="subject" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">{t('subject')}</FormLabel>
            <FormControl>
              <Input placeholder={t('subjectPlaceholder')} {...field} />
            </FormControl>
            <FormMessage className="text-xs text-red-500" />
          </FormItem>
        )} />

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm">{t('message')}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={t('messagePlaceholder')}
                rows={4}
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-xs text-red-500" />
          </FormItem>
        )} />

        <Button
          type="submit"
          className="w-full bg-[#69c6ba] hover:bg-[#c66995] text-white font-medium"
        >
          {t('sendMessage')}
        </Button>
      </form>
    </Form>
  );
}