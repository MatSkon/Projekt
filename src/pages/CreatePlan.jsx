import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import CreateExercise from "./CreateExercise";
import { useNavigate } from "react-router-dom";

const CreatePlan = () => {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      name: "",
      sets: [],
    },
  ]);

  const [planName, setPlanName] = useState(null);


  const navigate = useNavigate();

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
    await fetch("http://localhost:3000/plans", { //przy asynchronicznosci 
      body: JSON.stringify({
        name: planName,
        exercises,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate('..'));
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
          autoComplete="off"
          value={planName}
          onChange={handleAddPlanName}
        />
        {exercises.map((exercise, index) => {
          return <CreateExercise key={index} updateExercise={updateExercise} id={exercise.id}/>;
        })}
        <Button variant='contained' onClick={createExercise}>Add exercise</Button>
      </Box>
      <Button variant='contained' onClick={save}>Save</Button>
    </>
  );
};

export default CreatePlan;
