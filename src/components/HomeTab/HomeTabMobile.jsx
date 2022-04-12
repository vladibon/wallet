import s from './HomeTabMobile.module.css';
import HomeTabBackground from '../../images/home-tab-bg.png';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTransactionsQuery, setLatestTransactions, setMoreTransactions } from 'redux/index';
import { selectTransactions } from 'redux/selectors';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Balance from 'components/Balance';

function HomeTabMobile() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data } = useGetTransactionsQuery(page);
  const transactions = useSelector(selectTransactions);

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (data?.transactions?.length) {
      setTotalPages(data.totalPages);
      if (page === 1) {
        dispatch(setLatestTransactions([...data.transactions]));
      } else {
        if (page !== data.page) return;
        dispatch(setMoreTransactions([...data.transactions]));
      }
    }
  }, [data, dispatch, page]);

  const scroll = () => {
    if (page === totalPages) {
      setHasMore(false);
      return;
    }
    setPage(page + 1);
  };

  const [scrHeight, setSrcHeight] = useState(100);

  useEffect(() => {
    start();
    window.addEventListener('resize', start);

    function start() {
      setSrcHeight(document.documentElement.clientHeight - 255);
    }

    return () => window.removeEventListener('resize', start);
  }, []);

  return (
    <>
      <Balance />
      {transactions.length ? (
        <div className={s.homeTab__section}>
          <div className={s.homeTab__block}>
            <InfiniteScroll
              id='infscr'
              dataLength={transactions.length}
              next={scroll}
              hasMore={hasMore}
              height={scrHeight}
              endMessage={
                <span className={s.message}>
                  &#8212; <i>this was the last one </i>&#8212;
                </span>
              }
            >
              <Accordion allowZeroExpanded className={s.homeTab}>
                {transactions.map(transaction => (
                  <AccordionItem key={transaction._id}>
                    <AccordionItemHeading
                      className={
                        transaction.type
                          ? `${s.homeTab__itemsTitle} ${s.incomeBorder}`
                          : `${s.homeTab__itemsTitle} ${s.expenseBorder}`
                      }
                    >
                      <AccordionItemButton className={s.homeTabButton}>
                        <div className={s.flex}>
                          <div className={s.accordion__button}></div>
                          <span className={s.homeTabItems__colorTitle}>{transaction.date}</span>
                        </div>
                        <span
                          className={
                            transaction.type
                              ? `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.income}`
                              : `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.expense}`
                          }
                        >
                          {Intl.NumberFormat('ru-Ru', {
                            minimumFractionDigits: 2,
                          }).format(transaction.amount)}
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel
                      className={
                        transaction.type
                          ? `${s.homeTab__items} ${s.incomeBorder}`
                          : `${s.homeTab__items}  ${s.expenseBorder}`
                      }
                    >
                      <ul className={s.homeTabItems__list}>
                        <li className={s.homeTabItems__listCell}>
                          <span className={s.homeTabItems__listTitle}>Date</span>
                          <span
                            className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
                          >
                            {transaction.date}
                          </span>
                        </li>
                        <li className={s.homeTabItems__listCell}>
                          <span className={s.homeTabItems__listTitle}>Type</span>
                          <span
                            className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningCenter}`}
                          >
                            {transaction.type ? '+' : '-'}
                          </span>
                        </li>
                        <li
                          className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}
                        >
                          <span className={s.homeTabItems__listTitle}>Category</span>
                          <span
                            className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
                          >
                            {transaction.category}
                          </span>
                        </li>
                        <li
                          className={`${s.homeTabItems__listCell} ${s.homeTabItems__listCellWidth}`}
                        >
                          <span className={s.homeTabItems__listTitle}>Comment</span>
                          <span
                            className={`${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningStart}`}
                          >
                            {/* {transaction.comment} */}
                            {transaction.comment.length ? (
                              transaction.comment
                            ) : (
                              <span>&#8212;</span>
                            )}
                          </span>
                        </li>
                        <li className={s.homeTabItems__listCell}>
                          <span className={s.homeTabItems__listTitle}>Amount</span>
                          <span
                            className={
                              transaction.type
                                ? `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.income}`
                                : `${s.homeTabItems__listMeaning} ${s.homeTabItems__listMeaningWeight} ${s.expense}`
                            }
                          >
                            {Intl.NumberFormat('ru-Ru', {
                              minimumFractionDigits: 2,
                            }).format(transaction.amount)}
                          </span>
                        </li>
                        <li className={s.homeTabItems__listCell}>
                          <span className={s.homeTabItems__listTitle}>Balance</span>
                          <span className={s.homeTabItems__listMeaning}>
                            {Intl.NumberFormat('ru-Ru', {
                              minimumFractionDigits: 2,
                            }).format(transaction.balance)}
                          </span>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </InfiniteScroll>
          </div>
        </div>
      ) : (
        <>
          <img className={s.homeTab__bg} src={HomeTabBackground} alt='Transactions' />
          <span className={s.message}>
            &#8212; <i>sorry, you don't have any transactions yet...</i>&#8212;
          </span>
        </>
      )}
    </>
  );
}

export default HomeTabMobile;
