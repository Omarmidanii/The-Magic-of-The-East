import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import swal from "sweetalert";

interface Props {
  onClose?: () => void;
}

const CustomerForm = ({ onClose = () => {} }: Props) => {
  const showAlert = () => {
    swal({
      title: "Hello!",
      text: "This is a SweetAlert2 alert",
      icon: "success",
    }).then(() => {
      onClose();
    });
  };

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        phone: "",
        address: "",
      }}
      validationSchema={null}
      onSubmit={() => {}}
    >
      <Form>
        <FormControl my={4} id="firstname">
          <FormLabel fontFamily={"cursive"}> الاسم الاول</FormLabel>
          <InputGroup bgColor={"#F8F8F8"} borderRadius={"10"}>
            <Field
              name="firstname"
              fontFamily={"cursive"}
              as={Input}
              type="text"
              placeholder="الاسم الاول"
              _placeholder={{ color: "gray.600" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="firstname">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl mb={4} id="lastname">
          <FormLabel fontFamily={"cursive"}> الاسم الاخير</FormLabel>
          <InputGroup bgColor={"#F8F8F8"} borderRadius={"10"}>
            <Field
              name="lastname"
              fontFamily={"cursive"}
              as={Input}
              type="text"
              placeholder="الاسم الاخير"
              _placeholder={{ color: "gray.600" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="lastname">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl mb={4} id="phone">
          <FormLabel fontFamily={"cursive"}>الرقم</FormLabel>
          <InputGroup bgColor={"#F8F8F8"} borderRadius={"10"}>
            <Field
              name="phone"
              as={Input}
              type="text"
              placeholder="+963900000000"
              _placeholder={{ color: "gray.600" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="phone">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl mb={4} id="address">
          <FormLabel fontFamily={"cursive"}>المنطقة</FormLabel>
          <InputGroup bgColor={"#F8F8F8"} borderRadius={"10"}>
            <Field
              name="address"
              fontFamily={"cursive"}
              as={Input}
              type="text"
              placeholder="المنطقة"
              _placeholder={{ color: "gray.600" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="address">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <Button
          mb={8}
          bgColor={"#228822"}
          _hover={{ bgColor: "#117711" }}
          color={"white"}
          width="30%"
          boxShadow={"md"}
          type="submit"
          marginTop={8}
          borderRadius={"10"}
          onClick={() => showAlert()}
        >
          {"اضافة"}
        </Button>
        <Button
          mb={8}
          _hover={{ bgColor: "#EEEEEE" }}
          width="30%"
          bgColor={"white"}
          borderWidth={"2px"}
          borderColor={"gray.100"}
          boxShadow={"md"}
          mr={2}
          type="submit"
          marginTop={8}
          borderRadius={"10"}
          onClick={() => onClose()}
        >
          {"الغاء"}
        </Button>
      </Form>
    </Formik>
  );
};

export default CustomerForm;
