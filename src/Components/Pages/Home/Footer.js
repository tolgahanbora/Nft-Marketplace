import React from 'react'
import './HomeStyle/footerStyle.css'
function footer() {
    return (
        <div class="container-fluid footer p-0 m-0">
            <footer class="p-0">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
       <img src='https://assets-global.website-files.com/60f93c8e038fc32afa829f7d/61b7d20c374fbaf642e81f79_playnft-logo.png' class='thumbnail' alt='logo' id='footerlogo'/>
      </a>

                <ul class="nav justify-content-center  pb-3 mb-3" id='footerlist'>

                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"> Introduction</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Collect Token</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contact Us</a></li>
                
                </ul>
                
               
                <div class="icongroup " >
                <img src="https://cdn-icons-png.flaticon.com/512/665/665228.png" class="img-thumbnail " alt="twitter" id='twitter'/>
                <img src="https://mpng.subpng.com/20181120/osa/kisspng-computer-icons-scalable-vector-graphics-portable-n-facebook-full-svg-png-icon-free-download-81387-5bf42cb14a4f29.8036653615427288813044.jpg" id='face' class="img-thumbnail" alt="facebook"/>
                <img src="https://seeklogo.com/images/D/discord-white-logo-C1535032B8-seeklogo.com.png" class="img-thumbnail" id='discord' alt="Discord"/>
                <img src='https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png' class="img-thumbnail" alt='medium' id='medium' />
                <img src='https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png' class="img-thumbnail" alt='instagram' />
                
                </div>
                <p class="text-center text-muted" id='created'>© 2022 PlayNFT Company, Inc - Created By <span id='created2'> Tolgahan Bora</span></p>
            </footer>
        </div>
    )
}

export default footer