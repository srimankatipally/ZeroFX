import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Waitlist = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   const formData = new FormData(e.currentTarget);
  //   const data = {
  //     full_name: formData.get('name') as string,
  //     email: formData.get('email') as string,
  //     phone: formData.get('phone') as string,
  //   };

  //   try {
  //     const { error } = await supabase
  //       .from('waitlist_submissions')
  //       .insert([data]);

  //     //if (error) throw error;

  //     // Show success toast
  //     toast({
  //       title: "Successfully joined waitlist!",
  //       description: "You'll receive a $30 early sign-up bonus after our service goes live.",
  //       duration: 50000,
  //     });

  //     // Reset form
  //     //e.currentTarget.reset();
  //   } catch (error) {
  //     console.error('Error:', error);
  //     toast({
  //       title: "Error joining waitlist",
  //       description: "Please try again later.",
  //       variant: "destructive",
  //       duration: 5000,
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  
  //   const formData = new FormData(e.currentTarget);
  //   const data = {
  //     full_name: (formData.get('name') as string) || '',
  //     email: (formData.get('email') as string) || '',
  //     phone: (formData.get('phone') as string) || '',
  //   };
  
  //   if (!data.full_name || !data.email || !data.phone) {
  //     toast({
  //       title: "Invalid Input",
  //       description: "Please fill in all the fields.",
  //       variant: "destructive",
  //       duration: 5000,
  //     });
  //     setIsSubmitting(false);
  //     return;
  //   }
  
  //   try {
  //     const { error } = await supabase.from('waitlist_submissions').insert([data]);
  //     if (error) throw error;
  
  //     toast({
  //       title: "Successfully joined waitlist!",
  //       description: "You'll receive a $30 early sign-up bonus after our service goes live.",
  //       duration: 5000,
  //     });
  
  //     e.currentTarget.reset(); // Reset the form after successful submission
  //   } catch (error: any) {
  //     console.error('Error:', error);
  
  //     // Check if the error is due to a duplicate email
  //     if (error.code === '23505') {
  //       toast({
  //         title: "Email Already Registered",
  //         description: "The email address you entered is already on the waitlist. Please use a different email.",
  //         variant: "destructive",
  //         duration: 5000,
  //       });
  //     } else {
  //       toast({
  //         title: "Error joining waitlist",
  //         description: "Please try again later.",
  //         variant: "destructive",
  //         duration: 5000,
  //       });
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget; // Explicitly store the form reference
  const formData = new FormData(form);
  const data = {
    full_name: (formData.get("name") as string) || "",
    email: (formData.get("email") as string) || "",
    phone: (formData.get("phone") as string) || "",
  };

  if (!data.full_name || !data.email || !data.phone) {
    toast({
      title: "Invalid Input",
      description: "Please fill in all the fields.",
      variant: "destructive",
      duration: 5000,
    });
    setIsSubmitting(false);
    return;
  }

  try {
    const { error } = await supabase.from("waitlist_submissions").insert([data]);
    if (error) throw error;

    toast({
      title: "Successfully joined waitlist!",
      description: "You'll receive a $30 early sign-up bonus after our service goes live.",
      duration: 5000,
    });

    form.reset(); // Safely reset the form
  } catch (error: any) {
    console.error("Error:", error);

    if (error.code === "23505") {
      toast({
        title: "Email Already Registered",
        description: "The email address you entered is already on the waitlist. Please use a different email.",
        variant: "destructive",
        duration: 5000,
      });
    } else {
      toast({
        title: "Error joining waitlist",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    }
  } finally {
    setIsSubmitting(false);
  }
};

  

  return (
    <section id="waitlist" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="animate__animated animate__fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Waitlist Now!</h2>
            <p className="text-xl text-gray-300 mb-8">Be among the first to experience zero-markup money transfers to India</p>
            
            <div className="space-y-6 bg-neutral-800 p-6 rounded-lg mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Early access to our platform</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Special launch offers and bonuses</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Priority customer support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl p-8 animate__animated animate__fadeInRight">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="mt-1 block w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>

              <div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Join Waitlist'}
                </button>
              </div>

              <p className="text-sm text-neutral-500 text-center">
                By joining, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
