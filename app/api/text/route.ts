/*import OpenAI from 'openai'

const openai = new OpenAI()

export async function GET(request: Request) {
  const response = await openai.models.list()
  response.data.sort((a, b) => a.id.localeCompare(b.id))

  return new Response(JSON.stringify(response))

  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
  ^^^^THIS IS BROKEN, I AM USING A SECONDARY API ROUTE TO KEEP THIS PATH ACTIVE BUT ALLOW BUILDS TO COMMENCE
}*/

import { readUserSession } from "@/lib/actions";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

export async function POST(
  req: Request
) {
  try {
    const { data: userSession } = await readUserSession();


    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userSession) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // if (!configuration.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    // }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    // const response = await openai.createImage({
    //   prompt,
    //   n: parseInt(amount, 10),
    //   size: resolution,
    // });

    // return NextResponse.json(response.data.data);
  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};