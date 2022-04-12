import HomeTabMobile from './HomeTabMobile';
import HomeTabDesktop from './HomeTabDesktop';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import ButtonScrollTop from 'components/ButtonScrollTop';

import { useMediaQuery } from 'react-responsive';

function HomeTab() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      {isMobile && <HomeTabMobile />}

      {isTabletOrDesktop && <HomeTabDesktop />}

      <ButtonAddTransactions />
      {isMobile && <ButtonScrollTop/>}
    </>
  );
}

export default HomeTab;
