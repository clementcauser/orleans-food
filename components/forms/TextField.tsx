/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ComponentProps, ReactNode, useId } from "react";

type Props = {
  label: string;
  errorMessage?: string;
  helperMessage?: string;
  inputLeftAdornment?: ReactNode;
} & ComponentProps<typeof Input>;

const TextField = ({
  label,
  helperMessage,
  errorMessage,
  inputLeftAdornment,
  ...inputProps
}: Props) => {
  const fieldId = useId();

  return (
    <FormControl isInvalid={!!errorMessage} mb={6} minWidth="md">
      <FormLabel htmlFor={fieldId}>{label}</FormLabel>
      <InputGroup>
        {inputLeftAdornment && (
          <InputLeftElement
            pointerEvents="none"
            children={inputLeftAdornment}
          />
        )}
        <Input id={fieldId} {...inputProps} />
      </InputGroup>
      {!errorMessage ? (
        helperMessage && <FormHelperText>{helperMessage}</FormHelperText>
      ) : (
        <FormErrorMessage as="span" maxWidth="md">
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default TextField;
