import styled from 'styled-components';

import { getRGBValues } from '../../data/helpers';

const ShapeEl = styled.div`
  width: ${({ styles }) => styles.width}px;
  height: ${({ styles }) => styles.height}px;
  border-radius: ${({ styles }) => styles['border-radius']}%;

  background-color: ${({ styles }) => getRGBValues(styles.red, styles.green, styles.blue)};

  border-top-width: ${({ styles }) => styles['border-top-width']}px;
  border-right-width: ${({ styles }) => styles['border-right-width']}px;
  border-bottom-width: ${({ styles }) => styles['border-bottom-width']}px;
  border-left-width: ${({ styles }) => styles['border-left-width']}px;
  border-top-color: ${({ styles }) => styles['border-top-color']};
  border-right-color: ${({ styles }) => styles['border-right-color']};
  border-bottom-color: ${({ styles }) => styles['border-bottom-color']};
  border-left-color: ${({ styles }) => styles['border-left-color']};
  border-top-style: ${({ styles }) => styles['border-top-style']};
  border-right-style: ${({ styles }) => styles['border-right-style']};
  border-bottom-style: ${({ styles }) => styles['border-bottom-style']};
  border-left-style: ${({ styles }) => styles['border-left-style']};
`;

export default ShapeEl;
