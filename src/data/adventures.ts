import { LucideIcon } from "lucide-react";
import { Mountain, Tent, Bike, Camera, Star } from "lucide-react";

export interface Adventure {
  title: string;
  Icon: LucideIcon;
  description: string;
  position: { top: string; left: string };
}

export const adventures: Adventure[] = [
  {
    title: "Mountain Hiking Trip",
    Icon: Mountain,
    description: "A weekend trip to climb Mount Stellar and watch the sunrise.",
    position: { top: "20%", left: "30%" },
  },
  {
    title: "Forest Camping",
    Icon: Tent,
    description: "A rustic camping adventure in the Whispering Pines forest.",
    position: { top: "45%", left: "60%" },
  },
  {
    title: "Coastal Bike Tour",
    Icon: Bike,
    description: "A scenic bike ride along the Sapphire Coast.",
    position: { top: "70%", left: "25%" },
  },
  {
    title: "Photography Workshop",
    Icon: Camera,
    description: "Learn to capture the beauty of the city's architecture.",
    position: { top: "35%", left: "80%" },
  },
  {
    title: "Stargazing Night",
    Icon: Star,
    description: "An overnight trip to a dark sky preserve to watch the meteor shower.",
    position: { top: "55%", left: "10%" },
  },
];
