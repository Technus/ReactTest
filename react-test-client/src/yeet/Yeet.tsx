import * as React from 'react';
import styled from 'styled-components'

export interface IYeetProps {
  YeetName?:string;
  children?:any;
}
export interface IYeetState {
  kek?:string;
}

export default class Yeet extends React.Component<IYeetProps,IYeetState> {

  constructor(props:IYeetProps) {
    super(props);
    this.state={kek:"KEK"};
  }
  
  public render() {
    return (
      <StyledButton onClick={()=>console.log("AGREED")}>
        {this.props.YeetName??"Yeet"}
      </StyledButton>
    );
  }
}

const StyledButton=styled.button`
  color: lightblue;
  background-color: navy;
  border-radius:5px;
  border-color:blue;
  border-style:solid;
  margin:2px;
  ::selection{
    background:white
  }
`
