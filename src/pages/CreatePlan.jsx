import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import CreateExercise from "./CreateExercise";

const CreatePlan = () => {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      name: "",
      sets: [],
    },
  ]);

  const [planName, setPlanName] = useState(null);

  const createExercise = () => {
    setExercises([
      ...exercises,
      {
        id: exercises.length + 1,
        name: "",
        sets: [],
      },
    ]);
  };

  const updateExercise = (updatedExercise) => {
    setExercises((prev) =>
      prev.map((rep) => {
        if (rep.id === updatedExercise.id) return updatedExercise;
        else return rep;
      })
    );
    console.log(exercises);
  };

  const save = async () => {
    console.log(exercises);
    const response = await fetch("http://localhost:3000/plans", {
      body: JSON.stringify({
        name: planName,
        exercises,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));
  };

  const handleAddPlanName = (e) => {
    setPlanName(e.target.value);
    console.log(planName);
  };

  return (
    <>
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <TextField
          label="Plan Name"
          value={planName}
          onChange={handleAddPlanName}
        />
        {exercises.map((exercise, index) => {
          return <CreateExercise key={index} updateExercise={updateExercise} id={exercise.id}/>;
        })}
        <Button onClick={createExercise}>Add exercise</Button>
      </Box>
      <Button onClick={save}>Save</Button>
    </>
  );
};

export default CreatePlan;
