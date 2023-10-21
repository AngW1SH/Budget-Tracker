export interface Category {
  id: string;
  name: string;
  type: "expense" | "income";
  userId: string;
}
