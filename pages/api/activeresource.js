import axios from "axios";

export default async function activeResource(req, res) {
  const axioRes = await axios.get(`${process.env.API_URL}/activeresource`);
  const resource = axioRes.data;

  return res.send(resource);
}
