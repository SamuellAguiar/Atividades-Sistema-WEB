import { prisma } from '../../database/client.js'

export class CreateEstadoController {

     async handle(request, response) {

          const { nome, sigla } = request.body;

          if (nome === "") {
               return response.status(400).json({
                    message: 'Invalid data. Nome and sigla are required.'
               })
          }


          const estado = await prisma.estado.create({
               data: {
                    nome,
                    sigla
               }
          })

          return response.json(estado);

     }
}