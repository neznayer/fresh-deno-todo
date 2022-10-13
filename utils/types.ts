export enum StatEnum {
  DONE = "DONE",
  DOING = "DOING",
  TODO = "TODO",
}

export type Todo = {
  id: string;
  title: string;
  content: string;
  status: StatEnum;
};
