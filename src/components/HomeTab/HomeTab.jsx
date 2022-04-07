import HomeTabMobile from './HomeTabMobile';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

import { useMediaQuery } from 'react-responsive';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

// import trans from './hometab.json';

function HomeTab() {
  const dispatch = useDispatch();
  const { data } = useGetTransactionsQuery();
  const transactions = useSelector(selectTransactions);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    if (!data) return;
    else dispatch(setTransactions([...data.transactions]));
  }, [data, dispatch]);

  console.log(transactions);

  return (
    <div>
      {isMobile && <HomeTabMobile items={trans} />}

      {isTabletOrDesktop && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>td</td>
            </tr>
          </tbody>
        </table>
      )}

      <ButtonAddTransactions />
    </div>
  );
}

export default HomeTab;
