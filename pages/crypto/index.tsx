import axios from 'axios';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { AssetsResponse } from '../../lib/types/crypto/assets/type';
import { MarketResponse } from '../../lib/types/crypto/market/type';

interface CryptoProps {
    assets: AssetsResponse,
    markets: MarketResponse
}
export default function Excange(props: CryptoProps) {
  const { assets, markets } = props;
  return (
    <Layout>
      <h1 className="text-3xl font-semibold"> Assets</h1>
      <div className="w-full p-8 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    #Rank
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Market Cap (USD)
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Exhange (%)
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Info
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                                    assets.data.map((asset) => (
                                      <>
                                        <tr key={asset.id}>
                                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            #
                                            {asset.rank}
                                          </th>
                                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                                            {asset.name}
                                            {' '}
                                            (
                                            {asset.symbol}
                                            )
                                          </td>
                                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                                            {asset.marketCapUsd}
                                          </td>
                                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                            <div className="flex space-x-3 items-center">
                                              {
                                                            parseInt(asset.changePercent24Hr, 10) < 1 ? (
                                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                              </svg>
                                                            ) : (
                                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                                              </svg>
                                                            )
                                                        }

                                              <p>{`${asset.changePercent24Hr}%`}</p>
                                            </div>
                                          </td>
                                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                            <div className="flex space-x3 items-center">
                                              <a className="text-blue-600 font-semibold hover:text-blue-700">
                                                <Link href={`/crypto/${asset.id}`}>
                                                  Charts
                                                </Link>
                                              </a>
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 font-semibold hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                              </svg>
                                            </div>
                                          </td>
                                        </tr>
                                      </>
                                    ))
                                }
              </tbody>

            </table>
          </div>
        </div>
      </div>
      <div className="w-full p-8 mx-auto">
        <h1 className="text-3xl font-semibold"> Market</h1>

        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Exchange ID
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Volume (24H)
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Price (USD)
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Volume (%)
                  </th>
                </tr>
              </thead>

              <tbody>
                {
                                    markets.data.map((market) => (
                                      <>
                                        <tr key={market.volumeUsd24Hr}>
                                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {market.exchangeId}
                                          </th>
                                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ">
                                            {market.baseSymbol}
                                          </td>
                                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                                            {market.volumeUsd24Hr}
                                          </td>
                                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                                            {`${market.priceUsd}`}
                                          </td>
                                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                            <div className="flex space-x-3 items-center">
                                              <p>{`${market.volumePercent}%`}</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </>
                                    ))
                                }
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const assetsReq = await axios.get('https://mocki.io/v1/ce312268-addf-41a4-970b-10ea3e82b547');
  const marketsReq = await axios.get('https://mocki.io/v1/5ea798be-33c5-482b-9323-9457fa8f22b2');

  const assetsRes: AssetsResponse = assetsReq.data;
  const marketsRes: MarketResponse = marketsReq.data;
  return {
    props: {
      assets: assetsRes,
      markets: marketsRes,
    },
  };
};

// alphavantage = 9O4Z0MNG337QD6ET
