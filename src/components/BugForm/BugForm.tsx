import { useState, FC } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  Checkbox,
  TextField,
  Button,
  Stack,
  FormControlLabel,
} from "@mui/material";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface BugFormProps {
  getBugList: () => void;
}

const BugForm: FC<BugFormProps> = ({ getBugList }) => {
  const [newBugTitle, setNewBugTitle] = useState<string>("");
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  const [newBugDate, setNewBugDate] = useState<Date | null>();
  const [newBugFixed, setNewBugFixed] = useState<boolean>(false);

  const bugCollectionRef = collection(db, "bugs");

  const onSubmitBug = async () => {
    try {
      await addDoc(bugCollectionRef, {
        title: newBugTitle,
        description: newBugDescription,
        date: newBugDate,
        fixed: newBugFixed,
      });
      getBugList();
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <Stack direction={'row'} display={'flex'} width={'inherit'} justifyContent={'space-evenly'} alignItems={'center'}>
      <FormControlLabel
        control={
          <Checkbox
            checked={newBugFixed}
            onChange={(e) => setNewBugFixed(e.target.checked)}
          />
        }
        label="Fixed"
      />
      <TextField
        type="text"
        label="Bug Title"
        variant="outlined"
        value={newBugTitle}
        onChange={(e) => setNewBugTitle(e.target.value)}
      />
      <TextField
        type="text"
        label="Bug Description"
        variant="outlined"
        value={newBugDescription}
        onChange={(e) => setNewBugDescription(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="Date" onChange={(date: Date | null) => setNewBugDate(date) } />
        </DemoContainer>
      </LocalizationProvider>
        
      <Button variant="contained" onClick={onSubmitBug}>
        Submit
      </Button>
    </Stack>
  );
};

export default BugForm;
