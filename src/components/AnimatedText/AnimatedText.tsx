import styles from './AnimatedText.module.css';

const word = 'DIGITAL - DESIGN - DEVELOPMENT - MARKETING - BRANDING - STRATEGY';

interface AnimatedTextProps {
  position: 'top' | 'bottom';
}

export default function AnimatedText(props: AnimatedTextProps) {
  return (
    <div className={styles.AnimatedTextComponent + ` ${props.position}-0`}>
      <div className={styles.wrapper}>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
        <span>{word}</span>
      </div>
    </div>
  );
}
