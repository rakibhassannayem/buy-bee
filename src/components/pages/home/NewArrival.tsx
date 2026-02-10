import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "@/assets/newArrival/img1.jpg";
import img2 from "@/assets/newArrival/img2.jpg";
import img3 from "@/assets/newArrival/img3.jpg";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className="container mx-auto px-3 mt-20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold">New Arrival</p>
          <div className="border-t-9 border-primary mt-3" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-muted-foreground/10 p-3 rounded-full hover:bg-muted-foreground/20 cursor-pointer">
            <ArrowLeft />
          </div>
          <div className="bg-muted-foreground/10 p-3 rounded-full hover:bg-muted-foreground/20 cursor-pointer">
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={img1}
            alt="New Arrival 1"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={img2}
            alt="New Arrival 2"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="col-span-1 md:col-span-2 overflow-hidden rounded-lg border">
          <Image
            src={img3}
            alt="New Arrival 3"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
