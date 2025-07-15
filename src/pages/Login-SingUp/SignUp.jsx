import { useState } from 'react';
import handleSignUpProcess from './handler/handleSignUpProcess';
import { Input } from "@/components/ui/input";
import Logo from '../../components/Logo';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import FormErrorMessage from '../../components/FormErrorMessage';

const SingUp = ({ setShowSignUp }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState(0);
    const registerSchema = yup.object().shape({
        fullName: yup.string().trim().min(3).max(30).required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(20).required(),
        phoneNumber: yup.string().required("phone number is required"),
        age: yup.number().integer().min(18,"minimum age is 18").max(150,"maximum age is 150").required(),
    });
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            phoneNumber: '',
            age: 18,
        }
    });


    const submitSignUp = (data) => {   
        handleSignUpProcess(data.fullName, data.email, data.password, data.phoneNumber, data.age);
    }
    return (
        <Card className="relative  w-full rounded-l-[6px] md:rounded-r-[0px] rounded-r-[6px] justify-center min-h-[600px]">
            <div className='absolute top-2 right-2'><Logo /></div>
            <CardHeader className="max-[776px]:px-2">

                <CardTitle>Create New Account</CardTitle>

            </CardHeader>
            <CardContent className="max-[776px]:px-2">


                <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit(submitSignUp)}>
                    {/* Full Name Field */}
                    <div className="space-y-2">
                        <Label htmlFor="fullNameField">Full Name</Label>
                        {
                            errors.fullName &&
                            <FormErrorMessage message={errors.fullName.message} />
                        }
                        <Controller
                            name='fullName'
                            control={control}
                            render={({ field }) => (
                                <Input id="fullNameField"  type="text" {...field} className={`py-6 ${errors.fullName?'border-red-500':''}    `} placeholder="John Doe" />
                            )}
                        />

                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="emailField">Email</Label>
                        {
                            errors.email &&
                            <FormErrorMessage message={errors.email.message} />
                        }
                        <Controller
                            name='email'
                            control={control}
                            render={({ field }) => (
                                <Input id="emailField" type="email" {...field} className={`py-6 ${errors.email?'border-red-500':''}`} placeholder="johndoe@gmail.com" />

                            )}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2 '>
                        <div className='space-y-2'>
                            <Label htmlFor="phoneNumber">Phone Number</Label>

                            <Controller
                                name='phoneNumber'
                                control={control}
                                render={({ field }) => (
                                    <PhoneInput
                                        {...field}
                                        inputStyle={{ width: '100%', borderColor:`${errors.phoneNumber?'red':'gray'}`,paddingTop: '24px', paddingBottom: '24px' }}
                                        country={'sy'}

                                    />
                                )}
                            />
                            {
                                errors.phoneNumber &&
                                <FormErrorMessage message={errors.phoneNumber.message} />
                            }

                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="age">Age</Label>

                            <Controller
                                name='age'
                                control={control}
                                render={({ field }) => (
                                    <Input id="age" type="number" {...field} className={`py-6 ${errors.age?'border-red-500':''}`} placeholder="your age" />

                                )}
                            />
                            {
                                errors.age &&
                                <FormErrorMessage message={errors.age.message} />
                            }
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="passField">Passowrd</Label>
                        {
                            errors.password &&
                            <FormErrorMessage message={errors.password.message} />
                        }
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <Input id="passField" type="password" {...field} className={`py-6 ${errors.email?'border-red-500':''}`} placeholder="••••••••" />
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full bg-[#2c4ca2] hover:bg-[#3457b7] py-6 cursor-pointer">Create Account</Button>

                </form>
            </CardContent>
            <CardFooter>
                <div className='flex w-full gap-3   justify-center items-center'>
                    <p>Already have an account</p>
                    <Button variant="outline " className="cursor-pointer" onClick={(e) => {
                        e.preventDefault();
                        setShowSignUp(false);
                    }}>
                        Login
                    </Button>
                </div>

            </CardFooter>
        </Card >
    );
};

export default SingUp;



