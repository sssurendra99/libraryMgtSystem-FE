import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthLayout from "../layouts/public-layouts/AuthLayout";
import SideImg from "../assets/images/SignIn-image.jpg";
import "../components/styles/auth-form.css"
import { signinUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const schema = z.object({
    username: z.string(),
    password: z.string().min(4),
});

interface SignIn {
    username: string,
    password: string,
};

type Schema = z.infer<typeof schema>;

function SignIn() {

    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm<Schema>({
        resolver: zodResolver(schema),
    }) as UseFormReturn<Schema>;

    // Define onSubmit handler
    const onSubmit: SubmitHandler<Schema> = async (data) => {
        try {
            const response = await signinUser(data);

            if(localStorage.getItem('token')!== null){
                console.log('User registered successfully:', response);
                navigate("/dashboard")
            }
            reset(); // Reset the form on successful submission
        } catch (error) {
            console.log('Error during registration:', error);
        }
    };


    return(
        <AuthLayout title="Sign In" img={SideImg}>

            <p>Welcome back! Please enter your credentials to continue</p>

            <div className="container-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-form-input">
                        <input type="text" {...register("username", {required: true})} 
                        inputMode="email"
                        placeholder="username" />
                    </div>
                    <div className="container-form-input">
                        <input type="password" {...register("password", {required: true})} placeholder="#@1887**" />
                    </div>
                    <div className="container-form-submit">
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}

export default SignIn;