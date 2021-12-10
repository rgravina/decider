import ReactTestUtils from "react-dom/test-utils";
import {unmountComponentAtNode} from "react-dom";

export const enterText = (name, text) => {
    const input = document.querySelector(`[name=${name}]`)
    input.value = text
    ReactTestUtils.Simulate.change(input)
}

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

export let container = null;
