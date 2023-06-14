import styled from "styled-components";

const StyleMovie = styled.div`
    margin-bottom: 1rem;
    
img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
h3 {
    color: #f1ca89;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }
  
p {
    color: #64748b;
  }

a {
  text-decoration: none;
}

  /* Medium Screen */
  @media (min-width: 768px){
        flex-basis: 50%;
  }

  /* Large Screen */
  @media (min-width: 992px){
        flex-basis: 25%;
        padding: 1rem;
  }`;

export default StyleMovie;