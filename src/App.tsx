import React, { useState } from 'react'
import { Button } from './components/Button'   // here we simply import button  this file is App.tsx

export const App = () => {

  const [alertVisible, setAlertVisible] = useState(false);  // here we just create a constante with two values it is important to use set for the second has we are using useState

  return (
    <div>
      { alertVisible && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>} 
       <Button clikButton={() => setAlertVisible(true)}> 
       click on me 
        </Button> 
    </div>
  )
}

export default App;
