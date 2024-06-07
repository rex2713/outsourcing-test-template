import logo from "./logo.svg"
import "./App.css"
import "./App.sass"
import "./App.scss"

function App() {
  return (
    <main className="font-sans w-screen h-screen overflow-hidden">
      <header className="bg-white h-[70px] tracking-wide text-[22px] font-medium leading-[70px] text-center items-middle">
        <img className="h-7 xs:h-8 md:inline-block hidden absolute left-0 ml-4 xs:ml-8 top-5" alt="share" src="/share.png" />
        IMAG切版題庫
        <div className="absolute right-0 flex gap-x-1 xs:gap-x-4 top-5 mr-3 xs:mr-8">
          <img className="h-7 xs:h-8 inline-block md:hidden" alt="share" src="/share.png" />
          <img className="h-7 xs:h-8 mt-[1px]" alt="x" src="/x.png" />
        </div>
      </header>
      <div
        style={{
          backgroundImage: `radial-gradient(circle, transparent, rgba(0, 0, 0, .3)), url('/Frame35.jpeg')`,
        }}
        className="bg-no-repeat bg-cover bg-[70%] h-full"
      >
        <h1
          style={{ fontFamily: "Roboto" }}
          className="text-white font-light text-center md:leading-[160px] leading-[120px] text-[120px] md:text-[160px] pt-[150px] md:pt-[40px] xl:pt-[80px]"
        >
          Gift
          <br />
          Guide
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-y-4 w-fit text-[20px] md:text-[24px] text-center mx-auto gap-x-5 mt-[80px] md:mt-[50px]">
          <button className="rounded-[46px] w-[150px] h-[50px] text-[18px] leading-[45px] xs:w-[200px] xs:h-[55px] md:w-[256px] xs:leading-[50px] md:h-[73px]  items-center md:leading-[65px] text-white bg-black/30 border-white border-[1px]">
            驚喜寶庫
          </button>
          <button className="rounded-[46px] w-[150px] h-[50px] text-[18px] leading-[45px] xs:w-[200px] xs:h-[55px] md:w-[256px] xs:leading-[50px] md:h-[73px]  items-center md:leading-[65px] text-white bg-black/30 border-white border-[1px]">
            閃亮佳節
          </button>
          <button className="rounded-[46px] w-[150px] h-[50px] text-[18px] leading-[45px] xs:w-[200px] xs:h-[55px] md:w-[256px] xs:leading-[50px] md:h-[73px]  items-center md:leading-[65px] text-white bg-black/30 border-white border-[1px]">
            旅遊之樂
          </button>
          <button className="rounded-[46px] w-[150px] h-[50px] text-[18px] leading-[45px] xs:w-[200px] xs:h-[55px] md:w-[256px] xs:leading-[50px] md:h-[73px]  items-center md:leading-[65px] text-white bg-black/30 border-white border-[1px]">
            活力旅程
          </button>
        </div>
        <div className="md:text-[22px] text-[18px] text-center font-medium gap-x-10 xs:gap-x-20 text-white items-center flex justify-center mt-[50px] xl:mt-[80px]">
          <button className="ml-[2em] mr-[1em]">首頁</button>
          <div className="w-[1px] bg-white  h-[50px]"></div>
          <button>個人化服務</button>
        </div>
      </div>
    </main>
  )
}

export default App
