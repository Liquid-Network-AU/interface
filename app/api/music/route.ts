import { NextResponse } from "next/server";
import Replicate from 'replicate';

const replicate = new Replicate({
    auth: "r8_AdGnjz0L0o2CU9yGe1tmlOh5vBa5cgo1fM8O0"!
});

export async function POST(
    req: Request
) {
    try {
        const body = await req.json();
        const { prompt } = body;

        if (!prompt) {
            return new NextResponse("Musical prompt is required", { status: 400 });
        }

        const response = await replicate.run(
            'riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05',
            {
                input: {
                    prompt_a: prompt
                }
            }
        );

        return NextResponse.json(response);
    } catch (error) {
        console.log("Music error: ", error);
        return new NextResponse("Internal error: ", { status: 500 })
    };
};