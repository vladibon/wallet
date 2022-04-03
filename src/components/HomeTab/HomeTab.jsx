import HomeTabItems from './HomeTabItems';
import s from './HomeTab.module.css';

function HomeTab({ items }) {
  return (
    <>
      <ul className={s.homeTab}>
        <li className={s.homeTab__hidden}>
          <ul className={s.homeTab__title}>
            <li className={s.homeTab__titleCell}>Дата</li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellCenter}`}>Тип</li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>
              Категория
            </li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellWidth}`}>
              Комментарий
            </li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>Сумма</li>
            <li className={`${s.homeTab__titleCell} ${s.homeTabItems__titleCellEnd}`}>Баланс</li>
          </ul>
        </li>
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
