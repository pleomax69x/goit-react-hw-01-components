import Statistics from './Statistics';
import s from './Statistics.module.css';

const bgColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function StatisticsList({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: bgColor() }}
          >
            <Statistics label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticsList;
