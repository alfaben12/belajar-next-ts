import { Line } from 'react-chartjs-2';
import Layout from '../../components/Layout';
import { DashboardResponse } from '../../lib/types/dashboard/type';
import apiService from '../../utils/apiService';

interface DashboardProps {
  isEmpty: boolean,
  dashboard: DashboardResponse
}

export default function Dashboard(props: DashboardProps) {
  const { isEmpty, dashboard } = props;

  const data = {
    labels: ['JAN',
      'FEB',
      'MAR',
      'APR',
      'MEI',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OKT',
      'NOV',
      'DES'],
    datasets: [
      {
        label: 'Product Sell',
        data: dashboard.count_product_sell_yearly,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
      {
        label: 'Sales',
        data: dashboard.count_order_yearly,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <Layout>
      <div className="container px-6 mx-auto grid">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Dashboard
        </h2>
        <a className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-blue-100 bg-blue-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-blue" href="https://github.com/estevanmaito/windmill-dashboard">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Star this project on GitHub</span>
          </div>
          <span>View more →</span>
        </a>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="bg-white shadow-md rounded my-6">
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Count Order
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {dashboard.count_order}
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {dashboard.balance}
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                0
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Sales
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {dashboard.total_order}
              </p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                New Customer
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                0
              </p>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Invoice</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Payment</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {dashboard.last_order_sell.map((order) => (
                  <>
                    <tr key={order.id} className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{order.invoice}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              alt={order.email}
                              className="w-6 h-6 rounded-full"
                              src={`https://dummyimage.com/1000x1000/2564eb/ffffff.jpg&text=${order.email.charAt(0).toLocaleUpperCase()}`}
                            />
                          </div>
                          <span>{order.email}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <span className="font-medium">
                          {`Rp. ${order.grand_total}`}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{order.status}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                            <a target="_blank" rel="noreferrer" href={order.payment_url}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>

                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-center">Qty</th>
                  <th className="py-3 px-6 text-left">Total</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-center">Visit</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {dashboard.last_product_sell.map((item) => (
                  <>
                    <tr key={item.id} className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              alt={item.product.name}
                              className="w-6 h-6 rounded-full"
                              src={JSON.parse(item.product.media)[0]}
                            />
                          </div>
                          <span>{item.product.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">
                            {`x${item.qty}`}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-start">
                          <span className="font-medium">
                            {`Rp. ${item.product.price}`}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center justify-start">
                          <span className="font-medium">
                            {`Rp. ${item.total_price}`}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center justify-center">
                          <span className="font-medium">
                            {`${item.product.count_visit}x`}
                          </span>
                        </div>
                      </td>
                    </tr>

                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const dashboardReq = await apiService(ctx).get('dashboards/statistic', {
    params: {
      year: 2021,
    },
  });

  const dashboardRes: DashboardResponse = dashboardReq.data;
  return {
    props: {
      isEmpty: false,
      dashboard: dashboardRes,
    },
  };
};
