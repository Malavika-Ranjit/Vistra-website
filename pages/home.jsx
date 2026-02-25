// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import AccountsIcon from '../assets/account.png';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// function Home() {
//   const navigate = useNavigate();
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const homeStyle = {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
//     color: '#ffffff',
//     fontFamily: '"Outfit", sans-serif',
//     position: 'relative',
//     overflow: 'hidden',
//   };

//   const navWrapper = {
//     position: 'fixed',
//     top: '30px',
//     left: '50%',
//     transform: `translateX(-50%) translateY(${isLoaded ? '0' : '-100px'})`,
//     zIndex: 1000,
//     opacity: isLoaded ? 1 : 0,
//     transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
//   };

//   const navStyle = {
//     display: 'flex',
//     gap: '50px',
//     padding: '18px 60px',
//     background: 'rgba(255, 255, 255, 0.05)',
//     backdropFilter: 'blur(20px)',
//     borderRadius: '50px',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//   };

//   const linkStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#ffffff',
//     fontSize: '15px',
//     fontWeight: '500',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//   };

//   const heroSection = {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   const heading = {
//     fontSize: 'clamp(4rem, 15vw, 12rem)',
//     fontWeight: '800',
//     background: 'linear-gradient(135deg, #ffffff, #00d4ff, #8a2be2)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };

//   const subtitle = {
//     fontSize: '1.2rem',
//     letterSpacing: '0.3em',
//     textTransform: 'uppercase',
//     color: 'rgba(255,255,255,0.6)',
//     marginTop: '20px',
//   };

//   const buttonContainer = {
//     display: 'flex',
//     gap: '30px',
//     marginTop: '60px',
//   };

//   // ✅ ORIGINAL-STYLE BUTTON (GLASS + GLOW)
//   const layerButton = {
//     padding: '15px 40px',
//     borderRadius: '40px',
//     background: 'rgba(255, 255, 255, 0.08)',
//     backdropFilter: 'blur(20px)',
//     border: '1px solid rgba(255, 255, 255, 0.25)',
//     color: '#fff',
//     fontSize: '15px',
//     letterSpacing: '1px',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   };

//   return (
//     <div style={homeStyle}>
//       {/* NAVBAR */}
//       <div style={navWrapper}>
//         <nav style={navStyle}>
//           <button style={linkStyle} onClick={() => scrollToSection('home')}>Home</button>
//           <button style={linkStyle} onClick={() => scrollToSection('about')}>About</button>
//           <button style={linkStyle} onClick={() => scrollToSection('contact')}>Contact</button>
//         </nav>
//       </div>

//       {/* HERO */}
//       <div id="home" style={heroSection}>
//         <h1 style={heading}>VISTRA</h1>
//         <p style={subtitle}></p>
        

//         <div style={buttonContainer}>
//           <button
//             style={layerButton}
//             onClick={() => navigate('/dblayer1')}
//           >
//             Layer 1
//           </button>

//           <button
//             style={layerButton}
//             onClick={() => navigate('/dblayer2')}
//           >
//             Layer 2
//           </button>
//         </div>
//         </div>

//       {/* ABOUT */}
//       <About />

//       {/* CONTACT */}
//       <Contact />

//     </div>
//   );
// }

// export default Home;
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { supabase } from '../src/supabaseClient';
// import HomeBG from '../assets/home_img.png';
// import AboutBG from '../assets/about_image.png';
// function Home() {
//   const [session, setSession] = useState(null);
//   const navigate = useNavigate();
//   const [showNav, setShowNav] = useState(false);
//   const handleLogout = async () => {
//   const { error } = await supabase.auth.signOut();
  
//   if (error) {
//     alert(error.message);
//   } else {
//     navigate('/signin'); // or '/' if you prefer
//   }
// };
//   useEffect(() => {
//   // navbar animation
//   setTimeout(() => setShowNav(true), 200);

//   // get current session
//   supabase.auth.getSession().then(({ data }) => {
//     setSession(data.session);
//   });

//   // listen for auth changes
//   const { data: listener } = supabase.auth.onAuthStateChange(
//     (_event, session) => {
//       setSession(session);
//     }
//   );

//   return () => {
//     listener.subscription.unsubscribe();
//   };
// }, []);


//   /* BACKGROUND */
//   const homeStyle = {
//     minHeight: '100vh',
//     backgroundImage: `linear-gradient(
//       rgba(0,0,0,0.45),
//       rgba(0,0,0,0.45)
//     ), url(${HomeBG})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     color: '#ffffff',
//     fontFamily: '"Outfit", sans-serif',
//   };

//   /* SLIDING NAVBAR */
//   const navWrapper = {
//     position: 'fixed',
//     top: '30px',
//     left: '50%',
//     transform: showNav
//       ? 'translateX(-50%) translateY(0)'
//       : 'translateX(-50%) translateY(-120px)',
//     opacity: showNav ? 1 : 0,
//     transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
//     zIndex: 1000,
//   };

//   const navStyle = {
//     display: 'flex',
//     gap: '50px',
//     padding: '16px 60px',
//     background: 'rgba(255,255,255,0.08)',
//     backdropFilter: 'blur(18px)',
//     borderRadius: '50px',
//     border: '1px solid rgba(255,255,255,0.2)',
//   };

//   const navBtn = {
//     background: 'none',
//     border: 'none',
//     color: '#fff',
//     fontSize: '14px',
//     letterSpacing: '2px',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//   };

//   /* HERO */
//   const hero = {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//   };

//   const title = {
//     fontSize: 'clamp(4rem, 14vw, 12rem)',
//     fontWeight: '800',
//     background: 'linear-gradient(135deg,#fff,#00d4ff,#8a2be2)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   };

//   const btnBox = {
//     display: 'flex',
//     gap: '30px',
//     marginTop: '60px',
//   };

//   const btn = {
//     padding: '15px 40px',
//     borderRadius: '40px',
//     background: 'rgba(255,255,255,0.08)',
//     backdropFilter: 'blur(20px)',
//     border: '1px solid rgba(255,255,255,0.25)',
//     color: '#fff',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//   };

//   /* ABOUT SECTION */
 
//   const aboutStyle = {
//     minHeight: '100vh',
//     backgroundImage: `url(${AboutBG})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//     color: '#ffffff',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '100px',
//   };
//   const authBox = {
//   position: 'fixed',
//   top: '40px',
//   right: '50px',
//   display: 'flex',
//   gap: '15px',
//   zIndex: 1001,
// };



//   return (
//     <div>

//       {/* NAVBAR */}
//       <div style={navWrapper}>
//         <nav style={navStyle}>
//           <button style={navBtn} onClick={() => scrollToSection('home')}>
//             Home
//           </button>
//           <button style={navBtn} onClick={() => scrollToSection('about')}>
//             About
//           </button>
//         </nav>
//       </div>

//       <div style={authBox}>
//   {!session ? (
//     <>
//       <button
//         style={navBtn}
//         onClick={() => navigate('/signin')}
//       >
//         Sign In
//       </button>

//       <button
//         style={{
//           ...navBtn,
//           border: '1px solid rgba(255,255,255,0.4)',
//           borderRadius: '30px',
//           padding: '8px 18px',
//         }}
//         onClick={() => navigate('/signup')}
//       >
//         Sign Up
//       </button>
//     </>
//   ) : (
//     <button
//       style={{ ...navBtn, color: '#ffb3b3' }}
//       onClick={handleLogout}
//     >
//       Logout
//     </button>
//   )}
// </div>


//       {/* HOME SECTION */}
//       <section id="home" style={homeStyle}>
//         <div style={hero}>
//           <h1 style={title}>VISTRA</h1>

//           <div style={btnBox}>
//             <button style={btn} onClick={() => navigate('/dblayer1')}>
//               Layer 1
//             </button>
//             <button style={btn} onClick={() => navigate('/dblayer2')}>
//               Layer 2
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section id="about" style={aboutStyle}>
//         <h1 style={{ fontSize: '4rem', marginBottom: '30px' }}>
//           About Vistra
//         </h1>
//         <p style={{ fontSize: '1.2rem', maxWidth: '700px', lineHeight: '1.8' }}>
//           Vistra is a cyber-security focused platform designed to analyze,
//           detect, and prevent digital threats using layered protection
//           techniques. Our system ensures safety, resilience, and proactive
//           defense for modern applications.
//         </p>
//       </section>

//     </div>
//   );
// }

// export default Home;
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../src/supabaseClient';
import HomeBG from '../assets/home_img.png';
import AboutBG from '../assets/about_image.png';

function Home() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [session, setSession] = useState(null);

  /* SCROLL */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* AUTH */
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    else navigate('/signin');
  };

  useEffect(() => {
    setTimeout(() => setShowNav(true), 200);

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  /* STYLES */
  const homeStyle = {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${HomeBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    fontFamily: '"Outfit", sans-serif',
  };

  const navWrapper = {
    position: 'fixed',
    top: '30px',
    left: '50%',
    transform: showNav
      ? 'translateX(-50%) translateY(0)'
      : 'translateX(-50%) translateY(-120px)',
    opacity: showNav ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1000,
  };

  const navStyle = {
    display: 'flex',
    gap: '50px',
    padding: '16px 60px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(18px)',
    borderRadius: '50px',
    border: '1px solid rgba(255,255,255,0.2)',
  };

  const navBtn = {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
  };

  const authBox = {
    position: 'fixed',
    top: '40px',
    right: '50px',
    display: 'flex',
    gap: '15px',
    zIndex: 1001,
  };
  const authBtn = {
  height: '38px',              // 🔥 controls size
  padding: '0 22px',           // horizontal padding only
  borderRadius: '999px',
  background: 'transparent',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  border: '1px solid rgba(255,255,255,0.35)',
  color: '#fff',
  fontSize: '14px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  
};


  const hero = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const title = {
    fontSize: 'clamp(4rem, 14vw, 12rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg,#fff,#00d4ff,#8a2be2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const btnBox = {
    display: 'flex',
    gap: '30px',
    marginTop: '60px',
  };

  const btn = {
    padding: '15px 40px',
    borderRadius: '40px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.25)',
    color: '#fff',
    cursor: 'pointer',
    textTransform: 'uppercase',
  };

  const aboutStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${AboutBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px',
    color: '#fff',
  };

  return (
    <div>
      {/* NAVBAR */}
      <div style={navWrapper}>
        <nav style={navStyle}>
          <button style={navBtn} onClick={() => scrollToSection('home')}>Home</button>
          <button style={navBtn} onClick={() => scrollToSection('about')}>About</button>
        </nav>
      </div>

      {/* AUTH (TOP RIGHT) */}
      <div style={authBox}>
        {!session ? (
          <>
            <button style={authBtn} onClick={() => navigate('/signin')}>SIGN IN</button>
            <button
              style={{
                ...navBtn,
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '30px',
                padding: '8px 18px',
              }}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </>
        ) : (
          <button style={{ ...navBtn, color: '#ffb3b3' }} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>

      {/* HOME */}
      <section id="home" style={homeStyle}>
        <div style={hero}>
          <h1 style={title}>VISTRA</h1>
          <div style={btnBox}>
            <button style={btn} onClick={() => navigate('/dblayer1')}>Layer 1</button>
            <button style={btn} onClick={() => navigate('/dblayer2')}>Layer 2</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={aboutStyle}>
        <div>
          <h1 style={{ fontSize: '4rem', marginBottom: '30px' }}>About Vistra</h1>
          <p style={{ maxWidth: '700px', lineHeight: '1.8', fontSize: '1.2rem' }}>
            Vistra is a cyber-security focused platform designed to analyze,
            detect, and prevent digital threats using layered protection.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
