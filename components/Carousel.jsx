import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { circuits } from "../public/img/circuits";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

export const EmblaCarousel = ({ raceId, setRaceId }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    startIndex: raceId,
  });

  const scrollTo = useCallback(
    (index) => {
      emblaApi && emblaApi.scrollTo(index);
      setRaceId(index);
    },
    [emblaApi, setRaceId]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    setRaceId(--raceId);
  }, [emblaApi, raceId, setRaceId]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    setRaceId(++raceId);
  }, [emblaApi, raceId, setRaceId]);

  return (
    <div className="embla overflow-hidden relative md:border-r">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {circuits.map((circuit) => (
            <div
              className="embla__slide relative grow-0 shrink-0 basis-full"
              key={circuit.id}
            >
              <Image
                src={circuit.src}
                width={1768}
                height={995}
                layout="responsive"
                alt="Circuit image"
              ></Image>
            </div>
          ))}
        </div>
      </div>

      <button
        disabled={raceId < 1}
        className=" cursor-pointer absolute top-1/2 left-2 h-8 w-8   rounded-full bg-neutral-700 bg-opacity-10 text-gray-500 disabled:text-slate-300 disabled:bg-transparent disabled:cursor-not-allowed"
        onClick={scrollPrev}
      >
        <ChevronLeftIcon />
      </button>

      <button
        disabled={raceId > 20}
        onClick={scrollNext}
        className=" cursor-pointer absolute top-1/2 right-2 h-8 w-8  rounded-full bg-neutral-700 bg-opacity-10 text-gray-500 disabled:text-slate-300 disabled:bg-transparent disabled:cursor-not-allowed"
      >
        <ChevronRightIcon />
      </button>
      <div className="flex justify-center pt-4">
        {circuits.map((_, index) => (
          <button
            className={`border-none rounded-full px-3 py-0.5  mx-0.5 md:px-2 lg:px-2.5  ${
              index === raceId ? "bg-[#0b2834]" : "bg-[#efefef]"
            }`}
            key={index}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
