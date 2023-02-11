import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const items = [  
{ id: 1, title: 'Item 1', description: 'This is the description for item 1.' },
{ id: 2, title: 'Item 2', description: 'This is the description for item 2.' },
{ id: 3, title: 'Item 3', description: 'This is the description for item 3.' },
{ id: 4, title: 'Item 3', description: 'This is the description for item 3.' },
{ id: 5, title: 'Item 3', description: 'This is the description for item 3.' },
{ id: 6, title: 'Item 3', description: 'This is the description for item 3.' },
{ id: 7, title: 'Item 3', description: 'This is the description for item 3.' },
{ id: 8, title: 'Item 3', description: 'This is the description for item 3.' },
{ id: 9, title: 'Item 3', description: 'This is the description for item 3.' },
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

  return (
    <div style={{overflow: 'auto'}}>
    <div> HI </div>
    <div style = {{display: 'flex', marginBottom: '20px', justifyContent: 'center', alignItems: 'center'}}>
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
        <div key={item.id} style={{ backgroundColor: '#F5F5F5', borderRadius: '30px',border: '1px solid black', padding: '10px', cursor: 'pointer', marginLeft: '50px', marginRight: '50px', marginBottom: '20px' }} onClick={() => handleItemClick(item)}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}

      {selectedItem && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollableGrid;