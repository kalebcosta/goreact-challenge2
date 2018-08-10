import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Issue } from './styles';

const IssueCard = ({ issues }) => {
  if (issues) {
    return (
      <Fragment>
        {issues.map(issue => (
          <Issue key={issue.id}>
            <img
              src={issue.user.avatar_url}
              alt={issue.user.login}
              className="issue_logo"
            />
            <div className="issue_info">
              <p className="issue_name">{issue.title}</p>
              <div className="issue_author">{issue.user.login}</div>
              <form action={issue.html_url} target="_blank">
                <button type="submit" className="open_issue">
                  <i className="fa fa-external-link" />
                  ABRIR ISSUE
                </button>
              </form>
            </div>
          </Issue>
        ))}
      </Fragment>
    );
  }
  return null;
};

IssueCard.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      html_url: PropTypes.string,
      title: PropTypes.string,
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      })
    })
  ).isRequired
};

export default IssueCard;
