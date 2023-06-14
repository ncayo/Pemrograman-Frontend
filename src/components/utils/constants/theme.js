import { css } from "styled-components";
const theme = {
    // Color Theme
    colors: {
        primary: "#f1ca89",
        secondary: "#68a19b",
    },

    sizebutton:{
        sm: css`
        font-size: 0.8rem
        padding: 0.2rem 0.5rem;
        `,
        md: css`
        font-size: 1rem
        padding: 0.5rem 1rem;
        `,
        lg: css`
        font-size: 1.3rem
        padding: 0.5rem 1rem;
        `,
    }

    // Other: padding, margin, size
};

export default theme;
