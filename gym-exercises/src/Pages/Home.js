import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../Components/HeroBanner";
import SearchExercises from "../Components/SearchExercises";
import Exercises from "../Components/Exercises";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}

export default Home;
