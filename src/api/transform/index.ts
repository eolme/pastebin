import type { ValueTransformer } from 'typeorm';

export const transformer: Record<'date' | 'bigint', ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(Number.parseInt(date, 10)),
    to: (date?: Date | undefined) => date && date.valueOf().toString()
  },
  bigint: {
    from: (bigInt: string | null) => bigInt && Number.parseInt(bigInt, 10),
    to: (bigInt?: number | undefined) => bigInt && bigInt.toString()
  }
};
