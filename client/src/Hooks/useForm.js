import { useState } from "react";

export function useForm() {
    const [form, setForm] = useState({})
    const handleChange = (event) => {
        setForm({[event.target.name]: event.target.value})
    }
    return [form, handleChange];
}