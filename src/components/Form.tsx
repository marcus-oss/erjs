import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        type="text"
        name="name"
        value={form.name}
        onChange={handleInputChange}
      />

      <input
        placeholder="Sobrenome"
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleInputChange}
      />

      <input
        placeholder="E-mail"
        type="e-mail"
        name="email"
        value={form.email}
        onChange={handleInputChange}
      />
      <button type="submit">enviar formulario</button>
    </form>
  );
}
