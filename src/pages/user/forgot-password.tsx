import { useState } from "react";
import { ActivityIndicator } from "../../components/ActivityIndicator/activity_indicator";
import { CustomErrorViewer } from "../../components/ErrorViewer/show_error";
import { Input } from "../../components/Input/form_input";
import { CustomButton } from "../../components/button/custom_button";
import Layout from '../../layouts'
import { useForgotPasswordMutation } from "../../generated/graphql"
import { useRouter } from 'next/router'
import Link from "next/link";

function Confirmation() {
    return <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-[#2563EB] px-4 py-3">
                    <div className="flex items-center justify-between">
                        <svg className="fill-current h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM8 14L3 9L4.41 7.58L8 11.17L15.59 3.58L17 5L8 14Z" /></svg>
                        <h3 className="text-lg leading-6 font-medium text-white" id="modal-headline">
                            Forgot your password?
                        </h3>
                        <div className="ml-2 flex-shrink-0">
                            <button type="button" className="bg-[#2563EB] hover:bg-[#2563EB] rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 8.586L3.707 2.293 2.293 3.707 8.586 10l-6.293 6.293 1.414 1.414L10 11.414l6.293 6.293 1.414-1.414L11.414 10l6.293-6.293-1.414-1.414L10 8.586z" clip-rule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <p className="text-sm leading-5">


                        check your email. don't forget your password next time

                        <Link href="/user/signin" className="inline px-2 text-blue-500 text-sm hover:text-blue-800 cursor-pointer transition-colors duration-300">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
}



const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
    });

    const [isLoading, setIsLoading] = useState(false)
    const [forgot] = useForgotPasswordMutation();
    const router = useRouter();
    const [errors, setErrors] = useState<any>(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: any) => {
        console.log(e.target)
        debugger;
        setFormData((prevFormData: any) => ({
            ...prevFormData,
            email: e,
        }));



    };

    const handleSubmit = (e: any) => {
        forgot({ variables: { email: formData.email } }).then(res => {
            console.log("response ", res);
            const { ok } = res.data.forgotPassword;
            if (ok) {
                setSuccess(true)
            }
        }).catch(err => {
            setErrors(
                err.graphQLErrors[0]
            );

            console.log(errors)
        });
    };
    return (
        <Layout >

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h5 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center my-4">
                                Trouble logging in?
                            </h5>
                            <span className="text-center text-gray-500 my-4">
                                Enter your email and we'll send you a link to get back into your account.
                            </span>
                            <div className="space-y-4 md:space-y-6">

                                <div>
                                    <CustomErrorViewer
                                        isShow={errors}
                                        text={`Invalid email `}
                                    />
                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        value={formData.email}
                                        isError={errors}
                                        placeholder={"name@company.com"}
                                        onchange={handleChange}
                                    />

                                </div>

                                <div className="flex justify-center ">
                                    {isLoading ? (
                                        <ActivityIndicator />
                                    ) : (
                                        <CustomButton onchange={handleSubmit} text="Reset" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          {  success ? <Confirmation /> : ""}
        </Layout >

    );
}


export default ForgotPassword;