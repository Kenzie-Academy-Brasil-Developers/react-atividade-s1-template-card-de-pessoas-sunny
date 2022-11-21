import './style.css';


const Develop = ({name, age, country}) => {
    return (
        <div className='develop-card'>
            <h1>Dev:{` ${name}`} </h1>
            <p>Idade:{` ${age}`}</p>
            <p>País:{` ${country}`}</p>
        </div>
    );
}

export default Develop;