import { ParentComponentProps } from 'interfaces/ParentComponentProps';

import styles from './Heading.module.css';

export type HeadingProps = ParentComponentProps;

export default function Heading(props: HeadingProps) {
  return (
    <div className={styles.HeadingComponent}>
      <h1 className='text-3xl'>{props.children}</h1>
    </div>
  );
}
