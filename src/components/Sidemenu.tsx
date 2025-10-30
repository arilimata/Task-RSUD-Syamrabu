import PendapatanParkirSideMenu from "./PendapatanParkir/Sidemenu";
import SKMSideMenu from "./SKM/Sidemenu";
import Period from "./ui/Period";

function SideMenu({ currentPath }: { currentPath: string }) {
  return (
    <div className="flex flex-col w-full">
      {currentPath.includes("pendapatan-parkir") ? (
        <PendapatanParkirSideMenu />
      ) : currentPath.includes("skm") ? (
        <SKMSideMenu />
      ) : (
        <Period />
      )}
    </div>
  );
}

export default SideMenu;
