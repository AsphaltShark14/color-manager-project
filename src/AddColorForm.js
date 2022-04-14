import React from "react";
import { useInput } from "./hooks/useInput";

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput('#000000');

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle("");
        resetColor("");

    }

    return (
        <form onSubmit={submit}>
            <input {...titleProps}type="text" placeholder="color title..." required />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    );

    /* UNCONTROLLED ELEMENT BUILD - import useRef first!!
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = e => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        onNewColor(title,color);
        txtTitle.current.value = "";
        hexColor.current.value = "";
    }

    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required />
            <input ref={hexColor} type="color" required />
            <button>ADD</button>
        </form>
    */
}