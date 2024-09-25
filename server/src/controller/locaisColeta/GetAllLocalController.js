import { prisma } from '../../database/client.js';

export class GetAllLocalController {

     async handle(request, response) {

          try {
               const locais = await prisma.localColeta.findMany({
                    select: {
                         id: true,
                         nome: true,
                         rua: true,
                         numero: true,
                         complemento: true,
                         cidade: {
                              select: {
                                   id: true,
                                   nome: true,
                              }
                         },
                    }
               });

               return response.json(locais);
          } catch (error) {
               console.error('Error retrieving locais:', error);
               return response.status(500).json({
                    message: 'Internal server error.'
               });
          }
     }

}