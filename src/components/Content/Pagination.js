import React from 'react';

const Pagination = () => {
  const list = () => {
    const pages = [];
    pages.push(<li><a className="pgn__prev" href="#0">Prev</a></li>);
    for (let i = 1; i <= 5; i += 1) {
      pages.push(<li><a className="pgn__num" href="#0">{i}</a></li>);
    }
    pages.push(<li><span className="pgn__num dots">...</span></li>);
    pages.push(<li><a className="pgn__num" href="#0">8</a></li>);
    pages.push(<li><a className="pgn__next" href="#0">Next</a></li>);
    return pages;
  };
  return (
    <div className="row">
      <div className="col-full">
        <nav className="pgn">
          <ul>
            {list()}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
