import styled from 'styled-components';

import { getRGBValues } from '../../data/helpers';

const ShapeEl = styled.div`
  width: ${({ styles }) => styles.width}px;
  height: ${({ styles }) => styles.height}px;
  border-radius: ${({ styles }) => styles['border-radius']}%;

  background-color: ${({ styles }) =>
    getRGBValues(styles.red, styles.green, styles.blue)};

  border-top-width: ${({ styles }) => styles['border-top']}px;
  border-right-width: ${({ styles }) => styles['border-right']}px;
  border-bottom-width: ${({ styles }) => styles['border-bottom']}px;
  border-left-width: ${({ styles }) => styles['border-left']}px;
`;

export default ShapeEl;
