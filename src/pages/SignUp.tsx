import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthLayout from "../layouts/public-layouts/AuthLayout";
import SideImg from "../assets/images/signup-image.jpg";
import "../components/styles/auth-form.css";
import { registerUser } from "../api/auth";

enum MemberType {
    LibraryMember = "LibraryMember",
    ManagementStaff = "ManagementStaff",
    MinorStaff = "MinorStaff",
    Admin = "Admin"
};

const schema = z.object({
    username: z.string(),
    name: z.string(),
    password: z.string().min(4),
    memberType: z.nativeEnum(MemberType), // Validate as a number
});


const memberTypeMapper = (type : MemberType) => {
    switch (type) {
        case "LibraryMember":
            return 0;
        case "ManagementStaff":
            return 1;
        case "MinorStaff":
            return 2;
        case "Admin":
            return 3;
        default:
            break;
    }
}

type Schema = z.infer<typeof schema>;

function SignUp() {

    const { register, handleSubmit, reset } = useForm<Schema>({
        resolver: zodResolver(schema),
    }) as UseFormReturn<Schema>;

    // Define onSubmit handler
    const onSubmit: SubmitHandler<Schema> = async (data) => {

        const memberValue = memberTypeMapper(data.memberType);

        const userData = {
            ...data,
            memberType: memberValue,
        };
        
        try {
            const response = await registerUser(userData);
            console.log('User registered successfully:', response);
            reset(); // Reset the form on successful submission
        } catch (error) {
            console.log('Error during registration:', error);
        }
    };


    return(
        <AuthLayout title="Sign up" img={SideImg}>

            <p>Join us! Create your account to get started.</p>

            <div className="container-signin">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-form-input">
                        <input type="text" {...register("username", {required: true})} placeholder="username" />
                    </div>
                    <div className="container-form-input">
                        <input type="text" {...register("name", {required: true})} placeholder="John Doe" />
                    </div>
                    <div className="container-form-input">
                        <input type="password" {...register("password", {required: true})} placeholder="#@1887**" />
                    </div>
                    <div className="container-form-select">
                        <select {...register("memberType", {required: true})}>
                            <option value="">Select...</option>
                            <option value={MemberType.LibraryMember}>Library Member</option>
                            <option value={MemberType.ManagementStaff}>Management Staff</option>
                            <option value={MemberType.MinorStaff}>Minor Staff</option>
                            <option value={MemberType.Admin}>Admin</option>
                            
                        </select>
                    </div>
                    <div className="container-form-submit">
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}

export default SignUp;