import HomeTabItem from './HomeTabItem';
import s from './HomeTab.module.css';

function HomeTab({ items }) {
  return (
    <table className={s.homeTab}>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Тип</th>
          <th>Категория</th>
          <th>Комментарий</th>
          <th>Сумма</th>
          <th>Баланс</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <HomeTabItem
              date={item.date}
              type={item.type}
              category={item.category}
              comment={item.comment}
              sum={item.sum}
              balance={item.balance}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HomeTab;
