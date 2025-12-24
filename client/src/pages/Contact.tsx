import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to transform your payment experience? Our team is here to help you get started.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="bg-primary/15 p-3 rounded-xl text-primary flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Email Us</h3>
                <p className="text-muted-foreground">hello@simplebit.ae</p>
                <p className="text-muted-foreground">support@simplebit.ae</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="bg-primary/15 p-3 rounded-xl text-primary flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Visit Us</h3>
                <p className="text-muted-foreground">
                  Al Maqam Tower, ADGM Square<br />
                  Al Maryah Island, Abu Dhabi<br />
                  United Arab Emirates
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <div className="bg-primary/15 p-3 rounded-xl text-primary flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Call Us</h3>
                <p className="text-muted-foreground">+971 4 123 4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-black/[0.05] shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Work Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your business needs..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-lg h-12">Send Message</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
