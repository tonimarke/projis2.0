import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';

import { Label, Container, Error } from './styles';
import { FiAlertCircle } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

function Input({ name, label, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFosused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { registerField, fieldName, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [registerField, fieldName]);

  return (
    <div>
      <Label>
        {label && <label htmlFor={fieldName}>{label}</label>}
      </Label>
      <Container 
        isFocused={isFosused}
        isFilled={isFilled}
        isErrored={!!error}
      >

        {Icon && <Icon size={20} />}

        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle color="#C53030" size={20} />
          </Error>
        )}
      </Container>
    </div>
  );
};

export default Input;
