import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@mui/material-ui/core/styles';
import { LinearProgress, Typography, Box } from "@mui/material-ui/core";
import Question from "./Question";
import AppContext from "../AppContext";
import Resume from "../Resume"; 


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  },
  progressBar: {
    margin: "1rem",
  },
  question: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`$Math.round(
          props.value
          )}%`}</Typography>
      </Box>
    </Box>
  );
}

function Questions() {
  // can also be const { question, root, progressBar } = useStyles()
  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);
  let { questionAnswer, questions, answers } = value.state;
  console.log(answers.length, questions.length);

 
  useEffect(() => {
    setProgress(
      (answers.length / questions.length) * 100
       ? (answers.length / questions.length) * 100
       : 0
    );
}, [answers, questions]);

  return (
    <div>
      {questions.length !== answers.length ? (
        <LinearProgressWithLabel
        value={progress}
        className={classes.progressBar}
        />
      ) : null}
      <div className={classes.root}>
        {questions.length !== answers.length ? (
          <Resume/>
        ) : (
          <div className={classes.question}>
            <Question question={questionAnswer.question}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
