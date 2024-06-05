import { ReactNode } from "react";

type Props = {
  currentStep: number;
  totalSteps: number;
}

export default function ExamProgressBar({ currentStep, totalSteps }: Props) {

  const steps: ReactNode[] = [];
  for (let i = 0; i < totalSteps; i++) {
    let bgColor = "bg-gray-400";
    if (currentStep > i) {
      bgColor = "bg-gray-600";
    } else if (currentStep == i) {
      bgColor = "bg-blue-400";
    }
    steps.push(<div key={i} className={`h-[5px] grow ${bgColor}`}></div>)
  }
  return <div className="flex gap-2 mb-4">{steps}</div>;
}