import React, {useReducer} from 'react';

import {connector, Props} from 'ducks';
import {Container, Button, Input, Text, Image} from 'components';
import {APP_INFORMATION} from 'constants/strings';
import {signIn, signInInitState} from 'reducer';
import {getIcon} from 'utils';

import {Services, Title} from './components';
import {LoginEvent, LoginSetState} from './types';
import styles from './.module.css';
import {controllers} from './layout';

const Login: React.FC<Props> = ({}) => {
  const [state, setState] = useReducer(signIn, signInInitState);

  const onSetState: LoginSetState = (key, val) => {
    setState({type: 'SET', payload: {[key]: val}});
  };
  const onChange: LoginEvent = (key) => (value) => {
    onSetState(key, value);
  };

  const onClick: LoginEvent = (key) => (val) => {};

  return (
    <Container className={styles['login-pane']}>
      <Container className={styles['left-pane']}>
        <Container className={styles['logo-pane']}>
          <Image className={styles['logo']} src={getIcon('/logo.png')} />
        </Container>
        <Container className={styles['info-pane']}>
          <Text className={styles['info']}>{APP_INFORMATION}</Text>
        </Container>
      </Container>
      <Container className={styles['right-pane']}>
        <Container className={styles['title-pane']}>
          <Title />
        </Container>
        <Container className={styles['input-pane']}>
          {controllers.map((controller, controllerIndex) => (
            <Input
              key={controllerIndex}
              className={styles['input']}
              placeholder={controller.placeholder}
              prefix={
                <Image className={styles['icon']} src={getIcon(controller.icon)} />
              }
            />
          ))}
          <Button className={styles['login-btn']}>LOGIN</Button>
          <Button className={styles['register-btn']}>
            Don't have account yet?
          </Button>
        </Container>
        <Container className={styles['services-pane']}>
          <Services onClickFacebook={() => {}} onClickGoogle={() => {}} />
        </Container>
      </Container>
    </Container>
  );
};

export default connector(Login);
