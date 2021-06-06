import { BackTop } from "antd"
import Home from "pages/Dossier"
import React, { Suspense } from "react"
import { Route, useRouteMatch, Switch } from "react-router-dom"
import NotFound from "../components/Common/NotFound"
const FrameAdmin = React.lazy(() => import("../pages/FrameAdmin"))
const Routes = () => {
    const match = useRouteMatch()
    return (
        <div>
            <Suspense fallback={() => <h1>loading...</h1>}></Suspense>
            <Switch>
                <Route
                    exact
                    path={`${match.url}`}
                    render={() => {
                        return <FrameAdmin />
                    }}
                />
                <Route
                    exact
                    path={`${match.url}/:productType`}
                    render={() => {
                        return <FrameAdmin />
                    }}
                />
                <Route
                    path={`${match.url}/:productType/:productId`}
                    render={() => {
                        return <FrameAdmin />
                    }}
                />
                <Route component={NotFound} />
            </Switch>
            <BackTop />
        </div>
    )
}

export default Routes
