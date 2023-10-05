import { ITransaction } from "@/entities/transaction";
import categoryInMonthRepository from "@/repositories/categoryInMonth";
import dayRepository from "@/repositories/day";
import transactionRepository from "@/repositories/transaction";

const transactionServiceFactory = () => {
  return Object.freeze({
    getByDate,
    addEmpty,
    deleteById,
    edit,
  });

  async function getByDate(
    date: Date,
    userId: string
  ): Promise<ITransaction[] | undefined> {
    const day = await dayRepository.getByDate(date, userId);
    if (!day) return;

    const transactions = await transactionRepository.getByDay(day.id, userId);
    return transactions;
  }

  async function addEmpty(
    date: Date,
    userId: string
  ): Promise<ITransaction | undefined> {
    const day = await dayRepository.getByDate(date, userId);
    if (!day) return;

    const transaction = await transactionRepository.addEmpty(day.id, userId);

    const setDayActive = await dayRepository.setActive(day.id, userId);

    return transaction;
  }

  async function deleteById(
    transactionId: string,
    userId: string
  ): Promise<ITransaction> {
    const deleted = await transactionRepository.deleteById(
      transactionId,
      userId
    );

    const count = await transactionRepository.countByDay(
      deleted.day.id,
      userId
    );

    if (!count) {
      const updatedDay = dayRepository.setInactive(deleted.dayId, userId);
    }
    return deleted;
  }

  async function edit(transaction: ITransaction, userId: string) {
    const previous = await transactionRepository.findById(
      transaction.id,
      userId
    );

    if (!previous) throw new Error("Transaction not found");

    const edited = await transactionRepository.edit(transaction, userId);
    const updatedCategoryInMonth =
      await categoryInMonthRepository.changeSpentBy(
        transaction.value - previous.value,
        transaction.id,
        userId
      );

    return edited;
  }
};

const transactionService = transactionServiceFactory();

export default transactionService;
