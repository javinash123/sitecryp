import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, MessageSquare, ShieldCheck, Clock, BadgeCheck, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  purpose: z.string().min(1, "Please select a purpose"),
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
      purpose: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Received",
      description: "Our payments team will contact you within 24 hours.",
    });
    form.reset();
  }

  return (
    <div className="pt-32 pb-32 container px-4 md:px-6 mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Talk to Our <span className="text-gradient italic">Payments Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Get fast support, demos, or onboarding guidance within 24 hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg">Email Us</h3>
                <p className="text-slate-500 font-medium">hello@simplebit.ae</p>
                <p className="text-slate-400 text-sm">support@simplebit.ae</p>
              </div>
            </div>

            <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg flex items-center gap-2">
                  Visit Us <BadgeCheck className="w-4 h-4 text-blue-500" />
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  Al Maqam Tower, ADGM Square<br />
                  Al Maryah Island, Abu Dhabi, UAE
                </p>
              </div>
            </div>
            
            <div className="group flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-lg">Call Us</h3>
                <p className="text-slate-500 font-medium">+971 4 123 4567</p>
                <p className="text-slate-400 text-sm italic">Mon-Fri, 9AM - 6PM GST</p>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="h-16 px-8 text-lg bg-[#25D366] text-white hover:bg-[#20bd5c] shadow-xl shadow-green-500/20 font-bold rounded-2xl w-full justify-between group">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6" />
                  Chat on WhatsApp
                </div>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <p className="text-center text-sm font-bold text-slate-500 tracking-wide uppercase">
              ⚡ Fastest response for UAE businesses
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl -z-10" />
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl space-y-8">
            <div className="flex items-center gap-3 text-primary">
              <Clock className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-widest">Response in 24h</span>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-slate-700">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/10" {...field} />
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
                        <FormLabel className="font-bold text-slate-700">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-700">Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-700">What do you need help with?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 rounded-xl border-slate-200 focus:border-primary focus:ring-primary/10">
                            <SelectValue placeholder="Select purpose" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-xl border-slate-200 shadow-xl">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="accepting">Start accepting payments</SelectItem>
                          <SelectItem value="integration">Integration / API support</SelectItem>
                          <SelectItem value="enterprise">Enterprise pricing</SelectItem>
                          <SelectItem value="compliance">Compliance & onboarding</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-700">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your business needs..." 
                          className="min-h-[120px] rounded-xl border-slate-200 focus:border-primary focus:ring-primary/10 resize-none pt-4" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <Button type="submit" className="w-full text-lg h-16 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Submit & Get a Response Within 24 Hours
                  </Button>
                  <p className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    🔒 Your information is secure. We do not share data with third parties.
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
