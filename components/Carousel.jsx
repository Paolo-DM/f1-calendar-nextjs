import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { circuits } from "../public/img/circuits";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide relative grow-0 shrink-0 basis-full">
            <Image
              src={circuits[0].src}
              width={1768}
              height={995}
              layout="responsive"
              alt="Circuit image"
            ></Image>
          </div>
          <div className="embla__slide relative grow-0 shrink-0 basis-full">
            Slide 2
          </div>
          <div className="embla__slide relative grow-0 shrink-0 basis-full">
            Slide 3
          </div>
        </div>
      </div>
      <ChevronLeftIcon
        onClick={scrollPrev}
        className="embla__prev cursor-pointer absolute top-1/2 left-0 h-8 w-8"
      />
      <ChevronRightIcon
        onClick={scrollNext}
        className="embla__next cursor-pointer absolute top-1/2 right-0 h-8 w-8"
      />
    </div>
  );
};
