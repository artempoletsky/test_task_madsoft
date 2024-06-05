"use client";

import { Textarea } from "@mantine/core";
import { useState } from "react";
import { TicketProps } from "./TicketSwitch";

export default function TicketDetailed({ question, onAnswer }: TicketProps) {
  const [value, setValue] = useState("");

  return <div>
    <p className="">{question}</p>
    <Textarea value={value} onChange={e => {
      const value = e.target.value;
      setValue(value);
      onAnswer(value == "" ? [] : [value]);
    }} />
  </div>
}