import { Button } from "../../dyee-component-design-system/ui/button";
import { useNavigate } from "react-router-dom"

const HomePage = () => {

    const navigate = useNavigate()

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    return (
        <>
        <div>
            {/* <img src="/pawn.svg" /> */}
        </div>
        <div>
            <h1 className="text-5xl font-extrabold">Do You Even <span className="italic">Enpassant</span>?</h1>
            <Button variant={"default"} onClick={() => handleNavigate("/game")}>Play</Button>
        </div>
        </>
    );
};

export default HomePage;