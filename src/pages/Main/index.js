import React, { Component } from 'react';
import api from '../../services/api';
import Sidenav from '../../components/Sidenav';
import RepoItem from '../../components/RepoItem';
import Header from '../../components/Header';
import IssueCard from '../../components/IssueCard';

import { Input, RepoList, Content, Container, IssuesArea } from './styles';

export default class Main extends Component {
  state = {
    loading: false,
    issueloading: false,
    repositoryInput: '',
    repositories: [],
    actualRepository: null,
    issues: [],
    repositoryError: false
  };

  handleAddRepository = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { repositories } = this.state;

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      if (repositories.find(repo => repo.id === repository.id)) {
        this.setState({ repositoryError: true });
        return false;
      }

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleAddIssues = async repository => {
    this.setState({ issueloading: true });

    try {
      const { data: issues } = await api.get(
        `/repos/${repository.full_name}/issues?state=all`
      );

      this.setState({ issues });
    } finally {
      this.setState({ issueloading: false });
    }
  };

  handleFilter = async (filter = 'all') => {
    this.setState({ issueloading: true });
    try {
      const { data: issues } = await api.get(
        `/repos/${this.state.actualRepository.full_name}/issues?state=${filter}`
      );

      this.setState({ issues });
    } finally {
      this.setState({ issueloading: false });
    }
  };

  handleSetRepository = repository => {
    this.setState({
      actualRepository: repository
    });
  };

  render() {
    return (
      <Container>
        <Sidenav>
          <Input
            onSubmit={this.handleAddRepository}
            withError={this.state.repositoryError}
          >
            <input
              type="text"
              placeholder="ex: conta/repositorio"
              onChange={e =>
                this.setState({
                  repositoryInput: e.target.value
                })
              }
              value={this.state.repositoryInput}
            />
            <button type="submit">
              {this.state.loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                <img src="/img/plus.svg" alt="add" />
              )}
            </button>
          </Input>
          <RepoList>
            <RepoItem
              repositories={this.state.repositories}
              handleSetRepository={this.handleSetRepository}
              handleAddIssues={this.handleAddIssues}
            />
          </RepoList>
        </Sidenav>

        <Content isLoading={this.state.issueloading}>
          <Header
            repository={this.state.actualRepository}
            handleFilter={this.handleFilter}
          />
          <div className="loader" />
          <IssuesArea>
            <IssueCard issues={this.state.issues} />
          </IssuesArea>
        </Content>
      </Container>
    );
  }
}
