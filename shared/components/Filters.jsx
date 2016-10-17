import React from 'react';

function Filters(props) {
  return (
    <form className="filters">
      <div className="filters__group">
        <span className="filters__label">Name:</span>
        <input type="text" name="name" className="filters__input" />
      </div>
      <div className="filters__group">
        <span className="filters__label">Exterior:</span>
        <select name="exterior" className="filters__select">
          <option value="All">All</option>
          <option value="Field-Tested">Field-Tested</option>
          <option value="Minimal Wear">Minimal Wear</option>
          <option value="Battle-Scarred">Battle-Scarred</option>
          <option value="Well-Worn">Well-Worn</option>
          <option value="Factory New">Factory New</option>
          <option value="Not Painted">Not Painted</option>
        </select>
      </div>
      <div className="filters__group">
        <span className="filters__label">Type:</span>
        <select name="type" className="filters__select">
          <option value="All">All</option>
          <option value="Pistol">Pistol</option>
          <option value="SMG">SMG</option>
          <option value="Rifle">Rifle</option>
          <option value="Sniper Rifle">Sniper Rifle</option>
          <option value="Shotgun">Shotgun</option>
          <option value="Machinegun">Machinegun</option>
          <option value="Knife">Knife</option>
          <option value="Container">Container</option>
        </select>
      </div>
      <div className="filters__group">
        <button type="submit" className="btn btn__primary filters__btn">Filter</button>
      </div>
    </form>
  );
}

export default Filters;
