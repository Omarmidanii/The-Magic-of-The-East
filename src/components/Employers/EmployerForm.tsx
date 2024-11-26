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
import employer from "../../entities/employer";
import useCreateEmployee from "../../hooks/useCreateEmployee";
import * as yup from "yup";
import { useEffect } from "react";
import useErrorStore from "../../stores/errorStore";

interface Props {
  onClose: () => void;
}

const EmployerForm = ({ onClose }: Props) => {
  const create = useCreateEmployee();
  const { message } = useErrorStore();

  const onSubmit = (values: employer) => {
    const data = new FormData();
    if (values.firstname) data.append("firstname", values.firstname);
    if (values.lastname) data.append("lastname", values.lastname);
    if (values.phonenumber) data.append("phonenumber", values.phonenumber);
    if (values.address) data.append("address", values.address);
    if (values.position) data.append("position", values.position);
    if (values.salary) data.append("salary", values.salary);
    create.mutate(data);
  };

  const Validation = yup.object().shape({
    firstname: yup.string().required("الاسم الاول مطلوب"),
    lastname: yup.string().required("الاسم الثاني مطلوب"),
    phonenumber: yup
      .string()
      .length(10, "الرقم يجب ان يتكون من 10 ارقام")
      .required("الرقم مطلوب"),
    address: yup.string().required("العنوان مطلوب"),
    position: yup.string().required("الوظيفة مطلوبة"),
    salary: yup.string().required("الراتب مطلوب"),
  });

  const showAlert = (type: "suc" | "err") => {
    swal({
      title: "اضافة" + create.data?.data.firstname,
      text:
        type == "suc"
          ? " تمت اضافة  الموظف بنجاح! قم باعادة تحميل الصفحة"
          : (message?.firstname && message?.firstname[0]) ||
            (message?.lastname && message?.lastname[0]) ||
            (message?.phonenumber && message?.phonenumber[0]) ||
            (message?.address && message?.address[0]) ||
            (message?.position && message?.position[0]) ||
            (message?.salary && message?.salary[0]) ||
            "حدث خطأ اثناء اضافة الموظف الرجاء المحاولة لاحقا",
      icon: type == "suc" ? "success" : "error",
    });
  };

  useEffect(() => {
    if (create.isSuccess) {
      onClose();
      showAlert("suc");
    }
    if (create.error) {
      showAlert("err");
    }
  }, [create.isSuccess, create.error]);

  return (
    <Formik
      initialValues={{
        firstname: "",
        secondname: "",
        phonenumber: "",
        address: "",
        position: "",
        salary: "",
      }}
      validationSchema={Validation}
      onSubmit={onSubmit}
    >
      {({ submitForm }) => (
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
          <FormControl mb={4} id="lastname">
            <FormLabel fontFamily={"cursive"}>الاسم الثاني</FormLabel>
            <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
              <Field
                fontFamily={"cursive"}
                name="lastname"
                as={Input}
                type="text"
                placeholder="الاسم الثاني"
                _placeholder={{ color: "gray.500" }}
                borderRadius={"10"}
                width={"full"}
                pr={"30px"}
              />
            </InputGroup>
            <ErrorMessage name="lastname">
              {(msg) => <Text color="red.500">{msg}</Text>}
            </ErrorMessage>
          </FormControl>
          <FormControl mb={4} id="phonenumber">
            <FormLabel fontFamily={"cursive"}>الرقم</FormLabel>
            <InputGroup bgColor={"#F5F5F5"} borderRadius={"10"}>
              <Field
                name="phonenumber"
                as={Input}
                type="text"
                placeholder="09XX XXX XXX"
                _placeholder={{ color: "gray.500" }}
                borderRadius={"10"}
                width={"full"}
                pr={"30px"}
              />
            </InputGroup>
            <ErrorMessage name="phonenumber">
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
            marginTop={8}
            borderRadius={"10"}
            onClick={submitForm}
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
            marginTop={8}
            borderRadius={"10"}
            onClick={() => onClose()}
          >
            {"الغاء"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EmployerForm;
