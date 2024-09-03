// components/Footer.tsx

import Image from 'next/image';
import React from 'react';
import LogoImage from '@/public/logo/logo_full.svg'

const Footer: React.FC = () => {
    return (
        <footer className="content-visibility-auto bg-[#5169e4] border-t border-[#252629] w-full">
            <section className="mx-auto max-w-screen-2xl py-16 px-4 sm:px-6 md:px-16 text-sm space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 lg:grid-cols-6 text-[#A8A9B0] mb-16">
                    <div className="md:col-span-2 space-y-3">
                        <Image
                            alt="revid.ai logo"
                            loading="lazy"
                            width="154"
                            height="30"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: 'transparent' }}
                            src={LogoImage}
                        />
                        <p>Create viral short videos, fast.</p>
                    </div>
                    <div className="flex flex-col space-y-4 items-start md:items-end lg:items-start">
                        <h3 className="text-[#feffff] font-semibold mb-2 text-base">Product</h3>
                        <a className="hover:text-slate-200" href="/pricing">Pricing</a>
                        <a className="hover:text-slate-200" href="/blog">Blog</a>
                        <a className="hover:text-slate-200" href="mailto:hello@typeframes.com">Contact us</a>
                        <a className="hover:text-slate-200" href="/find-tiktok-creators">Find TikTok Influencers</a>
                        <a className="hover:text-slate-200" href="/tiktok-script-generator">TikTok Script Generator</a>
                        <a className="hover:text-slate-200" href="/youtube-short-script-generator">Youtube Shorts Script Generator</a>
                        <a className="hover:text-slate-200" href="/ai-script-generator">AI Script Generator</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-[#feffff] font-semibold mb-2 text-base">Solutions</h3>
                        <a className="hover:text-slate-200" target="_blank" rel="noopener noreferrer" href="https://documenter.getpostman.com/view/36975521/2sA3kPo4BR">API</a>
                        <a className="hover:text-slate-200" target="_blank" rel="noopener noreferrer" href="/affiliates">Become an Affiliate</a>
                    </div>
                    <div className="md:col-span-2 flex flex-col space-y-4 items-start md:items-end lg:items-start">
                        <h3 className="text-[#feffff] font-semibold mb-2 text-base">Free Tools</h3>
                        <a className="hover:text-slate-200" href="/tools/ai-tiktok-video-generator">TikTok Video Generator: Create Videos from Any Content</a>
                        <a className="hover:text-slate-200" href="/tools/caption-generator">AI Video Captioner: Add Subtitles to Videos Automatically</a>
                        <a className="hover:text-slate-200" href="/tools/youtube-clip-maker">YouTube Clip Maker: Create Short Clips from Long Videos</a>
                        <a className="hover:text-slate-200" href="/tools/talking-avatar">AI Talking Avatar: Create Realistic Talking Avatar Videos</a>
                        <a className="hover:text-slate-200" href="/tools/face-swap">AI Face Swap: Create Realistic Talking Avatars</a>
                        <a className="hover:text-slate-200" href="/tools/cartoonify-tweet">Pixar-Style Cartoon Narration for Tweets</a>
                        <a className="hover:text-slate-200" href="/tools/create-website-review-video">Create A Website Review Video</a>
                        <a className="hover:text-slate-200" href="/tools/ai-movie-maker">AI Movie Maker: Create Studio-Quality Videos from Text</a>
                        <a className="hover:text-slate-200" href="/tools/audio-to-video">Audio to Video: Convert Sound into Dynamic MP4 Content</a>
                        <a className="hover:text-slate-200" href="/tools/ai-music-video-generator">Music to Video: Create Cinematic Visuals from Songs</a>
                        <a className="hover:text-slate-200" href="/tools/add-comments-to-video">Add comments to your silent video</a>
                        <a className="hover:text-slate-200" href="/tools/reddit-post-to-video">Turn a Reddit post into a Video</a>
                        <a className="hover:text-slate-200" href="/tools/twitter-video-tool">Tweet to Video: Create Videos From Twitter Posts Instantly</a>
                    </div>
                </div>
                <div className="h-px bg-gradient-to-tr from-white/0 from-25% via-white/25 to-white/0 to-75%"></div>
                <div className="flex flex-col-reverse md:flex-row justify-between">
                    <p className="text-neutral-dark mt-4 md:mt-0">
                        Maintained with 💚 by
                        <a className="underline ml-1" target="_blank" rel="noopener noreferrer" href="https://twitter.com/tibo_maker">Olumide</a>
                        - based on the
                        <a className="underline ml-1 mr-1" target="_blank" rel="noopener noreferrer" href="https://www.typeframes.com">Typeframes</a>
                        video editor
                    </p>
                    <div className="text-[#BEFFD6] underline underline-offset-2 space-x-3 ml-1">
                        <a href="/terms">Terms of Service</a>
                        <a href="/policy">Privacy Policy</a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
