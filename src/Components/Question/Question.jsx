import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@mui/material';
import AppContext from "../AppContext";
import { ArrowRight } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: "block",
    marginTop: "1rem"
  },
  button: {
    background: "white"
  },
}));

function Question() {
  const classes = useStyles();
  const value = useContext(AppContext);

  let { questionAnswer } = value.state;
  let { handleChangeInput, nextQuestion } = value.function;
  return (
    <div>
      <form noValidate autoComplete="on" onSubmit={nextQuestion}>
        <TextField
          id="standard-basic"
          label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={questionAnswer.answer ? questionAnswer.answer : ""}
          onChange={handleChangeInput}
          />
          <div className={classes.buttonContainer}>
            <Button
            type="submit"
            variant="contained"
            color="default"
            classname={classes.button}
            endIcon={<ArrowRight />}
            >
              Next
            </Button>
          </div>
      </form>
    </div>
  );
}

export default Question;