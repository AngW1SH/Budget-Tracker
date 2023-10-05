import { prismaApp as prisma } from "@/db/prisma-client";
import { staticCategoriesInMonths } from "@/entities/categoryInMonth";
import categoryInMonthRepository from "..";

jest.mock("@/db/prisma-client", () => ({
  prismaApp: {
    categoryInMonth: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
  },
}));

describe("categoryInMonthRepository", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("changeSpentBy", () => {
    it("should update 'spent' with the argument value", async () => {
      (prisma.categoryInMonth.findFirst as jest.Mock).mockResolvedValue(
        staticCategoriesInMonths[0]
      );
      (prisma.categoryInMonth.update as jest.Mock).mockResolvedValue(
        staticCategoriesInMonths[0]
      );
      await categoryInMonthRepository.changeSpentBy(100, "test", "test");

      expect(
        prisma.categoryInMonth.findFirst as jest.Mock
      ).toHaveBeenCalledTimes(1);
      expect(prisma.categoryInMonth.update as jest.Mock).toHaveBeenCalledTimes(
        1
      );

      expect(prisma.categoryInMonth.update as jest.Mock).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            spent: staticCategoriesInMonths[0].spent + 100,
          }),
        })
      );
    });

    it("should throw an error when no CategoryInMonth is found", async () => {
      (prisma.categoryInMonth.findFirst as jest.Mock).mockImplementation(() =>
        Promise.resolve(null)
      );

      expect(() =>
        categoryInMonthRepository.changeSpentBy(100, "test", "test")
      ).rejects.toThrow();

      expect(
        prisma.categoryInMonth.findFirst as jest.Mock
      ).toHaveBeenCalledTimes(1);
      expect(prisma.categoryInMonth.update as jest.Mock).toHaveBeenCalledTimes(
        0
      );
    });

    it("should throw an error when the resulting amount is expected to be below 0", async () => {
      (prisma.categoryInMonth.findFirst as jest.Mock).mockResolvedValue(
        staticCategoriesInMonths[0]
      );
      (prisma.categoryInMonth.update as jest.Mock).mockResolvedValue(
        staticCategoriesInMonths[0]
      );

      expect(() =>
        categoryInMonthRepository.changeSpentBy(
          -1 * staticCategoriesInMonths[0].spent - 10,
          "test",
          "test"
        )
      ).rejects.toThrow();
      expect(
        prisma.categoryInMonth.findFirst as jest.Mock
      ).toHaveBeenCalledTimes(1);

      expect(prisma.categoryInMonth.update as jest.Mock).toHaveBeenCalledTimes(
        0
      );
    });
  });
});
