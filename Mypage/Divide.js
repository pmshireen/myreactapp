import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Top from './Top';
import Top2 from './Top2';
import Top3 from './Top3';
import EmptyView from './Components/EmptyView'
import { dataList } from './Components';
import Roomdetail from './Roomdetail';
import { Freebies } from './Components';
import Top4 from './Top4';
import Amenties from './Amenties';
import { AmentData } from './Components';
export default function MiddleDividers() {

  const [selectedPrice, setSelectedPrice] = useState([50, 1200]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);

  const [freeItem,setFreeItem] = useState(Freebies);

  const [ament,setAment] = useState(AmentData);

  // console.log(freeItem);
  
  const handleChangeChecked= (id)=>{
    // console.log("id",id);
   
    const stateListChecked = freeItem.map((item)=>
       item.id === id ? {...item,checked:!item.checked} : item
      
    );
    // console.log("stateListChecked",stateListChecked)
    setFreeItem(stateListChecked);
  //  console.log("After",freeItem)
  }


  const handleChangeAment= (id)=>{
    
    const stateListChecked = ament.map((item)=>
       item.id === id ? {...item,checked:!item.checked} : item    
    );  // console.log("stateListChecked",stateListChecked)
    setAment(stateListChecked); //  console.log("After",freeItem)
  }


  const handleChangePrice = (e) => {
    console.log(e.target.value);
    setSelectedPrice(e.target.value);
    // console.log(selectedPrice);

  }
  const handleSelectRating = (value) =>{
    setSelectedRating(value);
    //  console.log(value);
  }; 
  

const applyFilters = async() => {
  const response = await fetch("http://localhost:3000/app/findAll");
  const updatedList = await response.json();
      // let updatedList = dataList;
     console.log(updatedList);
      const minPrice = selectedPrice[0];
      // console.log(minPrice);
      const maxPrice = selectedPrice[1];
  
      updatedList = updatedList.filter(
        (item) => item.ratePerNight >= minPrice && item.ratePerNight <= maxPrice
      );
      // console.log(updatedList);


      if (selectedRating) {
        updatedList = updatedList.filter(
          (item) => parseInt(item.rating) === parseInt(selectedRating)
        );
        // console.log(updatedList);
      }

      // Freebies Checkbox
      const freeItemChecked = freeItem.filter((item)=> item.checked)
      .map((item) => item.label.toLowerCase());//  console.log("after Filter",freeItemChecked)
    //  console.log("FreeItemlabel",freeItemChecked.label)
    if(freeItemChecked.length){ 
      updatedList = updatedList.filter((item) => 
          freeItemChecked.includes(item.free)
      );

      // console.log("item.free:",item.free)
        // freeItemChecked.includes(item.free)
      console.log("update",updatedList)
    }

    


    //Rating  
    // const freeItemAment = ament.filter((item)=> item.checked)
    // .map((item) => item.label.toLowerCase());
    // if(freeItemAment.length){ 
    // updatedList = updatedList.filter((item) => 
    //     freeItemAment.includes(item.amentfac)
    // );
    // console.log("update",updatedList);
    // }


    
  
      setList(updatedList);
     !updatedList.length ? setResultsFound(false) : setResultsFound(true);
    };

  

    useEffect(() => {
      applyFilters();
    }, [selectedRating, selectedPrice,freeItem,ament]);

  return (
    // <Box sx={{ width: 343,
    //     height: 785.5,
    //     top: 287,
    //     left: 104,
    //     gap: 32,bgcolor: 'background.paper' }}> 
    <Box sx={{ width: 343,
      height: 785.5,
      top: 287,
      left: 104,
      gap: 32,bgcolor: 'background.paper' }}> 
        {/* bgcolor: 'background.paper'  */}

        <Top 
         selectedPrice={selectedPrice}
         changePrice={handleChangePrice}/>
        <Divider variant="middle" />

        <Top2 
         selectedRating={selectedRating} 
         selectRating={handleSelectRating} />
        <Divider variant="middle" />

        <Top3 freeItem = {freeItem} changeChecked = {handleChangeChecked}/>
        <Divider variant="middle" />

        <Top4  ament = {ament} changeAment = {handleChangeAment} />
        <Divider variant="middle" />


        <Box sx={{  ml: 1, mb: 1 }}>
        <Button   color="secondary" >24+ more</Button>
      </Box>
      <Box sx={{marginLeft :55, marginTop: -119}}>
       
        
      {/* {resultsFound ? <List list={list} /> : <EmptyView />} */}
    {resultsFound ? <Roomdetail list ={list}/> : <EmptyView />} 
      </Box>
      
    </Box>
    
  );
}