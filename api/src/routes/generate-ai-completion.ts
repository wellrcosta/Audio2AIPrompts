import { FastifyInstance } from "fastify";
import { createReadStream } from "fs";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function generateAICompletionRoute(app: FastifyInstance){
  app.post('/ai/complete', async (request, reply) => {
    const bodySchema = z.object({
      videoId: z.string().uuid(),
      template: z.string(),
      temperature: z.number().min(0).max(1).default(0.3),
    })

    const { videoId, template, temperature } = bodySchema.parse(request.body)

    const video = await prisma.video.findFirstOrThrow({
      where: {
        id: videoId,
      }
    })
    
   if (!video.transcript) {
    return reply.status(400).send({
      error: 'Transcription not found',
    })
   }

   const promptMessage = template.replace('{transcription}', video.transcript)

   const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-16k',
    temperature,
    messages: [
      { role: 'user', content: promptMessage }
    ]
   })

   return response

  })
}