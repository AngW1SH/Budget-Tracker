
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Category"
  objects: {
    transactions: TransactionPayload<ExtArgs>[]
    categoriesInMonth: CategoryInMonthPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    userId: string
    creationtime: Date
    type: string
  }, ExtArgs["result"]["category"]>
  composites: {}
}

/**
 * Model Category
 * 
 */
export type Category = runtime.Types.DefaultSelection<CategoryPayload>
export type MonthPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Month"
  objects: {
    categories: CategoryInMonthPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    date: Date
    goal: number
    spent: number
    userId: string
  }, ExtArgs["result"]["month"]>
  composites: {}
}

/**
 * Model Month
 * 
 */
export type Month = runtime.Types.DefaultSelection<MonthPayload>
export type CategoryInMonthPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "CategoryInMonth"
  objects: {
    category: CategoryPayload<ExtArgs> | null
    month: MonthPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    description: string
    categoryId: string | null
    monthId: string
    goal: number | null
    spent: number
    userId: string
  }, ExtArgs["result"]["categoryInMonth"]>
  composites: {}
}

/**
 * Model CategoryInMonth
 * 
 */
export type CategoryInMonth = runtime.Types.DefaultSelection<CategoryInMonthPayload>
export type TransactionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Transaction"
  objects: {
    category: CategoryPayload<ExtArgs> | null
    day: DayPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    categoryId: string | null
    subcategory: string | null
    description: string
    dayId: string
    userId: string
    type: string
    value: number
  }, ExtArgs["result"]["transaction"]>
  composites: {}
}

/**
 * Model Transaction
 * 
 */
export type Transaction = runtime.Types.DefaultSelection<TransactionPayload>
export type DayPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Day"
  objects: {
    categories: TransactionPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    date: Date
    active: boolean
  }, ExtArgs["result"]["day"]>
  composites: {}
}

/**
 * Model Day
 * 
 */
