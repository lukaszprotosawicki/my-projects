function Instagram() {
  return (
    <>
      <section>
        <div className="main">
          <div className="container">
            <div className="bgc">
              <img src="img/phone.png" alt="" />
              <div className="bgc-windows">
                <img src="img/window.jpg" alt="" />
              </div>
            </div>
            <div className="account">
              <div className="cont1">
                <img
                  className="imginstagram"
                  src="img/instagram_text.png"
                  alt=""
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Numer telefonu, nazwa użytkownika lub adr..."
                />
                <input type="password" name="" id="" placeholder="Hasło" />
                <a className="login-btn" href="">
                  <p> Zaloguj się</p>
                </a>
                <div className="margin-className">
                  <div className="margin-left"></div>
                </div>
                <p>LUB</p>
                <div className="margin-right"></div>
              </div>
              <div className="login-fb">
                <div className="login-fb-position">
                  <img className="fb-icon" src="img/fb.png" alt="" />
                  <a href="">Zaloguj się przez Facebooka</a>
                </div>
                <div className="log-pass">
                  <a href="">Nie pamiętasz hasła?</a>
                </div>
              </div>
              <div className="cont2">
                <div className="cont2-style">
                  <p>Nie masz konto?</p>
                  <a href="">Zarejestruj się</a>
                </div>
              </div>
              <div className="cont3">
                <p>Pobierz aplikacje</p>
                <div className="icons">
                  <img src="img/appstore.png" alt="" />
                  <img src="img/googleplay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <nav>
          <a href="">INFORMACJA</a>
          <a href="">POMOC</a>
          <a href="">PRASA</a>
          <a href="">API</a>
          <a href="">PRACA</a>
          <a href="">PRYWATNOŚĆ</a>
          <a href="">REGULAMIN</a>
          <a href="">LOKALIZACJE</a>
          <a href="">NAJPOPULARNIEJSZE KONTA</a>
          <a href="">HASZTAGI</a>
          <a href="">JĘZYK</a>
          <p>© 2020 INSTAGRAM FACEBOOKA</p>
        </nav>
      </footer>
    </>
  );
}

export default Instagram;
