"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod'
import { MessageSquare, Music } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import * as z from "zod";

import { Heading } from "@/components/Heading";
import { formSchema } from "@/app/(dashboard)/(routes)/conversation/constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/User/Avatar";
import { BotAvatar } from "@/components/User/BotAvatar";

const ConversationPage = () => {
    const router = useRouter();
    const [messages, setMessages] = useState([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    })

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log('');
        } catch (error: any) {
            console.log(error);
        } finally {
            router.refresh();
        }
    }

    return (
        <div>
            <Heading
                title="Music Generation"
                description="Make some audio"
                Icon={Music}
                iconColor="text-emerald-500"
                bgColor="bg-emerald-500/10"
            />
            <div className="px-4 lg:px-8">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
                            rounded-lg
                            border
                            w-full
                            p-4
                            px-3
                            md:px-6
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                        "
                    >
                        <FormField
                            name='prompt'
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                            disabled={isLoading}
                                            placeholder="Aerosmith-inspired piano solo"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button className="col-span-12 col-span-2" disabled={isLoading}>Generate</Button>
                    </form>
                </Form>
            </div>
            <div className="space-y-4 mt-4">
                {isLoading && (
                    <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted"><Loader /></div>
                )}
                {messages.length === 0 && !isLoading && (
                    <Empty label="No audio generated" />
                )}
                <div>Music will be generated here</div>
            </div>
        </div>
    );
};

export default ConversationPage;