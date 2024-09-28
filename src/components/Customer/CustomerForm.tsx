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
        firstname: "",
        lastname: "",
        phone: "",
        address: "",
      }}
      validationSchema={null}
      onSubmit={() => {}}
    >
      <Form>
        <FormControl id="firstname">
          <FormLabel fontFamily={"cursive"}> الاسم الاول</FormLabel>
          <InputGroup>
            <Field
              name="firstname"
              as={Input}
              type="text"
              placeholder="الاسم الاول"
              _placeholder={{ color: "gray.700" }}
              borderRadius={"20"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="firstname">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl id="lastname">
          <FormLabel fontFamily={"cursive"}> الاسم الاخير</FormLabel>
          <InputGroup>
            <Field
              name="lastname"
              as={Input}
              type="text"
              placeholder="الاسم الاخير"
              _placeholder={{ color: "gray.700" }}
              borderRadius={"20"}
              width={"full"}
              pr={"30px"}
            />
          </InputGroup>
          <ErrorMessage name="lastname">
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
