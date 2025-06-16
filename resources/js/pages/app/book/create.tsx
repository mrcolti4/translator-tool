import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { Form, FormControl, FormField, FormLabel } from "@radix-ui/react-form"
import { useState } from "react";

export default function Create() {
    const [step, setStep] = useState<string>("upload");

    const handleUploadFile = () => {
        setStep("metadata");
    }
    console.log(step);
    return <AppLayout>
        <Head title="Create book" />
        <div className="p-4">
            <CardTitle className="text-3xl mb-2">Create book from PDF</CardTitle>
            <p className="pl-4 mb-2">Upload a PDF file and create a new book project for translation</p>
            <Separator />
            <Form className="flex flex-col gap-4 mt-5">
                <FormField className="flex flex-col gap-2" name="file">
                    <FormLabel>Choose file</FormLabel>
                    <FormControl className="bg-white text-black" type="file" />
                </FormField>
                <Button type="button" onClick={handleUploadFile}>Upload file</Button>
            </Form>
            {step === "metadata" ? (
                <div>
                    Text
                </div>
            ) : null}
        </div>
    </AppLayout>
}
