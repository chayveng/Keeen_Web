import configApi from "../../../../configApi.json";
import axios from "axios";

function SendEmail(Job_ID) {
  const host_url = configApi.API_SERVER;
  console.log("**********> START <*********");
  if((sig1.length > 0 && sig2.length > 0) || (imgIdEditCus != "" && sig2.length > 0) || (imgIdEditEmp != "" && sig1.length > 0)
  ){
    console.log("Send Email liquidDispenser");
    axios.get(host_url + "/api/v1/PDFs/liquid/"+ job_ID+ "/send");
  }
  console.log("sig1: "+sig1);
  console.log("sig1: "+sig2);
  console.log("imgIdEdiCus: "+imgIdEditCus);
  console.log("imgIdEdiEmp: "+imgIdEditEmp);
  // return (
  //
  // );
}

export default SendEmail;
