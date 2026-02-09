import AllProducts from "@/components/pages/AllProducts/AllProducts";
import { Banner } from "@/components/pages/home/Banner";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Banner />
      <Button variant={"outline"} className="">
        ShadCN
      </Button>
    </div>
  );
}
