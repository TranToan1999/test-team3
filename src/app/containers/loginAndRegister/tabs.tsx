import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import TabLogin from './tabLogin';

const NavStyled = styled(Nav)`
  border: none;
  .nav-link {
    border: none !important;
    padding: 0px;
    font-size: 2rem;
    font-weight: 600;
    color: white;

    :nth-child(2n + 1) {
      margin-right: 46px;
    }
  }

  .active {
    background: none !important;
    color: #dba83d !important;
    border-bottom: 3px solid #dba83d !important;
  }
`;

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <NavStyled tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            Sign up
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Log in
          </NavLink>
        </NavItem>
      </NavStyled>
      <TabContent activeTab={activeTab}>
        <TabLogin id="1" />
        <TabPane tabId="2" color="white">
          Tab 2
        </TabPane>
      </TabContent>
    </>
  );
}