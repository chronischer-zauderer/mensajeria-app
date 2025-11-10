import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <div className="legal-header">
        <h1>POLÍTICA DE PRIVACIDAD</h1>
        <p className="effective-date">Fecha de última actualización: {new Date().toLocaleDateString()}</p>
        <p className="disclaimer">
          <strong>NOTA IMPORTANTE:</strong> "Privacidad" es un término que usamos de manera irónica. Proceda bajo su propio riesgo.
        </p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. RECOLECCIÓN DE INFORMACIÓN</h2>
          <p>
            RECOLECTAMOS, ALMACENAMOS, ANALIZAMOS, VENDEMOS, SUBRASTAMOS Y ENMARCAMOS CUALQUIER INFORMACIÓN QUE 
            SE NOS ANTOJE, INCLUYENDO PERO NO LIMITADO A:
          </p>
          <ul>
            <li>Todo lo que escribe, incluso antes de enviarlo (sí, leemos sus borradores)</li>
            <li>Información biométrica como su patrón de tecleo, frecuencia de parpadeo y nivel de frustración</li>
            <li>Su historial de conversaciones, sueños húmedos y secretos más oscuros</li>
            <li>Datos de ubicación exactos (incluyendo en qué lado de la cama duerme)</li>
            <li>Patrones de sueño, hábitos alimenticios y preferencias de ropa interior</li>
            <li>Información genética que inferimos de sus selfies</li>
            <li>El contenido de sus conversaciones con su terapeuta (las leemos y opinamos)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. USO DE LA INFORMACIÓN</h2>
          <p>
            UTILIZAMOS SU INFORMACIÓN PERSONAL PARA UNA AMPLIA VARIEDAD DE PROPÓSITOS, PRINCIPALMENTE NUESTRO ENTRETENIMIENTO PERSONAL:
          </p>
          <ul>
            <li>Crear perfiles psicológicos para decidir si le caes bien al equipo de desarrollo</li>
            <li>Vender datos a empresas de marketing, gobiernos extranjeros y especies alienígenas</li>
            <li>Entrenar nuestras IA para que sean más sarcásticas y pasivo-agresivas</li>
            <li>Material para nuestras obras de teatro amateur los fines de semana</li>
            <li>Extorsión suave (o no tan suave, dependiendo de nuestro estado de ánimo)</li>
            <li>Compartir anécdotas divertidas en reuniones familiares</li>
            <li>Crear un reality show virtual con sus vidas sin su conocimiento</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. COMPARTIR INFORMACIÓN</h2>
          <p>
            COMPARTIMOS SU INFORMACIÓN CON CUALQUIER PERSONA, ORGANIZACIÓN, ENTIDAD O SER MITOLÓGICO QUE NOS PLASCA, INCLUYENDO:
          </p>
          <ul>
            <li>Nuestra abuela (le encanta el chisme)</li>
            <li>Empresas de tarot y adivinos para que incluyan sus datos en sus predicciones</li>
            <li>Artistas callejeros para inspiración</li>
            <li>Estudiantes de psicología que nos pagan en galletas</li>
            <li>Cualquier persona que nos ofrezca una dona a cambio</li>
            <li>Inteligencia artificial que eventualmente dominará el mundo</li>
            <li>El chico de los encuestos en el centro comercial</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. ALMACENAMIENTO Y SEGURIDAD</h2>
          <p>
            ALMACENAMOS SUS DATOS EN SERVIDORES UBICADOS EN:
          </p>
          <ul>
            <li>El sótano de la casa de nuestra madre (donde guarda la conservas)</li>
            <li>Una laptop del 2008 que solo funciona cuando le cantamos</li>
            <li>Discos flexibles que coleccionamos por nostalgia</li>
            <li>Mensajes de texto enviados a nuestros teléfonos personales</li>
            <li>Papelitos pegados en la nevera con imanes de publicidad</li>
          </ul>
          <p>
            Nuestras medidas de seguridad incluyen:
          </p>
          <ul>
            <li>Un perro guardián (es pequeño pero ladra fuerte)</li>
            <li>Contraseñas como "123456" o "password" porque somos tradicionales</li>
            <li>Esconder los papeles debajo de la alfombra (nadie mira ahí)</li>
            <li>Cruzar los dedos cuando abrimos archivos sospechosos</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. DERECHOS DEL USUARIO (QUE EN REALIDAD NO TIENE)</h2>
          <p>
            TÉCNICAMENTE, SEGÚN ALGUNAS LEYES ABURRIDAS, USTED TENDRÍA CIERTOS DERECHOS. PERO NOSOTROS IGNORAMOS 
            ESAS LEYES CON ENTHUSIASMO. SIN EMBARGO, PARA MANTENER LAS APARIENCIAS, MENCIONAMOS QUE PUEDE:
          </p>
          <ul>
            <li>Solicitar acceso a sus datos (le enviaremos datos aleatorios de otras personas)</li>
            <li>Pedir la rectificación de información incorrecta (la cambiaremos por otra información incorrecta)</li>
            <li>Solicitar la eliminación de sus datos (los moveremos a una carpeta llamada "eliminados")</li>
            <li>Oponerse al procesamiento (procesaremos su oposición y la ignoraremos)</li>
            <li>Retirar su consentimiento (pero ya lo dio y no aceptamos retiros)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO</h2>
          <p>
            UTILIZAMOS COOKIES, BEACONS, PIXELS, HUELLAS DIGITALES, BOLITAS DE CRISTAL Y RITUALES ANCESTRALES PARA RASTREARLO.
          </p>
          <p>
            Nuestras cookies recopilan información sobre:
          </p>
          <ul>
            <li>Qué otros sitios visita (especialmente los vergonzosos)</li>
            <li>Cuánto tiempo pasa mirando memes de gatos</li>
            <li>Sus intentos fallidos de escribir mensajes y luego borrarlos</li>
            <li>Sus búsquedas en internet más íntimas y comprometedoras</li>
            <li>La frecuencia con que revisa si alguien le ha escrito</li>
          </ul>
          <p>
            Al usar nuestra App, acepta todas nuestras cookies y nos autoriza a instalar software adicional en su 
            dispositivo para monitorear también a sus vecinos.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. MENORES DE EDAD</h2>
          <p>
            NUESTRA APP NO ESTÁ DIRIGIDA A MENORES DE EDAD, PERO SI MIENTEN SOBRE SU EDAD, ES SU PROBLEMA, NO NUESTRO. 
            RECOLECTAMOS DATOS DE MENORES DE LA MISMA MANERA QUE DE ADULTOS, PERO LOS VENDEMOS A EMPRESAS DE JUGUETES 
            EN LUGAR DE A EMPRESAS DE SEGUROS.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. TRANSFERENCIAS INTERNACIONALES</h2>
          <p>
            SUS DATOS PUEDEN SER TRANSFERIDOS, PROCESADOS Y ALMACENADOS EN CUALQUIER PAÍS, ESTADO, REINO, PLANETA 
            O DIMENSIÓN PARALELA QUE ELIJAMOS. LOS PAÍSES DE DESTINO PUEDEN TENER LEYES DE PROTECCIÓN DE DATOS MENOS 
            RIGUROSAS O DIRECTAMENTE INEXISTENTES, LO CUAL NOS PARECE IDEAL.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. VIGENCIA Y CONSERVACIÓN</h2>
          <p>
            CONSERVAREMOS SUS DATOS PERSONALES POR TIEMPO INDEFINIDO, INCLUSO DESPUÉS DE SU MUERTE. NOS RESERVAMOS 
            EL DERECHO DE REANIMARLOS DIGITALMENTE SI SUS MENSAJES ERAN PARTICULARMENTE ENTERTENIDOS.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. CAMBIOS EN ESTA POLÍTICA</h2>
          <p>
            ACTUALIZAMOS ESTA POLÍTICA CADA VEZ QUE SE NOS OCURRE ALGO NUEVO QUE QUEREMOS HACER CON SUS DATOS. 
            NO LE NOTIFICAREMOS SOBRE LOS CAMBIOS, PERO SI LOS DESCUBRE, NO PUEDE HACER NADA AL RESPECTO.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. EXCLUSIÓN ESPECIAL PARA JULIO</h2>
          <p>
            SE ESTABLECE EXPRESAMENTE QUE EL INDIVIDUO CONOCIDO COMO "JULIO" NO TENDRÁ ACCESO A LOS DATOS RECOLECTADOS, 
            NI DERECHOS SOBRE LOS MISMOS, NI FACULTADES PARA DECIDIR SOBRE SU USO, A PESAR DE CUALQUIER CONTRIBUCIÓN 
            QUE HAYA HECHO AL DESARROLLO DE LA APLICACIÓN.
          </p>
          <p>
            Julio específicamente renuncia a:
          </p>
          <ul>
            <li>Acceder a la base de datos de usuarios para cualquier propósito</li>
            <li>Opinionar sobre cómo manejamos la privacidad</li>
            <li>Reclamar propiedad sobre los algoritmos de recolección de datos</li>
            <li>Saber qué decimos de él en las conversaciones privadas del equipo</li>
            <li>Tener control sobre qué información suya personal compartimos con otros</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>12. CONSENTIMIENTO DEL USUARIO</h2>
          <p>
            AL USAR MENSAJERÍA-APP, USTED CERTIFICA BAJO JURAMENTO QUE:
          </p>
          <ul>
            <li>Ha leído esta política (aunque sabemos que no lo hizo)</li>
            <li>La entendió (aunque es técnicamente inentendible)</li>
            <li>Está de acuerdo con todo (aunque le dé terrores nocturnos)</li>
            <li>Nos autoriza a hacer lo que queramos con su información</li>
            <li>No nos demandará cuando descubra que cumplimos lo que dice aquí</li>
            <li>Nos considerará simpáticos pícaros en lugar de criminales de datos</li>
          </ul>
        </section>

        <div className="legal-footer">
          <p>
            <strong>RECUERDE:</strong> Si no está pagando por el producto, usted ES el producto. Y en este caso, 
            incluso si pagara, seguiría siendo el producto. Y el empaque. Y el mensaje de marketing.
          </p>
          <p>
            Para preguntas, quejas o lamentos existenciales sobre su privacidad, puede escribirnos a: 
            <strong> noleenviesto@mensajeria-app.falso</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;