import {useRouteError} from 'react-router-dom';
const Error =() =>
    {
        const err = useRouteError();
        console.log(err)
        return (
            <>
            <h1>Oops!!!</h1>
            <p>{err.status}</p>
            <h1>{err.statusText}</h1>
            </>
        )
    };

    export default Error;