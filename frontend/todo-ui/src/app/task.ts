export interface Task{
  id?: number;
  title: string;
  description?: string;
  dueDate?: string; // yyyy-MM-dd (ISO date input)
  completed?: boolean;
}
