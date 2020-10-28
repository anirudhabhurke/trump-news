import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
const Paginator = (props) => {
      let active = props.pageNo;
      let items = [];

      for (let number = 1; number <= props.totalPages; number++) {
            items.push(
                  <Pagination.Item
                        key={number}
                        active={number === active}
                        onClick={() => {
                              props.setPageNo(number);
                        }}
                  >
                        {number}
                  </Pagination.Item>
            );
      }

      return <Pagination>{items}</Pagination>;
};

export default Paginator;
