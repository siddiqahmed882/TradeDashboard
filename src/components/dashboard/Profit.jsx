import { Flat } from '@alptugidin/react-circular-progress-bar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../../config/main';

const Profit = ({ account, setInitialBalance }) => {
  const [profit, setProfit] = useState(0);
  const [totalProfit, setTotalProfit] = useState(1);

  const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
  useEffect(() => {
    setTotalProfit(account.totalTarget || 10);
    const getProfit = async () => {
      const response = await axios.post(`${config.BackendEndpoint}/getProfit`, { displayName: account.displayName }, {
        headers: {
          Authorization: token ? token : ""
        }
      });

      if (response.status === 401) {
        localStorage.removeItem("userInfo");
        window.location.reload();
        return; // Early exit to prevent further processing.
      }

      // Check if the account is blocked.
      if (response.data.message === "Blocked Account") {
        localStorage.removeItem("userInfo");
        window.location.reload();
        return; // Early exit to prevent further processing.
      }
      setInitialBalance(response.data.initialbalance)
      setProfit((response.data.profit))
      return response.data; // Return the response data if everything is okay.

    };

    getProfit();
  }, [account])

  return (
    <>
      <div className={"sm:mb-[18px] flex sm:mx-6 justify-between items-center gap-x-3"}>
        <span className={"cardTitle"}>Profit</span>
        <span className={"cardTitle"}>{`$${String(-profit.toFixed(2))}`}</span>
      </div>
      <div className={"flex sm:flex-col py-5 flex-row sm:items-center justify-center"}>
        <div className="max-w-[200px] min-w-[200px] z-20 hidden dark:block">
          {/* <Flat
            progress={50}
            range={{ from: 0, to: 100 }}
            sign={{ value: '%', position: 'end' }}
            text={'8000$'}
            showMiniCircle={false}
            showValue={false}
            sx={{
              strokeColor: 'blue',
              barWidth: 7,
              bgStrokeColor: '#ffffff',
              bgColor: { value: '#000000', transparency: '20' },
              shape: 'full',
              strokeLinecap: 'round',
              valueFamily: 'Trebuchet MS',
              textSize: 17,
              textWeight: 'bold',
              textColor: 'white',
              textFamily: 'Trebuchet MS',
              loadingTime: 1000,
              valueAnimation: true,
              intersectionEnabled: true
            }}
          /> */}
        </div>
        <div className="max-w-[200px] min-w-[200px] z-20 dark:hidden">
          <Flat
            progress={(totalProfit && profit < 0 ? ( - profit / totalProfit / account.phaseInitialBalance) * 10000 : 0).toFixed(2)}  // Prevent division by zero
            range={{ from: 0, to: 100 }}
            sign={{ value: '%', position: 'end' }}
            text={`$${-profit.toFixed(2)}`}  // Ensure the text is a string
            showMiniCircle={false}
            showValue={false}
            sx={{
              strokeColor: 'blue',
              barWidth: 7,
              bgStrokeColor: '#ffffff',
              shape: 'full',
              strokeLinecap: 'round',
              valueFamily: 'Trebuchet MS',
              textSize: 17,
              textWeight: 'bold',
              textColor: 'black',
              textFamily: 'Trebuchet MS',
              loadingTime: 1000,
              valueAnimation: true,
              intersectionEnabled: true
            }}
          />

        </div>
      </div>
    </>
  );
};

export default Profit;
