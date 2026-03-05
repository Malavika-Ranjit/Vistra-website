import React from 'react';
import AccountsIcon from '../assets/account.png';
import { useNavigate } from 'react-router-dom';

function Dblayer2() {
  const navigate = useNavigate();

  /* ---------- styles ---------- */
  const header = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
  };

  const account = {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
  };

  const tabs = {
    display: 'flex',
    maxWidth: '400px',
    margin: '2rem auto',
    border: '2px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const tab = {
    flex: 1,
    padding: '0.875rem 2rem',
    fontSize: '2rem',
    fontWeight: 500,
    backgroundColor: '#fff',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  const active = {
    backgroundColor: '#ffb3d9',
  };

  const content = {
    margin: '2rem',
    padding: '3rem 2rem',
    minHeight: '400px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const title = {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '2rem',
  };

  /* ---------- handler ---------- */
  const handleReportClick = (file) => {
    console.log('Report clicked:', file);
    navigate('/reports', { state: { file } });
  };

  /* ---------- table component ---------- */
  const ReportTable = () => {
    const files = [
      // {
      //   f_name: 'hello',
      //   f_path: '/sys/class/net/ttx_errors',
      //   f_score: 30,
      //   f_action: 'quarantine',
      // },
      // {
      //   f_name: 'sree_lakshmi_dileep',
      //   f_path: '/sys/class/net/ttx_errors',
      //   f_score: 60,
      //   f_action: 'quarantine',
      // },
    ];
    if (!files||files.length==0){
      return(
        <div style={{
          marginTop: '3rem',
          fontSize: '1.4rem',
          fontWeight: 500,
          color: '#666',
          textAlign: 'center',
        }}>
        NO ALERT FOUND 
        </div>     
        );
      }
    return (
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          tableLayout: 'fixed', // ⭐ IMPORTANT
        }}
        cellPadding="10"
      >
        <thead>
          <tr>
            <th style={{ width: '80px', textAlign: 'center' }}>Sl No</th>
            <th style={{ textAlign: 'center' }}>File Name</th>
            <th style={{ textAlign: 'center' }}>File Path</th>
            <th style={{ width: '100px', textAlign: 'center' }}>Score</th>
            <th style={{ width: '140px', textAlign: 'center' }}>Action</th>
            <th style={{ width: '120px', textAlign: 'center' }}>Report</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td
                style={{
                  width: '80px',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  fontWeight: 500,
                }}
              >
                {index + 1}
              </td>

              <td
                style={{
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                {file.f_name}
              </td>

              <td
                style={{
                  textAlign: 'center',
                  wordBreak: 'break-word',
                }}
              >
                {file.f_path}
              </td>

              <td style={{ textAlign: 'center' }}>{file.f_score}</td>

              <td style={{ textAlign: 'center' }}>{file.f_action}</td>

              <td style={{ textAlign: 'center' }}>
                <button
                  onClick={() => handleReportClick(file)}
                  style={{
                    padding: '6px 14px',
                    backgroundColor: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  /* ---------- JSX ---------- */
  return (
    <div>
      <div style={header}>
        <h2>Logo</h2>
        <img src={AccountsIcon} alt="account" style={account} />
      </div>

      <div style={tabs}>
        <div style={tab} onClick={() => navigate('/dblayer1')}>
          Layer 1
        </div>
        <div style={{ ...tab, ...active }}>Layer 2</div>
      </div>

      <div style={content}>
        <h1 style={title}>Layer 2</h1>
        <ReportTable />
      </div>
    </div>
  );
}

export default Dblayer2;
