/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AddSet from "../Components/AddSet";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Box, TextField } from "@mui/material";

const CreateExercise = (props) => {
  const { updateExercise, id } = props;

  const [sets, setSets] = useState([
    {
      id: 1,
      reps: 0,
      weight: 0,
    },
  ]);

  const [exercise, setExercise] = useState(null);

  const createSet = () => {
    setSets([
      ...sets,
      {
        id: sets.length + 1,
        reps: 0,
        weight: 0,
      },
    ]);
  };

  const updateSet = (updatedRep) => {
    setSets((prev) =>
      prev.map((rep) => {
        if (rep.id === updatedRep.id) return updatedRep;
        else return rep;
      })
    );
    console.log(sets);
  };

  const handleAddExercise = (e) => {
    setExercise(e.target.value);
    console.log(exercise);
  };

  useEffect(() => {
    updateExercise({
      id,
      name: exercise,
      sets,
    });
  }, [sets, exercise]);

  return (
    <>
      <Box
        sx={{
          padding: "1rem",
        }}
      >
        <TextField
          label="exercise"
          value={exercise}
          onChange={handleAddExercise}
        />
        {sets.map((set, index) => {
          return <AddSet key={index} set={set} updateSet={updateSet} />;
        })}
        <IconButton onClick={createSet} aria-label="delete">
          <AddIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default CreateExercise;
