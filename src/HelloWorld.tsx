  /**
   * 
   * componente feito para fins didaticos do projeto 
   */

  export default function HelloWorld(){

        const name = "teste constant";
        const title = <h1>Funcionou, {name}!!!</h1>
        const index = 0; 

        if (name === 'teste constant') {
            return <div>
                <h1  tabIndex={index} 
                style = {{background: 'red'}}> {name}</h1>
            </div>
        }
    return <div>
        {title}
    </div>

}