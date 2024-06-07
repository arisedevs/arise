import SocialMedia from "../components/SocialMedia";
import NavigationMenu from "../components/NavigationMenu";
import mainContent from "../constants/mainContent";


function Main() {

  const { name, title, phrase } = mainContent;

  return (
    <div className="h-auto lg:h-[calc(100vh-180px)] flex flex-col lg:justify-between lg:w-[550px] mr-auto w-full static lg:fixed mb-20 lg:mb-0">
      <div>
        <h1 className="text-6xl font-bold text-ivory mb-4">{name}</h1>
        <h3 className="inline-block px-3 py-1 text-xl font-normal border rounded-md text-baseBackground bg-ivory mb-7">{title}</h3>
        <p className="w-3/4 mb-12 lg:mb-16 text-md">{phrase}</p>

        <NavigationMenu />
      </div>
      
      <SocialMedia />
    </div>
  );
}

export default Main;
