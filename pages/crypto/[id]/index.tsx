import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { AssetResponse } from '../../../lib/types/crypto/detail/type';
import Layout from '../../../components/Layout';

interface ExchangeProps {
    asset: AssetResponse,
    label: string[],
    exchange: number[],
    id: string
}

export default function Excange(props: ExchangeProps) {
  const {
    asset, id, label, exchange,
  } = props;
  const data = {
    labels: label,
    datasets: [
      {
        label: 'Price (USD)',
        data: exchange,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Layout>
      <div className="w-full p-8 mx-auto">
        <div className="bg-white p-8">
          <h1>
            {id.toLocaleUpperCase()}
            {' '}
            (
            {new Date(asset.timestamp).toLocaleDateString('en-US')}
            )
          </h1>
          <br />
          <Line data={data} options={options} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.params;
  const assetReq = await axios.get('https://mocki.io/v1/8a01fa9b-9cf8-4f3a-87b3-193374a450ac');

  const assetRes: AssetResponse = assetReq.data;
  const label = [];
  const exchange = [];

  for (let index = 0; index < assetRes.data.length; index++) {
    const asset = assetRes.data[index];
    label.push(new Date(asset.time).toLocaleDateString('en-US'));
    exchange.push(parseInt(asset.priceUsd, 10));
  }
  return {
    props: {
      asset: assetRes,
      label,
      exchange,
      id,
    },
  };
};