export type Day = runtime.Types.DefaultSelection<DayPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.month`: Exposes CRUD operations for the **Month** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Months
    * const months = await prisma.month.findMany()
    * ```
    */
  get month(): Prisma.MonthDelegate<ExtArgs>;

  /**
   * `prisma.categoryInMonth`: Exposes CRUD operations for the **CategoryInMonth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryInMonths
    * const categoryInMonths = await prisma.categoryInMonth.findMany()
    * ```
    */
  get categoryInMonth(): Prisma.CategoryInMonthDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Month: 'Month',
    CategoryInMonth: 'CategoryInMonth',
    Transaction: 'Transaction',
    Day: 'Day'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'category' | 'month' | 'categoryInMonth' | 'transaction' | 'day'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Category: {
        payload: CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Month: {
        payload: MonthPayload<ExtArgs>
        fields: Prisma.MonthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload>
          }
          findFirst: {
            args: Prisma.MonthFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload>
          }
          findMany: {
            args: Prisma.MonthFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload>[]
          }
          create: {
            args: Prisma.MonthCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload>
          }
          createMany: {
            args: Prisma.MonthCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MonthDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload>
          }
          update: {
            args: Prisma.MonthUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload>
          }
          deleteMany: {
            args: Prisma.MonthDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MonthUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MonthUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<MonthPayload>
          }
          aggregate: {
            args: Prisma.MonthAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMonth>
          }
          groupBy: {
            args: Prisma.MonthGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MonthGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthCountArgs<ExtArgs>,
            result: $Utils.Optional<MonthCountAggregateOutputType> | number
          }
        }
      }
      CategoryInMonth: {
        payload: CategoryInMonthPayload<ExtArgs>
        fields: Prisma.CategoryInMonthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryInMonthFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryInMonthFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload>
          }
          findFirst: {
            args: Prisma.CategoryInMonthFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryInMonthFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload>
          }
          findMany: {
            args: Prisma.CategoryInMonthFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload>[]
          }
          create: {
            args: Prisma.CategoryInMonthCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload>
          }
          createMany: {
            args: Prisma.CategoryInMonthCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryInMonthDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload>
          }
          update: {
            args: Prisma.CategoryInMonthUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload>
          }
          deleteMany: {
            args: Prisma.CategoryInMonthDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryInMonthUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryInMonthUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryInMonthPayload>
          }
          aggregate: {
            args: Prisma.CategoryInMonthAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategoryInMonth>
          }
          groupBy: {
            args: Prisma.CategoryInMonthGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryInMonthGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryInMonthCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryInMonthCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Day: {
        payload: DayPayload<ExtArgs>
        fields: Prisma.DayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          findFirst: {
            args: Prisma.DayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          findMany: {
            args: Prisma.DayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>[]
          }
          create: {
            args: Prisma.DayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          createMany: {
            args: Prisma.DayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          update: {
            args: Prisma.DayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          deleteMany: {
            args: Prisma.DayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          aggregate: {
            args: Prisma.DayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDay>
          }
          groupBy: {
            args: Prisma.DayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DayGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayCountArgs<ExtArgs>,
            result: $Utils.Optional<DayCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    transactions: number
    categoriesInMonth: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    transactions?: boolean | CategoryCountOutputTypeCountTransactionsArgs
    categoriesInMonth?: boolean | CategoryCountOutputTypeCountCategoriesInMonthArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategoriesInMonthArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryInMonthWhereInput
  }



  /**
   * Count Type MonthCountOutputType
   */


  export type MonthCountOutputType = {
    categories: number
  }

  export type MonthCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | MonthCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * MonthCountOutputType without action
   */
  export type MonthCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthCountOutputType
     */
    select?: MonthCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MonthCountOutputType without action
   */
  export type MonthCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryInMonthWhereInput
  }



  /**
   * Count Type DayCountOutputType
   */


  export type DayCountOutputType = {
    categories: number
  }

  export type DayCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | DayCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayCountOutputType
     */
    select?: DayCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    creationtime: Date | null
    type: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    creationtime: Date | null
    type: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    creationtime: number
    type: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    creationtime?: true
    type?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    creationtime?: true
    type?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    creationtime?: true
    type?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    name: string
    userId: string
    creationtime: Date
    type: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    creationtime?: boolean
    type?: boolean
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    categoriesInMonth?: boolean | Category$categoriesInMonthArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    creationtime?: boolean
    type?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    transactions?: boolean | Category$transactionsArgs<ExtArgs>
    categoriesInMonth?: boolean | Category$categoriesInMonthArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> = $Types.GetResult<CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    transactions<T extends Category$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Category$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findMany'>| Null>;

    categoriesInMonth<T extends Category$categoriesInMonthArgs<ExtArgs> = {}>(args?: Subset<T, Category$categoriesInMonthArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly userId: FieldRef<"Category", 'String'>
    readonly creationtime: FieldRef<"Category", 'DateTime'>
    readonly type: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.transactions
   */
  export type Category$transactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Category.categoriesInMonth
   */
  export type Category$categoriesInMonthArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    where?: CategoryInMonthWhereInput
    orderBy?: CategoryInMonthOrderByWithRelationInput | CategoryInMonthOrderByWithRelationInput[]
    cursor?: CategoryInMonthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryInMonthScalarFieldEnum | CategoryInMonthScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Month
   */


  export type AggregateMonth = {
    _count: MonthCountAggregateOutputType | null
    _avg: MonthAvgAggregateOutputType | null
    _sum: MonthSumAggregateOutputType | null
    _min: MonthMinAggregateOutputType | null
    _max: MonthMaxAggregateOutputType | null
  }

  export type MonthAvgAggregateOutputType = {
    goal: number | null
    spent: number | null
  }

  export type MonthSumAggregateOutputType = {
    goal: number | null
    spent: number | null
  }

  export type MonthMinAggregateOutputType = {
    id: string | null
    date: Date | null
    goal: number | null
    spent: number | null
    userId: string | null
  }

  export type MonthMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    goal: number | null
    spent: number | null
    userId: string | null
  }

  export type MonthCountAggregateOutputType = {
    id: number
    date: number
    goal: number
    spent: number
    userId: number
    _all: number
  }


  export type MonthAvgAggregateInputType = {
    goal?: true
    spent?: true
  }

  export type MonthSumAggregateInputType = {
    goal?: true
    spent?: true
  }

  export type MonthMinAggregateInputType = {
    id?: true
    date?: true
    goal?: true
    spent?: true
    userId?: true
  }

  export type MonthMaxAggregateInputType = {
    id?: true
    date?: true
    goal?: true
    spent?: true
    userId?: true
  }

  export type MonthCountAggregateInputType = {
    id?: true
    date?: true
    goal?: true
    spent?: true
    userId?: true
    _all?: true
  }

  export type MonthAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Month to aggregate.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Months
    **/
    _count?: true | MonthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthMaxAggregateInputType
  }

  export type GetMonthAggregateType<T extends MonthAggregateArgs> = {
        [P in keyof T & keyof AggregateMonth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonth[P]>
      : GetScalarType<T[P], AggregateMonth[P]>
  }




  export type MonthGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonthWhereInput
    orderBy?: MonthOrderByWithAggregationInput | MonthOrderByWithAggregationInput[]
    by: MonthScalarFieldEnum[] | MonthScalarFieldEnum
    having?: MonthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthCountAggregateInputType | true
    _avg?: MonthAvgAggregateInputType
    _sum?: MonthSumAggregateInputType
    _min?: MonthMinAggregateInputType
    _max?: MonthMaxAggregateInputType
  }


  export type MonthGroupByOutputType = {
    id: string
    date: Date
    goal: number
    spent: number
    userId: string
    _count: MonthCountAggregateOutputType | null
    _avg: MonthAvgAggregateOutputType | null
    _sum: MonthSumAggregateOutputType | null
    _min: MonthMinAggregateOutputType | null
    _max: MonthMaxAggregateOutputType | null
  }

  type GetMonthGroupByPayload<T extends MonthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthGroupByOutputType[P]>
            : GetScalarType<T[P], MonthGroupByOutputType[P]>
        }
      >
    >


  export type MonthSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    goal?: boolean
    spent?: boolean
    userId?: boolean
    categories?: boolean | Month$categoriesArgs<ExtArgs>
    _count?: boolean | MonthCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["month"]>

  export type MonthSelectScalar = {
    id?: boolean
    date?: boolean
    goal?: boolean
    spent?: boolean
    userId?: boolean
  }

  export type MonthInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | Month$categoriesArgs<ExtArgs>
    _count?: boolean | MonthCountOutputTypeArgs<ExtArgs>
  }


  type MonthGetPayload<S extends boolean | null | undefined | MonthArgs> = $Types.GetResult<MonthPayload, S>

  type MonthCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MonthFindManyArgs, 'select' | 'include'> & {
      select?: MonthCountAggregateInputType | true
    }

  export interface MonthDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Month'], meta: { name: 'Month' } }
    /**
     * Find zero or one Month that matches the filter.
     * @param {MonthFindUniqueArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonthFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MonthFindUniqueArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Month that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonthFindUniqueOrThrowArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonthFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Month that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindFirstArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonthFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthFindFirstArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Month that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindFirstOrThrowArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonthFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Months that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Months
     * const months = await prisma.month.findMany()
     * 
     * // Get first 10 Months
     * const months = await prisma.month.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthWithIdOnly = await prisma.month.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonthFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<MonthPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Month.
     * @param {MonthCreateArgs} args - Arguments to create a Month.
     * @example
     * // Create one Month
     * const Month = await prisma.month.create({
     *   data: {
     *     // ... data to create a Month
     *   }
     * })
     * 
    **/
    create<T extends MonthCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MonthCreateArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Months.
     *     @param {MonthCreateManyArgs} args - Arguments to create many Months.
     *     @example
     *     // Create many Months
     *     const month = await prisma.month.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MonthCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Month.
     * @param {MonthDeleteArgs} args - Arguments to delete one Month.
     * @example
     * // Delete one Month
     * const Month = await prisma.month.delete({
     *   where: {
     *     // ... filter to delete one Month
     *   }
     * })
     * 
    **/
    delete<T extends MonthDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MonthDeleteArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Month.
     * @param {MonthUpdateArgs} args - Arguments to update one Month.
     * @example
     * // Update one Month
     * const month = await prisma.month.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonthUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MonthUpdateArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Months.
     * @param {MonthDeleteManyArgs} args - Arguments to filter Months to delete.
     * @example
     * // Delete a few Months
     * const { count } = await prisma.month.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonthDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Months
     * const month = await prisma.month.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonthUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MonthUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Month.
     * @param {MonthUpsertArgs} args - Arguments to update or create a Month.
     * @example
     * // Update or create a Month
     * const month = await prisma.month.upsert({
     *   create: {
     *     // ... data to create a Month
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Month we want to update
     *   }
     * })
    **/
    upsert<T extends MonthUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MonthUpsertArgs<ExtArgs>>
    ): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthCountArgs} args - Arguments to filter Months to count.
     * @example
     * // Count the number of Months
     * const count = await prisma.month.count({
     *   where: {
     *     // ... the filter for the Months we want to count
     *   }
     * })
    **/
    count<T extends MonthCountArgs>(
      args?: Subset<T, MonthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Month.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthAggregateArgs>(args: Subset<T, MonthAggregateArgs>): Prisma.PrismaPromise<GetMonthAggregateType<T>>

    /**
     * Group by Month.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthGroupByArgs['orderBy'] }
        : { orderBy?: MonthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Month model
   */
  readonly fields: MonthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Month.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MonthClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    categories<T extends Month$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Month$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Month model
   */ 
  interface MonthFieldRefs {
    readonly id: FieldRef<"Month", 'String'>
    readonly date: FieldRef<"Month", 'DateTime'>
    readonly goal: FieldRef<"Month", 'Int'>
    readonly spent: FieldRef<"Month", 'Int'>
    readonly userId: FieldRef<"Month", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Month findUnique
   */
  export type MonthFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where: MonthWhereUniqueInput
  }


  /**
   * Month findUniqueOrThrow
   */
  export type MonthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where: MonthWhereUniqueInput
  }


  /**
   * Month findFirst
   */
  export type MonthFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Months.
     */
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }


  /**
   * Month findFirstOrThrow
   */
  export type MonthFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Months.
     */
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }


  /**
   * Month findMany
   */
  export type MonthFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Months to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }


  /**
   * Month create
   */
  export type MonthCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The data needed to create a Month.
     */
    data: XOR<MonthCreateInput, MonthUncheckedCreateInput>
  }


  /**
   * Month createMany
   */
  export type MonthCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Months.
     */
    data: MonthCreateManyInput | MonthCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Month update
   */
  export type MonthUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The data needed to update a Month.
     */
    data: XOR<MonthUpdateInput, MonthUncheckedUpdateInput>
    /**
     * Choose, which Month to update.
     */
    where: MonthWhereUniqueInput
  }


  /**
   * Month updateMany
   */
  export type MonthUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Months.
     */
    data: XOR<MonthUpdateManyMutationInput, MonthUncheckedUpdateManyInput>
    /**
     * Filter which Months to update
     */
    where?: MonthWhereInput
  }


  /**
   * Month upsert
   */
  export type MonthUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The filter to search for the Month to update in case it exists.
     */
    where: MonthWhereUniqueInput
    /**
     * In case the Month found by the `where` argument doesn't exist, create a new Month with this data.
     */
    create: XOR<MonthCreateInput, MonthUncheckedCreateInput>
    /**
     * In case the Month was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthUpdateInput, MonthUncheckedUpdateInput>
  }


  /**
   * Month delete
   */
  export type MonthDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter which Month to delete.
     */
    where: MonthWhereUniqueInput
  }


  /**
   * Month deleteMany
   */
  export type MonthDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Months to delete
     */
    where?: MonthWhereInput
  }


  /**
   * Month.categories
   */
  export type Month$categoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    where?: CategoryInMonthWhereInput
    orderBy?: CategoryInMonthOrderByWithRelationInput | CategoryInMonthOrderByWithRelationInput[]
    cursor?: CategoryInMonthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryInMonthScalarFieldEnum | CategoryInMonthScalarFieldEnum[]
  }


  /**
   * Month without action
   */
  export type MonthArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthInclude<ExtArgs> | null
  }



  /**
   * Model CategoryInMonth
   */


  export type AggregateCategoryInMonth = {
    _count: CategoryInMonthCountAggregateOutputType | null
    _avg: CategoryInMonthAvgAggregateOutputType | null
    _sum: CategoryInMonthSumAggregateOutputType | null
    _min: CategoryInMonthMinAggregateOutputType | null
    _max: CategoryInMonthMaxAggregateOutputType | null
  }

  export type CategoryInMonthAvgAggregateOutputType = {
    goal: number | null
    spent: number | null
  }

  export type CategoryInMonthSumAggregateOutputType = {
    goal: number | null
    spent: number | null
  }

  export type CategoryInMonthMinAggregateOutputType = {
    id: string | null
    description: string | null
    categoryId: string | null
    monthId: string | null
    goal: number | null
    spent: number | null
    userId: string | null
  }

  export type CategoryInMonthMaxAggregateOutputType = {
    id: string | null
    description: string | null
    categoryId: string | null
    monthId: string | null
    goal: number | null
    spent: number | null
    userId: string | null
  }

  export type CategoryInMonthCountAggregateOutputType = {
    id: number
    description: number
    categoryId: number
    monthId: number
    goal: number
    spent: number
    userId: number
    _all: number
  }


  export type CategoryInMonthAvgAggregateInputType = {
    goal?: true
    spent?: true
  }

  export type CategoryInMonthSumAggregateInputType = {
    goal?: true
    spent?: true
  }

  export type CategoryInMonthMinAggregateInputType = {
    id?: true
    description?: true
    categoryId?: true
    monthId?: true
    goal?: true
    spent?: true
    userId?: true
  }

  export type CategoryInMonthMaxAggregateInputType = {
    id?: true
    description?: true
    categoryId?: true
    monthId?: true
    goal?: true
    spent?: true
    userId?: true
  }

  export type CategoryInMonthCountAggregateInputType = {
    id?: true
    description?: true
    categoryId?: true
    monthId?: true
    goal?: true
    spent?: true
    userId?: true
    _all?: true
  }

  export type CategoryInMonthAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryInMonth to aggregate.
     */
    where?: CategoryInMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryInMonths to fetch.
     */
    orderBy?: CategoryInMonthOrderByWithRelationInput | CategoryInMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryInMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryInMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryInMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryInMonths
    **/
    _count?: true | CategoryInMonthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryInMonthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryInMonthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryInMonthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryInMonthMaxAggregateInputType
  }

  export type GetCategoryInMonthAggregateType<T extends CategoryInMonthAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryInMonth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryInMonth[P]>
      : GetScalarType<T[P], AggregateCategoryInMonth[P]>
  }




  export type CategoryInMonthGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryInMonthWhereInput
    orderBy?: CategoryInMonthOrderByWithAggregationInput | CategoryInMonthOrderByWithAggregationInput[]
    by: CategoryInMonthScalarFieldEnum[] | CategoryInMonthScalarFieldEnum
    having?: CategoryInMonthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryInMonthCountAggregateInputType | true
    _avg?: CategoryInMonthAvgAggregateInputType
    _sum?: CategoryInMonthSumAggregateInputType
    _min?: CategoryInMonthMinAggregateInputType
    _max?: CategoryInMonthMaxAggregateInputType
  }


  export type CategoryInMonthGroupByOutputType = {
    id: string
    description: string
    categoryId: string | null
    monthId: string
    goal: number | null
    spent: number
    userId: string
    _count: CategoryInMonthCountAggregateOutputType | null
    _avg: CategoryInMonthAvgAggregateOutputType | null
    _sum: CategoryInMonthSumAggregateOutputType | null
    _min: CategoryInMonthMinAggregateOutputType | null
    _max: CategoryInMonthMaxAggregateOutputType | null
  }

  type GetCategoryInMonthGroupByPayload<T extends CategoryInMonthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryInMonthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryInMonthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryInMonthGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryInMonthGroupByOutputType[P]>
        }
      >
    >


  export type CategoryInMonthSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    categoryId?: boolean
    monthId?: boolean
    goal?: boolean
    spent?: boolean
    userId?: boolean
    category?: boolean | CategoryInMonth$categoryArgs<ExtArgs>
    month?: boolean | MonthArgs<ExtArgs>
  }, ExtArgs["result"]["categoryInMonth"]>

  export type CategoryInMonthSelectScalar = {
    id?: boolean
    description?: boolean
    categoryId?: boolean
    monthId?: boolean
    goal?: boolean
    spent?: boolean
    userId?: boolean
  }

  export type CategoryInMonthInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryInMonth$categoryArgs<ExtArgs>
    month?: boolean | MonthArgs<ExtArgs>
  }


  type CategoryInMonthGetPayload<S extends boolean | null | undefined | CategoryInMonthArgs> = $Types.GetResult<CategoryInMonthPayload, S>

  type CategoryInMonthCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryInMonthFindManyArgs, 'select' | 'include'> & {
      select?: CategoryInMonthCountAggregateInputType | true
    }

  export interface CategoryInMonthDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryInMonth'], meta: { name: 'CategoryInMonth' } }
    /**
     * Find zero or one CategoryInMonth that matches the filter.
     * @param {CategoryInMonthFindUniqueArgs} args - Arguments to find a CategoryInMonth
     * @example
     * // Get one CategoryInMonth
     * const categoryInMonth = await prisma.categoryInMonth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryInMonthFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryInMonthFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CategoryInMonth that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryInMonthFindUniqueOrThrowArgs} args - Arguments to find a CategoryInMonth
     * @example
     * // Get one CategoryInMonth
     * const categoryInMonth = await prisma.categoryInMonth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryInMonthFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryInMonthFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CategoryInMonth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryInMonthFindFirstArgs} args - Arguments to find a CategoryInMonth
     * @example
     * // Get one CategoryInMonth
     * const categoryInMonth = await prisma.categoryInMonth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryInMonthFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryInMonthFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CategoryInMonth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryInMonthFindFirstOrThrowArgs} args - Arguments to find a CategoryInMonth
     * @example
     * // Get one CategoryInMonth
     * const categoryInMonth = await prisma.categoryInMonth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryInMonthFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryInMonthFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CategoryInMonths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryInMonthFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryInMonths
     * const categoryInMonths = await prisma.categoryInMonth.findMany()
     * 
     * // Get first 10 CategoryInMonths
     * const categoryInMonths = await prisma.categoryInMonth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryInMonthWithIdOnly = await prisma.categoryInMonth.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryInMonthFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryInMonthFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CategoryInMonth.
     * @param {CategoryInMonthCreateArgs} args - Arguments to create a CategoryInMonth.
     * @example
     * // Create one CategoryInMonth
     * const CategoryInMonth = await prisma.categoryInMonth.create({
     *   data: {
     *     // ... data to create a CategoryInMonth
     *   }
     * })
     * 
    **/
    create<T extends CategoryInMonthCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryInMonthCreateArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CategoryInMonths.
     *     @param {CategoryInMonthCreateManyArgs} args - Arguments to create many CategoryInMonths.
     *     @example
     *     // Create many CategoryInMonths
     *     const categoryInMonth = await prisma.categoryInMonth.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryInMonthCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryInMonthCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryInMonth.
     * @param {CategoryInMonthDeleteArgs} args - Arguments to delete one CategoryInMonth.
     * @example
     * // Delete one CategoryInMonth
     * const CategoryInMonth = await prisma.categoryInMonth.delete({
     *   where: {
     *     // ... filter to delete one CategoryInMonth
     *   }
     * })
     * 
    **/
    delete<T extends CategoryInMonthDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryInMonthDeleteArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CategoryInMonth.
     * @param {CategoryInMonthUpdateArgs} args - Arguments to update one CategoryInMonth.
     * @example
     * // Update one CategoryInMonth
     * const categoryInMonth = await prisma.categoryInMonth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryInMonthUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryInMonthUpdateArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CategoryInMonths.
     * @param {CategoryInMonthDeleteManyArgs} args - Arguments to filter CategoryInMonths to delete.
     * @example
     * // Delete a few CategoryInMonths
     * const { count } = await prisma.categoryInMonth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryInMonthDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryInMonthDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryInMonths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryInMonthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryInMonths
     * const categoryInMonth = await prisma.categoryInMonth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryInMonthUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryInMonthUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryInMonth.
     * @param {CategoryInMonthUpsertArgs} args - Arguments to update or create a CategoryInMonth.
     * @example
     * // Update or create a CategoryInMonth
     * const categoryInMonth = await prisma.categoryInMonth.upsert({
     *   create: {
     *     // ... data to create a CategoryInMonth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryInMonth we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryInMonthUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryInMonthUpsertArgs<ExtArgs>>
    ): Prisma__CategoryInMonthClient<$Types.GetResult<CategoryInMonthPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CategoryInMonths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryInMonthCountArgs} args - Arguments to filter CategoryInMonths to count.
     * @example
     * // Count the number of CategoryInMonths
     * const count = await prisma.categoryInMonth.count({
     *   where: {
     *     // ... the filter for the CategoryInMonths we want to count
     *   }
     * })
    **/
    count<T extends CategoryInMonthCountArgs>(
      args?: Subset<T, CategoryInMonthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryInMonthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryInMonth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryInMonthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryInMonthAggregateArgs>(args: Subset<T, CategoryInMonthAggregateArgs>): Prisma.PrismaPromise<GetCategoryInMonthAggregateType<T>>

    /**
     * Group by CategoryInMonth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryInMonthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryInMonthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryInMonthGroupByArgs['orderBy'] }
        : { orderBy?: CategoryInMonthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryInMonthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryInMonthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryInMonth model
   */
  readonly fields: CategoryInMonthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryInMonth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryInMonthClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends CategoryInMonth$categoryArgs<ExtArgs> = {}>(args?: Subset<T, CategoryInMonth$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    month<T extends MonthArgs<ExtArgs> = {}>(args?: Subset<T, MonthArgs<ExtArgs>>): Prisma__MonthClient<$Types.GetResult<MonthPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the CategoryInMonth model
   */ 
  interface CategoryInMonthFieldRefs {
    readonly id: FieldRef<"CategoryInMonth", 'String'>
    readonly description: FieldRef<"CategoryInMonth", 'String'>
    readonly categoryId: FieldRef<"CategoryInMonth", 'String'>
    readonly monthId: FieldRef<"CategoryInMonth", 'String'>
    readonly goal: FieldRef<"CategoryInMonth", 'Int'>
    readonly spent: FieldRef<"CategoryInMonth", 'Int'>
    readonly userId: FieldRef<"CategoryInMonth", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CategoryInMonth findUnique
   */
  export type CategoryInMonthFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * Filter, which CategoryInMonth to fetch.
     */
    where: CategoryInMonthWhereUniqueInput
  }


  /**
   * CategoryInMonth findUniqueOrThrow
   */
  export type CategoryInMonthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * Filter, which CategoryInMonth to fetch.
     */
    where: CategoryInMonthWhereUniqueInput
  }


  /**
   * CategoryInMonth findFirst
   */
  export type CategoryInMonthFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * Filter, which CategoryInMonth to fetch.
     */
    where?: CategoryInMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryInMonths to fetch.
     */
    orderBy?: CategoryInMonthOrderByWithRelationInput | CategoryInMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryInMonths.
     */
    cursor?: CategoryInMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryInMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryInMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryInMonths.
     */
    distinct?: CategoryInMonthScalarFieldEnum | CategoryInMonthScalarFieldEnum[]
  }


  /**
   * CategoryInMonth findFirstOrThrow
   */
  export type CategoryInMonthFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * Filter, which CategoryInMonth to fetch.
     */
    where?: CategoryInMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryInMonths to fetch.
     */
    orderBy?: CategoryInMonthOrderByWithRelationInput | CategoryInMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryInMonths.
     */
    cursor?: CategoryInMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryInMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryInMonths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryInMonths.
     */
    distinct?: CategoryInMonthScalarFieldEnum | CategoryInMonthScalarFieldEnum[]
  }


  /**
   * CategoryInMonth findMany
   */
  export type CategoryInMonthFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * Filter, which CategoryInMonths to fetch.
     */
    where?: CategoryInMonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryInMonths to fetch.
     */
    orderBy?: CategoryInMonthOrderByWithRelationInput | CategoryInMonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryInMonths.
     */
    cursor?: CategoryInMonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryInMonths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryInMonths.
     */
    skip?: number
    distinct?: CategoryInMonthScalarFieldEnum | CategoryInMonthScalarFieldEnum[]
  }


  /**
   * CategoryInMonth create
   */
  export type CategoryInMonthCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryInMonth.
     */
    data: XOR<CategoryInMonthCreateInput, CategoryInMonthUncheckedCreateInput>
  }


  /**
   * CategoryInMonth createMany
   */
  export type CategoryInMonthCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryInMonths.
     */
    data: CategoryInMonthCreateManyInput | CategoryInMonthCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CategoryInMonth update
   */
  export type CategoryInMonthUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryInMonth.
     */
    data: XOR<CategoryInMonthUpdateInput, CategoryInMonthUncheckedUpdateInput>
    /**
     * Choose, which CategoryInMonth to update.
     */
    where: CategoryInMonthWhereUniqueInput
  }


  /**
   * CategoryInMonth updateMany
   */
  export type CategoryInMonthUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryInMonths.
     */
    data: XOR<CategoryInMonthUpdateManyMutationInput, CategoryInMonthUncheckedUpdateManyInput>
    /**
     * Filter which CategoryInMonths to update
     */
    where?: CategoryInMonthWhereInput
  }


  /**
   * CategoryInMonth upsert
   */
  export type CategoryInMonthUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryInMonth to update in case it exists.
     */
    where: CategoryInMonthWhereUniqueInput
    /**
     * In case the CategoryInMonth found by the `where` argument doesn't exist, create a new CategoryInMonth with this data.
     */
    create: XOR<CategoryInMonthCreateInput, CategoryInMonthUncheckedCreateInput>
    /**
     * In case the CategoryInMonth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryInMonthUpdateInput, CategoryInMonthUncheckedUpdateInput>
  }


  /**
   * CategoryInMonth delete
   */
  export type CategoryInMonthDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
    /**
     * Filter which CategoryInMonth to delete.
     */
    where: CategoryInMonthWhereUniqueInput
  }


  /**
   * CategoryInMonth deleteMany
   */
  export type CategoryInMonthDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryInMonths to delete
     */
    where?: CategoryInMonthWhereInput
  }


  /**
   * CategoryInMonth.category
   */
  export type CategoryInMonth$categoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * CategoryInMonth without action
   */
  export type CategoryInMonthArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryInMonth
     */
    select?: CategoryInMonthSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInMonthInclude<ExtArgs> | null
  }



  /**
   * Model Transaction
   */


  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    value: number | null
  }

  export type TransactionSumAggregateOutputType = {
    value: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    subcategory: string | null
    description: string | null
    dayId: string | null
    userId: string | null
    type: string | null
    value: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    subcategory: string | null
    description: string | null
    dayId: string | null
    userId: string | null
    type: string | null
    value: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    categoryId: number
    subcategory: number
    description: number
    dayId: number
    userId: number
    type: number
    value: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    value?: true
  }

  export type TransactionSumAggregateInputType = {
    value?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    categoryId?: true
    subcategory?: true
    description?: true
    dayId?: true
    userId?: true
    type?: true
    value?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    categoryId?: true
    subcategory?: true
    description?: true
    dayId?: true
    userId?: true
    type?: true
    value?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    categoryId?: true
    subcategory?: true
    description?: true
    dayId?: true
    userId?: true
    type?: true
    value?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }


  export type TransactionGroupByOutputType = {
    id: string
    categoryId: string | null
    subcategory: string | null
    description: string
    dayId: string
    userId: string
    type: string
    value: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    subcategory?: boolean
    description?: boolean
    dayId?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    day?: boolean | DayArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    categoryId?: boolean
    subcategory?: boolean
    description?: boolean
    dayId?: boolean
    userId?: boolean
    type?: boolean
    value?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    category?: boolean | Transaction$categoryArgs<ExtArgs>
    day?: boolean | DayArgs<ExtArgs>
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionArgs> = $Types.GetResult<TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends Transaction$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    day<T extends DayArgs<ExtArgs> = {}>(args?: Subset<T, DayArgs<ExtArgs>>): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly categoryId: FieldRef<"Transaction", 'String'>
    readonly subcategory: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly dayId: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly value: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }


  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }


  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction.category
   */
  export type Transaction$categoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Transaction without action
   */
  export type TransactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
  }



  /**
   * Model Day
   */


  export type AggregateDay = {
    _count: DayCountAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  export type DayMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    active: boolean | null
  }

  export type DayMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    active: boolean | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    active: number
    _all: number
  }


  export type DayMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    active?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    active?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    active?: true
    _all?: true
  }

  export type DayAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Day to aggregate.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayMaxAggregateInputType
  }

  export type GetDayAggregateType<T extends DayAggregateArgs> = {
        [P in keyof T & keyof AggregateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDay[P]>
      : GetScalarType<T[P], AggregateDay[P]>
  }




  export type DayGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
    orderBy?: DayOrderByWithAggregationInput | DayOrderByWithAggregationInput[]
    by: DayScalarFieldEnum[] | DayScalarFieldEnum
    having?: DayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayCountAggregateInputType | true
    _min?: DayMinAggregateInputType
    _max?: DayMaxAggregateInputType
  }


  export type DayGroupByOutputType = {
    id: string
    userId: string
    date: Date
    active: boolean
    _count: DayCountAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  type GetDayGroupByPayload<T extends DayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayGroupByOutputType[P]>
            : GetScalarType<T[P], DayGroupByOutputType[P]>
        }
      >
    >


  export type DaySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    active?: boolean
    categories?: boolean | Day$categoriesArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    active?: boolean
  }

  export type DayInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | Day$categoriesArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeArgs<ExtArgs>
  }


  type DayGetPayload<S extends boolean | null | undefined | DayArgs> = $Types.GetResult<DayPayload, S>

  type DayCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DayFindManyArgs, 'select' | 'include'> & {
      select?: DayCountAggregateInputType | true
    }

  export interface DayDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Day'], meta: { name: 'Day' } }
    /**
     * Find zero or one Day that matches the filter.
     * @param {DayFindUniqueArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DayFindUniqueArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Day that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DayFindUniqueOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Day that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindFirstArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Day that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.day.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.day.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayWithIdOnly = await prisma.day.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Day.
     * @param {DayCreateArgs} args - Arguments to create a Day.
     * @example
     * // Create one Day
     * const Day = await prisma.day.create({
     *   data: {
     *     // ... data to create a Day
     *   }
     * })
     * 
    **/
    create<T extends DayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DayCreateArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Days.
     *     @param {DayCreateManyArgs} args - Arguments to create many Days.
     *     @example
     *     // Create many Days
     *     const day = await prisma.day.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Day.
     * @param {DayDeleteArgs} args - Arguments to delete one Day.
     * @example
     * // Delete one Day
     * const Day = await prisma.day.delete({
     *   where: {
     *     // ... filter to delete one Day
     *   }
     * })
     * 
    **/
    delete<T extends DayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DayDeleteArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Day.
     * @param {DayUpdateArgs} args - Arguments to update one Day.
     * @example
     * // Update one Day
     * const day = await prisma.day.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Days.
     * @param {DayDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.day.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Day.
     * @param {DayUpsertArgs} args - Arguments to update or create a Day.
     * @example
     * // Update or create a Day
     * const day = await prisma.day.upsert({
     *   create: {
     *     // ... data to create a Day
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Day we want to update
     *   }
     * })
    **/
    upsert<T extends DayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpsertArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.day.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DayCountArgs>(
      args?: Subset<T, DayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayAggregateArgs>(args: Subset<T, DayAggregateArgs>): Prisma.PrismaPromise<GetDayAggregateType<T>>

    /**
     * Group by Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayGroupByArgs['orderBy'] }
        : { orderBy?: DayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Day model
   */
  readonly fields: DayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Day.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DayClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    categories<T extends Day$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Day$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TransactionPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the Day model
   */ 
  interface DayFieldRefs {
    readonly id: FieldRef<"Day", 'String'>
    readonly userId: FieldRef<"Day", 'String'>
    readonly date: FieldRef<"Day", 'DateTime'>
    readonly active: FieldRef<"Day", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Day findUnique
   */
  export type DayFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day findUniqueOrThrow
   */
  export type DayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day findFirst
   */
  export type DayFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day findFirstOrThrow
   */
  export type DayFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day findMany
   */
  export type DayFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }


  /**
   * Day create
   */
  export type DayCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to create a Day.
     */
    data: XOR<DayCreateInput, DayUncheckedCreateInput>
  }


  /**
   * Day createMany
   */
  export type DayCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Days.
     */
    data: DayCreateManyInput | DayCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Day update
   */
  export type DayUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to update a Day.
     */
    data: XOR<DayUpdateInput, DayUncheckedUpdateInput>
    /**
     * Choose, which Day to update.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day updateMany
   */
  export type DayUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Days.
     */
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     */
    where?: DayWhereInput
  }


  /**
   * Day upsert
   */
  export type DayUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The filter to search for the Day to update in case it exists.
     */
    where: DayWhereUniqueInput
    /**
     * In case the Day found by the `where` argument doesn't exist, create a new Day with this data.
     */
    create: XOR<DayCreateInput, DayUncheckedCreateInput>
    /**
     * In case the Day was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayUpdateInput, DayUncheckedUpdateInput>
  }


  /**
   * Day delete
   */
  export type DayDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter which Day to delete.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day deleteMany
   */
  export type DayDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Days to delete
     */
    where?: DayWhereInput
  }


  /**
   * Day.categories
   */
  export type Day$categoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Day without action
   */
  export type DayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    creationtime: 'creationtime',
    type: 'type'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MonthScalarFieldEnum: {
    id: 'id',
    date: 'date',
    goal: 'goal',
    spent: 'spent',
    userId: 'userId'
  };

  export type MonthScalarFieldEnum = (typeof MonthScalarFieldEnum)[keyof typeof MonthScalarFieldEnum]


  export const CategoryInMonthScalarFieldEnum: {
    id: 'id',
    description: 'description',
    categoryId: 'categoryId',
    monthId: 'monthId',
    goal: 'goal',
    spent: 'spent',
    userId: 'userId'
  };

  export type CategoryInMonthScalarFieldEnum = (typeof CategoryInMonthScalarFieldEnum)[keyof typeof CategoryInMonthScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    subcategory: 'subcategory',
    description: 'description',
    dayId: 'dayId',
    userId: 'userId',
    type: 'type',
    value: 'value'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    active: 'active'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    creationtime?: DateTimeFilter<"Category"> | Date | string
    type?: StringFilter<"Category"> | string
    transactions?: TransactionListRelationFilter
    categoriesInMonth?: CategoryInMonthListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    creationtime?: SortOrder
    type?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    categoriesInMonth?: CategoryInMonthOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    userId?: StringFilter<"Category"> | string
    creationtime?: DateTimeFilter<"Category"> | Date | string
    type?: StringFilter<"Category"> | string
    transactions?: TransactionListRelationFilter
    categoriesInMonth?: CategoryInMonthListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    creationtime?: SortOrder
    type?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    userId?: StringWithAggregatesFilter<"Category"> | string
    creationtime?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    type?: StringWithAggregatesFilter<"Category"> | string
  }

  export type MonthWhereInput = {
    AND?: MonthWhereInput | MonthWhereInput[]
    OR?: MonthWhereInput[]
    NOT?: MonthWhereInput | MonthWhereInput[]
    id?: StringFilter<"Month"> | string
    date?: DateTimeFilter<"Month"> | Date | string
    goal?: IntFilter<"Month"> | number
    spent?: IntFilter<"Month"> | number
    userId?: StringFilter<"Month"> | string
    categories?: CategoryInMonthListRelationFilter
  }

  export type MonthOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
    categories?: CategoryInMonthOrderByRelationAggregateInput
  }

  export type MonthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthWhereInput | MonthWhereInput[]
    OR?: MonthWhereInput[]
    NOT?: MonthWhereInput | MonthWhereInput[]
    date?: DateTimeFilter<"Month"> | Date | string
    goal?: IntFilter<"Month"> | number
    spent?: IntFilter<"Month"> | number
    userId?: StringFilter<"Month"> | string
    categories?: CategoryInMonthListRelationFilter
  }, "id">

  export type MonthOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
    _count?: MonthCountOrderByAggregateInput
    _avg?: MonthAvgOrderByAggregateInput
    _max?: MonthMaxOrderByAggregateInput
    _min?: MonthMinOrderByAggregateInput
    _sum?: MonthSumOrderByAggregateInput
  }

  export type MonthScalarWhereWithAggregatesInput = {
    AND?: MonthScalarWhereWithAggregatesInput | MonthScalarWhereWithAggregatesInput[]
    OR?: MonthScalarWhereWithAggregatesInput[]
    NOT?: MonthScalarWhereWithAggregatesInput | MonthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Month"> | string
    date?: DateTimeWithAggregatesFilter<"Month"> | Date | string
    goal?: IntWithAggregatesFilter<"Month"> | number
    spent?: IntWithAggregatesFilter<"Month"> | number
    userId?: StringWithAggregatesFilter<"Month"> | string
  }

  export type CategoryInMonthWhereInput = {
    AND?: CategoryInMonthWhereInput | CategoryInMonthWhereInput[]
    OR?: CategoryInMonthWhereInput[]
    NOT?: CategoryInMonthWhereInput | CategoryInMonthWhereInput[]
    id?: StringFilter<"CategoryInMonth"> | string
    description?: StringFilter<"CategoryInMonth"> | string
    categoryId?: StringNullableFilter<"CategoryInMonth"> | string | null
    monthId?: StringFilter<"CategoryInMonth"> | string
    goal?: IntNullableFilter<"CategoryInMonth"> | number | null
    spent?: IntFilter<"CategoryInMonth"> | number
    userId?: StringFilter<"CategoryInMonth"> | string
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    month?: XOR<MonthRelationFilter, MonthWhereInput>
  }

  export type CategoryInMonthOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    monthId?: SortOrder
    goal?: SortOrderInput | SortOrder
    spent?: SortOrder
    userId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    month?: MonthOrderByWithRelationInput
  }

  export type CategoryInMonthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryInMonthWhereInput | CategoryInMonthWhereInput[]
    OR?: CategoryInMonthWhereInput[]
    NOT?: CategoryInMonthWhereInput | CategoryInMonthWhereInput[]
    description?: StringFilter<"CategoryInMonth"> | string
    categoryId?: StringNullableFilter<"CategoryInMonth"> | string | null
    monthId?: StringFilter<"CategoryInMonth"> | string
    goal?: IntNullableFilter<"CategoryInMonth"> | number | null
    spent?: IntFilter<"CategoryInMonth"> | number
    userId?: StringFilter<"CategoryInMonth"> | string
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    month?: XOR<MonthRelationFilter, MonthWhereInput>
  }, "id">

  export type CategoryInMonthOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    monthId?: SortOrder
    goal?: SortOrderInput | SortOrder
    spent?: SortOrder
    userId?: SortOrder
    _count?: CategoryInMonthCountOrderByAggregateInput
    _avg?: CategoryInMonthAvgOrderByAggregateInput
    _max?: CategoryInMonthMaxOrderByAggregateInput
    _min?: CategoryInMonthMinOrderByAggregateInput
    _sum?: CategoryInMonthSumOrderByAggregateInput
  }

  export type CategoryInMonthScalarWhereWithAggregatesInput = {
    AND?: CategoryInMonthScalarWhereWithAggregatesInput | CategoryInMonthScalarWhereWithAggregatesInput[]
    OR?: CategoryInMonthScalarWhereWithAggregatesInput[]
    NOT?: CategoryInMonthScalarWhereWithAggregatesInput | CategoryInMonthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryInMonth"> | string
    description?: StringWithAggregatesFilter<"CategoryInMonth"> | string
    categoryId?: StringNullableWithAggregatesFilter<"CategoryInMonth"> | string | null
    monthId?: StringWithAggregatesFilter<"CategoryInMonth"> | string
    goal?: IntNullableWithAggregatesFilter<"CategoryInMonth"> | number | null
    spent?: IntWithAggregatesFilter<"CategoryInMonth"> | number
    userId?: StringWithAggregatesFilter<"CategoryInMonth"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    subcategory?: StringNullableFilter<"Transaction"> | string | null
    description?: StringFilter<"Transaction"> | string
    dayId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    value?: IntFilter<"Transaction"> | number
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    day?: XOR<DayRelationFilter, DayWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    description?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    category?: CategoryOrderByWithRelationInput
    day?: DayOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    subcategory?: StringNullableFilter<"Transaction"> | string | null
    description?: StringFilter<"Transaction"> | string
    dayId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    value?: IntFilter<"Transaction"> | number
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    day?: XOR<DayRelationFilter, DayWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    subcategory?: SortOrderInput | SortOrder
    description?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    subcategory?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    description?: StringWithAggregatesFilter<"Transaction"> | string
    dayId?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    type?: StringWithAggregatesFilter<"Transaction"> | string
    value?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type DayWhereInput = {
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    id?: StringFilter<"Day"> | string
    userId?: StringFilter<"Day"> | string
    date?: DateTimeFilter<"Day"> | Date | string
    active?: BoolFilter<"Day"> | boolean
    categories?: TransactionListRelationFilter
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    active?: SortOrder
    categories?: TransactionOrderByRelationAggregateInput
  }

  export type DayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    userId?: StringFilter<"Day"> | string
    date?: DateTimeFilter<"Day"> | Date | string
    active?: BoolFilter<"Day"> | boolean
    categories?: TransactionListRelationFilter
  }, "id">

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    active?: SortOrder
    _count?: DayCountOrderByAggregateInput
    _max?: DayMaxOrderByAggregateInput
    _min?: DayMinOrderByAggregateInput
  }

  export type DayScalarWhereWithAggregatesInput = {
    AND?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    OR?: DayScalarWhereWithAggregatesInput[]
    NOT?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Day"> | string
    userId?: StringWithAggregatesFilter<"Day"> | string
    date?: DateTimeWithAggregatesFilter<"Day"> | Date | string
    active?: BoolWithAggregatesFilter<"Day"> | boolean
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    userId: string
    creationtime?: Date | string
    type?: string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
    categoriesInMonth?: CategoryInMonthCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    creationtime?: Date | string
    type?: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
    categoriesInMonth?: CategoryInMonthUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
    categoriesInMonth?: CategoryInMonthUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
    categoriesInMonth?: CategoryInMonthUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    userId: string
    creationtime?: Date | string
    type?: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MonthCreateInput = {
    id?: string
    date: Date | string
    goal?: number
    spent?: number
    userId: string
    categories?: CategoryInMonthCreateNestedManyWithoutMonthInput
  }

  export type MonthUncheckedCreateInput = {
    id?: string
    date: Date | string
    goal?: number
    spent?: number
    userId: string
    categories?: CategoryInMonthUncheckedCreateNestedManyWithoutMonthInput
  }

  export type MonthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: IntFieldUpdateOperationsInput | number
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categories?: CategoryInMonthUpdateManyWithoutMonthNestedInput
  }

  export type MonthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: IntFieldUpdateOperationsInput | number
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categories?: CategoryInMonthUncheckedUpdateManyWithoutMonthNestedInput
  }

  export type MonthCreateManyInput = {
    id?: string
    date: Date | string
    goal?: number
    spent?: number
    userId: string
  }

  export type MonthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: IntFieldUpdateOperationsInput | number
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: IntFieldUpdateOperationsInput | number
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryInMonthCreateInput = {
    id?: string
    description: string
    goal?: number | null
    spent: number
    userId: string
    category?: CategoryCreateNestedOneWithoutCategoriesInMonthInput
    month: MonthCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryInMonthUncheckedCreateInput = {
    id?: string
    description: string
    categoryId?: string | null
    monthId: string
    goal?: number | null
    spent: number
    userId: string
  }

  export type CategoryInMonthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutCategoriesInMonthNestedInput
    month?: MonthUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryInMonthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    monthId?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryInMonthCreateManyInput = {
    id?: string
    description: string
    categoryId?: string | null
    monthId: string
    goal?: number | null
    spent: number
    userId: string
  }

  export type CategoryInMonthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryInMonthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    monthId?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    subcategory?: string | null
    description?: string
    userId: string
    type?: string
    value: number
    category?: CategoryCreateNestedOneWithoutTransactionsInput
    day: DayCreateNestedOneWithoutCategoriesInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    categoryId?: string | null
    subcategory?: string | null
    description?: string
    dayId: string
    userId: string
    type?: string
    value: number
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
    day?: DayUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: string
    categoryId?: string | null
    subcategory?: string | null
    description?: string
    dayId: string
    userId: string
    type?: string
    value: number
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateInput = {
    id?: string
    userId: string
    date: Date | string
    active?: boolean
    categories?: TransactionCreateNestedManyWithoutDayInput
  }

  export type DayUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    active?: boolean
    categories?: TransactionUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    categories?: TransactionUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    categories?: TransactionUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    active?: boolean
  }

  export type DayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type CategoryInMonthListRelationFilter = {
    every?: CategoryInMonthWhereInput
    some?: CategoryInMonthWhereInput
    none?: CategoryInMonthWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryInMonthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    creationtime?: SortOrder
    type?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    creationtime?: SortOrder
    type?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    creationtime?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MonthCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
  }

  export type MonthAvgOrderByAggregateInput = {
    goal?: SortOrder
    spent?: SortOrder
  }

  export type MonthMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
  }

  export type MonthMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
  }

  export type MonthSumOrderByAggregateInput = {
    goal?: SortOrder
    spent?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MonthRelationFilter = {
    is?: MonthWhereInput
    isNot?: MonthWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryInMonthCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    monthId?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
  }

  export type CategoryInMonthAvgOrderByAggregateInput = {
    goal?: SortOrder
    spent?: SortOrder
  }

  export type CategoryInMonthMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    monthId?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
  }

  export type CategoryInMonthMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    monthId?: SortOrder
    goal?: SortOrder
    spent?: SortOrder
    userId?: SortOrder
  }

  export type CategoryInMonthSumOrderByAggregateInput = {
    goal?: SortOrder
    spent?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DayRelationFilter = {
    is?: DayWhereInput
    isNot?: DayWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    subcategory?: SortOrder
    description?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    subcategory?: SortOrder
    description?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    subcategory?: SortOrder
    description?: SortOrder
    dayId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    value?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    active?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    active?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    active?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CategoryInMonthCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryInMonthCreateWithoutCategoryInput, CategoryInMonthUncheckedCreateWithoutCategoryInput> | CategoryInMonthCreateWithoutCategoryInput[] | CategoryInMonthUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutCategoryInput | CategoryInMonthCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryInMonthCreateManyCategoryInputEnvelope
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CategoryInMonthUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryInMonthCreateWithoutCategoryInput, CategoryInMonthUncheckedCreateWithoutCategoryInput> | CategoryInMonthCreateWithoutCategoryInput[] | CategoryInMonthUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutCategoryInput | CategoryInMonthCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryInMonthCreateManyCategoryInputEnvelope
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryInMonthUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryInMonthCreateWithoutCategoryInput, CategoryInMonthUncheckedCreateWithoutCategoryInput> | CategoryInMonthCreateWithoutCategoryInput[] | CategoryInMonthUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutCategoryInput | CategoryInMonthCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryInMonthUpsertWithWhereUniqueWithoutCategoryInput | CategoryInMonthUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryInMonthCreateManyCategoryInputEnvelope
    set?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    disconnect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    delete?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    update?: CategoryInMonthUpdateWithWhereUniqueWithoutCategoryInput | CategoryInMonthUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryInMonthUpdateManyWithWhereWithoutCategoryInput | CategoryInMonthUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryInMonthScalarWhereInput | CategoryInMonthScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput> | TransactionCreateWithoutCategoryInput[] | TransactionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput | TransactionCreateOrConnectWithoutCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput | TransactionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TransactionCreateManyCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput | TransactionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput | TransactionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CategoryInMonthUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryInMonthCreateWithoutCategoryInput, CategoryInMonthUncheckedCreateWithoutCategoryInput> | CategoryInMonthCreateWithoutCategoryInput[] | CategoryInMonthUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutCategoryInput | CategoryInMonthCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryInMonthUpsertWithWhereUniqueWithoutCategoryInput | CategoryInMonthUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryInMonthCreateManyCategoryInputEnvelope
    set?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    disconnect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    delete?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    update?: CategoryInMonthUpdateWithWhereUniqueWithoutCategoryInput | CategoryInMonthUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryInMonthUpdateManyWithWhereWithoutCategoryInput | CategoryInMonthUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryInMonthScalarWhereInput | CategoryInMonthScalarWhereInput[]
  }

  export type CategoryInMonthCreateNestedManyWithoutMonthInput = {
    create?: XOR<CategoryInMonthCreateWithoutMonthInput, CategoryInMonthUncheckedCreateWithoutMonthInput> | CategoryInMonthCreateWithoutMonthInput[] | CategoryInMonthUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutMonthInput | CategoryInMonthCreateOrConnectWithoutMonthInput[]
    createMany?: CategoryInMonthCreateManyMonthInputEnvelope
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
  }

  export type CategoryInMonthUncheckedCreateNestedManyWithoutMonthInput = {
    create?: XOR<CategoryInMonthCreateWithoutMonthInput, CategoryInMonthUncheckedCreateWithoutMonthInput> | CategoryInMonthCreateWithoutMonthInput[] | CategoryInMonthUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutMonthInput | CategoryInMonthCreateOrConnectWithoutMonthInput[]
    createMany?: CategoryInMonthCreateManyMonthInputEnvelope
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryInMonthUpdateManyWithoutMonthNestedInput = {
    create?: XOR<CategoryInMonthCreateWithoutMonthInput, CategoryInMonthUncheckedCreateWithoutMonthInput> | CategoryInMonthCreateWithoutMonthInput[] | CategoryInMonthUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutMonthInput | CategoryInMonthCreateOrConnectWithoutMonthInput[]
    upsert?: CategoryInMonthUpsertWithWhereUniqueWithoutMonthInput | CategoryInMonthUpsertWithWhereUniqueWithoutMonthInput[]
    createMany?: CategoryInMonthCreateManyMonthInputEnvelope
    set?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    disconnect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    delete?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    update?: CategoryInMonthUpdateWithWhereUniqueWithoutMonthInput | CategoryInMonthUpdateWithWhereUniqueWithoutMonthInput[]
    updateMany?: CategoryInMonthUpdateManyWithWhereWithoutMonthInput | CategoryInMonthUpdateManyWithWhereWithoutMonthInput[]
    deleteMany?: CategoryInMonthScalarWhereInput | CategoryInMonthScalarWhereInput[]
  }

  export type CategoryInMonthUncheckedUpdateManyWithoutMonthNestedInput = {
    create?: XOR<CategoryInMonthCreateWithoutMonthInput, CategoryInMonthUncheckedCreateWithoutMonthInput> | CategoryInMonthCreateWithoutMonthInput[] | CategoryInMonthUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: CategoryInMonthCreateOrConnectWithoutMonthInput | CategoryInMonthCreateOrConnectWithoutMonthInput[]
    upsert?: CategoryInMonthUpsertWithWhereUniqueWithoutMonthInput | CategoryInMonthUpsertWithWhereUniqueWithoutMonthInput[]
    createMany?: CategoryInMonthCreateManyMonthInputEnvelope
    set?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    disconnect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    delete?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    connect?: CategoryInMonthWhereUniqueInput | CategoryInMonthWhereUniqueInput[]
    update?: CategoryInMonthUpdateWithWhereUniqueWithoutMonthInput | CategoryInMonthUpdateWithWhereUniqueWithoutMonthInput[]
    updateMany?: CategoryInMonthUpdateManyWithWhereWithoutMonthInput | CategoryInMonthUpdateManyWithWhereWithoutMonthInput[]
    deleteMany?: CategoryInMonthScalarWhereInput | CategoryInMonthScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutCategoriesInMonthInput = {
    create?: XOR<CategoryCreateWithoutCategoriesInMonthInput, CategoryUncheckedCreateWithoutCategoriesInMonthInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoriesInMonthInput
    connect?: CategoryWhereUniqueInput
  }

  export type MonthCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<MonthCreateWithoutCategoriesInput, MonthUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MonthCreateOrConnectWithoutCategoriesInput
    connect?: MonthWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutCategoriesInMonthNestedInput = {
    create?: XOR<CategoryCreateWithoutCategoriesInMonthInput, CategoryUncheckedCreateWithoutCategoriesInMonthInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoriesInMonthInput
    upsert?: CategoryUpsertWithoutCategoriesInMonthInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategoriesInMonthInput, CategoryUpdateWithoutCategoriesInMonthInput>, CategoryUncheckedUpdateWithoutCategoriesInMonthInput>
  }

  export type MonthUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<MonthCreateWithoutCategoriesInput, MonthUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MonthCreateOrConnectWithoutCategoriesInput
    upsert?: MonthUpsertWithoutCategoriesInput
    connect?: MonthWhereUniqueInput
    update?: XOR<XOR<MonthUpdateToOneWithWhereWithoutCategoriesInput, MonthUpdateWithoutCategoriesInput>, MonthUncheckedUpdateWithoutCategoriesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    connect?: CategoryWhereUniqueInput
  }

  export type DayCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<DayCreateWithoutCategoriesInput, DayUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DayCreateOrConnectWithoutCategoriesInput
    connect?: DayWhereUniqueInput
  }

  export type CategoryUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput
    upsert?: CategoryUpsertWithoutTransactionsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutTransactionsInput, CategoryUpdateWithoutTransactionsInput>, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type DayUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<DayCreateWithoutCategoriesInput, DayUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DayCreateOrConnectWithoutCategoriesInput
    upsert?: DayUpsertWithoutCategoriesInput
    connect?: DayWhereUniqueInput
    update?: XOR<XOR<DayUpdateToOneWithWhereWithoutCategoriesInput, DayUpdateWithoutCategoriesInput>, DayUncheckedUpdateWithoutCategoriesInput>
  }

  export type TransactionCreateNestedManyWithoutDayInput = {
    create?: XOR<TransactionCreateWithoutDayInput, TransactionUncheckedCreateWithoutDayInput> | TransactionCreateWithoutDayInput[] | TransactionUncheckedCreateWithoutDayInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDayInput | TransactionCreateOrConnectWithoutDayInput[]
    createMany?: TransactionCreateManyDayInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<TransactionCreateWithoutDayInput, TransactionUncheckedCreateWithoutDayInput> | TransactionCreateWithoutDayInput[] | TransactionUncheckedCreateWithoutDayInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDayInput | TransactionCreateOrConnectWithoutDayInput[]
    createMany?: TransactionCreateManyDayInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TransactionUpdateManyWithoutDayNestedInput = {
    create?: XOR<TransactionCreateWithoutDayInput, TransactionUncheckedCreateWithoutDayInput> | TransactionCreateWithoutDayInput[] | TransactionUncheckedCreateWithoutDayInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDayInput | TransactionCreateOrConnectWithoutDayInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDayInput | TransactionUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: TransactionCreateManyDayInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDayInput | TransactionUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDayInput | TransactionUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<TransactionCreateWithoutDayInput, TransactionUncheckedCreateWithoutDayInput> | TransactionCreateWithoutDayInput[] | TransactionUncheckedCreateWithoutDayInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDayInput | TransactionCreateOrConnectWithoutDayInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDayInput | TransactionUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: TransactionCreateManyDayInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDayInput | TransactionUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDayInput | TransactionUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutCategoryInput = {
    id?: string
    subcategory?: string | null
    description?: string
    userId: string
    type?: string
    value: number
    day: DayCreateNestedOneWithoutCategoriesInput
  }

  export type TransactionUncheckedCreateWithoutCategoryInput = {
    id?: string
    subcategory?: string | null
    description?: string
    dayId: string
    userId: string
    type?: string
    value: number
  }

  export type TransactionCreateOrConnectWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionCreateManyCategoryInputEnvelope = {
    data: TransactionCreateManyCategoryInput | TransactionCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryInMonthCreateWithoutCategoryInput = {
    id?: string
    description: string
    goal?: number | null
    spent: number
    userId: string
    month: MonthCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryInMonthUncheckedCreateWithoutCategoryInput = {
    id?: string
    description: string
    monthId: string
    goal?: number | null
    spent: number
    userId: string
  }

  export type CategoryInMonthCreateOrConnectWithoutCategoryInput = {
    where: CategoryInMonthWhereUniqueInput
    create: XOR<CategoryInMonthCreateWithoutCategoryInput, CategoryInMonthUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryInMonthCreateManyCategoryInputEnvelope = {
    data: CategoryInMonthCreateManyCategoryInput | CategoryInMonthCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
    create: XOR<TransactionCreateWithoutCategoryInput, TransactionUncheckedCreateWithoutCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCategoryInput, TransactionUncheckedUpdateWithoutCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    categoryId?: StringNullableFilter<"Transaction"> | string | null
    subcategory?: StringNullableFilter<"Transaction"> | string | null
    description?: StringFilter<"Transaction"> | string
    dayId?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    value?: IntFilter<"Transaction"> | number
  }

  export type CategoryInMonthUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryInMonthWhereUniqueInput
    update: XOR<CategoryInMonthUpdateWithoutCategoryInput, CategoryInMonthUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryInMonthCreateWithoutCategoryInput, CategoryInMonthUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryInMonthUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryInMonthWhereUniqueInput
    data: XOR<CategoryInMonthUpdateWithoutCategoryInput, CategoryInMonthUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryInMonthUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryInMonthScalarWhereInput
    data: XOR<CategoryInMonthUpdateManyMutationInput, CategoryInMonthUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryInMonthScalarWhereInput = {
    AND?: CategoryInMonthScalarWhereInput | CategoryInMonthScalarWhereInput[]
    OR?: CategoryInMonthScalarWhereInput[]
    NOT?: CategoryInMonthScalarWhereInput | CategoryInMonthScalarWhereInput[]
    id?: StringFilter<"CategoryInMonth"> | string
    description?: StringFilter<"CategoryInMonth"> | string
    categoryId?: StringNullableFilter<"CategoryInMonth"> | string | null
    monthId?: StringFilter<"CategoryInMonth"> | string
    goal?: IntNullableFilter<"CategoryInMonth"> | number | null
    spent?: IntFilter<"CategoryInMonth"> | number
    userId?: StringFilter<"CategoryInMonth"> | string
  }

  export type CategoryInMonthCreateWithoutMonthInput = {
    id?: string
    description: string
    goal?: number | null
    spent: number
    userId: string
    category?: CategoryCreateNestedOneWithoutCategoriesInMonthInput
  }

  export type CategoryInMonthUncheckedCreateWithoutMonthInput = {
    id?: string
    description: string
    categoryId?: string | null
    goal?: number | null
    spent: number
    userId: string
  }

  export type CategoryInMonthCreateOrConnectWithoutMonthInput = {
    where: CategoryInMonthWhereUniqueInput
    create: XOR<CategoryInMonthCreateWithoutMonthInput, CategoryInMonthUncheckedCreateWithoutMonthInput>
  }

  export type CategoryInMonthCreateManyMonthInputEnvelope = {
    data: CategoryInMonthCreateManyMonthInput | CategoryInMonthCreateManyMonthInput[]
    skipDuplicates?: boolean
  }

  export type CategoryInMonthUpsertWithWhereUniqueWithoutMonthInput = {
    where: CategoryInMonthWhereUniqueInput
    update: XOR<CategoryInMonthUpdateWithoutMonthInput, CategoryInMonthUncheckedUpdateWithoutMonthInput>
    create: XOR<CategoryInMonthCreateWithoutMonthInput, CategoryInMonthUncheckedCreateWithoutMonthInput>
  }

  export type CategoryInMonthUpdateWithWhereUniqueWithoutMonthInput = {
    where: CategoryInMonthWhereUniqueInput
    data: XOR<CategoryInMonthUpdateWithoutMonthInput, CategoryInMonthUncheckedUpdateWithoutMonthInput>
  }

  export type CategoryInMonthUpdateManyWithWhereWithoutMonthInput = {
    where: CategoryInMonthScalarWhereInput
    data: XOR<CategoryInMonthUpdateManyMutationInput, CategoryInMonthUncheckedUpdateManyWithoutMonthInput>
  }

  export type CategoryCreateWithoutCategoriesInMonthInput = {
    id?: string
    name: string
    userId: string
    creationtime?: Date | string
    type?: string
    transactions?: TransactionCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCategoriesInMonthInput = {
    id?: string
    name: string
    userId: string
    creationtime?: Date | string
    type?: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCategoriesInMonthInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategoriesInMonthInput, CategoryUncheckedCreateWithoutCategoriesInMonthInput>
  }

  export type MonthCreateWithoutCategoriesInput = {
    id?: string
    date: Date | string
    goal?: number
    spent?: number
    userId: string
  }

  export type MonthUncheckedCreateWithoutCategoriesInput = {
    id?: string
    date: Date | string
    goal?: number
    spent?: number
    userId: string
  }

  export type MonthCreateOrConnectWithoutCategoriesInput = {
    where: MonthWhereUniqueInput
    create: XOR<MonthCreateWithoutCategoriesInput, MonthUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryUpsertWithoutCategoriesInMonthInput = {
    update: XOR<CategoryUpdateWithoutCategoriesInMonthInput, CategoryUncheckedUpdateWithoutCategoriesInMonthInput>
    create: XOR<CategoryCreateWithoutCategoriesInMonthInput, CategoryUncheckedCreateWithoutCategoriesInMonthInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategoriesInMonthInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategoriesInMonthInput, CategoryUncheckedUpdateWithoutCategoriesInMonthInput>
  }

  export type CategoryUpdateWithoutCategoriesInMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCategoriesInMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MonthUpsertWithoutCategoriesInput = {
    update: XOR<MonthUpdateWithoutCategoriesInput, MonthUncheckedUpdateWithoutCategoriesInput>
    create: XOR<MonthCreateWithoutCategoriesInput, MonthUncheckedCreateWithoutCategoriesInput>
    where?: MonthWhereInput
  }

  export type MonthUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: MonthWhereInput
    data: XOR<MonthUpdateWithoutCategoriesInput, MonthUncheckedUpdateWithoutCategoriesInput>
  }

  export type MonthUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: IntFieldUpdateOperationsInput | number
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    goal?: IntFieldUpdateOperationsInput | number
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateWithoutTransactionsInput = {
    id?: string
    name: string
    userId: string
    creationtime?: Date | string
    type?: string
    categoriesInMonth?: CategoryInMonthCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    userId: string
    creationtime?: Date | string
    type?: string
    categoriesInMonth?: CategoryInMonthUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTransactionsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type DayCreateWithoutCategoriesInput = {
    id?: string
    userId: string
    date: Date | string
    active?: boolean
  }

  export type DayUncheckedCreateWithoutCategoriesInput = {
    id?: string
    userId: string
    date: Date | string
    active?: boolean
  }

  export type DayCreateOrConnectWithoutCategoriesInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutCategoriesInput, DayUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryUpsertWithoutTransactionsInput = {
    update: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CategoryCreateWithoutTransactionsInput, CategoryUncheckedCreateWithoutTransactionsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutTransactionsInput, CategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type CategoryUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    categoriesInMonth?: CategoryInMonthUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    creationtime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    categoriesInMonth?: CategoryInMonthUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type DayUpsertWithoutCategoriesInput = {
    update: XOR<DayUpdateWithoutCategoriesInput, DayUncheckedUpdateWithoutCategoriesInput>
    create: XOR<DayCreateWithoutCategoriesInput, DayUncheckedCreateWithoutCategoriesInput>
    where?: DayWhereInput
  }

  export type DayUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: DayWhereInput
    data: XOR<DayUpdateWithoutCategoriesInput, DayUncheckedUpdateWithoutCategoriesInput>
  }

  export type DayUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DayUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateWithoutDayInput = {
    id?: string
    subcategory?: string | null
    description?: string
    userId: string
    type?: string
    value: number
    category?: CategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutDayInput = {
    id?: string
    categoryId?: string | null
    subcategory?: string | null
    description?: string
    userId: string
    type?: string
    value: number
  }

  export type TransactionCreateOrConnectWithoutDayInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDayInput, TransactionUncheckedCreateWithoutDayInput>
  }

  export type TransactionCreateManyDayInputEnvelope = {
    data: TransactionCreateManyDayInput | TransactionCreateManyDayInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutDayInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutDayInput, TransactionUncheckedUpdateWithoutDayInput>
    create: XOR<TransactionCreateWithoutDayInput, TransactionUncheckedCreateWithoutDayInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutDayInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutDayInput, TransactionUncheckedUpdateWithoutDayInput>
  }

  export type TransactionUpdateManyWithWhereWithoutDayInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutDayInput>
  }

  export type TransactionCreateManyCategoryInput = {
    id?: string
    subcategory?: string | null
    description?: string
    dayId: string
    userId: string
    type?: string
    value: number
  }

  export type CategoryInMonthCreateManyCategoryInput = {
    id?: string
    description: string
    monthId: string
    goal?: number | null
    spent: number
    userId: string
  }

  export type TransactionUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    day?: DayUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    dayId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryInMonthUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    month?: MonthUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryInMonthUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    monthId?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryInMonthUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    monthId?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryInMonthCreateManyMonthInput = {
    id?: string
    description: string
    categoryId?: string | null
    goal?: number | null
    spent: number
    userId: string
  }

  export type CategoryInMonthUpdateWithoutMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutCategoriesInMonthNestedInput
  }

  export type CategoryInMonthUncheckedUpdateWithoutMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryInMonthUncheckedUpdateManyWithoutMonthInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableIntFieldUpdateOperationsInput | number | null
    spent?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateManyDayInput = {
    id?: string
    categoryId?: string | null
    subcategory?: string | null
    description?: string
    userId: string
    type?: string
    value: number
  }

  export type TransactionUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategory?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}