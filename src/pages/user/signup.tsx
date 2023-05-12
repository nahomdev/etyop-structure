import { useState } from "react";
import { Input } from "../../components/Input/form_input";
import { CustomButton } from "../../components/button/custom_button";
import { CustomErrorViewer } from "../../components/ErrorViewer/show_error";
import Link from "next/link";
import Head from "next/head";
import Layout from '../../layouts'
import { useRegisterMutation } from './../../generated/graphql'
import { useAuth } from '../../contexts/auth'

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
                            Registration Successful
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
                        Thank you for registering! You can now log in to your account.
                        <Link href="/user/signin" className="inline px-2 text-blue-500 text-sm hover:text-blue-800 cursor-pointer transition-colors duration-300">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
}

export default function Signin() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const { signupAction, errors, success } = useAuth();

    // const { login, error }: any = useAuth();

    const handleSubmit = async (e: any) => {

        signupAction(formData.username, formData.email, formData.password);

    };



    return (
        <Layout>
            <Head>
                <title>Signup</title>
                <meta
                    name="description"
                    content="A simple and user-friendly system that provides unlimited access to a range of AI services in Africa."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen mt-10 p-6 bg-blue-600 flex flex-col items-center min-w-screen justify-center">
                <div className="absolute w-52 h-52 rounded-xl bg-blue-300 -top-10 -left-16 transform rotate-45 animate-pulse"></div>
                <div className="absolute w-60 h-60 rounded-xl bg-blue-300 bottom-10 right-16 transform rotate-12 z-20 animate-pulse"></div>
                <div className="absolute w-52 h-52 rounded-full bg-blue-400 top-16 right-18 transform rotate-45 animate-pulse"></div>
                <div className="absolute w-60 h-60 rounded-xl bg-blue-300 bottom-10 right-16 transform rotate-12 animate-pulse"></div>

                <div className="w-full max-w-md py-12 px-6 bg-white rounded-2xl shadow-xl z-10">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-6 cursor-pointer">
                            Sign In to your Account
                        </h1>
                    </div>
                    <div className="space-y-4">
                        {
                            errors && errors.message ? <div className="bg-red-200 border-t-4 border-red-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
                                <div className="flex">
                                    <div className="py-1 px-4"><svg className="fill-current h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM11 14H9V9H11V14ZM11 8H9V6H11V8Z" /></svg></div>
                                    <div>
                                        <p className="font-bold">Signup Error</p>
                                        <p className="text-sm">{errors.message}</p>
                                    </div>
                                </div>
                            </div> : ''
                        }

                        <Input
                            type={"text"}
                            name={"name"}
                            value={formData.username}
                            isError={errors.username == ""}
                            placeholder={"Username"}
                            onchange={(event) =>
                                setFormData({ ...formData, username: event })
                            }
                        />

                        <CustomErrorViewer
                            isShow={errors.username != ""}
                            text={errors.username}
                        />

                        <Input
                            type={"text"}
                            name={"name"}
                            value={formData.email}
                            isError={errors.email == ""}
                            placeholder={"Email"}
                            onchange={(event) =>
                                setFormData({ ...formData, email: event })
                            }
                        />
                        <CustomErrorViewer
                            isShow={errors.email != ""}
                            text={errors.email}
                        />



                        <Input
                            type={"password"}
                            name={"password"}
                            value={formData.password}
                            isError={errors.password == ""}
                            placeholder={"Password"}
                            onchange={(event) =>
                                setFormData({ ...formData, password: event })
                            }
                        />

                        <CustomErrorViewer
                            isShow={errors.password != ""}
                            text={errors.password}
                        />

                        {/* <CustomErrorViewer isShow={error != null} text={error?.message || error} /> */}

                        <CustomButton onchange={handleSubmit} text={"Sign In"} />
                    </div>
                    <div className="text-center mt-6">
                        <div className="py-2">
                            <Link href="/user/signin" className="mt-4 text-sm">
                                already have an account? <span className="text-blue-600 cursor-pointer">Sign In</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            {
                success ? <Confirmation /> : ""
            }

        </Layout>
    )
}
