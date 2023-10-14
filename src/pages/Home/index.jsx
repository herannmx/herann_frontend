import { useContext } from "react";
import Header from "../../components/layout/Header";
import HBanner from "../../components/HBanner";
import HCards from "../../components/HCards";
import { DataContext } from "../../context/data";

const Home = () => {
  const { data, loading } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header data={data.headerData} /> {/* Access data.headerData */}
      <HBanner/>
      <div className="container">
        <div className="services">
            <div className="section-title text-center">
                <h3 className="sub-title">What we provide</h3>
                <h2 className="title">We provide truly prominent digital solutions.</h2>
            </div>
            <div className="service-wrap">
                <HCards/>
                <HCards/>
                <HCards/>
                <HCards/>
            </div>  
            <div className="cta-wrap">
                <p>hola</p>
            </div>
        </div>     
      </div>
    </>
  );
};

export default Home;
