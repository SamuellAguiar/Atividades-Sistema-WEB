import { useEffect, useState } from "react"
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEstado = () => {

     const [nome, setNome] = useState('');
     const [sigla, setSigla] = useState('');
     const navigate = useNavigate();
     const { id } = useParams();

     useEffect(() => {
          api.get(`/estados/${id}`).then(response => {
               setNome(response.data.nome);
               setSigla(response.data.sigla);
          })
     }, [id]);

     const handleUpdateEstado = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const data = {
               id: parseInt(String(id)),
               nome,
               sigla
          };
          try {
               await api.put('/estados', data);
               alert('Estado atualizado com sucesso!');
               navigate('/estados');
          } catch (error) {
               console.log(error);
               alert('Erro ao atualizar o estado!');
          }
     }

     return (
          <div>
               <h3>Atualização de estado: {nome} - {sigla}</h3>
               <form onSubmit={handleUpdateEstado}>
                    <div>
                         <label htmlFor="nome">Nome</label>
                         <input type="text" name="nome" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div>
                         <label htmlFor="sigla">Sigla</label>
                         <input type="text" name="sigla" id="sigla" value={sigla} onChange={e => setSigla(e.target.value)} />
                    </div>
                    <button type="submit">Atualizar</button>
                    <button type="reset">Limpar</button>
               </form>
          </div>
     )
}

export default UpdateEstado;