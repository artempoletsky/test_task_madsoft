"use client";

import { Button } from "@mantine/core";
import { useStore } from "../store";

export default function ExamCompleted() {
  const [, setCurrentExamStep] = useStore("currentExamStep");
  const [examAnswers, setExamAnswers] = useStore("examAnswers");
  const resetStore = () => {
    setCurrentExamStep(0);
    setExamAnswers([]);
  }
  // we can print here exam answers if we want
  return (
    <div>
      <p className="">Congratulations you've completed the exam!</p>
      <Button onClick={resetStore}>Start anew</Button>
    </div>
  );
}