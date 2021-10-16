import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import FileUpload from "../FileUpload/FileUpload";
import SongList from "../SongList/SongList";
export default function Router({bar}){
    return(
        <BrowserRouter>
            {bar}

            <Switch>
                <Route path="/convert" exact>
                    <FileUpload/>                  
                </Route>
                <Route path="/songs" exact>
                    <SongList/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}