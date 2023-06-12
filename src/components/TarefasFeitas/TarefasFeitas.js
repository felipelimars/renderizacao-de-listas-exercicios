import React from 'react'

import {
    Tarefa,
    TextoSilver
} from "./styled";


const TarefasFeitas = ({ tarefasFeitas }) => {
    return (
      <div>
        {tarefasFeitas.map((tarefa, index) => (
          <div key={index}>
            <Tarefa>
              <TextoSilver>{tarefa}</TextoSilver>
            </Tarefa>
          </div>
        ))}
      </div>
    );
  };
  
  export default TarefasFeitas;
  