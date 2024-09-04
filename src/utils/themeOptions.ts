import type { Theme } from "./props"

export const LIGHT: Theme = {
    dark: false,
    colors: {
        primary: "#A020F0",
        background: "#A020F0",
        card: "rgb(255,255,255)",
        text: "#A020F0",
        border: "#A020F0",
        notification: "rgb(55,22,58)",
    }
}

export const DARK: Theme = {
    dark: false,
    colors: {
        primary: "#FF0000",
        background: "#FF0000",
        card: "rgb(255,255,255)",
        text: "#FF0000",
        border: "#FF0000",
        notification: "rgb(55,22,58)",
    }
}