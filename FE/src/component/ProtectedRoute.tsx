import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { RootState } from '../store';

export interface Props extends RouteProps {}

const ProtectedRoute: FC<Props> = ({ children, ...rest }) => {
    const isLoggedIn = useSelector((state: RootState) => state.profileState.isLoggedIn);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
