export default function Header() {
  return (
    <div className="header">
      <div className="relative">
        <img
          className="justify-center w-full object-contain"
          src="https://images.unsplash.com/photo-1518281053204-48de9654fb37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="flex flex-col items-center justify-center absolute top-[25%] left-[5%] bg-white p-5 opacity-60">
          <span className="text-4xl">All things art related</span>
          <span className="text-2xl text-gray-800">by Viet Nguyen</span>
        </div>
      </div>
    </div>
  );
}
