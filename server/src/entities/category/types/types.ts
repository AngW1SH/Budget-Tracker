export interface Category {
  id: string;
  name: string;
  type: "expense" | "income";
  userId: string;
}

export type CategoryToCreate = Omit<Category, "id">;
