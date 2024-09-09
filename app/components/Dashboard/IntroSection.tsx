import Image from 'next/image';
import Link from 'next/link';
import StarImage from '@/public/assets/images/about/star.png'
import PersonImage1 from '@/public/assets/images/portraits/portrait_1.jpg'
import PersonImage2 from '@/public/assets/images/portraits/portrait_2.jpg'
import PersonImage3 from '@/public/assets/images/portraits/portrait_3.jpg'
import PersonImage4 from '@/public/assets/images/portraits/portrait_4.jpg'
import PersonImage5 from '@/public/assets/images/portraits/portrait_5.jpg'
import PersonImage6 from '@/public/assets/images/portraits/portrait_6.jpg'

export default function IntroSectionComponent() {
    return (
        <article className="rounded-lg px-4 sm:px-6 md:px-8 border border-[#252629] w-full xl:w-[80%] gradient-bg lg:bg-none lg:bg-[#5169e4]">
            <div className="w-full relative border-x border-[#353e3b] md:px-8 py-[7.5%] grid lg:grid-cols-2 gap-8 xl:gap-16 items-start">
                {/* Decorative Background Dots */}
                <section className="z-0 absolute w-full h-full col-span-2 grid grid-cols-2 place-content-between">
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2.5px]"></div>
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2px] place-self-end"></div>
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2.5px]"></div>
                    <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-8 outline outline-8 outline-[#171b1c]/60 lg:outline-[#171B1C] -mx-[2px] place-self-end"></div>
                </section>

                {/* Main Content Section */}
                <section className="space-y-6 mt-12 lg:mt-0 lg:pl-8 flex-2">
                    <h1 className="text-4xl sm:text-[42px] xl:text-5xl 2xl:text-6xl lg:text-left leading-[50px] text-center font-[&quot;Euclid_Circular_A&quot;] text-white font-medium">
                        Create Viral Videos
                        with Your AI<br />
                        <span className="font-medium from-[#45EC82] from-[0.16%] via-[#7079F3] via-[47.81%] to-[#75CEFC] to-100% bg-gradient-to-r bg-clip-text text-transparent">Twin!
                        </span>
                    </h1>
                    <div className="flex flex-col gap-4 lg:gap-0 px-4 lg:px-0 text-sm 2xl:text-base text-center lg:text-left mx-auto lg:mx-0 leading-normal">
                        <p>Create high quality videos from simple text prompts with your AI Avatar.</p>
                        <p>Scale your content infinitely.</p>
                        <p>Our advanced AI seamlessly transforms your ideas into premium, polished videos.</p>
                        <p>Automatic subtitles and b-roll added so you can get to posting across social media.</p>
                    </div>
                    <div className="mx-auto lg:mx-0 cursor-pointer">
                        <Link href="/login" className='flex cursor-pointer'>
                            <span
                                className=" rounded-full border border-[#4bde81] p-1 cursor-pointer hover:shadow-2xl"
                                style={{ boxShadow: '0 0 0 4px #ffffff24,0 0 0 1px #4bde81', background: 'linear-gradient(180deg,#a8ffc8,#4bde81)' }}>Try Free Now
                            </span>
                        </Link>
                    </div>
                    <div className="space-y-5 flex flex-col items-center lg:items-start">
                        <div className="space-y-2 flex flex-col items-center lg:items-start">
                            <div className='flex'>
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                                <Image
                                    alt="ratings"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    src={StarImage}
                                    className="object-contain"
                                />
                            </div>

                            <article className="flex items-center flex-col w-full mt-10 space-y-2">
                                <div className="mt-0 flex flex-col justify-center items-center">
                                    <div className="flex gap-4 flex-col items-center md:flex-col xl:flex-row md:items-end">
                                        <div className="mt-4 flex -space-x-1 children:h-10 children:w-10 children:rounded-full children:object-cover children:ring-2 children:ring-white">
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage1}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage2}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                className='flex rounded-full'
                                                height={40}
                                                decoding="async"
                                                src={PersonImage3}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage4}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                className='flex rounded-full'
                                                decoding="async"
                                                src={PersonImage5}
                                            />
                                            <Image
                                                alt="user testimonial"
                                                fetchPriority="high"
                                                width={40}
                                                height={40}
                                                decoding="async"
                                                className='flex rounded-full'
                                                src={PersonImage6}
                                            />
                                        </div>
                                        <div className="text-info text-sm italic">and 100+ others</div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <div className="h-[400px] hidden lg:flex items-center relative">
                    <div className="bg-white outline w-1/2 md:max-w-[180px] absolute sm:-left-1/4 md:right-1/4 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
                        <video className="content-visibility-auto bg-white shadow-2xl rounded-[13px] border border-base-200" playsInline loop src="/video/3.mp4" preload="none" width="100%" height="100%" style={{ visibility: 'visible' }} autoPlay />
                    </div>
                    <div className="bg-white outline w-5/6 md:w-3/4 md:max-w-[260px] relative z-10 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
                        <video className="content-visibility-auto bg-white shadow-2xl rounded-[13px] border border-base-200" playsInline loop src="/video/3.mp4" preload="none" autoPlay width="100%" height="100%" style={{ visibility: 'visible' }} />
                    </div>
                    <div className="bg-white outline w-1/2 md:max-w-[180px] absolute sm:-right-1/4 md:left-1/4 -z-0 mx-auto outline-[6px] outline-[#636363]/25 rounded-xl object-cover">
                        <video className="content-visibility-auto bg-white shadow-2xl rounded-[13px] border border-base-200" playsInline loop src="/video/3.mp4" preload="none" width="100%" height="100%" style={{ visibility: 'visible' }} autoPlay />
                    </div>
                </div>
            </div>
        </article>
    );
}
