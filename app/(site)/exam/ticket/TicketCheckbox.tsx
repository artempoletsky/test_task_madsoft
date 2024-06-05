"use client";

import { Checkbox, Radio, RadioGroup } from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import { TicketProps } from "./TicketSwitch";

export default function TicketCheckbox({ question, options, onAnswer }: TicketProps) {

  const checkboxOptions: ReactNode[] = [];

  const [values, setValues] = useState<Set<string>>(new Set());

  for (const key in options) {
    checkboxOptions.push(<Checkbox
      key={key}
      onChange={e => {
        const newValues = new Set(values);
        if (e.target.checked)
          newValues.add(key);
        else
          newValues.delete(key);
        
        setValues(newValues);
        onAnswer(Array.from(newValues));
      }}
      className="mt-2"
      checked={values.has(key)}
      value={key}
      label={options[key]}
    />)
  }

  return <div>
    <p className="">{question}</p>
    {checkboxOptions}
  </div>
}