import { useContador } from "./useContador"
import { useFetch } from "./useFetch";

const CrearContador = () => {
    const {contador, incrementar, decrementar} = useContador(1, 20);

    const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
        <h2>Use Contador</h2>
        <button onClick={incrementar}>Sumar</button>
        <strong>{contador}</strong>
        <button onClick={decrementar}>Restar</button>

        <hr />
        <h2>Fetch de Datos</h2>
        {data && data.map(usuario => <p key={usuario.id}>{usuario.name}</p>)}
    </div>
  )
}

export default CrearContador