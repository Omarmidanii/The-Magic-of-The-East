import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Text
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const CustomerForm = () => {
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
        <FormControl id="name">
          <FormLabel fontFamily={"cursive"}>الاسم</FormLabel>
          <InputGroup>
            <Field
              name="name"
              as={Input}
              type="text"
              placeholder="الاسم بالكامل"
              _placeholder={{ color: "gray.700" }}
              borderRadius={"20"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="name">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl id="phone">
            <FormLabel fontFamily={"cursive"}>الرقم</FormLabel>
            <InputGroup>
              <Field
                name="phone"
                as={Input}
                type="text"
                placeholder="+963900000000"
                _placeholder={{ color: "gray.700" }}
                borderRadius={'20'}
                width={'full'}
                pr={'30px'}
              />
            </InputGroup>
            <ErrorMessage name="phone">
              {(msg) => <Text color="red.500">{msg}</Text>}
            </ErrorMessage>
          </FormControl>
          <FormControl id="address">
            <FormLabel fontFamily={"cursive"}>المنطقة</FormLabel>
            <InputGroup>
              <Field
                name="address"
                as={Input}
                type="text"
                placeholder="المنطقة"
                _placeholder={{ color: "gray.700" }}
                borderRadius={'20'}
                width={'full'}
                pr={'30px'}
              />
            </InputGroup>
            <ErrorMessage name="address">
              {(msg) => <Text color="red.500">{msg}</Text>}
            </ErrorMessage>
          </FormControl>
          <Button
            bgColor={'green'}
            color={'white'}
            width="full"
            type="submit"
            marginTop={5}
            borderRadius={"20"}
          >
            {"اضافة"}
          </Button>
      </Form>
    </Formik>
  );
};

export default CustomerForm;
