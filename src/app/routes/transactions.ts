import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export interface TransactionData {
    id: number;
    date: Date;
    amount: number;
}

const Day = 1000 * 60 * 60 * 24;

export const transactions: TransactionData[] = [
    {
        id: 0,
        date: new Date(Date.now() - Day * 2),
        amount: -10,
    },
    {
        id: 1,
        date: new Date(Date.now() - Day * 3),
        amount: -150,
    },
    {
        id: 2,
        date: new Date(Date.now() - Day * 4),
        amount: -50,
    },
];


export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/api/transactions',
    async function (request: FastifyRequest, reply: FastifyReply) {
      return { transactions };
    }
  );
}
