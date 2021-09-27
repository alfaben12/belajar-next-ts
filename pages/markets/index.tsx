import axios from 'axios';
import { AssetsResponse } from '../../lib/types/crypto/assets/type';

export default function Excange() {
}

export const getServerSideProps = async () => {
  const assetsReq = await axios.get('https://api.coincap.io/v2/assets');

  const assetsRes: AssetsResponse = assetsReq.data;
  return {
    props: {
      isEmpty: false,
      assets: assetsRes,
    },
  };
};
