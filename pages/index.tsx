import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preload" href="/fonts/Inter-roman.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Inter-italic.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kristjan Rang</title>
        <meta name="description" content="Kristjan Rang 2022" />
      </Head>

      <main className="p-6 h-full flex flex-col md:p-12 md:max-h-[800px]">
        <h1 className="text-gray-800 text-3xl leading-tight max-w-xl md:text-5xl">
          <span className="text-pink-600">Kristjan Rang</span> develops software, occasionally
        </h1>

        <ul className="pt-8 text-base italic font-medium flex-1 md:pt-12 md:text-lg">
          <li>✓ Full stack web developer</li>
          <li>✓ Ruby, JavaScript, Go, C# developer</li>
          <li>✓ Part time sysadmin and devops</li>
          <li>✓ Cat enthusiast</li>
        </ul>

        <div className="max-w-sm md:pt-40">
          <h3 className="text-xl text-gray-800 pb-2 mb-8 border-b border-gray-300 md:text-2xl">at me</h3>
          <a href="mailto:mail@rang.ee" className="my-2 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 w-6 h-6">
              <path
                className="heroicon-ui"
                d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            mail@rang.ee
          </a>
          <a href="https://github.com/krisrang" className="my-2 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="mr-2 w-6 h-6">
              <path d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z" />
            </svg>
            krisrang
          </a>
          <a href="https://www.last.fm/user/bamdo" className="my-2 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="mr-2 w-6 h-6">
              <path d="M8.574 14.576c-.477.348-1.455 1.024-3.381 1.024C2.532 15.6 0 13.707 0 10.195 0 6.547 2.637 4.4 5.354 4.4c3.047 0 4.183 1.108 5.144 4.109l.756 2.309c.551 1.688 1.713 2.91 4.026 2.91 1.558 0 2.382-.346 2.382-1.199 0-.67-.389-1.156-1.557-1.434l-1.559-.369c-1.9-.461-2.656-1.455-2.656-3.025 0-2.516 2.016-3.301 4.077-3.301 2.337 0 3.757.854 3.94 2.932l-2.291.277c-.092-.992-.688-1.408-1.787-1.408-1.008 0-1.627.461-1.627 1.246 0 .693.299 1.109 1.307 1.34l1.466.324c1.97.461 3.025 1.432 3.025 3.303 0 2.309-1.924 3.186-4.766 3.186-3.963 0-5.338-1.801-6.07-4.041L8.43 9.25c-.549-1.687-.99-2.902-3.006-2.902-1.398 0-3.219.916-3.219 3.756 0 2.217 1.523 3.604 3.104 3.604 1.34 0 2.146-.754 2.564-1.131l.701 1.999z" />
            </svg>
            bamdo
          </a>
          <a href="https://steamcommunity.com/id/bamdo" className="my-2 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="mr-2 w-6 h-6">
              <path d="M11 4.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11 4.5zm3.975-2.475A3.5 3.5 0 0 0 9.036 4L5.838 8.847c-.43.022-.856.132-1.249.328L2.122 7.247A1.313 1.313 0 0 0 .506 9.315l2.436 1.905a3.157 3.157 0 1 0 6.168.228l3.891-3.484a3.5 3.5 0 0 0 1.975-5.939zM6 14.105A2.105 2.105 0 0 1 3.895 12l.001-.033 1.046.817a1.31 1.31 0 0 0 1.616-2.068l-.992-.776A2.105 2.105 0 1 1 6 14.105zM12.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            bamdo
          </a>
          <a href="https://goodreads.com/bamdo" className="my-2 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 w-6 h-6">
              <path
                className="heroicon-ui"
                d="M7 5H5v14h14V5h-2v10a1 1 0 0 1-1.45.9L12 14.11l-3.55 1.77A1 1 0 0 1 7 15V5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm4 2v8.38l2.55-1.27a1 1 0 0 1 .9 0L15 13.38V5H9z"
              />
            </svg>
            bamdo
          </a>
        </div>
      </main>

      <i className="cat fixed bottom-0 right-0 w-[47px] h-[80px]"></i>
    </>
  )
}

export default Home
