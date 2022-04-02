import HomeTab from 'components/HomeTab';
import transactions from 'components/HomeTab/hometab.json'

import s from './DashboardPage.module.css';

function DashboardPage() {
  return <main className={s.main}><HomeTab items={transactions}/></main>;
}

export default DashboardPage;
