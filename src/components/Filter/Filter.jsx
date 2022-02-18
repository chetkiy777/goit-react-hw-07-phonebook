import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export class Filter extends React.Component {
  render() {
    return (
      <div>
        <p className={styles.text}>Find contacts by name</p>
        <input
          name="filter"
          value={this.props.filter}
          onChange={e => this.props.onInput(e)}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onInput: PropTypes.func,
};
