import styles from "./GitBtn.module.css";

type Props = {
  url: string;
  urlApi?: string;
};

const GitBtn = ({ url, urlApi }: Props) => {
  return (
    <>
      {urlApi ? (
        <ul className={styles.gitbtn_list}>
          <li>
            <a href={url} target="blank">
              Github React
            </a>
          </li>
          <li>
            <a href={urlApi} target="blank">
              Github API
            </a>
          </li>
        </ul>
      ) : (
        <a href={url} target="blank" className={styles.gitbtn_link}>
          Go to Github
        </a>
      )}
    </>
  );
};

export default GitBtn;
