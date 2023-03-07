export enum Status {
  NOT_STARTED = 'Not started',
  IN_PROGRESS = 'In progress',
  COMPLETED = 'Completed',
}

export interface Todo {
  id: number;
  description: string;
  status: Status;
}
