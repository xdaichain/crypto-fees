import React from 'react';

const Header = () => {
  return (
    <header>
      <ul className="header-links">
        <li className="header-link">
          <div>cryptofees.info</div>
        </li>
        <li className="header-link">
          <a href="https://money-movers.info/">money-movers.info</a>
        </li>
        <li className="header-link">
          <a href="https://open-orgs.info/">open-orgs.info</a>
        </li>
        <li className="header-link">
          <a>More</a>

          <ul className="dropdown">
            <li className="header-link">
              <a href="https://stakers.info/">stakers.info</a>
            </li>
            <li className="header-link">
              <a href="https://ethereumnodes.info/">ethereumnodes.info</a>
            </li>
          </ul>
        </li>
      </ul>

      <style jsx>{`
        .header-links {
          display: flex;
          margin: 0;
          padding: 0;
        }

        .header-link {
          list-style: none;
          position: relative;
        }

        .header-link > a,
        .header-link > div {
          padding: 8px;
          display: block;
          border: solid 1px transparent;
          margin: 0 4px;
        }

        .header-link > a:hover {
          border-radius: 3px;
          border: solid 1px #d0d1d9;
          text-decoration: none;
        }

        .dropdown {
          position: absolute;
          background: #f9fafc;
          display: none;
          right: 0;
          padding: 4px;
          border: solid 1px #d0d1d9;
          border-radius: 4px;
          text-align: right;
        }

        .header-link:hover .dropdown,
        .dropdown:hover {
          display: block;
        }
      `}</style>
    </header>
  );
};

export default Header;