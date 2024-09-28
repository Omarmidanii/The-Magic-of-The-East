import { Button, FormControl, FormLabel, Input, InputGroup, Text } from "@chakra-ui/react"
import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "react-router-dom"

const EmployerForm = () => {
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
      <FormControl id="firstname">
        <FormLabel fontFamily={"cursive"}>الاسم الاول</FormLabel>
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
      <FormControl id="secondname">
        <FormLabel fontFamily={"cursive"}>الاسم الثاني</FormLabel>
        <InputGroup>
          <Field
            name="secondname"
            as={Input}
            type="text"
            placeholder="الاسم الثاني"
            _placeholder={{ color: "gray.700" }}
            borderRadius={"20"}
            width={"full"}
            pr={"30px"}
          />
        </InputGroup>
        <ErrorMessage name="secondname">
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
          <FormLabel fontFamily={"cursive"}>مكان السكن</FormLabel>
          <InputGroup>
            <Field
              name="address"
              as={Input}
              type="text"
              placeholder="مكان السكن"
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
        <FormControl id="position">
          <FormLabel fontFamily={"cursive"}>الوظيفة</FormLabel>
          <InputGroup>
            <Field
              name="position"
              as={Input}
              type="text"
              placeholder="وظيفة العامل في الصالة"
              _placeholder={{ color: "gray.700" }}
              borderRadius={'20'}
              width={'full'}
              pr={'30px'}
            />
          </InputGroup>
          <ErrorMessage name="position">
            {(msg) => <Text color="red.500">{msg}</Text>}
          </ErrorMessage>
        </FormControl>
        <FormControl id="salary">
          <FormLabel fontFamily={"cursive"}>الراتب</FormLabel>
          <InputGroup>
            <Field
              name="salary"
              as={Input}
              type="text"
              placeholder="الراتب"
              _placeholder={{ color: "gray.700" }}
              borderRadius={'20'}
              width={'full'}
              pr={'30px'}
            />
          </InputGroup>
          <ErrorMessage name="salary">
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
  )
}

export default EmployerForm