import img1 from '../../src/Components/SiteAssets/ImagesAssets/technext_logo.png';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
export default function Layout({children}) {
  return (
    <div>
      <Header imgURL={img1} />
      {children}
      <Footer />
    </div>
  );
}
