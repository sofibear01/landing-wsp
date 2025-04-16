import './App.css'
import whatsappLogo from './assets/logowhatsapp.svg'; // asegurate de tener el logo en assets

const App = () => {
  const whatsappNumber = '5493513955642';
  const whatsappMessage = 'Hola! Vi este anuncio y quiero crear un usuario, gracias.';

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100 flex-column'>
      <div className='wsp-box text-center'>
        <img src={whatsappLogo} alt="whatsapp-logo" className="logo-wsp mb-3" />

        <h1 className='titulo text-success fw-bold mb-4 mt-3'>Chateá con nosotros</h1>

        <div className='verificado mb-4'>
          Verificado por whatsapp
        </div>

        <p className='mb-4'>Hacé click para iniciar la conversación por WhatsApp.</p>

        <a
          className="btn-whatsapp mt-4"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chatear por WhatsApp
        </a>

      </div>
      <div className="footer">
        WhatsApp Inc. no almacena tu historial con terceros.
      </div>

    </div>
  );
};

export default App;