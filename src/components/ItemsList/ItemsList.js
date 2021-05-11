import React, { Component } from 'react';
import './style.css';

import Collapse from './../../providers/Collapse';

const items = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
];

const ItemsList = ({ isCollapsed, toggle }) => {
  const styleObj = {
    background: 'green',
    padding: '10px'
  };

  return (
    <div style={styleObj}>
      <Collapse
        render={({ isCollapsed, toggle }) => (
          <div>
            <button className="button is-dark is-large" onClick={toggle}>
              Collapse
            </button>
            <ul className={`list ${isCollapsed && 'is-Collapsed'}`}>
              {items.map(item => (
                <li className="notification is-primary">{item}</li>
              ))}
            </ul>
            <p> is list collapsed {isCollapsed.toString()}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ItemsList;
