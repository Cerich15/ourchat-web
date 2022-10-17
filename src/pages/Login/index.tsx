import {Container} from "components";
import Button from "components/Button";
import InputField from "components/InputField";
import Text from "components/Text";
import {app_information, app_name, input_templates} from "constants/index";
import React, {useState} from "react";
import {getIcon} from "utils";
import styles from "./.module.css";
import {Props} from "./types";

type InitState = {
  username: string;
  password: string;
};

const Login: React.FC<Props> = ({style}) => {
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
    <Container style={style} className={styles["login-page"]}>
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
                  label={""}
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

export default Login;

//create img component
// place parent class
//put type on app after converting to object
