import { prisma } from "../../database/client.js";

export class GetByIdLocalController {

     async handle(request, response) {

          const { id } = request.params;

          const local = await prisma.localColeta.findUnique({

               where: {
                    id: parseInt(id)
               },

               include: {
                    cidade: {
                         include: {
                              estado: true
                         }
                    },
               }
          });

          return response.json(local);

     }

}