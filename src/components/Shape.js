import styled from 'styled-components';

function getRGBValues(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

const ShapeEl = styled.div`
  width: ${({ styles }) => styles.width}px;
  height: ${({ styles }) => styles.height}px;
  border-radius: ${({ styles }) => styles['border-radius']}%;

  background-color: ${({ styles }) =>
    getRGBValues(styles.red, styles.green, styles.blue)};

  border-top: ${({ styles }) => styles['border-top']};
  border-right: ${({ styles }) => styles['border-right']};
  border-bottom: ${({ styles }) => styles['border-bottom']};
  border-left: ${({ styles }) => styles['border-left']};
`;

function Shape({ styles }) {
  console.log(styles.height);
  return <>{<ShapeEl styles={styles} />}</>;
}

export default Shape;
