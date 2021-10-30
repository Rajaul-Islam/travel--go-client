import { Redirect, Route } from "react-router";
import useAuth from "../Hook/useAuth";


function PrivateRoute({ children, ...rest }) {

    const { allContext } = useAuth()
    const { user,isLoading } = allContext;
    if(isLoading){
        return 'loading'
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;