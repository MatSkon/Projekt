import { Box, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ReadyPlan = () => {
  const [element, setElement] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchList = async () => {
      const list = await fetch(`http://localhost:3000/plans/${id}`).then(
        (res) => res.json()
      );
      if (!list.name) return;
      setElement(list);
    };
    fetchList();
  }, [id]);

  return (
    <List sx={{ width: "90%" }}>
      <>
        {element ? (
          <ListItem
            alignItems="flex-start"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography color={'black'}
              sx={{
                textAlign: "center",
                width: "100%",
                fontSize: "32px",
              }}
            >
              Plan name: {element.name}
            </Typography>
            {element.exercises.map((exercise, index) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      width: "75%",
                      border: " 1px solid black",
                      backgroundColor: "white",
                      color: "black",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                      }}
                    >
                      Exercise: {exercise.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "16px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                        }}
                      >
                        Set
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "24px",
                        }}
                      >
                        Goal
                      </Typography>
                    </Box>
                    {exercise.sets.map((set, index) => {
                      return (
                        <>
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              gap: "42px",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "24px",
                              }}
                            >
                              {set.id}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                width: '100%'
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "24px",
                                  width: '50%'
                                }}
                              >
                                Weight: {set.weight}kg
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "24px",
                                  width: '50%'
                                }}
                              >
                                Reps: {set.reps}
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      );
                    })}
                  </Box>
                </>
              );
            })}
          </ListItem>
        ) : (
          "nie ma takiego elementu!!"
        )}
      </>
    </List>
  );
};

export default ReadyPlan;
