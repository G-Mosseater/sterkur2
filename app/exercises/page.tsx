"use client";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/ui/bottom-nav";
import { useEffect, useState } from "react";
import { getExercises, muscleGroups } from "@/lib/exercises";
import rock2 from "../assets/rock2.jpeg";
import rock from "../assets/rock.jpg";
import rock3 from "../assets/rock3.jpg";
import rock4 from "../assets/rock4.webp";
import rock5 from "../assets/rock5.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Exercise = {
  difficulty: string;
  name: string;
  type: string;
  muscle: string;
  instructions: string;
  equipment: string;
};

const images = [rock, rock2, rock3, rock4, rock5];

const ExercisePage = () => {
  const [exercises, setExercise] = useState<Exercise[]>([]);

  const [selected, setSelected] = useState("");
  const [used, setUsed] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExercises(selected);
        setExercise(data);
        console.log(data);
      } catch (error) {
        console.log("Error");
      }
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
                className="basis-1/3"
                onClick={() => setSelected(muscleGroups[i])}
              >
                <Image src={image} key={i} alt="Image 1" />
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
          <div>{s.name}
          <input type="text" />
          </div>

        ))}
        <BottomNav />
      </div>
    </>
  );
};

export default ExercisePage;
