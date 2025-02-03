import { Button } from "@app/_components/ui/button";

function CTASection() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <p className="text-base font-bold text-gray-800 md:text-xl">
        Are you interested in this Job?
      </p>

      <div className="flex items-center gap-3">
        <Button variant="outline">Send Message</Button>
        <Button>Apply Now</Button>
      </div>
    </div>
  );
}

export default CTASection;
