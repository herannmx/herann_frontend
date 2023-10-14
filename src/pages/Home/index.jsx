import { useContext } from "react";
import Header from "../../components/layout/Header";
import { DataContext } from "../../context/data";

const Home = () => {
  const { data, loading } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header data={data.headerData} /> {/* Access data.headerData */}
      <div className="banner">asds</div>
      <div className="container">
        <div className="services">
          <div className="section-title text-center">
            <h3 className="sub-title">What we provide</h3>
            <h2 className="title">
              We provide truly prominent digital solutions.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
