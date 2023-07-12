import { ColumnType } from './types';

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
}