"use client";

import * as React from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface UseFormOptions {
  onSubmit?: (data: FormData) => Promise<void>;
}

export function useForm({ onSubmit }: UseFormOptions = {}) {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 2000);
    } catch {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus(null);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    reset,
    isSubmitting,
    status,
  };
}
