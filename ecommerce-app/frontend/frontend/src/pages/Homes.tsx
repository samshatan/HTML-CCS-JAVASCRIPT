import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Homes = () => {
    return (
        <div>
            <Link to='/signin'>
                <Button>Login</Button>
            </Link>
        </div>
    )
}
export default Homes;