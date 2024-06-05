import { ExamTicket } from "../../store";
import TicketCheckbox from "./TicketCheckbox";
import TicketDetailed from "./TicketDetailed";
import TicketRadio from "./TicketRadio";
import TicketShort from "./TicketShort";

export type TicketProps = ExamTicket & {
  onAnswer: (answers: string[]) => void;
}

export default function TicketSwitch(props: TicketProps) {
  switch (props.type) {
    case "radio": return <TicketRadio {...props} />;
    case "checkbox": return <TicketCheckbox {...props} />;
    case "short": return <TicketShort {...props} />;
    case "detailed": return <TicketDetailed {...props} />;
  }
  throw new Error("Wrong ticket type");
}