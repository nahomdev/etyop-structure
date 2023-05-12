import { useState } from "react";
import { Input } from "../../components/Input/form_input";
import { CustomButton } from "../../components/button/custom_button";
import { CustomErrorViewer } from "../../components/ErrorViewer/show_error";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../layouts"
import { useAuth } from '../../contexts/auth'

export default function Signin() {
    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    });
    const { loginAction, errors, success } = useAuth();


    const handleSubmit = async (e: any) => {

        loginAction(formData.identifier, formData.password);
    };



    return (
        <Layout>
            <Head>
                <title>Signin</title>
                <meta
                    name="description"
                    content="A simple and user-friendly system that provides unlimited access to a range of AI services in Africa."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* component */}
            <div className="min-h-screen mt-10 bg-blue-600 flex flex-col items-center justify-center">
                <div className="absolute w-52 h-52 rounded-xl bg-blue-300 -top-10 -left-16  transform rotate-45 animate-pulse"></div>
                <div className="absolute w-60 h-60 rounded-xl bg-blue-300 bottom-10 right-16 transform rotate-12 animate-pulse"></div>
                <div className="absolute w-52 h-52 rounded-full bg-blue-400 top-16 right-18 z-0 transform rotate-45 animate-pulse"></div>
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
                                        <p className="font-bold">Signin Error</p>
                                        <p className="text-sm">{errors.message}</p>
                                    </div>
                                </div>
                            </div> : ''
                        }

                        <Input
                            type={"text"}
                            name={"name"}
                            value={formData.identifier}
                            isError={errors.identifier == ""}
                            placeholder={"Email"}
                            onchange={(event) =>
                                setFormData({ ...formData, identifier: event })
                            }
                        />
                        <CustomErrorViewer
                            isShow={errors.identifier != ""}
                            text={errors.identifier}
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
                            <Link href="/user/signup" className="mt-4 text-sm">
                                Don't have an account? <span className="text-blue-600 cursor-pointer">Sign Up Now</span>
                            </Link>
                            <div className="text-center">
                                <Link href="/user/forgot-password" className="mt-4 text-sm">
                                    <span className="text-blue-600 cursor-pointer">Forgot Password?</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
