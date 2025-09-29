import PropertyProps from "@/interfaces";
import Button from "./Button";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const propList: PropertyProps[] = PROPERTYLISTINGSAMPLE;
    propList.map((prop) => {
        console.log(prop);
    });
    
const Card: React.FC<PropertyProps[]>= () => {
return(
    <>
        <div className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold mb-2">Card Title</h2>
            <p className="text-gray-700">This is a simple card component.</p>
            <p>
                Eii
            </p>
            <Button />
        </div>  
    </>
);
}

export default Card;