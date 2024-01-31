// import { useState } from "react";
import { bugProps } from "../../types/types";
import { db } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

import {
  Box,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

const Bug = (bug: bugProps) => {


  const deleteBug = async (id: string) => {
    const bugDocRef = doc(db, "bugs", id);
    await deleteDoc(bugDocRef);
  };

  // const updateBugTitle = async (id: string) => {
  //   const bugDocRef = doc(db, "bugs", id);
  //   await updateDoc(bugDocRef, { title: updatedTitle });
  // };

  // const updateBugCheck = async (id: string) => {
  //   const bugDocRef = doc(db, "bugs", id);
  //   await updateDoc(bugDocRef, { fixed: true })
  // }

  // const [updatedTitle, setUpdatedTitle] = useState<string>("");

  return (
    <Box >
      <CardContent
        sx={{
          width: "250px",
          height: "175px",
          border: "3px solid rgba(0, 0, 0, 0.3 )",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "25px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
        }}
      >
        <Typography
          sx={{ lineHeight: 1.1, fontWeight: "bold", fontSize: "2rem" }}
        >
          {bug.title}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: "0.9rem" }} color="text.secondary">
          tag
        </Typography>
        <Box>
          <CardActions>
            <IconButton
              sx={{
                border: "3px solid black",
                width: 25,
                height: 25,
                padding: 2,
              }}

            >
              <CheckIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton
              sx={{
                border: "3px solid black",
                width: 25,
                height: 25,
                padding: 2,
              }}
              onClick={() => deleteBug(bug.id)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Box>

    // <>
    //   <div className="bug-container" >
    //     <input type="checkbox" checked={bug.fixed} readOnly className="custom-checkbox"/>
    //     <input
    //       type="text"
    //       placeholder={bug.title}
    //       onChange={(e) => setUpdatedTitle(e.target.value)}
    //       id="bug-title"
    //     />
    //     <p>{bug.description}</p>
    //     {/* <img src={bug.url} alt="image" /> */}
    //     <button onClick={() => updateBugTitle(bug.id)}>Update Title</button>
    //     <button onClick={() => deleteBug(bug.id)}><FontAwesomeIcon icon={faTrash} /></button>
    //   </div>
    // </>
  );
};

export default Bug;
