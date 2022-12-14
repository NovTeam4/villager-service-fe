import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  width: 1024px;
  min-width: 300px;
  margin: 0 auto;
  background-color: #f8f9fa;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Responsive({ children, ...rest }) {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

export default Responsive;
