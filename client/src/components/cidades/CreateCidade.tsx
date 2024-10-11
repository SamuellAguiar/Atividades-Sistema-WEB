import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { EstadoInterface } from "../estados/ListEstados";

const CreateCidade = () => {

     const [nome, setNome] = useState('');
     const [estadoId, setEstadoId] = useState(0);
     const navigate = useNavigate();
     const [estados, setEstados] = useState<EstadoInterface[]>([]);

     useEffect(() => {

          api.get('/estados')
               .then(response => {
                    setEstados(response.data);
               })
               .catch(error => {
                    console.error(error);
                    alert('Erro ao buscar os estados!');
               });
     }, []);

     const handleNewCidade = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (estadoId === null) {
               alert('Por favor, selecione um estado.');
               return;
          }

          const data = { nome, estadoId };

          try {
               await api.post('/cidades', data);
               alert('Cidade cadastrada com sucesso!');
               navigate('/cidades');
          } catch (error) {
               alert('Erro ao cadastrar Cidade!' + error);
          }
     };


     // Objetos de estilo inline
     const containerStyle = {
          width: '800px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
     };

     const titleStyle = {
          color: '#007bff',
          marginBottom: '20px',
     };

     const labelStyle = {
          fontWeight: 'bold',
          marginBottom: '8px',
          display: 'block',
     };

     const inputStyle = {
          padding: '10px',
          fontSize: '16px',
          width: '90%',
          border: '1px solid #ddd',
          borderRadius: '4px',
          marginBottom: '20px',
          backgroundColor: '#f9f9f9',
          color: '#333',
     };

     const buttonStyle = {
          padding: '10px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
     };

     const submitButtonStyle = {
          ...buttonStyle,
          backgroundColor: '#28a745',
          color: 'white',
          marginRight: '10px',
     };

     const resetButtonStyle = {
          ...buttonStyle,
          backgroundColor: '#dc3545',
          color: 'white',
     };

     return (
          <div style={containerStyle}>
               <h1 style={titleStyle}>Cadastrar Cidade: </h1>

               <form onSubmit={handleNewCidade}>
                    <div>
                         <label htmlFor="nome" style={labelStyle}>Nome: </label>
                         <input
                              type="text"
                              id="nome"
                              name="nome"
                              value={nome}
                              onChange={e => setNome(e.target.value)}
                              style={inputStyle}
                              required
                         />
                    </div>

                    <div>
                         <label htmlFor="sigla" style={labelStyle}>Estado: </label>
                         <select
                              id="estadoId"
                              name="estadoId"
                              onChange={e => setEstadoId(parseInt(e.target.value))}
                              style={inputStyle}
                              value={estadoId}
                              required
                         >
                              <option value="0" >
                                   Selecione um estado:
                              </option>

                              {
                                   estados.map(estado => (
                                        <option value={estado.id} key={estado.id}>
                                             {estado.nome}
                                        </option>
                                   ))
                              }

                         </select>
                    </div>

                    <button type="submit" style={submitButtonStyle}>Cadastrar</button>
                    <button type="reset" style={resetButtonStyle}>Limpar</button>
               </form>
          </div>
     );
};

export default CreateCidade;