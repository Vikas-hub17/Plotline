import React from 'react';
import './App.css';
import Tooltip from "@material-ui/core/Tooltip";

 const YourComponent = () => {
  return (

    <div>
    {/* UI Layout */}

      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="Frame1">  
      <div className="Rectangle_6"></div>
      <div className="Rectangle_1"></div>
      <div className="Rectangle_3"></div>
      <div className="Rectangle_5"></div>
      <div className="Rectangle_2"></div>
      <div className="Rectangle_4"></div>
      <div className="Button_1">Button 1</div>
      <div className="Button_2">Button 2</div>
      <Tooltip title="Tooltip Text">
      <div className="Button_3">Button 3</div>
      </Tooltip>
      
      <div className="Button_5">Button 5</div>
      <div className="Button_4">Button 4</div>
      <div className="Rectangle_7"></div>
      <div className='polygon'></div>
      <div className='Group'></div>
      <div className="Tooltip_Text">Tooltip Text</div>
</div>


</div>
);
}
export default YourComponent;