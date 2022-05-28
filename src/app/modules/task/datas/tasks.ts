import { Task } from '../models/task.model';

export const tasks: Task[] = [
  {
    id: '529724bc-07ff-4dc6-a133-0ce7db18b7b3',
    userId: '5510e711-acd7-441d-9b14-c78133595d53',
    title: 'Finish Advanced CSS Course',
    description: 'Udemy CSS/SASS bitirilecektir.',
    startDate: new Date(2022, 5, 28),
    endDate: new Date(2022, 6, 15),
    status: 0,
    order: 1,
  },
  {
    id: 'f473d077-1a7b-4306-8010-b5236cf0f4c5',
    userId: '5510e711-acd7-441d-9b14-c78133595d53',
    title: 'Finish Nodejs CSS Course',
    description: 'Udemy Nodejs course will be finished.',
    startDate: new Date(2022, 5, 26),
    endDate: new Date(2022, 6, 15),
    status: 0,
    order: 2,
  },
  {
    id: '40ab188a-7af7-402c-825c-4921cfb8dfd5',
    userId: '5510e711-acd7-441d-9b14-c78133595d53',
    title: 'Finish React Bootcamp',
    description: 'Finish React Bootcamp on Patika.dev',
    startDate: new Date(2022, 4, 27),
    endDate: new Date(2022, 5, 15),
    status: 1,
    order: 3,
  },
  {
    id: '39c40793-80e3-46f2-9f56-a339f0b90f0a',
    userId: '5510e711-acd7-441d-9b14-c78133595d53',
    title: 'Do research on UI/UX',
    description: 'I need to learn UI/UX design principles.',
    startDate: new Date(2022, 4, 15),
    endDate: new Date(2022, 5, 15),
    status: 1,
    order: 4,
  },
];
