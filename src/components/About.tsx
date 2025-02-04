function About(){
    return(
        <div className="container mx-auto px-8 lg:px-16 flex flex-col bg-white dark:bg-gray-900 lg:flex-row lg:gap-0 gap-8 items-center py-14 shadow-lg lg:justify-between w-full">
            <div className="left flex flex-col items-start gap-4 text-black dark:text-white">
            <h1 className="font-semibold text-3xl">About Tiktok Downloader</h1>
            <p className="text-xl font-medium max-w-[800px]">TikTok Downloader is a website that allows you to download TikTok videos without a watermark quickly and easily. Powered by a highly efficient API, this site ensures optimal download speeds. With a minimalist and intuitive UI, users can effortlessly navigate and master its features, making the video downloading experience more seamless and efficient. Enjoy the convenience of downloading your favorite videos without limitations!</p>
            </div>
            <div className="right lg:w-fit w-full bg-primary lg:py-8 p-5 lg:px-10 rounded-xl text-white flex flex-col gap-2 lg:ml-3">
                <h1 className="text-xl font-medium">How To Use</h1>
                <ul className="flex flex-col max-w-[500px] text-lg">
                    <li>
                        1. Copy the link of the content you want to download.
                    </li>
                    <li>2. Paste the link into the URL field above.</li>
                    <li>3. Select the format you want to download by clicking the format button.</li>
                    <li>4. Click Download</li>
                    <li>5. Enjoy :3</li>
                </ul>
            </div>
        </div>
    )
}export default About