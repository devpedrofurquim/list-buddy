import type { Theme } from "./props"

export const LIGHT: Theme = {
    dark: false,
    colors: {
        primary: "#000",
        background: "#FFF",
        card: "rgb(255,255,255)",
        text: "#000",
        border: "#000",
        notification: "rgb(55,22,58)",
    }
}

export const DARK: Theme = {
    dark: false,
    colors: {
        primary: "#000",
        background: "#000",
        card: "rgb(255,255,255)",
        text: "#000",
        border: "#000",
        notification: "rgb(55,22,58)",
    }
}