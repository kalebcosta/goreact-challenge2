import styled from 'styled-components';

export const HeaderBody = styled.div`
  background-color: #fff;
  height: 100px;
  padding: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 15px #e2e2e2;
  justify-content: space-between;
  flex-shrink: 0;
  z-index: 1;

  .info_header {
    display: flex;
    align-items: center;

    .repo_logo {
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }

    .repo_name {
      font-weight: bold;
      margin-bottom: 5px;
      color: #636363;
      max-width: 21ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .repo_author {
      font-size: 12px;
      color: darkgray;
    }
  }

  #filter_status {
    background: #fff;
    border-radius: 3px;
    height: 42px;
    width: 150px;
    padding: 0 20px;
    color: #444;
    border: 1px solid #ddd;
    min-width: 0;
    appearance: none;
    background: url("img/arrow-down.svg");
    background-repeat: no-repeat;
    background-size: 16px 15px;
    background-position: 115px center;
    cursor: pointer;
  }
`;
