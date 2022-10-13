import { signal } from "@preact/signals";
import { StatEnum, Todo } from "./types.ts";

const initTasks: Todo[] = [
  {
    id: "1",
    title: "Buy milk",
    content: "Buy milk at the supermarket",
    status: StatEnum.DOING,
  },
  {
    id: "2",
    title: "Write about fresh js",
    content: "Some article here",
    status: StatEnum.TODO,
  },
];

export const todos = signal(initTasks);
