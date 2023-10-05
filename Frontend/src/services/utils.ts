import { PROJECT_NAME } from "../../env";

export const changeTitle = (title: string) => {
  document.title = title + " | " + PROJECT_NAME;
};
