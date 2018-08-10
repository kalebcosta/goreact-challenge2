import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeaderBody } from './styles';

export default class Header extends Component {
  handleClickRepository = e => {
    const { handleFilter } = this.props;
    handleFilter(e.target.value);
  };

  render() {
    const { repository } = this.props;

    if (repository) {
      return (
        <HeaderBody>
          <div className="info_header">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
              className="repo_logo"
            />
            <div className="repo_info">
              <div>
                <p className="repo_name">{repository.name}</p>
              </div>
              <div className="repo_author">{repository.owner.login}</div>
            </div>
          </div>

          <div className="status_input">
            <select
              name=""
              id="filter_status"
              onChange={this.handleClickRepository}
            >
              <option value="all">All Issues</option>
              <option value="open">Open Issues</option>
              <option value="closed">Closed Issues</option>
            </select>
          </div>
        </HeaderBody>
      );
    }
    return (
      <HeaderBody>
        <div className="info_header" />
      </HeaderBody>
    );
  }
}
Header.defaultProps = {
  repository: {}
};

Header.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      login: PropTypes.string,
      name: PropTypes.string,
      avatar_url: PropTypes.string
    }),
    name: PropTypes.string
  })
};
