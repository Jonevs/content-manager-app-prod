import axios from "axios";
import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";

const ResourceEdit = ({ resource }) => {
  const updateResource = (formData) => {
    alert(JSON.stringify(formData));
    axios
      .patch("/api/resources", formData)
      .then(() => alert("data has been updated"))
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm
              initialData={resource}
              onFormSubmit={updateResource}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `${process.env.API_URL}/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceEdit;
