import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Chart from '../Chart';

const extractSVGRegex = /<div [\w\d=" -]+><div [\w\d=" -:;]+>(.+<\/svg>)/;

const font = 'SofiaProRegular, Sofia Pro, sofia-pro';

const SingleProtocolCard = ({ data, date, name }) => {
  const chart = ReactDOMServer.renderToString(
    React.createElement(Chart, {
      data,
      primary: 'eth',
      protocols: { eth: 'Ether' },
      server: true,
    })
  );

  const result = extractSVGRegex.exec(chart);
  const svg = result[1].replace('viewBox="0 0 500 200"', '');

  const avg = data.slice(-7).reduce((acc: number, item: any) => acc + item.primary, 0) / 7;

  return (
    <svg
      viewBox="0 0 688 344"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect fill="#F9FAFC" x="0" y="0" width="688" height="344" />
      <text fontFamily={font} fontSize="24" fill="#091636" x="27" y="44">
        CryptoFees.info
      </text>
      <text
        opacity="1"
        fontFamily={font}
        fontSize="20"
        fill="#091636"
        x="655"
        y="35"
        textAnchor="end"
      >
        {name}
      </text>
      <text
        opacity="0.4"
        fontFamily={font}
        fontSize="16"
        fill="#091636"
        x="655"
        y="55"
        textAnchor="end"
      >
        {date}
      </text>

      <rect
        x="240"
        y="80"
        width="420"
        height="220"
        rx="15"
        fill="#ffffff"
        strokeWidth="1"
        stroke="#d0d1d9"
      />

      <g transform="scale(1.1) translate(230,80)" dangerouslySetInnerHTML={{ __html: svg }} />

      <g transform="translate(20, 80)">
        <rect width="200" height="100" rx="15" fill="#ffffff" strokeWidth="1" stroke="#d0d1d9" />

        <text
          opacity="1"
          fontFamily={font}
          fontSize="24"
          fill="#091636"
          x="180"
          y="50"
          textAnchor="end"
        >
          {avg.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </text>
        <text
          opacity="0.8"
          fontFamily={font}
          fontSize="14"
          fill="#091636"
          x="100"
          y="80"
          textAnchor="middle"
        >
          1 Day Fees
        </text>
      </g>

      <g transform="translate(20, 200)">
        <rect width="200" height="100" rx="15" fill="#ffffff" strokeWidth="1" stroke="#d0d1d9" />

        <text
          opacity="1"
          fontFamily={font}
          fontSize="24"
          fill="#091636"
          x="180"
          y="50"
          textAnchor="end"
        >
          {data[data.length - 1].primary.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </text>
        <text
          opacity="0.8"
          fontFamily={font}
          fontSize="14"
          fill="#091636"
          x="100"
          y="80"
          textAnchor="middle"
        >
          7 Day Avg. Fees
        </text>
      </g>
    </svg>
  );
};

export default SingleProtocolCard;
