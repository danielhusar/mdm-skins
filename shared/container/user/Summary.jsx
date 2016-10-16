import React from 'react';
import Helmet from 'react-helmet';
import { countries } from 'country-data';
import UserNav from '../../components/UserNav';

function Summary(props) {
  const country = countries[props.user.loccountrycode] || {};

  return (
    <div className="index">
      <Helmet title="Summary" />
      <UserNav />
      <div className="user__summary">
        <table className="user__summary-table">
          <tbody>
            <tr>
              <td className="user__summary-label">Name:</td>
              <td className="user__summary-val">{props.user.realname}</td>
            </tr>
            <tr>
              <td className="user__summary-label">Username:</td>
              <td className="user__summary-val">{props.user.personaname}</td>
            </tr>
            <tr>
              <td className="user__summary-label">Profile:</td>
              <td className="user__summary-val"><a href={props.user.profileurl} className="c__blue" target="_blank">Steam</a></td>
            </tr>
            <tr>
              <td className="user__summary-label">Country:</td>
              <td className="user__summary-val">{country.name} {country.emoji}</td>
            </tr>
            <tr>
              <td className="user__summary-val" colSpan="2"><br /><img src={ props.user.avatar } /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Summary.propTypes = {};

export default Summary;
