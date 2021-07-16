import React from 'react';
import Card from './Cards';
import SData from './SData';

function ncard(val){
    console.log(val);
 return (
    <Card 
    key={val.id}
    image={val.image}
    title={val.title}
    cardName={val.cardName}
    href={val.href}
    /> 
 )
}
const App = () => (<>
<h1 className="heading_style">Top 5 Netflix Series in 2020</h1>
{SData.map(ncard)}
</>);
export default App;