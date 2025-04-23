"use client";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/ui/bottom-nav";
import { useEffect, useState } from "react";
import { getExercises, muscleGroups } from "@/lib/exercises";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getMuscleImages } from "@/lib/getMuscleImages";
import { Input } from "./ui/input";

type Exercise = {
  difficulty: string;
  name: string;
  type: string;
  muscle: string;
  instructions: string;
  equipment: string;
};

type MuscleImage = {
  muscle: string;
  url: string;
};

const ExerciseManager = () => {
  const [exercises, setExercise] = useState<Exercise[]>([]);

  const [selected, setSelected] = useState("");
  const [used, setUsed] = useState<Exercise[]>([]);
  const [images, setImages] = useState<MuscleImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imgs = await getMuscleImages();
      setImages(imgs);
    };
    fetchImages();
    ;
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExercises(selected);
        setExercise(data);
      } catch (error) {}
    };
    fetchData();
  }, [selected]);

  return (
    <>
      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, i) => (
                
              <CarouselItem
                key={i}
                className="basis-1/4"
                onClick={() => setSelected(image.muscle)}
              >
                <Image src={image.url} key={i} alt="Image 1" width={75} height={75}/>
              </CarouselItem>
              
            ))}
          </CarouselContent>
        </Carousel>

        <ul>
          {exercises.map((exercise) => (
            <li
              onClick={() => setUsed([...used, exercise])}
              key={exercise.name}
            >
              {exercise.name}
            </li>
          ))}
        </ul>
        <Button>Start Session</Button>
        {used.map((s) => (
          <div>
            {s.name}
            <Input type="text" />
          </div>
        ))}
        <BottomNav />
      </div>
    </>
  );
};

export default ExerciseManager;
