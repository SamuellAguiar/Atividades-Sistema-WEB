import { prisma } from '../../database/client.js'

export class UpdatePessoaController {

     async handle(request, response) {

          const { id, nome, rua, numero, complemento, cidade_id, tipo_id } = request.body;

          const pessoa = await prisma.pessoa.update({

               where: {
                    id: parseInt(id)
               },
               data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade: {
                         connect: {
                              id: cidade_id
                         }
                    },
                    tipo: {
                         connect: {
                              id: tipo_id
                         }
                    }

               }

          });

          return response.json(pessoa);

     }

}