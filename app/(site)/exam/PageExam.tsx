"use client";

import { useState } from "react";
import { useStore } from "../store";
import ExamProgressBar from "./ExamProgressBar";
import TicketSwitch from "./ticket/TicketSwitch";
import { Button } from "@mantine/core";
import ExamCompleted from "./ExamCompleted";

export default function PageExam() {
  const [currentExamStep, setCurrentExamStep] = useStore("currentExamStep");
  const [examTickets] = useStore("examTickets");
  const [examAnswers, setExamAnswers] = useStore("examAnswers");

  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);

  const currentTicket = examTickets[currentExamStep];
  const onAnswerClick = () => {
    const nextStep = currentExamStep + 1;
    setCurrentExamStep(nextStep);
    setCurrentAnswers([]);
    setExamAnswers([...examAnswers, currentAnswers]);
  }

  if (currentExamStep == examTickets.length) return <ExamCompleted />

  return (<div className="p-4">
    <ExamProgressBar totalSteps={examTickets.length} currentStep={currentExamStep} />
    <TicketSwitch
      type={currentTicket.type}
      options={currentTicket.options}
      question={currentTicket.question}
      onAnswer={setCurrentAnswers}
    />
    <Button
      onClick={onAnswerClick}
      className="mt-3"
      disabled={currentAnswers.length == 0}
    >Answer</Button>
  </div>);
}