import st from '../css/components/Footer.module.css'
import PosyanduLogo from '../assets/logo.png'
import BinusLogo from '../assets/logo-binus.png'
import TFILogo from '../assets/TFI-logo.png'

function Footer() {
  return (
    <>
      <footer className={st.footerContainer}>
        <div className={st.footerWrapper}>
          <img src={PosyanduLogo} alt='Posyandu logo' />
          <div className={st.infoDisplay}>
            <ul>
              <li className={st.listTitle}>IT TEAM</li>
              <li>Kevin Tjang</li>
              <li>Nicholas Cahyadi</li>
              <li>Novenus</li>
              <li>Muhammad Fajar Zaki Putra</li>
              <li>Stevia Anlena Putri</li>
            </ul>
            <ul>
              <li className={st.listTitle}>RESEARCH TEAM</li>
              <li>Muhammad Kemal Attaturk</li>
            </ul>
            <ul>
              <li className={st.listTitle}>GRAPHIC DESIGN TEAM</li>
              <li>Nicholas Hambali</li>
            </ul>
            <ul>
              <li className={st.listTitle}>SUPPORTED BY
                <ul className={st.supportSection}>
                  <li><img src={BinusLogo} alt='BINUS logo' /></li>
                  <li><img src={TFILogo} alt='TFI logo' /></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p>© 2025 All Rights Reserved, Teach For Indonesia</p>
      </footer>
    </>
  )
}

export default Footer
