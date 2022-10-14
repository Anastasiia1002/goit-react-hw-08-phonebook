import c from './Home.module.css';

export default function Home() {
  return (
    <div className={c.container}>
      <div className={c.box}>
        <div className={c.title}>
          <span className={c.block}></span>
          <h1>
            PhoneBook<span></span>
          </h1>
        </div>

        <div className={c.role}>
          <div className={c.block}></div>
          <p>only for YOU </p>
        </div>
      </div>
    </div>
  );
}
