import { prisma } from '../../database/client.js';

export class GetAllDoacaoController {

     async handle(request, response) {

          try {
               const doacoes = await prisma.doacao.findMany({
                    select: {
                         id: true,
                         data: true,
                         pessoa: {
                              select: {
                                   id: true,
                                   nome: true,
                                   rg: true,
                              }
                         },
                         local: {
                              select: {
                                   id: true,
                                   nome: true,
                              }
                         }
                    }
               });

               return response.json(doacoes);
          } catch (error) {
               console.error('Error retrieving doacoes:', error);
               return response.status(500).json({
                    message: 'Internal server error.'
               });
          }
     }

}