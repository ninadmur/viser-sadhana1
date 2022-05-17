import Userform from "../forms/user-form";
const UserModal = ({ user, setUserModal }) => {
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-30">
      <div className="flex relative justify-center h-full items-center ">
        <Userform user={user} setUserModal={setUserModal} />
      </div>
    </div>
  );
};
export default UserModal;
