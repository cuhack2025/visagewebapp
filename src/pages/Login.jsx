import { LoginForm } from "@/components/ui/login-form"

function Login() {
    return (
        <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
    )
}


export default Login;