import * as Yup from "yup";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PasswordField from "../components/formControl/PasswordField";
import TextField from "../components/formControl/TextField";
import Spinner from "../components/Spinner";
import { FaSignInAlt } from "react-icons/fa";
import { db } from "../firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <section className="text-center">
        <h1 className="text-3xl font-bold mt-12">
          <FaSignInAlt className="inline" /> Login
        </h1>
        <p className="font-semibold pt-4 text-2xl text-[#6A6F72]">
          Please log in to use our service
        </p>
      </section>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email format")
            .required("Required!!!"),
          password: Yup.string()
            // .matches(
            //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            //   "Your password is not right format"
            // )
            // .min(8, "Minimum 8 characters")
            .required("Required!!!"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const { email, password } = values;
          try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            if (userCredential.user) {
              navigate("/");
            }
          } catch (e) {
            toast.error("Invalid Credentials !!!");
          }
          setSubmitting(false);
        }}
      >
        <Form className="form-control">
          <TextField name="email" placeholder="Please enter your email" />
          <PasswordField
            name="password"
            placeholder="Please enter your password"
          />
          <button className="btn btn-primary hover:btn-secondary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
