
import React, { useState, useEffect } from 'react';
import AccountsIcon from '../assets/account.png';
import { useNavigate } from 'react-router-dom';

function Dblayer2(){
    const navigate = useNavigate();

    const [isScanning,setIsScanning] = useState(false);
    const [progress,setProgress] = useState(0);
    const [scanCompleted, setScanCompleted] = useState(false);


   useEffect(() => {
  let timer;

  if (isScanning && progress < 100) {
    timer = setInterval(() => {
      setProgress(prev => prev + 5);
    }, 300);
  }

 
  if (progress >= 100 && isScanning) {
    setIsScanning(false);      
    setScanCompleted(true);   
  }

  return () => clearInterval(timer);
}, [isScanning, progress]);

const last_scan = {
  date: "20 Feb 2025",
  totalMalwares: 200,
 files_deleted: 20,
};

const  files_quarantined = last_scan.totalMalwares - last_scan.files_deleted;
 

    const containerStyles ={
        
    }
    const header={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
    }
    const account={
        width: '40px', 
        height: '40px', 
        objectFit: 'contain'
    }
    const tabs={ 
        display: 'flex',
        gap: '0',
        maxWidth: '400px',
        margin: '2rem auto',
        border: '2px solid #333',
        borderRadius: '8px',
        overflow: 'hidden',

    }
    const tab={
        flex: 1,
  padding: '0.875rem 2rem',
  fontSize: '2rem',
  fontWeight: 500,
  backgroundColor: '#ffffff',
  border: 'none',
  transition: 'all 0.3s ease',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
    }
    const tab1style = {
  borderRight: '2px solid #333',
};
const active={
    backgroundColor: '#ffb3d9',
    color: '#333'
}
const content = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  //border: "2px solid #4a9eff",
  borderRadius: "8px",
  padding: "2rem",
  minHeight: "400px",
  backgroundColor: "#ffffff",
  gap: "2rem",
  width: "80rem",
  margin: "4rem auto",  
};

const title={
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#000',
}
const scancount={
    fontSize: '1.125rem',
    color: '#666',
    marginBottom: '2rem',
}
const buttons={
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
}
const button={
    
  padding: '0.875rem 1.75rem',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: '2px solid #000',
  //position:"relative"

 
}
const button1 ={
    backgroundColor: '#000',
    color: '#fff',
     width:"20%",
     position:"relative",
     
}


  const button2= {
    backgroundColor: '#fff',
    color: '#000',
    
  };






    return(
        <div className="layer2-Container" style ={containerStyles}>
           <div className="header" style={header}>
              <div className="logo">
                <h2>logo</h2>
              </div>
            <div className="account" >
                <img src={AccountsIcon} alt="Accounts" className="accounts-icon" style={account}/>
            </div>
           </div>

         <div className="main">
            <div className="tabs" style={tabs}>
                <div className="tab1 active" style={{...tab, ...tab1style,...active}}>Layer 1</div>
                <div className="tab " style={{...tab}}
                    onClick={() => navigate('/dblayer2')}>Layer 2
                 </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                  <div className="content" style={content}>
                    <div style={{ flex: 1 }}>
                        <h1 style={title}>Layer 1</h1>
                        <p style={scancount}>1000 files</p>
                        <div style={buttons}>
                            <div
                              style={{ ...button, ...button2 }}
                              onClick={() => {
                              setIsScanning(true);
                              setProgress(0);
                              }}>
                               
                              {isScanning ? "Scanning..." : "Scan me"}
                            </div>
                        </div>
                    </div>
                    
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        {!isScanning && !scanCompleted && (
                          <div style={{ width: "100%", maxWidth: "300px" }}>
                              <h3 style={{ marginBottom: "1rem" }}>Last Scan Summary</h3>

                              <p><strong>Date:</strong> {last_scan.date}</p>
                              <p><strong>Total Malwares:</strong> {last_scan.totalMalwares}</p>

                              <p >
                              < strong>Files Deleted:</strong> {last_scan.files_deleted}
                              </p>

                              <p >
                                <strong>Files Quarantined:</strong> {files_quarantined}
                              </p>                            
                          </div>
                        )}
  

                      {(isScanning || scanCompleted) && (
                        <>
                          <h3>Scan Progress</h3>
                          <div style={{ position: "relative", width: 120, height: 120 }}>
                            <svg width="120" height="120">
                              <circle
                                  cx="60"
                                  cy="60"
                                  r="50"
                                  stroke="#eee"
                                  strokeWidth="10"
                                  fill="none"
                                />

                              <circle
                                  cx="60"
                                  cy="60"
                                  r="50"
                                  stroke="#4a9eff"
                                  strokeWidth="10"
                                  fill="none"
                                  strokeDasharray={2 * Math.PI * 50}
                                  strokeDashoffset={
                                    2 * Math.PI * 50 * (1 - progress / 100)
                                  }
                                  strokeLinecap="round"
                                  style={{
                                    transition: "stroke-dashoffset 0.3s ease",
                                    transform: "rotate(-90deg)",
                                    transformOrigin: "50% 50%",
                                  }}
                              />
                            </svg>

                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}>
                              {progress}%
                            </div>
                          </div>
                        </>
                      )}

                      
                       {scanCompleted && (
                            <div
                              style={{ ...button, ...button1, marginTop: "1.5rem" }}
                              onClick={() => navigate("/reports")}>
                              FULL REPORT
                            </div>
                       )}

                    </div>
                  </div>      
            </div>
         </div>
       </div>
    )
}
export default  Dblayer2;