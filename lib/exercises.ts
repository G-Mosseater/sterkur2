import axios from "axios";

export const muscleGroups = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];
const API_KEY = "5SjuDIrk6AmYKPPl0yMRcQ==66ACuujIg4EWNaHA";


export const getExercises = async (muscle:string) => {

    const API_URL = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

  try {
    const response = await axios.get(API_URL, {
      headers: { "X-Api-Key": API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("error fetching exercises", error);
    throw error;
  }
};
