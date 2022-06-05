export interface Task {
  id: string;
  userId: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: number;
  order: number;
}

export interface CreateTask {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}
