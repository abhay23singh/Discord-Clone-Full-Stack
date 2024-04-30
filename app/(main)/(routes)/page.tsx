import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (   
    <div>
    <p className="text-3xl font-bold">
      Hello my teammates!
    </p>
    <Button variant="outline">Click me!</Button>
    </div>   
  );
}
