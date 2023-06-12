import { useState } from "react";
import TarefasFeitas from "../TarefasFeitas/TarefasFeitas";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefasFeitas, setTarefasFeitas] = useState([]);


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const tarefaRemovida = lista.find((item) => item === tarefa);
    setLista(lista.filter((item) => item !== tarefa));
    setTarefasFeitas([...tarefasFeitas, tarefaRemovida]);
  };
  

  const adicionaTarefaTeclaEnter = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  }


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={adicionaTarefaTeclaEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
<TarefasFeitas tarefasFeitas={tarefasFeitas} />
    </ListaTarefasContainer>     
  );
}
