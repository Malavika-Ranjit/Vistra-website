import React from "react";
import { useLocation } from "react-router-dom";

const Report2 = () => {
  //const file = {
    //name: "hello.txt",
   // path: "C:/home/sree/Downloads",
    //score: 92,
    //status: "Quarantined",
  //};

const { state } = useLocation();
const file = state?.file;
if (!file) {
    return <h2>No file data</h2>;
  }

const score = file.score;

let riskText;
let riskColor;

if (score >= 90) {
  riskText = "High Risk";
  riskColor = "#d61714ff"
} else {
  riskText = "Low Risk";
  riskColor = "#ed5c08ff"; 
}
  



  return (
    <div style={styles.page}>
      
      <div style={styles.header}>
        <h1 style={styles.title}>Malware Report</h1>
        <p style={styles.subtitle}>
          Detailed analysis of the quarantined file.
        </p>
      </div>

      
      <div style={styles.reportcard}>
        <div style={styles.row}>
          <span style={styles.key}>File Name:</span>
          <span style={styles.value}>{file.name}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.key}>File Path:</span>
          <span style={styles.value}>{file.path}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.key}>Risk Score:</span>
<span
  style={{
    ...styles.score,
    color: riskColor,
  }}
>
  {score}
</span>

<span
  style={{
    ...styles.badge,
    backgroundColor: riskColor,
  }}
>
  {riskText}
</span>          
        </div>

        <div style={styles.row}>
          <span style={styles.key}>Status:</span>
          <span style={styles.status}>{file.status}</span>
        </div>

        
        {file.status !== "Deleted" && (
  <div style={styles.buttonContainer}>
    <button style={styles.deleteBtn}>Delete File</button>
    <button style={styles.keepBtn}>Keep File</button>
  </div>
)}
      </div>
    </div>
  );
};

export default Report2;

const styles = {
  page: {
    backgroundColor: "#f4f6f9",
    minHeight: "98vh",
  },

  header: {
    backgroundColor: "#132a54ff",
    padding: "40px 20px",
    color: "white",
    textAlign: "center",
  },

  title: {
   
    height:"4vh ",
    fontSize: "36px",
  },

  subtitle: {
    marginTop: "10px",
    opacity: 0.9,
  },

  reportcard: {
    backgroundColor: "white",
    width: "80%",
    maxWidth: "800px",
    margin: "50px auto",
    padding: "40px",
    borderRadius: "15px",
    marginTop:"15vh"
   
  },

  row: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    paddingBottom: "10px",
  },

  key: {
    width: "150px",
    fontWeight: "bold",
    color: "#555",
  },

  value: {
    flex: 1,
    color: "#333",
  },

  score: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "red",
    marginRight: "10px",
  },

  badge: {
   
    color: "white",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "14px",
  },

  status: {
   
    padding: "5px 12px",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },

  deleteBtn: {
    backgroundColor: "#e53935",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },

  keepBtn: {
    backgroundColor: "#066125ff",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};