import axios from "axios";
import Sidebar from "../../../components/admin/admin-sidebar";
import Button from "../../../components/multiusable/button";
import { useState } from "react";
import SymptomModal from "../../../components/admin/modals/symptons-modals";
import Diseasemodal from "../../../components/admin/modals/desease-modals";

const GetSymptoms = ({ disease, symptom }) => {
  const [symptomModal, setSymptomModal] = useState(false);
  const [diseaseModal, setDiseaseModal] = useState(false);
  const [selected, setSelected] = useState("Symptoms");
  // setSelected("symptom");

  return (
    <div className="w-full">
      {symptomModal && <SymptomModal setSymptomModal={setSymptomModal} />}
      {diseaseModal && <Diseasemodal setDiseaseModal={setDiseaseModal} />}

      <div className="flex justify-end space-x-6 m-4 text-sm">
        <Button
          label="Add Symptom"
          color="bg-[#8FECFF]"
          onTap={() => setSymptomModal(true)}
        />
        <Button
          label="Add Disease"
          color="bg-[#8FECFF]"
          onTap={() => setDiseaseModal(true)}
        />
      </div>
      <div className="flex justify-start space-x-6 m-4 text-sm">
        <Button
          label="Symptoms"
          selected={selected}
          color="bg-[#8FECFF]"
          onTap={() => setSelected("Symptoms")}
        />
        <Button
          label="Diseases"
          selected={selected}
          color="bg-[#8FECFF]"
          onTap={() => setSelected("Diseases")}
        />
      </div>

      <div className="w-full">
        <table className="w-full ">
          <thead>
            <tr>
              <th>Name</th>
              <th>By User</th>
              <th>Added at</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {selected == "Diseases"
              ? disease.data.map((x, index) => {
                  return (
                    <tr key={index} className="text-center py-2 border-y-2">
                      <td className="py-2">{x.name}</td>
                      <td>{x.created_by}</td>
                      <td>{x.created_at}</td>
                      <td>
                        <span className="text-[#0066FF]">options</span>
                      </td>
                    </tr>
                  );
                })
              : symptom.data.map((x, index) => {
                  return (
                    <tr key={index} className="text-center  border-y-2">
                      <td>{x.name}</td>
                      <td>{x.created_by}</td>
                      <td>{x.created_at}</td>
                      <td>
                        <span className="text-[#0066FF]">more</span>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
// disease &&

export default GetSymptoms;

export async function getServerSideProps(context) {
  const diseaseResult = await axios.get("http://127.0.0.1:8000/app/symptoms");
  const disease = await diseaseResult.data;
  console.log(disease);

  const symptomResult = await axios.get("http://127.0.0.1:8000/app/symptoms");
  const symptom = await symptomResult.data;

  //   console.log(data);
  return { props: { disease, symptom } };
}
