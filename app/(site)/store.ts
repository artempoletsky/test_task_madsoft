"use client";

import { useStoreUntyped, createStore } from "@artempoletsky/easystore";
import getExamTickets from "./exam/examTicketsMock";

export type ExamTicket = {
  type: "radio" | "checkbox" | "short" | "detailed";
  question: string;
  options: Record<string, string>;
}

export type Store = {
  currentExamStep: number;
  examTickets: ExamTicket[];
  examAnswers: string[][];
};

createStore<Store>({
  currentExamStep: 0,
  examTickets: getExamTickets(),
  examAnswers: [],
});

export function useStore<KeyT extends keyof Store>(key: KeyT) {
  return useStoreUntyped<Store, KeyT>(key);
}
