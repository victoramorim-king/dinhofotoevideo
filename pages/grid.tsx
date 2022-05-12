import { NextPage } from "next";
import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import React from "react";
import { render } from "react-dom";
import { Gallery } from "../components/gallery";

const Grid: NextPage = () => {
    return(

         <Gallery title="Victor" paragraph="Esse é meu nome!" />
    )
}

export default Grid