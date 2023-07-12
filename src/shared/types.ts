export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export enum ColumnType {
  TO_DO = "Todo",
  IN_PROGRESS = "In Progress",
  BLOCKED = "Blocked",
  COMPLETED = "Completed",
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}