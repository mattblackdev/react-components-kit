import styled from 'styled-components';

import colorGetter from './colorGetter';

const DEFAULT_GUTTER = 8;

const Icon = styled.i`
  font-size: ${props => props.size || '1.2rem'};
  ${props => props.color && `color: ${colorGetter(props, props.color)};`}
  ${props => props.mright &&
    `margin-right: ${props.gutter || DEFAULT_GUTTER}px;`
  }
  ${props => props.mleft &&
    `margin-left: ${props.gutter || DEFAULT_GUTTER}px;`
  }
`;

export default Icon;
