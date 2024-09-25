import { prisma } from "../../database/client.js";

export class GetByIdPessoaController {

     async handle(request, response) {

          const { id } = request.params;

          const pessoa = await prisma.pessoa.findUnique({

               where: {
                    id: parseInt(id)
               },

               include: {
                    cidade: {
                         include: {
                              estado: true
                         }
                    },
                    tipo: true
               }
          });

          return response.json(pessoa);

     }

}