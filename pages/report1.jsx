
// function Report1(){
//     const filename=["staff Report","attendence Report","result Report"];
//     const del_file =["student Report","income report"];
    
//     return(
//         <div className="report1-container">
//             <div className="severity">
//                 <p>Yara hits & Severity Score of issues files</p>
//                 <div className="lvl">
//                     <div className="low">Low</div>
//                     <div className="med">Medium</div>
//                     <div className="high">High</div>
//                 </div>
//             </div>
//             <div className="quarantine">
//                 <h3>Quarantine</h3>
                
//                     {           
//                 filename.map((fn, index) => (
//                         <li key={index}><button>{fn}</button></li>
//                 ))}
               
                
                
//             </div>
//             <div className="deleted">
//                 <h3>Deleted</h3>
//                 {
//                     del_file.map((del,index) =>(
//                         <li key ={index}><button>{del}</button></li>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Report1;
import { useLocation } from 'react-router-dom';

function Reports() {
  const { state } = useLocation();
  const file = state?.file;

  if (!file) return <h2>No file selected</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Report</h1>
      <p><b>File name:</b> {file.f_name}</p>
      <p><b>Path:</b> {file.f_path}</p>
      <p><b>Score:</b> {file.f_score}</p>
      <p><b>Action:</b> {file.f_action}</p>
    </div>
  );
}

export default Reports;
