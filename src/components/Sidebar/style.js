import styled from 'styled-components';

export const HeaderSidebar = styled.header`
  width: 235px;
  background: #FAFBFD;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h5 {
    font-weight: 600;
    font-family: ${(props) => props.theme.fonts.poppins};
    margin-top: 45px;
    text-align: center;
    span {
      color: #F7542E;
    }
  }
  ul {
    list-style: none;
    margin-left: 58px;
    margin-top: 122px;
    li {
      font-family: ${(props) => props.theme.fonts.notoSansJP};
      font-size: 14px;
      color: #9E9E9E;
      font-weight: 500;
      & + li {
        margin-top: 25px;
      }
      &.active {
        color: #090F31;
        font-weight: 700;
      }
    }
  }
`;
