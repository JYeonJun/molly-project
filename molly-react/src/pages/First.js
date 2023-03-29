import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../css/First.module.css'
import styled from 'styled-components';
import { MdArrowForwardIos } from 'react-icons/md';

let CustomNavLink = styled(NavLink)`
  color: #AFA79F;
  &:link {
    text-decoration: none;
  }
  &.active {
    color: #827870;
    font-weight: 900;
  }
`;

const First = () => {
  const navigate = useNavigate();

  return (
    <div style={{zIndex:"3"}}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={process.env.PUBLIC_URL + '/molly-logo.png'} alt="molly-logo" width="120px"/>
        </div>
        <div className={styles.navcontainer}>
          <nav>
            <CustomNavLink 
              style={({ isActive }) => (isActive ? "active" : "")}
              to="/list">
                Community
            </CustomNavLink>
          </nav>
        </div>
        <div className={styles.user}>
          <h4 onClick={() => navigate('/login')}>회원가입</h4>
          <h4 onClick={() => navigate('/login')}>로그인</h4>
        </div>
        <div style={{flexGrow: "0.2"}}/>
      </header>
      <div className={styles.banner}>
        <h1>molly</h1>
        <span><MdArrowForwardIos size="50px" color="rgba(235, 231, 227, 40)"/></span>
      </div>
    </div>
  );
};

export default First;