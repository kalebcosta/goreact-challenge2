import styled from 'styled-components';

export const Issue = styled.div`
  height: 100px;
  flex: 0 0 calc(33.33% - 26px);
  background-color: white;
  padding: 20px;
  margin: 20px 0px 0px 20px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 15px #ddd;
  border-radius: 5px;

  i {
    margin-right: 5px;
    font-weight: bold;
  }
  .issue_logo {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .issue_name {
    font-weight: bold;
    color: #636363;
    display: inline-block;
    max-width: 14vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .issue_author {
    font-size: 12px;
    color: darkgray;
    margin-bottom: 5px;
  }

  .open_issue {
    background-color: #b286d1;
    border: 0;
    border-radius: 2px;
    padding: 3px 0px;
    width: 110px;
    height: 25px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    vertical-align: center;

    &:hover {
    background-color: #b270d1;

    }
`;
