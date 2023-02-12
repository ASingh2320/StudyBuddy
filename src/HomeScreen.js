import React from 'react';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
const classes = [
    { label: 'CSE', id: 1 },
    { label: 'AMS', id: 2 },
    { label: 'IAE', id: 3 }
    // ...
  ];
  const classesNum = [
    { label: '220', id: 1 },
    { label: '310', id: 2 },
    { label: '101', id: 3 }
    // ...
  ];

export default function HomeScreen() {
  return (
        <div id="main"> 
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            
            <div style={{fontFamily: '"Helvetica", "Arial", sans-serif' ,height: '100px', marginBottom: '20px'}}> 
            <div style={{ height: '30px', marginBottom: '20px', fontSize: 20, color: "#990000",fontWeight: 'bold'}}> 
                Welcome to StudyBuddy
            </div>
            <div style={{ height: '30px',marginBotton:'10px', marginTop: '10px', fontSize: 20, color: "#990000"}}> 
                    Study together, Success together!
                </div>
                <Autocomplete
                    style={{ marginBottom: '20px' }}
                    disablePortal
                    id="combo-box-demo"
                    options={classes}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Class Name" />}
                />
                <Autocomplete
                    style={{ marginBottom: '20px' }}
                    disablePortal
                    id="combo-box-demo"
                    options={classesNum}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Class Number" />}
                />

                <Button variant="contained" sx={{fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "#990000", fontWeight: 'bold', marginRight: '10px'}}>
                    In-person
                </Button>
                <Button variant="contained" sx={{fontFamily: '"Helvetica", "Arial", sans-serif',color: "white", background: "#990000", fontWeight: 'bold'}}>
                    Virtual
                </Button>
                
            </div>
            </div> 
        </div>  
  )
  
}
