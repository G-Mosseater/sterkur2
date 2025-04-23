import { Message } from "@/components/form-message";

import { LoginForm } from "@/components/login-form";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <>
          <ThemeSwitcher/>

      <LoginForm />
    </>
  );
}
