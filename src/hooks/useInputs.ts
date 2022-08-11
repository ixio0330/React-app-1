import { ChangeEvent, useCallback, useState } from "react";

export default function useInputs<T>(initalFrom: T) {
  const [form, setForm] = useState(initalFrom);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f: T) => ({
      ...f,
      [name]: value,
    }));
  }, []);
  const reset = useCallback(() => setForm(initalFrom), [initalFrom]);
  return {
    form, onChange, reset
  };
}