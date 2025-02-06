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
import customer from "../../entities/customer";
import useUpdateCustomer from "../../hooks/useUpdateCustomer";
import useCreateCustomer from "../../hooks/useCreateCustomer";
import * as yup from "yup";
import { useEffect } from "react";
import useErrorStore from "../../stores/errorStore";

interface Props {
  onClose?: () => void;
  customer?: customer;
}

const CustomerForm = ({ onClose = () => {}, customer }: Props) => {
  const { message } = useErrorStore();

  const form = customer
    ? useUpdateCustomer(customer.id || -1)
    : useCreateCustomer();

  const showAlert = (type: "suc" | "err") => {
    swal({
      title: customer ? "تعديل" : "اضافة" + form.data?.data.firstname,

      text:
        type == "suc"
          ? " تمت " +
            (customer ? "تعديل" : "اضافة") +
            " الزبون بنجاح! قم باعادة تحميل الصفحة"
          : (message?.firstname && message?.firstname[0]) ||
            (message?.lastname && message?.lastname[0]) ||
            (message?.phonenumber && message?.phonenumber[0]) ||
            (message?.address && message?.address[0]) ||
            "حدث خطأ اثناء" +
              (customer ? "تعديل" : "اضافة") +
              " الزبون الرجاء المحاولة لاحقا",

      icon: type == "suc" ? "success" : "error",
    });
  };

  const onSubmit = (values: customer) => {
    values.phonenumber == customer?.phonenumber
      ? form.mutate({
          firstname: values.firstname,
          lastname: values.lastname,
          address: values.address,
        })
      : form.mutate({
          firstname: values.firstname,
          lastname: values.lastname,
          address: values.address,
          phonenumber: values.phonenumber,
        });
  };

  const Validation = yup.object().shape({
    firstname: yup.string().required("الاسم الاول مطلوب"),
    lastname: yup.string().required("الاسم الثاني مطلوب"),
    phonenumber: yup
      .string()
      .length(10, "الرقم يجب أن يتكون من 10 أرقام")
      .matches(/^\d{10}$/, "الرقم يجب ان يحتوي على ارقام فقط")
      .required("الرقم مطلوب"),
    address: yup.string().required("العنوان مطلوب"),
  });

  useEffect(() => {
    if (form.isSuccess) {
      onClose();
      showAlert("suc");
    }
    if (form.error) {
      showAlert("err");
    }
  }, [form.isSuccess, form.error]);

  return (
    <Formik
      initialValues={{
        firstname: customer ? customer.firstname : "",
        lastname: customer ? customer.lastname : "",
        phonenumber: customer ? customer.phonenumber : "",
        address: customer ? customer.address : "",
      }}
      validationSchema={Validation}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ submitForm }) => (
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
          <FormControl mb={4} id="phonenumber">
            <FormLabel fontFamily={"cursive"}>الرقم</FormLabel>
            <InputGroup bgColor={"#F8F8F8"} borderRadius={"10"}>
              <Field
                name="phonenumber"
                as={Input}
                type="text"
                placeholder="+963900000000"
                _placeholder={{ color: "gray.600" }}
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
            isDisabled={form.isPending}
            boxShadow={"md"}
            marginTop={8}
            borderRadius={"10"}
            onClick={submitForm}
          >
            {form.isPending
              ? customer
                ? "يتم التعديل..."
                : "يتم الإضافة..."
              : customer
              ? "تعديل"
              : " إضافة"}
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

export default CustomerForm;
