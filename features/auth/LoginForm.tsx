import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import TextField from "../../components/forms/TextField";
import { LogInPayload } from "./LogInPayload";
import { loginSchema } from "./loginSchema";

const DEFAULT_VALUES = {
  email: "",
};

type Props = {
  onSubmit: (values: LogInPayload) => void;
};

const LoginForm = ({ onSubmit }: Props) => {
  const { handleSubmit, control } = useForm<LogInPayload>({
    resolver: yupResolver(loginSchema),
    defaultValues: DEFAULT_VALUES,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
          <TextField
            {...fieldProps}
            label="Adresse email"
            placeholder="harry.potter@email.com"
            variant="filled"
            type="email"
            inputLeftAdornment={<AtSignIcon color="gray.500" />}
            errorMessage={error?.message}
          />
        )}
      />

      <Button mb={6} colorScheme="purple" type="submit" width={"100%"}>
        Connexion
      </Button>
    </form>
  );
};

export default LoginForm;
