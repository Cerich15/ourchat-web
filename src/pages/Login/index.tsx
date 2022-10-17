import React, {useState} from "react";

import {Container} from "components";
import Button from "components/Button";
import InputField from "components/InputField";
import Text from "components/Text";
import {app_information, app_name, input_templates} from "constants/index";
import {connector, Props} from "ducks";
import {getIcon} from "utils";

import styles from "./.module.css";

type InitState = {
  username: string;
  password: string;
};

const Login: React.FC<Props> = ({dispatch = () => {}}) => {
  const initState = {username: "", password: ""};
  const [state, seState] = useState<InitState>(initState);

  const onSetState = (key: string, val: string) => {
    // seState({[key]: val});
  };
  const onChange = (ae: string) => (value: string) => {
    onSetState(ae, value);
  };

  const login = () => {
    alert("welcome");
  };

  const loginAsFacebook = () => {
    alert("welcome facebook");
  };

  const loginAsGoogle = () => {
    alert("welcome google");
  };

  return (
    <Container className={styles["login-page"]}>
      <Container className={styles["right-side"]}>
        {app_name.map((text, textIndex) => (
          <div className={styles["title-container"]} key={textIndex}>
            <Text
              text={text}
              className={
                textIndex !== 0 ? styles["tag-line"] : styles["app-title"]
              }
            />
          </div>
        ))}
        {input_templates.map(({label, placeholder, name}, index) => (
          <Container className={styles["confirmations"]} key={index}>
            <InputField
              name={label}
              value={state[name]}
              placeholder={placeholder}
              onChange={onChange(name)}
              className={styles["input-fields"]}
            />
            {index === 1 && (
              <>
                <Button
                  className={styles["login-button"]}
                  label={"SignIn"}
                  onClick={login}
                />
                <Button
                  className={styles["sign-up"]}
                  label={"Dont have an account yet?"}
                  onClick={loginAsGoogle}
                />
              </>
            )}
          </Container>
        ))}
        <Container className={styles["login-with"]}>
          <Button
            label={"Login with Facebook"}
            onClick={loginAsFacebook}
            className={styles["facebook-button"]}
            icon={
              <img
                src={getIcon("/facebook.png")}
                alt=""
                className={styles["facebook-logo"]}
              />
            }
          />
          <Button
            label={"Login with Google"}
            onClick={loginAsFacebook}
            className={styles["google-button"]}
            icon={
              <img
                src={getIcon("/google.png")}
                alt=""
                className={styles["facebook-logo"]}
              />
            }
          />
        </Container>
      </Container>
      <Container className={styles["left-side"]}>
        <Container className={styles["logo"]}>
          <img src={getIcon("/logo.png")} alt="" />
          <Text text={app_information} />
        </Container>
      </Container>
    </Container>
  );
};

export default connector(Login);

/**
 * TODO: @Refactor
 * ASSIGNEEE: @Spencer
 * TASKS:
 * - create new Property for prefix and suffix component for Button and Input
 * - create <Image/> component at src/components
 * - create autogenerate @property {string} alt for Image component
 * - re-arrange import and export statement
 * - make all components export at <dir-name>/index.ts only
 * - use pre-requisite selector before to style, ex. .parent .child { -- style here -- }
 * - use the reducer existing
 * - resolve all warnings
 * - remove all "{}" if the value is literral string ex. label={"Login..."} should be label="Login..."
 */
