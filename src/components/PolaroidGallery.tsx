"use client";

import { polaroidReasons } from "@/data/reasons";
import Polaroid from "./Polaroid";

const PolaroidGallery = () => {
  return (
    <section className="py-20 bg-blush-pink">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-5xl text-gray-800 mb-4">Why I Love You</h2>
        <p className="mb-12 max-w-prose mx-auto text-gray-600">
          Just a few of the countless reasons why you're so special to me. Click to flip them over for a longer note!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {polaroidReasons.map((reason) => (
            <Polaroid key={reason.id} item={reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolaroidGallery;
