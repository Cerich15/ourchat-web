import {Container, Text} from 'components';

import {Props} from './types';
import styles from './.module.css';

const Title: React.FC<Props> = () => {
  return (
    <Container className={styles['text-pane']}>
      <Text className={styles['title']}>OURCHAT</Text>
      <Text className={styles['subtitle']}>Let's have a chat</Text>
    </Container>
  );
};

export default Title;
