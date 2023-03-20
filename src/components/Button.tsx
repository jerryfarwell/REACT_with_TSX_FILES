import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    clikButton: () => void;
}

export const Button = ({children, clikButton }: Props) => {  
  return (
<button type="button" className="btn btn-primary" onClick={clikButton}>{children}</button> 
 )
}

export default Button;

