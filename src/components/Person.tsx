import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState<String>("usuario");

  setTimeout(() => {
    setPerson("usuario 2");
  }, 1000);

  return (
    <div>
      <h1>Perfil</h1>
      <p>esté é o perfil de {person}</p>
    </div>
  );
}
