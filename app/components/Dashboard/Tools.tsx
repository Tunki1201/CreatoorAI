import Image from "next/image";
import YoutubeImage from '@/public/assets/images/about/youtube.avif'
import TikTokImage from '@/public/assets/images/about/tiktok.avif'
import TwitterImage from '@/public/assets/images/about/x-logo-white.avif'

export default function ToolsSection() {
    return (
        <article className="mt-8 content-visibility-auto relative text-neutral-dark rounded-lg px-4 sm:px-6 md:px-8 border border-[#252629] w-[80%] bg-[#5169e4] mb-6">
            <div className="h-px w-full bg-[#353e3b] top-4 sm:top-6 md:top-8 absolute -z-0 left-0"></div>
            <div className="h-px w-full bg-[#353e3b] bottom-4 sm:bottom-6 md:bottom-8 absolute z-0 left-0"></div>
            <div className="w-full relative border-x border-[#353e3b]">
                <div className="absolute z-0 w-full h-full grid lg:grid-cols-2 gap-8 items-center">
                    <section className="z-0 absolute w-full h-full col-span-2 grid grid-cols-2 place-content-between">
                        <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-4 sm:my-6 md:my-8 outline outline-8 outline-[#5169e4] -mx-[2.5px]"></div>
                        <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-4 sm:my-6 md:my-8 outline outline-8 outline-[#5169e4] -mx-[2px] place-self-end"></div>
                        <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-4 sm:my-6 md:my-8 outline outline-8 outline-[#5169e4] -mx-[2.5px]"></div>
                        <div className="bg-[#4BDE81] rounded-full w-1 h-1 my-4 sm:my-6 md:my-8 outline outline-8 outline-[#5169e4] -mx-[2px] place-self-end"></div>
                    </section>
                </div>
                <div className="relative z-20 mx-auto py-12 lg:py-24">
                    <div className="space-y-4">
                        <div className="mx-auto text-green-200 border border-[#c8eed6]/25 shadow-lg shadow-[#4add80]/10 w-fit font-medium text-sm rounded-full  bg-gradient-to-b from-[#737b88]/20 to-[#191b1e]/20 p-[1.5px]">
                            <div className="bg-[#5169e4]/50 flex items-center space-x-1 py-1 px-2 rounded-full ">
                                <svg
                                    width="17"
                                    height="16"
                                    viewBox="0 0 17 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.85398 13.6134H4.64065C2.53398 13.6134 1.83398 12.2134 1.83398 10.8067V5.19339C1.83398 3.08672 2.53398 2.38672 4.64065 2.38672H8.85398C10.9607 2.38672 11.6607 3.08672 11.6607 5.19339V10.8067C11.6607 12.9134 10.954 13.6134 8.85398 13.6134Z"
                                        stroke="#BEFFD6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M13.5135 11.4001L11.6602 10.1001V5.89342L13.5135 4.59342C14.4202 3.96009 15.1668 4.34675 15.1668 5.46009V10.5401C15.1668 11.6534 14.4202 12.0401 13.5135 11.4001Z"
                                        stroke="#BEFFD6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M8.16602 7.3335C8.7183 7.3335 9.16602 6.88578 9.16602 6.3335C9.16602 5.78121 8.7183 5.3335 8.16602 5.3335C7.61373 5.3335 7.16602 5.78121 7.16602 6.3335C7.16602 6.88578 7.61373 7.3335 8.16602 7.3335Z"
                                        stroke="#BEFFD6"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                                <span className="text-sm">Tools</span>
                            </div>
                        </div>
                        <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl text-center w-11/12 max-w-3xl text-pretty mx-auto">
                            Easily create Short Videos with pre-made tools
                        </h2>
                        <p className="text-center w-[90%] max-w-lg mx-auto text-pretty ">
                            Pick the right tool, provides your input, and you&apos;ll create a
                            video in no time - customize it however you want.
                        </p>
                    </div>
                    <div className="diagonal-pattern w-full border-y border-[#353e3b] my-12">
                        <div className="*:p-1.5 *:bg-transparent *:h-full border-x border-[#353e3b] bg-[#5169e4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[85%] lg:w-[75%] sm:divide-x divide-y divide-[#353e3b] mx-auto">
                            <div>
                                <div className="bg-[#5169e4] rounded p-6 h-full">
                                    <div className="relative w-10 ">
                                        <Image
                                            alt="youtube"
                                            loading="lazy"
                                            width="500"
                                            height="300"
                                            decoding="async"
                                            data-nimg="1"
                                            className="mx-auto aspect-auto object-cover"
                                            style={{
                                                color: 'transparent',
                                                width: '100%',
                                                height: 'auto',
                                                visibility: 'visible',
                                            }}
                                            src={YoutubeImage}
                                            data-xblocker="passed"
                                        />
                                    </div>
                                    <h4 className="text-white text-lg font-medium mt-4">
                                        Create clips from YouTube
                                    </h4>
                                    <p className="">Convert your YouTube video into a short vertical</p>
                                    <a
                                        className="text-white rounded-full p-1 border border-[##ffffff15] hover:border-[#4ade80] font-medium flex items-center mt-12 w-fit"
                                        href="/tools/create-short-video-clip"
                                        style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out' }}
                                    >
                                        Try it out
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-2"
                                        >
                                            <path
                                                d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M2.33398 8.5H13.554"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#5169e4] rounded p-6 h-full">
                                    <div className="relative w-10 ">
                                        <Image
                                            alt="youtube"
                                            loading="lazy"
                                            width="500"
                                            height="300"
                                            decoding="async"
                                            data-nimg="1"
                                            className="mx-auto aspect-auto object-cover"
                                            style={{
                                                color: 'transparent',
                                                width: '100%',
                                                height: 'auto',
                                                visibility: 'visible',
                                            }}
                                            src={TikTokImage}
                                            data-xblocker="passed"
                                        />
                                    </div>
                                    <h4 className="text-white text-lg font-medium mt-4">
                                        Create TikTok videos
                                    </h4>
                                    <p className="">Convert your text into a TikTok video</p>
                                    <a
                                        className="text-white rounded-full p-1 border border-[##ffffff15] hover:border-[#4ade80] font-medium flex items-center mt-12 w-fit"
                                        href="/tools/create-short-video-clip"
                                        style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out' }}
                                    >
                                        Try it out
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-2"
                                        >
                                            <path
                                                d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M2.33398 8.5H13.554"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#5169e4] rounded p-6 h-full">
                                    <div className="relative w-10 ">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mx-auto text-white" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"></path></svg>
                                    </div>
                                    <h4 className="text-white text-lg font-medium mt-4">
                                        Create An AI avatar Video
                                    </h4>
                                    <p className="">Generate a vertical video with a talking avatar</p>
                                    <a
                                        className="text-white rounded-full p-1 border border-[##ffffff15] hover:border-[#4ade80] font-medium flex items-center mt-12 w-fit"
                                        href="/tools/create-short-video-clip"
                                        style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out' }}
                                    >
                                        Try it out
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-2"
                                        >
                                            <path
                                                d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M2.33398 8.5H13.554"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#5169e4] rounded p-6 h-full">
                                    <div className="relative w-10 ">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mx-auto text-white" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M11.0526 7.8154L11.8042 4.27941C12.0339 3.19898 13.0959 2.50929 14.1764 2.73894L17.3725 3.4183C17.8351 2.90546 18.5509 2.64644 19.275 2.80035C20.3554 3.03 21.0451 4.09204 20.8155 5.17247C20.5858 6.2529 19.5238 6.94259 18.4434 6.71294C17.7193 6.55903 17.1707 6.03124 16.9567 5.3746L13.7605 4.69523L13.0943 7.82978C14.8789 7.96683 16.6522 8.56079 18.2581 9.52961C19.0892 9.06763 20.0992 8.99337 21.007 9.36091C22.1731 9.833 22.9531 10.9459 22.9991 12.2031L22.9996 12.2241C23.0151 13.2277 22.559 14.1657 21.792 14.7742C21.7899 14.8178 21.7871 14.859 21.7836 14.8971C21.7836 18.8949 17.3341 21.9267 11.9852 21.9267C6.65232 21.9267 2.27693 18.9027 2.27987 14.9738C2.27523 14.9134 2.27162 14.853 2.26905 14.7926C1.46701 14.1873 0.984722 13.2277 1.00037 12.1962C1.01955 10.9317 1.78341 9.79777 2.94804 9.30491C3.85909 8.91936 4.881 8.98299 5.72371 9.44381C7.3578 8.46653 9.15777 7.91241 11.0526 7.8154ZM20.3385 13.341C20.7466 13.1382 21.003 12.7207 21.0001 12.2656C20.9789 11.8005 20.6887 11.3897 20.2565 11.2147C19.821 11.0384 19.3226 11.1343 18.9837 11.4597L18.3991 12.0207L17.729 11.5652C16.1137 10.4672 14.2771 9.8397 12.4995 9.80134L11.493 9.80123C9.61791 9.8295 7.84136 10.4002 6.25552 11.4757L5.59246 11.9254L5.00897 11.3764C4.66501 11.0528 4.16243 10.9627 3.7275 11.1468C3.29257 11.3308 3.0073 11.7543 3 12.2265C2.99298 12.6987 3.26526 13.1307 3.69441 13.3278L4.32738 13.6186L4.27399 14.3132C4.261 14.482 4.261 14.6516 4.27693 14.8971C4.27693 17.6071 7.63313 19.9267 11.9852 19.9267C16.3561 19.9267 19.7836 17.5913 19.7865 14.8205C19.7995 14.6516 19.7995 14.482 19.7865 14.3132L19.7348 13.6411L20.3385 13.341ZM6.95075 13.4999C6.95075 12.6715 7.62232 11.9999 8.45075 11.9999C9.27918 11.9999 9.95075 12.6715 9.95075 13.4999C9.95075 14.3283 9.27918 14.9999 8.45075 14.9999C8.05292 14.9999 7.67139 14.8419 7.39009 14.5606C7.10878 14.2793 6.95075 13.8977 6.95075 13.4999ZM13.9507 13.4999C13.9507 12.6715 14.6223 11.9999 15.4507 11.9999C16.2792 11.9999 16.9507 12.6715 16.9507 13.4999C16.9507 14.3283 16.2792 14.9999 15.4507 14.9999C15.0529 14.9999 14.6714 14.8419 14.3901 14.5606C14.1088 14.2793 13.9507 13.8977 13.9507 13.4999ZM11.9665 18.6028C10.5693 18.6028 9.19993 18.2329 8.08503 17.3928C7.94659 17.2241 7.95868 16.9779 8.11299 16.8236C8.2673 16.6693 8.51349 16.6572 8.68218 16.7956C9.62697 17.4886 10.805 17.7856 11.9507 17.7856C13.0965 17.7856 14.2813 17.5112 15.235 16.8271C15.3473 16.7176 15.5095 16.6763 15.6604 16.7188C15.8114 16.7613 15.9282 16.8811 15.9669 17.0331C16.0055 17.1851 15.9517 17.3346 15.8479 17.4556C15.1638 18.2531 13.3636 18.6028 11.9665 18.6028Z"></path></svg>
                                    </div>
                                    <h4 className="text-white text-lg font-medium mt-4">
                                        Turn a Reddit post into a Video
                                    </h4>
                                    <p className="">Make engaging videos from your podcasts, interviews, or any audio conten</p>
                                    <a
                                        className="text-white rounded-full p-1 border border-[##ffffff15] hover:border-[#4ade80] font-medium flex items-center mt-12 w-fit"
                                        href="/tools/create-short-video-clip"
                                        style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out' }}
                                    >
                                        Try it out
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-2"
                                        >
                                            <path
                                                d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M2.33398 8.5H13.554"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#5169e4] rounded p-6 h-full">
                                    <div className="relative w-10 ">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="mx-auto text-white" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z"></path></svg>
                                    </div>
                                    <h4 className="text-white text-lg font-medium mt-4">
                                        Turn Audio into Video
                                    </h4>
                                    <p className="">Make engaging videos from your podcasts, interviews, or any audio content</p>
                                    <a
                                        className="text-white rounded-full p-1 border border-[##ffffff15] hover:border-[#4ade80] font-medium flex items-center mt-12 w-fit"
                                        href="/tools/create-short-video-clip"
                                        style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out' }}
                                    >
                                        Try it out
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-2"
                                        >
                                            <path
                                                d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M2.33398 8.5H13.554"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#5169e4] rounded p-6 h-full">
                                    <div className="relative w-10 ">
                                        <Image
                                            alt="youtube"
                                            loading="lazy"
                                            width="500"
                                            height="300"
                                            decoding="async"
                                            data-nimg="1"
                                            className="mx-auto aspect-auto object-cover"
                                            style={{
                                                color: 'transparent',
                                                width: '100%',
                                                height: 'auto',
                                                visibility: 'visible',
                                            }}
                                            src={TwitterImage}
                                            data-xblocker="passed"
                                        />
                                    </div>
                                    <h4 className="text-white text-lg font-medium mt-4">
                                        Tweet/X to Video
                                    </h4>
                                    <p className="">Convert your tweets to video</p>
                                    <a
                                        className="text-white rounded-full p-1 border border-[##ffffff15] hover:border-[#4ade80] font-medium flex items-center mt-12 w-fit"
                                        href="/tools/create-short-video-clip"
                                        style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out' }}
                                    >
                                        Try it out
                                        <svg
                                            width="16"
                                            height="17"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-2"
                                        >
                                            <path
                                                d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M2.33398 8.5H13.554"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="mx-auto text-white rounded-full p-1 border border-[##ffffff15] hover:border-[#4ade80] font-medium flex items-center mt-12 w-fit"
                        href="/tools/create-short-video-clip"
                        style={{ background: 'radial-gradient(89.39% 89.39% at 50% 50%,rgba(16,18,21,.1) 0,hsla(0,0%,100%,.15) 100%)', transition: 'all .15s ease-in-out' }}
                    >
                        See all tools
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                        >
                            <path
                                d="M9.61914 4.45312L13.6658 8.49979L9.61914 12.5465"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M2.33398 8.5H13.554"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
}
