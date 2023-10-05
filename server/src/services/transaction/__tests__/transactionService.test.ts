import { ITransaction, staticTransactions } from "@/entities/transaction";
import transactionService from "..";
import transactionRepository from "@/repositories/transaction";
import categoryInMonthRepository from "@/repositories/categoryInMonth";

jest.mock("@/repositories/transaction");
jest.mock("@/repositories/categoryInMonth");

describe("transaction service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("edit method", () => {
    it("should update the transaction", async () => {
      (transactionRepository.findById as jest.Mock).mockResolvedValue(
        staticTransactions[0]
      );
      (transactionRepository.edit as jest.Mock).mockResolvedValue(
        staticTransactions[0]
      );

      await transactionService.edit(staticTransactions[0], "test");

      expect(transactionRepository.edit).toHaveBeenCalledTimes(1);
      expect(transactionRepository.edit).toHaveBeenCalledWith(
        expect.objectContaining({
          ...staticTransactions[0],
          category: expect.objectContaining(staticTransactions[0].category),
        }),
        "test"
      );
    });

    it("should update CategoryInMonth total", async () => {
      const edited: ITransaction = {
        ...staticTransactions[0],
        value: staticTransactions[0].value + 100,
      };

      (transactionRepository.findById as jest.Mock).mockResolvedValue(
        staticTransactions[0]
      );
      (transactionRepository.edit as jest.Mock).mockResolvedValue(edited);
      (categoryInMonthRepository.changeSpentBy as jest.Mock).mockResolvedValue(
        edited
      );

      await transactionService.edit(edited, "test");

      expect(transactionRepository.edit).toHaveBeenCalledTimes(1);
      expect(categoryInMonthRepository.changeSpentBy).toHaveBeenCalledTimes(1);
      expect(categoryInMonthRepository.changeSpentBy).toHaveBeenCalledWith(
        100,
        edited.id,
        "test"
      );
    });

    it("should throw an error if no transaction is found", async () => {
      (transactionRepository.findById as jest.Mock).mockResolvedValue(null);

      expect(() =>
        transactionService.edit(staticTransactions[0], "1")
      ).rejects.toThrow();
    });
  });
});
