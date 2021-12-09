import {render, unmountComponentAtNode} from "react-dom";
import React from "react";

export let container = null;
export const page = () => {
    return container.textContent
}

export const submitForm = () => {
    document.querySelector("button").click()
}

export const setupDOM = () => {
    container = document.createElement("div");
    document.body.appendChild(container)
}

export const teardownDOM = () => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
}