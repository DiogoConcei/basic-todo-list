import React, { useState, useEffect } from "react";

import "./Main.css";
import Form from "./Form/form";
import Tarefas from "./Tarefas/tarefas";

export default function Main() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [index, setIndex] = useState<number | null>(null);
  const [tarefas, setTarefas] = useState<string[]>([]);

  useEffect(() => {
    if (tarefas.length > 0) {
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
  }, [tarefas]);

  useEffect(() => {
    const tarefasFromLocalStorage = localStorage.getItem("tarefas");
    if (tarefasFromLocalStorage) {
      try {
        const parsedTarefas = JSON.parse(tarefasFromLocalStorage);
        setTarefas(parsedTarefas);
      } catch (e) {
        console.error("Erro ao parsear as tarefas do localStorage:", e);
      }
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newTask = novaTarefa.trim();

    if (newTask === "") return;
    if (index === null) {
      if (!tarefas.includes(newTask)) {
        setTarefas([...tarefas, newTask]);
      }
    } else {
      const updatedTarefas = [...tarefas];
      updatedTarefas[index] = newTask;
      setTarefas(updatedTarefas);
      setIndex(null);
    }
    setNovaTarefa("");
  };

  const handleDelete = (event: React.MouseEvent<SVGElement>, index: number) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const handleEdit = (event: React.MouseEvent<SVGElement>, index: number) => {
    setIndex(index);
    setNovaTarefa(tarefas[index]);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNovaTarefa(event.target.value);
  };

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        novaTarefa={novaTarefa}
      />
      <Tarefas
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        tarefas={tarefas}
      />
    </div>
  );
}
