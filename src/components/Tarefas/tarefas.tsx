import { FaEdit, FaWindowClose } from "react-icons/fa";

interface TarefaProps {
  handleDelete: (event: React.MouseEvent<SVGElement>, index: number) => void;
  handleEdit: (event: React.MouseEvent<SVGElement>, index: number) => void;
  tarefas: string[];
}

export default function Tarefas({
  handleDelete,
  handleEdit,
  tarefas,
}: TarefaProps) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
