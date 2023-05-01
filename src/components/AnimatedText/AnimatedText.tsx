import styles from './AnimatedText.module.css';

const word = 'STUDIO';

interface AnimatedTextProps {
  position: 'top' | 'bottom';
}

export default function AnimatedText(props: AnimatedTextProps) {
  return (
    <div className={styles.AnimatedTextComponent + ` ${props.position}-0`}>
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
  );
}
