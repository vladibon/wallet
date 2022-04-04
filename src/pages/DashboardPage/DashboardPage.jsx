import s from './DashboardPage.module.css';
import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
function DashboardPage() {
  return <main className={s.main}>Main
  <DoughnutChart />
  </main>;
}

export default DashboardPage;
