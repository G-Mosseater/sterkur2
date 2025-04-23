import { createClient } from "@/utils/supabase/client";

// creates server client, it is used to ask supabase for data

export async function getMuscleImages() {
    // create async function,  because it will wait for data to come back from Supabase which takes some time



  const supabase = await createClient();

  // storing the supabase client inti a variable, using await again
  // now you can talk with supabase, asking for data

  const { data, error } = await supabase.storage.from("exercise-images").list();

    // return the data from supabase from the bucket.  list() methos is used to list all files from the bucket
    console.log(data)
  if (error) {
    console.log("error fetching images");
    return [];
  }
  // if something goes wrong like having a wrong bucket name, return the error and empty array
  // we need the empty array in case of an error, so the app wont crash


  const images = await Promise.all (data.map(async (img) => ({
    muscle: img.name.split(".")[0],

    // splits the file name at the comma,  if file is named biceps.png it will return biceps
    url: (await supabase).storage.from("exercise-images").getPublicUrl(img.name)
      .data.publicUrl,
    // this returns a public link   
  })))
  return images;
}
