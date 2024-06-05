"use client";

import { useStoreUntyped, createStore, addChangeListener } from "@artempoletsky/easystore";
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

function loadFromLocalStorage<K extends keyof Store>(key: K, fallbackValue: Store[K]) {
  if (localStorage[key]) {
    Store[key] = JSON.parse(localStorage[key]);
  } else {
    Store[key] = fallbackValue;
  }
}

const Store = createStore<Store>({
  currentExamStep: 0,
  examTickets: [],
  examAnswers: [],
}, () => {
  loadFromLocalStorage("currentExamStep", 0);
  loadFromLocalStorage("examAnswers", []);
  Store.examTickets = getExamTickets();
});

addChangeListener<Store, "currentExamStep">("currentExamStep", step => {
  localStorage["currentExamStep"] = step;
});

addChangeListener<Store, "examAnswers">("examAnswers", answers => {
  localStorage["examAnswers"] = JSON.stringify(answers);
});

export function useStore<KeyT extends keyof Store>(key: KeyT) {
  return useStoreUntyped<Store, KeyT>(key);
}
