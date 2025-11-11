import CircleElement from "@/app/components/ui/CircleElement";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center uppercase">Главная страница</h1>
      <div className="mb-100px bg-darkBlue mt-[100px] flex h-[300px] w-[300px] items-center justify-center border-[1px] border-solid border-black">
        <CircleElement>
          <span>
            1
          </span>
        </CircleElement>
      </div>
    </div>
  );
}
