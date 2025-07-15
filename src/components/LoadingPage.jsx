
import Loader1 from "./Loader1"
const LoadingPage = () => {
  return (
    <div className="w-full bg-slate-100 dark:bg-card h-screen flex flex-col gap-6 items-center justify-center">
      <Loader1 />
      <div className="w-fit flex gap-2 text-[var(--main-blue)]">
        <span className="size-2 rounded-full bg-[var(--main-blue)] loaderPageLoader"></span>
        <span className="size-2 rounded-full bg-[var(--main-blue)] loaderPageLoader"></span>
        <span className="size-2 rounded-full bg-[var(--main-blue)] loaderPageLoader"></span>
        <span className="size-2 rounded-full bg-[var(--main-blue)] loaderPageLoader"></span>
      </div>
    </div>
  )
}

export default LoadingPage