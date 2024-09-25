import { prisma } from '../../database/client.js';

export class GetAllTipoSanguineoController {

     async handle(response) {

          try {
               const tipos = await prisma.tipoSanguineo.findMany({
                    select: {
                         id: true,
                         tipo: true,
                         fator: true,
                    }
               });

               return response.json(tipos);
          } catch (error) {
               console.error('Error retrieving tipos:', error);
               return response.status(500).json({
                    message: 'Internal server error.'
               });
          }
     }

}