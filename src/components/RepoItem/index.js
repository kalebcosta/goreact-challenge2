import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';

export default class RepoItem extends Component {
  handleClickRepository = repository => {
    const { handleSetRepository, handleAddIssues } = this.props;
    handleSetRepository(repository);
    handleAddIssues(repository);
  };

  render() {
    const { repositories } = this.props;
    return (
      <Fragment>
        {repositories.map(repository => (
          <Item
            key={repository.id}
            onClick={() => this.handleClickRepository(repository)}
          >
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
            <div className="arrow" />
          </Item>
        ))}
      </Fragment>
    );
  }
}

RepoItem.propTypes = {
  handleSetRepository: PropTypes.func.isRequired,
  handleAddIssues: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar: PropTypes.string
      })
    })
  ).isRequired
};
