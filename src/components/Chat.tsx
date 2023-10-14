'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from 'ai/react';
import { ScrollArea } from "./ui/scroll-area";

export interface ChatPros{}

export function Chat(props: ChatPros){
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return(
        <div className="flex min-h-screen bg-slate-200 items-center justify-center">
            <Card className="w-[440px]">
                <CardHeader>
                    <CardTitle>Chat AI</CardTitle>
                    <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
                </CardHeader>
                <CardContent>
                   <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
                        { messages.map(message => {
                                return(
                                    <div key={message.id} className="flex gap-3 text-slate-700 text-sm">
                                    {message.role === 'user' && (
                                        <Avatar>
                                            <AvatarFallback>Gui</AvatarFallback>
                                            <AvatarImage src="https://github.com/guifelippe.png" />
                                        </Avatar>
                                    )}
                                    {message.role === 'assistant' && (
                                        <Avatar>
                                            <AvatarFallback>Bot</AvatarFallback>
                                            <AvatarImage src="https://img.freepik.com/vetores-premium/estilo-colorido-de-vetor-de-robo-de-bot-de-bate-papo-isolado_824631-1101.jpg" />
                                        </Avatar>
                                    )}
                                    <p className="leading-relaxed">
                                        <span className="block font-bold text-slate-700">
                                            {message.role === 'user' ? 'User: ' : 'AI: '}
                                        </span>
                                        {message.content}
                                    </p>
                                </div>
                                )
                        }) }
                   </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form className="flex w-full gap-2" onSubmit={handleSubmit}>
                        <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
                        <Button type="submit">Send</Button>
                    </form>
                </CardFooter>
            </Card>
        </div>
    )
}