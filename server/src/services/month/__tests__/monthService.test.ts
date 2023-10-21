import monthRepository from "@/repositories/month";
import monthService from "..";
import { staticMonth } from "@/entities/month";
import categoryInMonthService from "@/services/categoryInMonth";
import { staticCategoriesInMonths } from "@/entities/categoryInMonth";

jest.mock("@/repositories/month");
jest.mock("@/services/categoryInMonth");

describe("Month Service", () => {
  describe("createIfNotExists", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("should create a month if it doesn't exist", async () => {
      (monthRepository.getByDate as jest.Mock).mockResolvedValueOnce(null);
      (monthRepository.create as jest.Mock).mockResolvedValueOnce(staticMonth);
      (categoryInMonthService.initialize as jest.Mock).mockResolvedValueOnce(
        staticCategoriesInMonths
      );

      const date = new Date("2023-10-21");
      const userId = "test";

      const result = await monthService.createIfNotExists(date, userId);

      expect(monthRepository.create).toHaveBeenCalledTimes(1);
    });

    it("should not try to create a month if it already exists", async () => {
      (monthRepository.getByDate as jest.Mock).mockResolvedValueOnce(
        staticMonth
      );
      (monthRepository.create as jest.Mock).mockResolvedValueOnce(staticMonth);

      const date = new Date("2023-10-21");
      const userId = "test";

      const result = await monthService.createIfNotExists(date, userId);

      expect(monthRepository.create).toHaveBeenCalledTimes(0);
    });

    it("should initialize categoryInMonth instances if it creates a month", async () => {
      (monthRepository.getByDate as jest.Mock).mockResolvedValueOnce(null);
      (monthRepository.create as jest.Mock).mockResolvedValueOnce(staticMonth);
      (categoryInMonthService.initialize as jest.Mock).mockResolvedValueOnce(
        staticCategoriesInMonths
      );

      const date = new Date("2023-10-21");
      const userId = "test";

      const result = await monthService.createIfNotExists(date, userId);

      expect(
        categoryInMonthService.initialize as jest.Mock
      ).toHaveBeenCalledTimes(1);
    });

    it("should throw an error if not categoryInMonth instances were created after month creation", async () => {
      (monthRepository.getByDate as jest.Mock).mockResolvedValueOnce(null);
      (monthRepository.create as jest.Mock).mockResolvedValueOnce(staticMonth);
      (categoryInMonthService.initialize as jest.Mock).mockResolvedValueOnce(
        []
      );

      const date = new Date("2023-10-21");
      const userId = "test";

      expect(() =>
        monthService.createIfNotExists(date, userId)
      ).rejects.toThrow();
    });
  });
});
