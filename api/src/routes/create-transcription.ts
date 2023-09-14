import { FastifyInstance } from "fastify";
import { createReadStream } from "fs";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function createTranscriptionRoute(app: FastifyInstance){
  app.post('/videos/:videoId/transcription', async (request) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid()
    })
    
    const { videoId } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      prompt: z.string(),
    })

    const { prompt } = bodySchema.parse(request.body)

    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: videoId,
      }
    })

    const videoPath = video.path

    const audioReadStream = createReadStream(videoPath)

    const response = await openai.audio.transcriptions.create({
      file: audioReadStream,
      model: 'whisper-1',
      language: 'pt-BR',
      response_format: 'json',
      temperature: 0.3,
      prompt,
    })

    const transcription = response.text

    await prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        transcript: response.text,
      }
    })

    return { transcription }

  })
}