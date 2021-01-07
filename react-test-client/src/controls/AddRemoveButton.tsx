import * as React from 'react';
import styled from 'styled-components';

export interface IAddRemoveButtonProps {
}

export default class AddRemoveButton extends React.Component<IAddRemoveButtonProps> {
  public render() {
    return (
      <Inline>
        <LeftButton>+</LeftButton>
        <RightButton>-</RightButton>
        {this.props.children}
      </Inline>
    );
  }
}

const Inline=styled.div`
  float:right;
  
`;

const LeftButton=styled.button`
  border-radius:3px 0px 0px 3px;
  border-style:solid;
  border-width:1dp;
`;

const CenterButton=styled.button`
  border-radius:3px 0px 0px 3px;
  border-style:solid;
  border-width:1dp;
`;

const RightButton=styled.button`
  border-radius:0px 3px 3px 0px;
  border-style:solid;
  border-width:1dp;
`;

