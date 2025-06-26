import { Book, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormLabel, FormSubmit } from "@radix-ui/react-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { Book as BookType } from "@/types/book";

interface Props {
    book: BookType;
    setStep: Function
}

type FormValues = {
    title: string;
    author: string;
    originalLanguage: string;
    targetLanguage: string;
    genre: string;
    description: string | null;
}

export default function SelectedBook({ book, setStep }: Props) {

    const { data, setData } = useForm<FormValues>({
        title: '',
        author: '',
        originalLanguage: '',
        targetLanguage: '',
        genre: '',
        description: '',
    });
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Selected File</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <FileText className="h-8 w-8 text-blue-600" />
                        <div className="text-black">
                            <p className="font-medium">{book.info.title}</p>
                            {/* <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p> */}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        <Book className="h-5 w-5" />
                        Book Information
                    </CardTitle>
                    <CardDescription>Provide details about the book for better organization</CardDescription>
                    <CardContent>
                        <Form className="grid grid-cols-2 gap-3 mt-2">
                            <FormField className="flex flex-col gap-2" name="title">
                                <FormLabel>Book title <span className="text-red-500">*</span></FormLabel>
                                <FormControl asChild required>
                                    <Input
                                        placeholder="Enter book title"
                                        className="bg-white text-black"
                                        type="text"
                                        value={book.info.title ?? ''}
                                        onInput={(e) => setData("title", e.currentTarget.value)}
                                    />
                                </FormControl>
                            </FormField>
                            <FormField className="flex flex-col gap-2" name="author">
                                <FormLabel>Author <span className="text-red-500">*</span></FormLabel>
                                <FormControl asChild required>
                                    <Input
                                        placeholder="Enter author name"
                                        className="bg-white text-black"
                                        type="text"
                                        onInput={(e) => setData("author", e.currentTarget.value)}
                                    />
                                </FormControl>
                            </FormField>
                            <FormField className="flex flex-col gap-2" name="original_language">
                                <FormLabel>Original language</FormLabel>
                                <FormControl asChild>
                                    <Input
                                        className="bg-white text-black"
                                        type="text"
                                        onInput={(e) => setData("original_language", e.currentTarget.value)}
                                    />
                                </FormControl>
                            </FormField>
                            <FormField className="flex flex-col gap-2" name="target_language">
                                <FormLabel>Target language</FormLabel>
                                <FormControl asChild>
                                    <Input
                                        className="bg-white text-black"
                                        type="text"
                                        onInput={(e) => setData("target_language", e.currentTarget.value)}
                                    />
                                </FormControl>
                            </FormField>
                            <FormField className="flex flex-col gap-2 col-start-1 col-end-3" name="genre">
                                <FormLabel>Genre</FormLabel>
                                <FormControl asChild>
                                    <Input
                                        className="bg-white text-black"
                                        type="text"
                                        onInput={(e) => setData("genre", e.currentTarget.value)}
                                    />
                                </FormControl>
                            </FormField>
                            <FormField className="flex flex-col gap-2 col-start-1 col-end-3" name="description">
                                <FormLabel>Description</FormLabel>
                                <FormControl asChild>
                                    <Textarea
                                        placeholder="Brief description of the book (optional)"
                                        rows={3}
                                        className="bg-white text-black"
                                        value={book.info.description}
                                        onInput={(e) => setData("description", e.currentTarget.value)}
                                    ></Textarea>
                                </FormControl>
                            </FormField>
                            <div className="mt-4 mx-auto col-start-1 col-end-3 flex gap-4">
                                <Button type="button" className="cursor-pointer" onClick={() => setStep("content")}>Back</Button>
                                <FormSubmit asChild>
                                    <Button type="submit" className="cursor-pointer">Create book</Button>
                                </FormSubmit>
                            </div>
                        </Form>
                    </CardContent>
                </CardHeader>
            </Card>
        </div >
    );
}
