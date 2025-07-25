
import { useState } from 'react';
import handleLoginProcess from './handler/handleLoginProcess';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import Logo from '../../components/Logo';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormErrorMessage from '../../components/FormErrorMessage';
const Login = ({ setShowSignUp }) => {
    const [loading, setLoading] = useState(false);
    const { setUser } = useUser();
    const navigate = useNavigate();


    const loginSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(20).required(),
        isDoctor: yup.boolean(),

    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            isDoctor: false,
            email: '',
            password: '',
        }
    });




    const submitLogin = async (data) => {

        const role = await handleLoginProcess(data.email, data.password, data.isDoctor, setUser,setLoading);
        if (role == "doctor") {
            return navigate('/doctorappointments', { replace: true });
        } else if (role == "admin") {
            return navigate('/statistics', { replace: true });
        } else if (role == "user") {
            return navigate('/', { replace: true });
        }
    };

    return (
        <Card className="relative w-full rounded-l-[6px] rounded-r-[6px] md:rounded-r-[0px]  justify-center min-h-[600px]">
            <div className='absolute top-2 right-2'><Logo /></div>

            <CardHeader className="max-[776px]:px-2">
                <CardTitle>Login to your account</CardTitle>
            </CardHeader>
            <CardContent className="max-[776px]:px-2">
                <form className="space-y-6" onSubmit={handleSubmit(submitLogin)}>
                    {/* Email Field */}
                    <div className="space-y-2">

                        <Label htmlFor="emailField">Email</Label>
                        <Controller name="email" control={control}

                            render={({ field }) => (
                                <Input id="emailField" type="email" className='py-6' {...field} placeholder="helloworld@gmail.com" />
                            )}


                        />


                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="passField" >Passowrd</Label>
                        {
                            errors.password &&
                            <FormErrorMessage message={errors.password.message} />
                        }
                        <Controller name="password" control={control}

                            render={({ field }) => (
                                <Input id="passField" type="password" className='py-6' placeholder="••••••••" {...field} />
                            )}
                        />


                    </div>

                    {/* User Type Toggle */}
                    <div className="flex items-center gap-3">

                        <Label htmlFor="isDoctor">I am doctor</Label>
                        <Controller
                            name="isDoctor"
                            control={control}
                            render={({ field }) => (
                                <Checkbox id="isDoctor" checked={field.value} onCheckedChange={field.onChange} className="border-2 size-5" />
                            )}


                        />

                    </div>

                    {/* Submit Button */}
                    <Button type="submit" disabled={loading} className="w-full py-6 bg-[#2c4ca2] hover:bg-[#3457b7] cursor-pointer">
                        {
                            loading ?
                            '••••'
                            :
                                'Login'
                        }

                    </Button>
                </form>
            </CardContent>
            <CardFooter>
                <div className='flex w-full gap-3  justify-center items-center'>
                    <p>Dont have account? </p>
                    <Button variant="ghost" className="cursor-pointer" onClick={(e) => {
                        e.preventDefault();
                        setShowSignUp(true);
                    }}>
                        register
                    </Button>
                </div>
            </CardFooter>
        </Card >
    );
};

export default Login;





