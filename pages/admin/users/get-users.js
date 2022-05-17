import axios from "axios";
import { useState } from "react";
import Sidebar from "../../../components/admin/admin-sidebar";
import UserModal from "../../../components/admin/modals/user-modal";

const GetUsers = ({ data }) => {
  const [userModal, setUserModal] = useState(false);
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div className="w-3/4">
      <table className="w-full">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>is Admin</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((x, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{x.first_name}</td>
                  <td>{x.last_name}</td>
                  <td>{x.email}</td>
                  <td>{x.mobile_number}</td>
                  <td>{x.is_admin.toString()}</td>
                  <td>
                    <span
                      className="text-[#0066FF]"
                      onClick={() => {
                        setUser(x);
                        setUserModal(true);
                      }}
                    >
                      options
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {userModal && (
        <div className="absolute top-0">
          <UserModal user={user} setUserModal={setUserModal} />
        </div>
      )}
    </div>
  );
};
export default GetUsers;

export async function getServerSideProps(context) {
  const res = await axios.get("http://127.0.0.1:8000/auth/users");
  const data = await res.data;

  //   console.log(data);
  return { props: { data } };
}
