
function Report1(){
    const filename=["staff Report","attendence Report","result Report"];
    const del_file =["student Report","income report"];
    
    return(
        <div className="report1-container">
            <div className="severity">
                <p>Yara hits & Severity Score of issues files</p>
                <div className="lvl">
                    <div className="low">Low</div>
                    <div className="med">Medium</div>
                    <div className="high">High</div>
                </div>
            </div>
            <div className="quarantine">
                <h3>Quarantine</h3>
                
                    {           
                filename.map((fn, index) => (
                        <li key={index}><button>{fn}</button></li>
                ))}
               
                
                
            </div>
            <div className="deleted">
                <h3>Deleted</h3>
                {
                    del_file.map((del,index) =>(
                        <li key ={index}><button>{del}</button></li>
                    ))
                }
            </div>
        </div>
    )
}

export default Report1;
