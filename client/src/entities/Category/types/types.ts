export interface ICategory {
  id: string;
  name: string;
  type: "expense" | "income";
  userid: string;
  description: string;
}
