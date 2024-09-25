import { prisma } from '../../database/client.js';

export class CreateDoacaoController {

     async handle(request, response) {

          const { pessoa_id, local_id, data } = request.body;

          if (!data) {
               return response.status(400).json({
                    message: 'Invalid data. Data is required.'
               });
          }

          try {
               const doacao = await prisma.doacao.create({
                    data: {
                         pessoa_id,
                         local_id,
                         data
                    }
               });

               return response.json(doacao);
          } catch (error) {
               console.error('Error creating doacao:', error);
               return response.status(500).json({
                    message: 'Internal server error.'
               });
          }
     }
}