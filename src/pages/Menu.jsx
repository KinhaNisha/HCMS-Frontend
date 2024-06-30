import React, { useState} from 'react';

const menuButtonStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  marginRight: '12px',
};

const menuContentStyle = {
  position: 'absolute',
  top: '70px',
  left: '0', 
  width: '250px',
  height: '500px',
  backgroundColor: '#000',
  boxShadow: '-5px 0px 10px rgba(0, 0, 0, 0.2)',
  color: 'white',
  zIndex: 10,
};

const menuItemStyle = {
  padding: '15px',
  borderBottom: '1px solid #333',
  cursor: 'pointer',
  color: 'white',
  display: 'flex',
  displayInline: 'block',
  textDecoration: 'none'
};

const closeButtonStyle = {
    fontSize: '20px',
    color: 'white',
    cursor: 'pointer',
    position: 'relative',
    top: '10px', 
    left: '210px',
    backgroundColor: 'black',
    padding: '0',
    width: '20px'
  };


const MenuButton = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isMenuVisible && !event.target.closest('.menu-content')) {
  //       setMenuVisible(false);
  //     }
  //   };

  //   if (isMenuVisible) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isMenuVisible]);

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <span
        style={menuButtonStyle}
        onClick={() => setMenuVisible(!isMenuVisible)}
      >
        ☰
      </span>
      </div>
      {isMenuVisible && (
        <div style={menuContentStyle}>
            <button
            style={closeButtonStyle}
            onClick={() => setMenuVisible(false)}
            >
            X
          </button>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={menuItemStyle}>Menu :</li>
            <li><a style={menuItemStyle} href='/'>Home Page</a></li>
            <li><a style={menuItemStyle} href='/myAppointment'>My Appointment</a></li>
            <li><a style={menuItemStyle} href='/history'>My History</a></li>
            <li><a style={menuItemStyle} href='/reports'>Reports</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuButton;
