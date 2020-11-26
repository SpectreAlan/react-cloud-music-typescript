import React from "react"
import {Provider} from "react-redux"
import {GlobalStyle} from "./style"
import {renderRoutes} from "react-router-config"
import IconFont from "./assets/IconFont/iconfont"
import store from "./store"
import {routes} from "./routes"
import {HashRouter} from "react-router-dom"
import {backupStore} from './utils/store'

window.onbeforeunload = () => backupStore(store.getState());
export const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <GlobalStyle/>
                <IconFont/>
                {renderRoutes(routes)}
            </HashRouter>
        </Provider>
    )
}
