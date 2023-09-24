"use client"

import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

import { Heading } from "@/components/Heading";

const ConversationPage = () => {
    const form = useForm({
        defaultValues: {
            prompt: "",
        }
    })

    return (
        <div>
            <Heading
                title="Conversation AI"
                description="A conversation model that you've made (test)"
                Icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">

            </div>
        </div>
    );
};

export default ConversationPage;