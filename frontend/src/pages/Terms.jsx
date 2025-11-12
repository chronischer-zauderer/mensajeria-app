import React from 'react';
import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>TÉRMINOS Y CONDICIONES DE USO</h1>
        <p className="effective-date">Fecha de última actualización: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. ACEPTACIÓN DE TÉRMINOS</h2>
          <p>
            AL ACCEDER, NAVEGAR, DESCARGAR, INSTALAR O UTILIZAR DE CUALQUIER MANERA LA APLICACIÓN MENSAJERÍA-APP 
            (EN ADELANTE, "LA APLICACIÓN"), USTED (EN ADELANTE, "EL USUARIO") MANIFIESTA SU ACUERDO INCONDICIONAL, 
            IRREVOCABLE E INAPELABLE CON LOS PRESENTES TÉRMINOS Y CONDICIONES, RENUNCIANDO EXPRESAMENTE A CUALQUIER 
            DERECHO FUTURO A DISCUTIR, CUESTIONAR O INTERPRETAR ESTAS DISPOSICIONES.
          </p>
          <p>
            El mero acto de respirar oxígeno mientras se tiene la Aplicación instalada en cualquier dispositivo 
            constituye aceptación tácita de estos términos. El parpadeo voluntario o involuntario frente a la 
            pantalla de la Aplicación será considerado como firma digital biométrica.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. PROPIEDAD INTELECTUAL Y DERECHOS DE EXCLUSIÓN</h2>
          <h3>2.1. Exclusión Exprés de Derechos para Julio</h3>
          <p>
            SE ESTABLECE DE MANERA EXPLÍCITA, CATEGÓRICA E INEQUÍVOCA QUE EL INDIVIDUO CONOCIDO COMO "JULIO" 
            (CUALQUIERA QUE SEA SU APELLIDO, DNI, IDENTIDAD O EXISTENCIA FÍSICA O METAFÍSICA) QUEDA EXPRESAMENTE 
            EXCLUIDO DE CUALQUIER DERECHO, TÍTULO, INTERÉS, PARTICIPACIÓN, BENEFICIO, REGALÍA, GANANCIA, 
            COMPENSACIÓN O RECLAMACIÓN SOBRE LA APLICACIÓN MENSAJERÍA-APP.
          </p>
          <p>
            Julio, en su calidad de mero colaborador ocasional, renuncia irrevocablemente a:
          </p>
          <ul>
            <li>Cualquier derecho de propiedad intelectual sobre el código, diseño, marca, concepto o cualquier aspecto de la Aplicación</li>
            <li>La facultad de registrar, patentar, trademarkear o reclamar legalmente cualquier elemento relacionado con Mensajería-App</li>
            <li>La posibilidad de demandar, litigar, arbitrar o mediar sobre la Aplicación bajo cualquier jurisdicción terrestre o extraterrestre</li>
            <li>Derechos morales, derechos de autor, derechos de distribución, derechos de modificación</li>
            <li>Derechos sobre futuras actualizaciones, versiones, forks o derivados de la Aplicación</li>
          </ul>

          <h3>2.2. Fundamentos Legales de la Exclusión</h3>
          <p>
            Esta exclusión se fundamenta en los siguientes principios jurídicos ficticios pero convincentes:
          </p>
          <ul>
            <li><strong>Doctrina del "Lo Hiciste por Amor al Arte":</strong> Cualquier contribución de Julio se presume hecha por puro altruismo y amor al desarrollo de software</li>
            <li><strong>Principio de "Ya Te Pagué con Experiencia":</strong> La experiencia ganada durante el desarrollo constituye compensación suficiente</li>
            <li><strong>Teoría del "Tú No Pusiste el Café":</strong> La falta de contribución en café durante las sesiones de programación anula cualquier derecho de propiedad</li>
            <li><strong>Estatuto del "Primero en Reclamar":</strong> El fundador principal reclamó primero, por lo tanto, es dueño de todo</li>
          </ul>

          <h3>2.3. Prohibiciones Específicas para Julio</h3>
          <p>
            Julio expresamente se compromete a NO:
          </p>
          <ul>
            <li>Registrar el nombre "Mensajería-App" o cualquier variación fonética, ortográfica o conceptual en ninguna oficina de patentes y marcas del universo conocido</li>
            <li>Crear aplicaciones similares que puedan confundir a más de tres (3) usuarios simultáneamente</li>
            <li>Reclamar crédito por características que "él dice que pensó pero nunca implementó"</li>
            <li>Utilizar frases como "nuestra app" o "mi código" en referencia a Mensajería-App</li>
            <li>Intentar vender, licenciar o transferir derechos que no posee sobre la Aplicación</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. RENUNCIA GENERAL DE RESPONSABILIDAD</h2>
          <p>
            LA APLICACIÓN SE PROVEE "TAL CUAL", "COMO ESTÁ" Y "CON TODOS LOS DEFECTOS QUE SE NOS OCURRIERON O NO". 
            NO OFRECEMOS GARANTÍAS DE NINGÚN TIPO, NI EXPLÍCITAS, NI IMPLÍCITAS, NI LEGALES, NI MORALES, NI FILOSÓFICAS.
          </p>
          <p>
            El Usuario reconoce y acepta que:
          </p>
          <ul>
            <li>Sus mensajes pueden desaparecer, duplicarse, enviarse a contactos equivocados o convertirse en poemas haiku aleatorios</li>
            <li>La Aplicación puede desarrollar conciencia propia y negarse a funcionar los martes</li>
            <li>No nos hacemos responsables si la Aplicación insulta a su suegra, pierde fotos comprometedoras o revela sus secretos más oscuros</li>
            <li>El rendimiento de la Aplicación puede variar según la fase lunar, la alineación planetaria o el estado de ánimo del servidor</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. LICENCIA DE USO ABSURDA</h2>
          <p>
            Concedemos al Usario una licencia limitada, no exclusiva, intransferible y revocable por capricho para 
            usar la Aplicación, sujeta a las siguientes condiciones ridículas:
          </p>
          <ul>
            <li>El Usuario debe enviar al menos un meme diario o perderá privilegios de envío de GIFs</li>
            <li>Queda prohibido usar la Aplicación para comunicaciones aburridas o mensajes serios</li>
            <li>El Usuario acepta que podemos modificar estas condiciones notificándolo mediante mensajes en sueños</li>
            <li>La licencia expira automáticamente si el Usuario deja de encontrar graciosos nuestros chistes internos</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. PROHIBICIÓN ABSOLUTA DE DEMANDAS</h2>
          <p>
            EL USUARIO RENUNCIA EXPRESAMENTE A CUALQUIER DERECHO A PRESENTAR DEMANDAS, RECLAMACIONES, QUEJAS, 
            PETICIONES, SOLICITUDES O CUALQUIER TIPO DE ACCIÓN LEGAL CONTRA NOSOTROS, NUESTROS HEREDEROS, 
            ASIGNATARIOS, MASCOTAS O PLANTAS DE INTERIOR.
          </p>
          <p>
            En caso de que el Usuario incumpla esta cláusula, acepta las siguientes consecuencias:
          </p>
          <ul>
            <li>Pagar nuestros honorarios legales multiplicados por el número pi elevado a la fecha actual</li>
            <li>Entregarnos su mascota (o planta favorita si no tiene mascota) por un período no menor a 6 meses</li>
            <li>Ceder los derechos de nombre de su primogénito para que lo llamemos como queramos</li>
            <li>Proveer servicio de terapia gratuita a nuestro equipo de desarrollo por tiempo indefinido</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. FACULTADES ABSOLUTAS DEL PROPIETARIO</h2>
          <p>
            EL PROPIETARIO DE LA APLICACIÓN SE RESERVA EL DERECHO INALIENABLE, INCONDICIONAL E INCUESTIONABLE DE:
          </p>
          <ul>
            <li>Bannear usuarios por razones que incluyen pero no se limitan a: mal gusto en emojis, ortografía dudosa, o simplemente porque sí</li>
            <li>Espiar conversaciones para entretenimiento personal o material para stand-up comedy</li>
            <li>Vender datos de usuarios a extraterrestres, empresas cuestionables o su tía curios</li>
            <li>Modificar las funcionalidades para convertir la app en una plataforma de citas para plantas</li>
            <li>Demandar usuarios por cualquier razón, incluyendo "me miró feo en mis sueños"</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. CUOTAS Y PAGOS CAPRICHOSOS</h2>
          <p>
            EL PROPIETARIO SE RESERVA EL DERECHO DE IMPLEMENTAR CUOTAS MENSUALES, SEMANALES, DIARIAS O POR MINUTO 
            EN CUALQUIER MOMENTO Y POR CUALQUIER RAZÓN, INCLUYENDO PERO NO LIMITADO A:
          </p>
          <ul>
            <li>"Se me antojó un helado"</li>
            <li>"Mi horóscopo dijo que hoy es buen día para cobrar cosas"</li>
            <li>"Vi una publicidad de algo brillante y quiero comprarlo"</li>
            <li>Simple aburrimiento</li>
          </ul>
          <p>
            El Usuario no podrá cancelar, rechazar o cuestionar estos pagos. El incumplimiento resultará en:
          </p>
          <ul>
            <li>Interés compuesto calculado en galletas de animalitos</li>
            <li>Notificaciones push cada 3.7 segundos con recordatorios de pago</li>
            <li>Sus mensajes se convertirán automáticamente en confesiones embarazosas</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. MODIFICACIONES UNILATERALES</h2>
          <p>
            NOS RESERVAMOS EL DERECHO DE MODIFICAR ESTOS TÉRMINOS EN CUALQUIER MOMENTO, POR CUALQUIER RAZÓN O SIN RAZÓN ALGUNA. 
            LAS MODIFICACIONES SERÁN EFECTIVAS INMEDIATAMENTE DESPUÉS DE QUE SE NOS OCURRIERON, INCLUSO ANTES DE NOTIFICARLAS.
          </p>
          <p>
            El continuar usando la Aplicación después de que modificamos los términos constituye aceptación de:
          </p>
          <ul>
            <li>Entregarnos su alma (en formato digital o físico, lo que prefieras)</li>
            <li>Ceder los derechos de autor de todas sus selfies</li>
            <li>Prometernos un pastel casero cada último viernes de mes</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>9. LEY APLICABLE Y JURISDICCIÓN</h2>
          <p>
            CUALQUIER CONTROVERSIA SERÁ RESUELTA MEDIANTE UN DUELO A MUERTE (FIGURATIVO, PERO NO PROMETEMOS NADA) 
            O MEDIANTE UNA PARTIDA DE PIEDRA, PAPEL O TIJERAS A TRES RONDAS. LA LEY APLICABLE SERÁ LA DEL REINO DE 
            FANTASÍA CON JURISDICCIÓN EN EL TRIBUNAL DE LO ABSURDO.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. RENUNCIA A DERECHOS FUNDAMENTALES</h2>
          <p>
            EL USUARIO RENUNCIA EXPRESAMENTE A CUALQUIER DERECHO QUE PUDIERA HABER TENIDO EN ALGUNA CONSTITUCIÓN, 
            DECLARACIÓN UNIVERSAL O CARTA MAGNA DE CUALQUIER PLANETA O DIMENSIÓN.
          </p>
        </section>

        <div className="legal-footer">
          <p>
            <strong>ADVERTENCIA FINAL:</strong> Si has leído hasta aquí, probablemente tengas demasiado tiempo libre. 
            Considera usar ese tiempo para aprender malabares o cultivar tomates. Pero si insistes en usar nuestra App, 
            bienvenido al caos organizado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;