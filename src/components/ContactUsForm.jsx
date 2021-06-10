import React from "react";
import {
  CardContent,
  FormGroup,
  Typography,
  TextField,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import { ErrorMessage, Form, Formik, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const useStyles = makeStyles((theme) => ({
  regPaper: {
    width: "400px",
    align: "center",
    display: "block",
    align: "center",
    padding: theme.spacing(2, 2),
    margin: theme.spacing(8, 2),
  },
}));

export default function ContactUsForm() {
  const classes = useStyles();

  function SendEmail(object) {
    emailjs
      .send(
        "service_2q39p49",
        "template_n9eqi6m",
        object,
        "user_gVGFWfyWF2HXHwotgJgY1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div align="center">
      <div className={classes.regPaper}>
        <CardContent>
          <Typography variant="h4">Contact Us</Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required()
                .min(6, "Name needs to be atleast 6 character")
                .max(50, "Name cannot be more than 50 characters"),
              email: Yup.string().email().required(),
              message: Yup.string()
                .required()
                .min(6, "Name needs to be atleast 6 character")
                .max(50, "Name cannot be more than 100 characters"),
            })}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                SendEmail(values);
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({ values, errors, isSubmitting, isValidating }) => (
              <Form>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      required
                      name="name"
                      type="string"
                      as={TextField}
                      label="Name"
                    />
                    <ErrorMessage name="name" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      required
                      id="email"
                      name="email"
                      label="Email"
                      as={TextField}
                      type="email"
                    />
                    <ErrorMessage name="email" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <FormGroup>
                    <Field
                      required
                      name="message"
                      type="string"
                      as={TextField}
                      label="Message"
                      multiline={true}
                    />
                    <ErrorMessage name="message" />
                  </FormGroup>
                </Box>
                <Box marginBottom={2}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting || isValidating}
                  >
                    Submit
                  </Button>
                </Box>
                <Box marginBottom={2}>
                  <Button
                    variant="contained"
                    type="reset"
                    disabled={isSubmitting || isValidating}
                  >
                    Reset
                  </Button>
                </Box>
                {/*<pre>{JSON.stringify(errors, null, 4)}</pre>
                  <pre>{JSON.stringify(values, null, 4)}</pre>*/}
              </Form>
            )}
          </Formik>
        </CardContent>
      </div>
    </div>
  );
}
