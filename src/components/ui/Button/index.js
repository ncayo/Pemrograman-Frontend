// Import Styled Component
import styled, { css } from "styled-components";

/**
 - Membuat variable Button (Component)
 - Buat element button dan beri styling
 - Styling menggunakan tagged template
 */

 const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #431ee;
    cursor: pointer;

    /**
     * Menangkap Props variant
     * Props diakses melalui function.
     */ 

    backGround-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

// Jika ada Props full,tambahkan css baru
${(props) => props.full && css`
display: block;
width: 100%
`}

`;
export default Button;