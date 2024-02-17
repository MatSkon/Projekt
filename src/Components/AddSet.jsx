/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const AddSet = (props) => {
  const { set, updateSet } = props;
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleChangeReps = (e) => {
    setReps(e.target.value);
    console.log(reps);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
    console.log(weight);
  };

  const update = () => {
    updateSet({
      id: set.id,
      reps,
      weight,
    });
  };

  useEffect(() => {
    update()
  }, [reps, weight])

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        padding: "1rem",
      }}
    >
      <Typography> {set.id} </Typography>
      <div>
        <TextField
          label="kg"
          type="number"
          value={weight}
          onChange={handleChangeWeight}
        />
        <TextField
          label="reps"
          type="number"
          value={reps}
          onChange={handleChangeReps}
        />
      </div>
    </Box>
  );
};

export default AddSet;
