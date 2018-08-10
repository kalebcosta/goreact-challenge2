import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    .repo_name {
      color: #212121;
    }
  }

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

  .arrow {
    display: flex;
    margin-left: auto;
    content: "";
    width: 7px;
    height: 12px;
    background: url(img/right.svg) no-repeat;
  }
`;
