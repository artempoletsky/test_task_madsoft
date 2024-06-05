"use client";

import { TextInput } from "@mantine/core";
import { useState } from "react";
import { TicketProps } from "./TicketSwitch";

export default function TicketShort({ question, options, onAnswer }: TicketProps) {
  const [value, setValue] = useState("");

  return <div>
    <p className="">{question}</p>
    <TextInput className="max-w-[200px]" value={value} onChange={e => {
      const value = e.target.value;
      setValue(value);
      onAnswer(value == "" ? [] : [value]);
    }} />
  </div>
}