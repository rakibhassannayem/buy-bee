import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="my-20 flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-4xl space-y-6 bg-primary/10 py-10 px-20">
        <h1 className="text-4xl text-gray-900 text-center">
          Enter Your Personal Information
        </h1>

        {/* Form */}
        <form className="space-y-8">
          <Input
            type="text"
            placeholder="Your Name *"
            className="h-11 bg-chart-2/20"
          />
          <Input
            type="email"
            placeholder="Your Email *"
            className="h-11 bg-chart-2/20"
          />
          <Input
            type="text"
            placeholder="Your Phone *"
            className="h-11 bg-chart-2/20"
          />
          <Textarea
            placeholder="Your Message"
            className="min-h-35 resize-none bg-chart-2/20"
          />

          <div className="flex justify-center">
            <Button className="rounded-none cursor-pointer">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
