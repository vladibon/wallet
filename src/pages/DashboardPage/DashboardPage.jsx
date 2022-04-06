import Header from 'components/Header';
import Navigation from 'components/Navigation'
import s from './DashboardPage.module.css';

function DashboardPage() {
  const toHome = () => null;
  const toCurrency = () => null;
  const toStatistics = () => null;

  return (
    <>
      <Header />

      <main className={s.main}>
        <Navigation
          onClickHome={toHome}
          onClickCurrency={toCurrency}
          onClickStatistics={toStatistics}
        />
      </main>
    </>
    
  );
}

export default DashboardPage;
