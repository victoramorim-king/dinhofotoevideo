import Layout from "../components/layout";
import casamentoStyle from "../styles/casamento.module.css";
import Image from "next/image";


import CasamentoArLivrePic from '../public/casamento-ao-ar-livre.jpg';
import hC3 from '../public/h-casal-3.jpg'
import hC4 from '../public/h-casal-4.jpg'
import hC5 from '../public/h-casal-5.jpg'
import hC6 from '../public/h-casal-6.jpg'
import hM from '../public/h-makeoff-1.jpg'
import vC1 from '../public/v-casal-1.jpg'
import vC2 from '../public/v-casal-2.jpg'
import vC3 from '../public/v-casal-3.jpg'
import vC4 from '../public/v-casal-4.jpg'
import hN1 from '../public/h-noivo-1.jpg'
import vN1 from '../public/v-noiva-1.jpg'
import vN2 from '../public/v-noiva-2.jpg'
import vN3 from '../public/v-noiva-3.jpg'
import vN4 from '../public/v-noiva-4.jpg'
import { NextPage } from "next/types";

const Casamentos: NextPage = () => {
    return(
        <Layout>
            <div className={casamentoStyle.gallery}>    
                <div>
                    <p>.</p>
                </div>
                <Image
                 src={hC3}
                 height={300}
                 width={500}
                 className={casamentoStyle.pic1}
                >
                    
                </Image>
                <Image
                 src={hC4}
                 height={300}
                 width={500}
                 className={casamentoStyle.pic2}
                >
                </Image>
            </div>
        </Layout>

    ) 
}
export default Casamentos