import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "react-router-dom";
import swal from "sweetalert";

interface Props {
  onClose: () => void;
}

const EmployerForm = ({ onClose }: Props) => {
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
        name: "",
        phone: "",
        address: "",
      }}
      validationSchema={null}
      onSubmit={() => {}}
    >
      <Form>
        <FormControl my={4} id="firstname">
          <FormLabel fontFamily={"cursive"}>الاسم الاول</FormLabel>
          <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
            <Field
              fontFamily={"cursive"}
              name="firstname"
              as={Input}
              type="text"
              placeholder="الاسم الاول"
              _placeholder={{ color: "gray.500" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="firstname">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl mb={4} id="secondname">
          <FormLabel fontFamily={"cursive"}>الاسم الثاني</FormLabel>
          <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
            <Field
              fontFamily={"cursive"}
              name="secondname"
              as={Input}
              type="text"
              placeholder="الاسم الثاني"
              _placeholder={{ color: "gray.500" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="secondname">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl mb={4} id="phone">
          <FormLabel fontFamily={"cursive"}>الرقم</FormLabel>
          <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
            <Field
              name="phone"
              as={Input}
              type="text"
              placeholder="+963900000000"
              _placeholder={{ color: "gray.500" }}
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
          <FormLabel fontFamily={"cursive"}>مكان السكن</FormLabel>
          <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
            <Field
              fontFamily={"cursive"}
              name="address"
              as={Input}
              type="text"
              placeholder="مكان السكن"
              _placeholder={{ color: "gray.500" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="address">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl mb={4} id="position">
          <FormLabel fontFamily={"cursive"}>الوظيفة</FormLabel>
          <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
            <Field
              fontFamily={"cursive"}
              name="position"
              as={Input}
              type="text"
              placeholder="وظيفة العامل في الصالة"
              _placeholder={{ color: "gray.500" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="position">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl mb={4} id="salary">
          <FormLabel fontFamily={"cursive"}>الراتب</FormLabel>
          <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
            <Field
              fontFamily={"cursive"}
              name="salary"
              as={Input}
              type="text"
              placeholder="الراتب"
              _placeholder={{ color: "gray.500" }}
              borderRadius={"10"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="salary">
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
          type="submit"
          marginTop={8}
          borderRadius={"10"}
          onClick={showAlert}
        >
          {"اضافة"}
        </Button>
        <Button
          mb={4}
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

export default EmployerForm;
