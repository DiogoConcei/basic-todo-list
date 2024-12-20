import { ChangeEvent, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
import "./form.css";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  novaTarefa: string;
}

export default function Form({ onSubmit, onChange, novaTarefa }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="form">
      <input type="text" onChange={onChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
