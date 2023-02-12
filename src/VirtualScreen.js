import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import {green} from '@mui/material/colors';

const items = [  
{ id: 1, title: 'UltimateStudyBuddy', date: '3/02/2023', time: '1:00pm', personName: "John", zoomLink: "https://docs.google.com/document/d/1_7-DAOE97ePpm0XL0tYhbsjR3S846QP7RxQh9RAfTjY/edit", GroupSize: 5, PeopleInGroup: ["biraj.ghimire@stonybrook.edu", "anmol.singh@stonybrook.edu"]},
{ id: 2, title: 'Birajs Study Group', date: '3/02/2023',time: '1:00pm', personName: "John", zoomLink: "https://docs.google.com/document/d/1_7-DAOE97ePpm0XL0tYhbsjR3S846QP7RxQh9RAfTjY/edit", GroupSize: 5, PeopleInGroup: ["biraj.ghimire@stonybrook.edu", "anmol.singh@stonybrook.edu"] },
{ id: 3, title: 'Anmols Study Group', date: '3/02/2023',time: '1:00pm', personName: "John", zoomLink: "https://docs.google.com/document/d/1_7-DAOE97ePpm0XL0tYhbsjR3S846QP7RxQh9RAfTjY/edit", GroupSize: 5, PeopleInGroup: ["biraj.ghimire@stonybrook.edu", "anmol.singh@stonybrook.edu"] },
{ id: 4, title: 'Tonys Study Group', date:'3/02/2023',time: '1:00pm', personName: "John", zoomLink: "https://docs.google.com/document/d/1_7-DAOE97ePpm0XL0tYhbsjR3S846QP7RxQh9RAfTjY/edit", GroupSize: 5, PeopleInGroup: ["biraj.ghimire@stonybrook.edu", "anmol.singh@stonybrook.edu"] },
{ id: 5, title: 'Bryans Study Group', date: '3/02/2023',time: '1:00pm', personName: "John", zoomLink: "https://docs.google.com/document/d/1_7-DAOE97ePpm0XL0tYhbsjR3S846QP7RxQh9RAfTjY/edit", GroupSize: 5, PeopleInGroup: ["biraj.ghimire@stonybrook.edu", "anmol.singh@stonybrook.edu"] },
{ id: 6, title: 'Aidans Study Group', date: '3/02/2023',time: '1:00pm', personName: "John", zoomLink: "https://docs.google.com/document/d/1_7-DAOE97ePpm0XL0tYhbsjR3S846QP7RxQh9RAfTjY/edit", GroupSize: 5, PeopleInGroup: ["biraj.ghimire@stonybrook.edu", "anmol.singh@stonybrook.edu"] },
{ id: 7, title: 'Chelseas Study Group', date: '3/02/2023',time: '1:00pm', personName: "John", zoomLink: "https://docs.google.com/document/d/1_7-DAOE97ePpm0XL0tYhbsjR3S846QP7RxQh9RAfTjY/edit", GroupSize: 5, PeopleInGroup: ["biraj.ghimire@stonybrook.edu", "anmol.singh@stonybrook.edu"] },
    ];  // add more items here];


    const departments = [
      { label: 'AMS'},
      { label: 'CSE'},
      { label: 'HIS'}
    ];

    const classNumbers = [
      { label: '100'},
      { label: '320'},
      { label: '220'}
    ]

const ScrollableGrid = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleCloseOnJoin = () => {
    setSelectedItem(null);
    alert('Group Joined Successfully')
  };

  return (
    <div style={{overflow: 'auto'}}>
   
    <div style = {{display: 'flex', marginBottom: '20px', marginTop: '90px', justifyContent: 'center', alignItems: 'center'}}>
      <Autocomplete
      disablePortal
      options={departments}
      sx={{width: 300}}
      style = {{marginRight: '10px'}}
      renderInput={(params) => <TextField {...params} label="Department" />}
    />
    <Autocomplete
      disablePortal
      options={classNumbers}
      sx={{width: 300}}
      style = {{marginRight: '10px'}}
      renderInput={(params) => <TextField {...params} label="Class Number" />}
    />

<Button variant="contained" sx={{fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "#990000", fontWeight: 'bold', marginRight: '10px'}}>
                    Search
                </Button>

</div>
      {items.map(item => (
        <div key={item.id} style={{ fontFamily: '"Helvetica", "Arial", sans-serif', textAlign: "center", backgroundColor: '#F5F5F5', borderRadius: '30px',border: '0.7px solid black', padding: '10px', cursor: 'pointer', marginLeft: '50px', marginRight: '50px', marginBottom: '20px' }} onClick={() => handleItemClick(item)}>
          <h3>{item.title}</h3>
          <p>Date: {item.date}</p>
          <p>Time: {item.time}</p>
        </div>
      ))}

      {selectedItem && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div style={{ borderRadius: "30px", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
            <p>Name: {selectedItem.personName}</p>
            <p>Group Name: {selectedItem.title}</p>
            <p>Time: {selectedItem.time}</p>
            <p>Virtual Link: {selectedItem.zoomLink}</p>
            <p>Group Size: {selectedItem.GroupSize}</p>
            <p>People in Group: {selectedItem.PeopleInGroup.map((person, index) => {
              return index <  (selectedItem.PeopleInGroup.length - 1) ? <div>{person + ", "}</div> : <div>{person}</div>
            })}</p>

            <Button onClick= {handleCloseOnJoin} variant="contained" sx={{marginLeft: "305px", fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "green", fontWeight: 'bold'}}>
                    Join
                </Button>
            <div style={{marginTop: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button variant="contained" sx={{fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "gray", fontWeight: 'bold'}} onClick={handleCloseModal} >
                    Close
                </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollableGrid;