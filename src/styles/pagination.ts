import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

export const Pagination = styled(ReactPaginate)`
  display: flex;
  flex-wrap: wrap;
  color: #3c3e44;
  justify-content: center;

  li {
    list-style: none;
    color: #fff;

    a {
      display: inline-block;
      padding: 6px 15px;
      border: solid 1px;
      border-color: #fff;
      border-radius: 5px;
      margin: 0 5px;
      text-decoration: none;
      color: #fff;
      background-color: #3c3e44;
    }

    &.selected a {
      background-color: #fff;
      color: #000;
      border: none;

      &.hover {
        color: #000;
      }
    }
  }

  @media (max-width: 768px) {
    align-items: center;

    li {
      a {
        padding: 8px 16px;
        margin: 5px 0;
      }
    }
  }
`
