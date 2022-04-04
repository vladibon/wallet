import HomeTab from 'components/HomeTab';
import transactions from 'components/HomeTab/hometab.json';

import s from './DashboardPage.module.css';

function DashboardPage() {
  return (
    <main className={s.main}>
      {transactions ? (
        <HomeTab items={transactions} />
      ) : (
          
        // <img className={s.homeTab__img} src='../../images/home-tab-bg.png' alt='Transactions'></img>
      )}
    </main>
  );
}

export default DashboardPage;
