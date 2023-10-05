import { prismaApp as prisma } from "@/db/prisma-client";
import { staticTransactions } from "@/entities/transaction";
import transactionRepository from "..";

jest.mock("@/db/prisma-client", () => ({
  prismaApp: {
    transaction: {
      findFirst: jest.fn(),
    },
  },
}));

describe("transactionRepository", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });
  describe("findById method", () => {
    it("should return a transaction when everything is okay", async () => {
      (prisma.transaction.findFirst as jest.Mock).mockResolvedValue(
        staticTransactions[0]
      );

      const result = await transactionRepository.findById("1", "test");

      expect(result).toBeTruthy();

      expect(prisma.transaction.findFirst).toBeCalledTimes(1);
    });

    it("should return null if no transaction is found", async () => {
      (prisma.transaction.findFirst as jest.Mock).mockResolvedValue(null);

      const result = await transactionRepository.findById("1", "test");

      expect(result).toBeNull();
    });
  });
});
