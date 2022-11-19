import {Container, Button, Image} from 'components';

import {Props} from './types';
import styles from './.module.css';
import {getIcon} from 'utils';

const Services: React.FC<Props> = ({
  onClickFacebook = () => {},
  onClickGoogle = () => {},
}) => {
  return (
    <Container className={styles['services-pane']}>
      <Button className={styles['facebook-btn']} onClick={onClickFacebook}>
        <Image className={styles['icon']} src={getIcon('/facebook.png')} />
        Facebook
      </Button>
      <Button className={styles['google-btn']} onClick={onClickGoogle}>
        <Image className={styles['icon']} src={getIcon('/google.png')} />
        Google
      </Button>
    </Container>
  );
};

export default Services;
