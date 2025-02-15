class Mheader extends HTMLElement 
{
    connectedCallback()
    {
        this.innerHTML = 
              `
            <header>
            <link rel="icon" type="image/x-icon" href="./img/LOGO.png">
                <link rel="stylesheet" href="./style.css">
                <a href="./index.html">
                    <img src="./img/LOGO.jpg" alt="LOGO">
                </a>
                <h1>خورشید ایران</h1>
                <nav>
                    <ul>
                        <li><a href="./index.html">صفحه اصلی</a></li>
                        <li><a href="./AboutMain.html">زندگی نامه</a></li>
                        <li><a href="./Miras.html">میراث</a></li>
                        <li><a href="./Gallery.html">گالری تصاویر</a></li>
                        <li><a href="./Contectus.html">ارتباط باما</a></li>
                        <li><a href="./About.html">درباره ما</a></li>
                    </ul>
                </nav>
            </header>
                `;
    }
}

class Mfooter extends HTMLElement 
{
    connectedCallback()
    {
        this.innerHTML = 
              `<br><br>
              <footer>
                  <h3>
                  <a href="https://fa.wikipedia.org/wiki/%DA%A9%D9%88%D8%B1%D9%88%D8%B4_%D8%A8%D8%B2%D8%B1%DA%AF" target="_blank">
                  منبع : ویکی پدیا
                  </a>
                  </h3>
                  <h3>
                  <a href="./Contectus.html">
                  ارتباط باما
                  </a>
                  </h3>
                  <h3>
                  <a href="./About.html">تمامی حقوق برای Mc Duck Enterprises محفوظ است - 2019-2025</a>
                  </h3>
              </footer>
                `;
    }
}

customElements.define('m-header',Mheader);
customElements.define('m-footer',Mfooter);