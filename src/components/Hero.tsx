import { motion } from 'motion/react';
import { ChevronRight, Loader2, Key } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

export default function Hero() {
  const [imageUrl, setImageUrl] = useState<string | null>(localStorage.getItem('hero_image'));
  const [isGenerating, setIsGenerating] = useState(false);
  const [needsKey, setNeedsKey] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!imageUrl && !isGenerating && !needsKey && !error) {
      checkKeyAndGenerate();
    }
  }, []);

  const checkKeyAndGenerate = async () => {
    try {
      // @ts-ignore
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        // @ts-ignore
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          setNeedsKey(true);
          return;
        }
      }
      await generateImage();
    } catch (err) {
      console.error(err);
      await generateImage();
    }
  };

  const generateImage = async () => {
    try {
      setIsGenerating(true);
      setError(null);
      
      // @ts-ignore
      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [
            {
              text: 'A high-res cinematic image of a modern security camera mounted on a sleek building at dusk — crisp blue/teal accent lighting, subtle lens flare, photorealistic, 8k resolution, architectural photography.',
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: "1K"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const newImageUrl = `data:image/png;base64,${base64EncodeString}`;
          setImageUrl(newImageUrl);
          localStorage.setItem('hero_image', newImageUrl);
          foundImage = true;
          break;
        }
      }
      
      if (!foundImage) {
        setError("No image generated. Please try again.");
      }
    } catch (err: any) {
      console.error("Error generating image:", err);
      if (err?.message?.includes("Requested entity was not found") || err?.message?.includes("API key not valid")) {
        setNeedsKey(true);
      } else {
        setError(err.message || "Failed to generate image");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectKey = async () => {
    try {
      // @ts-ignore
      if (window.aistudio && window.aistudio.openSelectKey) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
        setNeedsKey(false);
        generateImage();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="relative h-dvh flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {imageUrl ? (
          <motion.img 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={imageUrl} 
            alt="Security Camera at Dusk" 
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a]">
            {isGenerating ? (
              <div className="flex flex-col items-center gap-4 text-[#00E5FF]">
                <Loader2 className="w-8 h-8 animate-spin" />
                <span className="text-sm font-medium tracking-widest uppercase">Generating Hero Image...</span>
              </div>
            ) : needsKey ? (
              <div className="flex flex-col items-center gap-4 bg-black/50 p-8 rounded-2xl backdrop-blur-md border border-white/10 z-50">
                <Key className="w-8 h-8 text-[#00E5FF]" />
                <h3 className="text-xl font-display font-medium text-white">API Key Required</h3>
                <p className="text-white/60 text-center max-w-md text-sm mb-4">
                  To generate the high-quality hero image using Gemini 3 Pro Image, please select your API key.
                  <br/><br/>
                  <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-[#00E5FF] hover:underline">Learn about billing</a>
                </p>
                <button 
                  onClick={handleSelectKey}
                  className="px-6 py-3 bg-[#00E5FF] text-black font-medium rounded-full hover:scale-105 transition-transform"
                >
                  Select API Key
                </button>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center gap-4 text-red-400 z-50">
                <p>{error}</p>
                <button 
                  onClick={generateImage}
                  className="px-6 py-2 border border-red-400/50 rounded-full hover:bg-red-400/10 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : null}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505] md:bg-gradient-to-r md:from-[#050505] md:via-[#050505]/80 md:to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.1)_0%,transparent_60%)] md:bg-[radial-gradient(circle_at_left,rgba(0,229,255,0.15)_0%,transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left px-6 max-w-7xl mx-auto w-full mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_10px_rgba(0,229,255,0.8)]"></span>
          <span className="text-xs font-medium tracking-wide text-white/80 uppercase">Next-Gen Security Systems</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter leading-[1.05] mb-6"
        >
          Protecting What <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Matters Most</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 font-light"
        >
          Premium surveillance, access control, and fire alarm solutions for homes and businesses across Pakistan. Engineered for peace of mind.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00E5FF] text-black font-medium text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]"
        >
          <span className="relative z-10">Get a Free Quote</span>
          <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
        </motion.button>
      </div>
    </section>
  );
}
