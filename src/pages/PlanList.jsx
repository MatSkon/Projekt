import { IconButton, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PlanList = () => {
  const [listElement, setListElement] = useState([]);

  const fetchList = async () => {
    const list = await fetch("http://localhost:3000/plans").then((res) =>
      res.json()
    );
    setListElement(list);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const deleteItem = async (id) => {
    await fetch(`http://localhost:3000/plans/${id}`, {
      method: "DELETE",
    }).then(() => {
      fetchList();
    });
  };

  const navigate = useNavigate();

  return (
    <List
      sx={{
        width: "90%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      {listElement.map((element, index) => (
        <>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              minWidth: "320px",
              width: "90%",
              height: "100px",
              backgroundColor: "white",
              padding: "5px",
              border: "1px solid black",
              color: "black",
            }}
            alignItems="flex-start"
            key={index}
          >
            <Typography
              sx={{
                width: "50%",
              }}
            >
              {" "}
              Nazwa planu: {element.name}
            </Typography>
            <Typography
              sx={{
                width: "40%",
              }}
            >
              {" "}
              Ilosc cwiczen: {element.exercises.length}
            </Typography>
            <IconButton
              color="primary"
              sx={{
                width: "5%",
              }}
              onClick={() => navigate(`plan/${element.id}`)}
            >
              <VisibilityIcon />
            </IconButton>
            <IconButton
              color="error"
              sx={{
                width: "5%",
              }}
              onClick={() => deleteItem(element.id)}
            >
              {" "}
              <DeleteIcon />{" "}
            </IconButton>
          </ListItem>
        </>
      ))}
    </List>
  );
};

export default PlanList;
