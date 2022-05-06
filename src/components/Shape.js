import styled from 'styled-components';

const ShapeEl = styled.div`
  /* width: ${({ styles }) => styles.width}px; */
  /* height: ${(styles) => styles.height}px; */

  width: 300px;
  height: 400px;

  border-radius: ${(styles) => styles['border-radius']}%;
  background-color: rgb(30, 30, 20);
  border-top: ${(styles) => styles['border-top']};
  border-right: ${(styles) => styles['border-right']};
  border-bottom: ${(styles) => styles['border-bottom']};
  border-left: ${(styles) => styles['border-left']};
`;

function Shape({ styles }) {
  console.log(styles.width);
  return <>{<ShapeEl styles={styles} />}</>;
}

export default Shape;
