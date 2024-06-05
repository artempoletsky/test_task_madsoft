
import { StoreProvider } from "@artempoletsky/easystore";
import PageExam from "./exam/PageExam";
import { MantineProvider } from "@mantine/core";

export default function Page() {
  return (
    <MantineProvider>
      <StoreProvider>
        <PageExam />
      </StoreProvider>
    </MantineProvider>
  );
}
