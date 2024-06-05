import { ExamTicket } from "../store";

export default function getExamTickets(): ExamTicket[] {
  return [{
    type: "detailed",
    question: "Write an esse about how you spent your summer:",
    options: {},
  },
  {
    type: "short",
    question: "What's your favorite animal?",
    options: {},
  },
  {
    type: "checkbox",
    question: "Select your favorite framework/library",
    options: {
      react: "React",
      vue: "Vue",
      angular: "Angular",
      svelte: "Svelte",
    },
  },
  {
    type: "radio",
    question: "Select your favorite framework/library",
    options: {
      react: "React",
      vue: "Vue",
      angular: "Angular",
      svelte: "Svelte",
    },
  },
  {
    type: "detailed",
    question: "Write an esse about how you spent your summer:",
    options: {},
  },
  {
    type: "short",
    question: "What's your favorite animal?",
    options: {},
  },
  {
    type: "checkbox",
    question: "Select your favorite framework/library",
    options: {
      react: "React",
      vue: "Vue",
      angular: "Angular",
      svelte: "Svelte",
    },
  },
  {
    type: "radio",
    question: "Select your favorite framework/library",
    options: {
      react: "React",
      vue: "Vue",
      angular: "Angular",
      svelte: "Svelte",
    },
  }]
}