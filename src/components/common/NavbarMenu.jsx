import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import config from "../../config/main";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ setAccount }) {
  const token = JSON.parse(localStorage.getItem("userInfo"))?.token;

  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);



  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await axios.get(`${config.BackendEndpoint}/getAccounts`, {
          headers: {
            Authorization: token
          }
        });

        setAccounts(response.data.accounts || []); // Update state with accounts data
      } catch (error) {
        console.error("An error occurred while fetching accounts:", error);

        if (error.response && error.response.status === 401) {
          localStorage.removeItem("userInfo");
          window.location.reload();
        } else {
          console.error("An unexpected error occurred:", error.message);
        }
      }
    };

    getAccounts(); // Call the function and wait for it to finish
  }, []);

  return (
    <Menu as="div" className="m-3 p-2 relative z-50">
      <div>
        <Menu.Button className="h-[50px] dark:text-white text-black focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center bg-lightPrimaryColor dark:bg-darkPrimaryColor border-solid border-2 dark:border-gray-100">
          {selectedAccount ? `${selectedAccount.displayName} (${selectedAccount.tradeSystem})` : "Select Account"}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <Menu.Item key={account.id}>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "bg-gray-100 dark:bg-gray-700" : "",
                      "block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-100"
                    )}
                    onClick={() => {
                      setAccount(account);
                      setSelectedAccount(account);
                    }}
                  >
                    {`${account.displayName} (${account.tradeSystem})`}
                  </button>
                )}
              </Menu.Item>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-100">
              No accounts available
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
