import { prisma } from "../../database/client.js";

export class GetByIdDoacaoController {

     async handle(request, response) {

          const { id } = request.params;

          const doacao = await prisma.doacao.findUnique({

               where: {
                    id: parseInt(id)
               },

               include: {
                    pessoa: true
               },
               include: {
                    local: true
               },
          });

          return response.json(doacao);

     }

}