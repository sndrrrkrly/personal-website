import { Layout } from '../modules/layouts/Layout';
import { HeaderController } from '../modules/display/HeaderController';

import { Header } from '../modules/ui/header/Header';
import { Footer } from '../modules/ui/footer/Footer';

import { Works } from '../modules/works/Works';

const worksPage = () => {
     return (
          <>
               <HeaderController embed = {{}} title = 'Works' />

               <Header currentActiveItem = 'Works' />
                    <Layout>
                         <Works />
                    </Layout>
               <Footer />
          </>
     );
};

export default worksPage;