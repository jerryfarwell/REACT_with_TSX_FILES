import { useState } from "react";

// items: [], heading: string
interface Props {
  item: string[];
  heading: string;

  onSelectItem: (item: string) => void;  // this parameters allows to see the props of the item that has been selected it has to be insert into the function down and has to be include into our app app file 
}



function ListGroup({item, heading, onSelectItem }: Props){

  const [selectedIndex, setSelectedIndex] = useState(-1);  

  return ( 
    <>
    <br/>
    <h1>{heading} </h1>
    <h4>MOST BEAUTIFUL COUNTRIES IN THE WORLD</h4>
    <br/>
    {item.length === 0 && <p>no country found </p>}
    <ul className="list-group">
     {item.map((item, index) => ( 
     <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
      key={item} onClick={() => {
        setSelectedIndex(index);
        onSelectItem(item);   // this should be include here to notify that the selected item will be shown into the console
        }}>
          {item}</li>))}  
     </ul> 
    </>
  )
}

export default ListGroup;  

