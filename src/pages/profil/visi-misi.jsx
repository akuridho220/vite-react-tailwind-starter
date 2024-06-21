import Layout from "../../components/Layout";
import SideMenu from "../../components/SideMenu";

const VisiMisiPPID = () =>{
    return(
        <Layout subhead="Profil" detail="Visi dan Misi PPID NTB">
            <SideMenu konten="profil">
                <div>
                    <img src="..\src\assets\img\images\VisiMisi-PPIDNTB.jpeg" alt="visi misi" />
                </div>
            </SideMenu>
        </Layout>
    )
}

export default VisiMisiPPID;