export interface SubTask {
  id: string;
  taskId: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: number;
}
