import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const WaitlistPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    setOpen(true);
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[95%] p-4 sm:p-6 sm:max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-lg sm:text-xl md:text-2xl font-bold px-2 sm:px-4">
            Join Our Waitlist Today and Get $30 Early Access Bonus!
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center mt-4 sm:mt-6">
          <Button
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg"
          >
            Join Waitlist Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistPopup;