import  {NavLink} from 'react-router-dom';

function LevelsNav() {
    return (
        <nav>
            <NavLink to="/1" >Level 1</NavLink>
            <NavLink to="/2" >Level 2</NavLink>
            <NavLink to="/3" >Level 3</NavLink>
        </nav>
    )
}

export default LevelsNav;