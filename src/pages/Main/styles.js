import styled from 'styled-components';

export const Input = styled.form`
  display: flex;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
  align-items: center;
  flex-shrink: 0;

  input {
    background: #eee;
    border-radius: 3px;
    height: 40px;
    padding: 0 20px;
    color: #444;
    font-size: 15px;
    border: ${props => (props.withError ? '2px solid #F00' : '1px solid #ddd')};
    margin: 0 8px 0 0;
    min-width: 0;

    &::placeholder {
      color: #afafaf;
    }
  }

  button {
    height: 40px;
    cursor: pointer;
    color: #fff;
    background: #59ea9a;
    padding: 0 20px;
    border-radius: 3px;
    border: 0;

    &:hover {
      background: #6bd59c;
    }
  }
`;

export const RepoList = styled.div`
  margin-top: 10px;
  overflow: auto;
  flex-grow: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;

  .loader {
    height: 4px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #ddd;
    display: ${props => (props.isLoading ? 'block' : 'none')};
  }
  .loader:before {
    display: block;
    position: absolute;
    content: "";
    left: -200px;
    width: 200px;
    height: 4px;
    background-color: #b270d1;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    from {
      left: -200px;
      width: 30%;
    }
    50% {
      width: 30%;
    }
    70% {
      width: 70%;
    }
    80% {
      left: 50%;
    }
    95% {
      left: 120%;
    }
    to {
      left: 100%;
    }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const IssuesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: auto;
`;
