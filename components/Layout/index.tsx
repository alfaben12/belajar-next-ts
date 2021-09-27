import { ReactNode } from 'react';
import Head from 'next/head';
import Sidebar from '../Sidebar';
import Header from '../Header';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>
          NextJS Basic
        </title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="h-full overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
