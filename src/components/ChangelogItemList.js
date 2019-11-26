import React from 'react';
import PropTypes from 'prop-types';
import ChangelogItem from './ChangelogItem';

const ChangelogItemList = ({ updates }) => (
  <div>
    <ul>
      <li>
        <h1>Changelog</h1>
      </li>
      {updates.map(update => {
        return (
          <ChangelogItem
            key={update.version}
            version={update.version}
            date={update.date}
            change={update.change}
          />
        );
      })}
    </ul>
  </div>
);

ChangelogItemList.propTypes = {
  updates: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        version: PropTypes.string,
        date: PropTypes.string,
        change: PropTypes.string
      })
    ])
  )
};

export default ChangelogItemList;
