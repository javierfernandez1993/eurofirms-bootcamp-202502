import { useNavigate } from "react-router"

export const ChooseGender = () => {
    const navigate = useNavigate()

    const handleRockClick=() => navigate("/rockPoll")
    const handleMetalClick=() => navigate("/metalPoll")
    return <section>
        <div className="my-2 flex justify-start font-family: Rock Salt">
            ¿Cual es tu genero favorito?
        </div>
    <div className="flex space-x-4">
         <button
            className="bg-black text-white px-2 font-family: Rock Salt cursor-pointer"
            type="button"
            onClick={handleRockClick}
            
        >
            rock
        </button>
   
         <button
            className="bg-black text-white px-2 font-family: Rock Salt cursor-pointer"
            type="button"
            onClick={handleMetalClick}
           
        >
            metal
        </button>
    </div>
       
    </section>
}

