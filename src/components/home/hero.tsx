'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter()
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-secondary/50 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-tech-purple/10 text-tech-purple text-sm font-medium mb-2">
            Launch your tech career with confidence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-heading max-w-4xl">
            Ace Your Tech Interviews with AI-Powered Voice Practice
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Practice your interview skills with our real-time voice AI that simulates 
            technical interviews from top tech companies. Get instant feedback and improve faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button onClick={() => {router.push('/interview')}} className="bg-tech-purple hover:bg-tech-purple/90 h-12 text-lg" size="lg">
              Try for Free
            </Button>
            <Button onClick={() => {router.push('/interview')}} variant="outline" className="border-tech-purple text-tech-purple hover:bg-tech-purple/10 h-12 text-lg" size="lg">
              View Demo
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-tech-purple mb-2">93%</div>
              <p className="text-muted-foreground text-sm text-center">Improved interview confidence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-tech-purple mb-2">10K+</div>
              <p className="text-muted-foreground text-sm text-center">Practice questions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-tech-purple mb-2">50+</div>
              <p className="text-muted-foreground text-sm text-center">Companies covered</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-tech-purple mb-2">87%</div>
              <p className="text-muted-foreground text-sm text-center">Success rate for interviews</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-tech-purple to-tech-indigo opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
};
