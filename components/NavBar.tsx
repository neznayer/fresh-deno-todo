export default function NavBar() {
  return (
    <header class="absolute px-3 py-2 left-0 right-0 top-0 h-[50px] bg-blue-300 flex items-center justify-between text-white">
      <h1 class="text-lg">Todo app</h1>
      <nav class="text-sm">
        <ul class="list-none flex flex-row justify-between ">
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
    </header>
  );
}
