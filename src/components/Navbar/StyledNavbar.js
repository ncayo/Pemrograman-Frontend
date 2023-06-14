import styled from "styled-components";

const StyledNavbar = styled.div`
/* Small screen */
background-color: #68a19b;
padding: 1rem;
color: #f1ca89;
text-align: center;

nav{
    display: flex;
    flex-direction: column;
}

h1{
    display: flex
    // flex-direction: column;
    font-size: 2.4rem;
    margin-bottom: 1rem;
}

ul{
    display: flex;
    flex-direction: column;
    list-style: none;
}

li{
    margin-bottom: 1rem;
}

Link{
    color: #f1ca89;
    text-decoration: none;
}
a {
  text-decoration: none;
}

/* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  
    h1 {
      margin-bottom: 0;
    }
  
    ul {
      flex-direction: row;
    }
  
    li {
      margin: 0 1rem;
    }
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
  }
`;

export default StyledNavbar;