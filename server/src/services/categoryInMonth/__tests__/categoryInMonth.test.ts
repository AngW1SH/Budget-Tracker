import { staticCategoryList } from "@/entities/category";
import categoryService from "@/services/category";
import categoryInMonthService from "..";
import { staticMonth } from "@/entities/month";
import categoryInMonthRepository from "@/repositories/categoryInMonth";
import { staticCategoriesInMonths } from "@/entities/categoryInMonth";

jest.mock("@/services/category");
jest.mock("@/repositories/categoryInMonth");

describe("CategoryInMonth Service", () => {
  describe("initialize method", () => {
    it("should create instances for each category found", async () => {
      const expenseCategoryList = staticCategoryList.filter(
        (category) => category.type == "expense"
      );

      (categoryService.getAll as jest.Mock).mockResolvedValueOnce(
        expenseCategoryList
      );
      (categoryInMonthRepository.add as jest.Mock).mockResolvedValue(
        staticCategoriesInMonths[0]
      );

      const month = staticMonth;
      const userId = "test";

      const result = await categoryInMonthService.initialize(month.id, userId);

      expect(categoryInMonthRepository.add).toHaveBeenCalledTimes(
        expenseCategoryList.length
      );
    });
  });
});
