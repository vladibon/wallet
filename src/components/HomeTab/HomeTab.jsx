import HomeTabItems from './HomeTabItems';
import s from './HomeTab.module.css';

function HomeTab({ items }) {
  return (
    <>
      <ul className={s.homeTab}>
        {items.map(item => (
          <li className={s.homeTab__items} key={item.id}>
            <HomeTabItems
              date={item.date}
              type={item.type}
              category={item.category}
              comment={item.comment}
              sum={item.sum}
              balance={item.balance}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomeTab;
