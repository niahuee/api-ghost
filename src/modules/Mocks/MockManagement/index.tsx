import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { HttpMethod, Mock } from "../../../types/mock";
import classes from "./style.module.scss";
import FormInput from "../../../components/Form/FormInput";
import ToggleButtonGroup from "../../../components/Form/FormToggleGroup";
import { Box } from "@radix-ui/themes";
import FormSelect from "../../../components/Form/FormSelect";
import CodeEditor from "../../../components/CodeEditor";
import { Tabs } from "../../../components/Tabs";
import { nanoid } from "nanoid";
import { Button } from "../../../components/Button";
import dictionary from "../../../dictionary";

const schema = yup.object({
  name: yup.string().required(dictionary.validations.name),
  url: yup.string().required(dictionary.validations.url),
  http: yup.object({
    method: yup
      .mixed<HttpMethod>()
      .oneOf(Object.values(HttpMethod))
      .required(dictionary.validations.method),
    code: yup
      .number()
      .typeError(dictionary.validations.code.format)
      .required(dictionary.validations.code.required),
  }),
  delay: yup
    .number()
    .min(0, dictionary.validations.delay.format)
    .required(dictionary.validations.delay.required),
  isActive: yup.boolean().default(true).required(dictionary.validations.status),
  response: yup.string().required(dictionary.validations.response),
});

interface MockManagementProps {
  mock?: Mock;
  createMock: (mock: Mock) => void;
  updateMock: (id: string, mock: Mock) => void;
}

const MockManagement = ({
  mock,
  createMock,
  updateMock,
}: MockManagementProps) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    setError,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<Mock>({
    resolver: yupResolver(schema),
    defaultValues: mock || {
      id: "",
      name: "",
      url: "",
      http: {
        method: HttpMethod.GET,
        code: 200,
      },
      delay: 500,
      isActive: true,
      response: "{\n\n}",
    },
  });

  useEffect(() => {
    if (mock) {
      reset(mock);
    }
  }, [mock, reset]);

  const onSubmit = (mock: Mock) => {
    if (mock.id) {
      return updateMock(mock.id, mock);
    }
    setValue("id", nanoid());
    return createMock(mock);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Controller
        name="isActive"
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup
            value={field.value}
            setValue={setValue}
            field="isActive"
            label={dictionary.status}
            options={[
              { label: dictionary.active, value: true },
              { label: dictionary.disabled, value: false },
            ]}
          />
        )}
      />
      <FormInput
        label={dictionary.name}
        register={register("name")}
        error={errors.name?.message}
        placeholder={dictionary.enterName}
      />
      <FormInput
        label="Url"
        register={register("url")}
        error={errors.url?.message}
        placeholder={dictionary.enterURL}
      />
      <Box className={classes.form__group}>
        <FormInput
          label={dictionary.statusCode}
          type="number"
          register={register("http.code", { valueAsNumber: true })}
          error={errors.http?.code?.message}
        />
        <FormInput
          label={dictionary.delay}
          type="number"
          register={register("delay", { valueAsNumber: true })}
          error={errors.delay?.message}
        />
      </Box>
      <Controller
        name="http.method"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={dictionary.method}
            value={field.value}
            onChange={field.onChange}
            options={Object.values(HttpMethod).map((method) => ({
              label: method,
              value: method,
            }))}
            error={errors.http?.method?.message}
          />
        )}
      />
      <Tabs
        defaultValue="body"
        tabs={[
          {
            label: "Response Body",
            value: "body",
            content: (
              <Controller
                name="response"
                control={control}
                render={({ field }) => (
                  <CodeEditor
                    value={field.value}
                    onChange={(value, isValid) => {
                      setValue("response", value);
                      if (!isValid) {
                        setError("response", {
                          type: "manual",
                          message: dictionary.validations.invalidJson,
                        });
                      } else {
                        clearErrors("response");
                      }
                    }}
                    error={errors.response?.message}
                  />
                )}
              />
            ),
          },
        ]}
      />
      <Button
        title={mock?.id ? dictionary.editMock : dictionary.createMock}
        type="submit"
      />
    </form>
  );
};

export default MockManagement;
