import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import { ErrorMessage, Field, Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import User from "../../entities/user";
import * as yup from "yup";
import useCreate from "../../hooks/useCreate";
import useErrorStore from "../../stores/errorStore";

const LoginForm = () => {
  const navigate = useNavigate();

  const Login = useCreate<User, FormData>("login");

  const { message } = useErrorStore();

  const loginValidation = yup.object().shape({
    email: yup.string().email().required("البريد الالكتروني مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة"),
  });

  const onSubmit = (values: User) => {
    const data = new FormData();
    data.append("email", values.email);
    data.append("password", values.password);
    Login.mutate(data);
  };

  if (Login.isSuccess) {
    if (Login.data.data.access_token)
      localStorage.setItem("token", Login.data.data.access_token);
    navigate("/dash");
    return <></>;
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginValidation}
      onSubmit={onSubmit}
    >
      {({ submitForm }) => (
        <Form>
          <Text textColor={"red"}>{Login.isError ? message?.message : ""}</Text>
          <FormControl my={4} id="email">
            <Field
              pr={8}
              as={Input}
              type="email"
              name="email"
              sx={{
                direction: "ltr",
                textAlign: "right",
              }}
              bgColor={"gray.100"}
              placeholder="البريد الالكتروني"
              mt={16}
            />
            <Text textColor={"red"}>{Login.isError ? message?.email : ""}</Text>
            <ErrorMessage name="email">
              {(msg) => <Text color="red.500">{msg}</Text>}
            </ErrorMessage>
          </FormControl>
          <FormControl my={4} id="password">
            <Field
              pr={8}
              as={Input}
              type="password"
              name="password"
              sx={{
                direction: "ltr",
                textAlign: "right",
              }}
              bgColor={"gray.100"}
              placeholder="كلمة السر"
              mt={8}
            />
            <Text textColor={"red"} mb={15}>
              {Login.isError ? message?.password : ""}
            </Text>
            <ErrorMessage name="password">
              {(msg) => <Text color="red.500">{msg}</Text>}
            </ErrorMessage>
          </FormControl>
          <Button
            mb={4}
            bgColor={"#228822"}
            _hover={{ bgColor: "#117711" }}
            color={"white"}
            width="30%"
            boxShadow={"lg"}
            onClick={submitForm}
            marginTop={8}
            borderRadius={"10"}
          >
            {Login.isPending ? "يتم التسجيل..." : "تسجيل الدخول"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
