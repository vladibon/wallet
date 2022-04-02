import HomeTabItem from './HomeTabItem';
import s from './HomeTab.module.css';

function HomeTab({ items }) {
  return (
    <div>
      <ul className={s.homeTab}>
        {items.map(item => (
          <li key={item.id}>
            <HomeTabItem
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
    </div>
  );
}

export default HomeTab;
