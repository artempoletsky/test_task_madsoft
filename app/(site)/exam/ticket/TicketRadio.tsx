"use client";

import { Radio, RadioGroup } from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import { TicketProps } from "./TicketSwitch";

export default function TicketRadio({ question, options, onAnswer }: TicketProps) {

  const radioOptions: ReactNode[] = [];

  for (const key in options) {
    radioOptions.push(<Radio className="mt-2" key={key} value={key} label={options[key]} />)
  }
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(""); // force update even if we get same props
  }, [options]);

  return <RadioGroup
    label={question}
    value={value}
    onChange={e => {
      setValue(e);
      onAnswer([e]);
    }}
  >
    {radioOptions}
  </RadioGroup>
}