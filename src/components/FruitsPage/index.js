//importando useSelector do react-redux
import { useSelector } from "react-redux";
import "./style.css";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <div className="container" key={fruit}>
          <p className={fruit.toLowerCase()}> {fruit} </p>
        </div>
      ))}
    </div>
  );
};

export default FruitsPage;
