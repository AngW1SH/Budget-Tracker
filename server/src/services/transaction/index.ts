import { ITransaction } from "@/entities/transaction";
import categoryInMonthRepository from "@/repositories/categoryInMonth";
import dayRepository from "@/repositories/day";
import monthRepository from "@/repositories/month";
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
    if (!transaction.category)
      throw new Error("No Category attached to a Transaction");

    const edited = await transactionRepository.edit(transaction, userId);

    const day = await dayRepository.getById(previous.dayId);
    if (!day) throw new Error("No Day attached to a Transaction");

    const month = await monthRepository.getByDate(day.date, userId);
    if (!month) throw new Error("No Month found for a Transaction");

    const updatedCategoryInMonth =
      await categoryInMonthRepository.changeSpentBy(
        transaction.value - previous.value,
        transaction.category.id,
        month.id,
        userId
      );

    return edited;
  }
};

const transactionService = transactionServiceFactory();

export default transactionService;
