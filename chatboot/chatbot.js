document.getElementById('home-btn').addEventListener('mouseenter', function () {
    const messageBox = document.getElementById('message-box');
    messageBox.classList.remove('hidden'); // Muestra el cuadro de mensaje instantáneamente
    });
    document.getElementById('home-btn').addEventListener('mouseleave', function () {
    const messageBox = document.getElementById('message-box');
    messageBox.classList.add('hidden'); // Oculta el cuadro de mensaje instantáneamente
    });
    
    const chatInput = document.querySelector(".chat-input textarea");
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatbox = document.querySelector(".chatbox");
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbotCloseBtn = document.querySelector(".close-btn");
    // let userMessage;
    // const RASA_API_URL = "https://chatbottest.esam.edu.bo/webhooks/rest/webhook";
    // const RASA_API_URL = "http://localhost:5005/webhooks/rest/webhook";
    const createChatLi = (message, className) => {
      const chatLi = document.createElement("li");
      chatLi.classList.add("chat", className);
      let chatContent =
          className === "outgoing"
              ? `<p></p>`
              : `<span>
    <svg width="45" height="50" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_227_2)">
    <path d="M1.52559 12.3096C1.51059 10.5141 1.86159 7.10905 4.37859 4.46455C6.32859 2.41555 9.23859 1.20655 12.3646 1.14505C15.2986 1.08655 18.0256 2.06755 19.8436 3.83455C21.1936 5.14555 22.1041 6.96055 22.4806 9.08155L21.7771 9.20605C21.4276 7.23205 20.5876 5.55205 19.3456 4.34605C17.6641 2.71255 15.1231 1.80505 12.3796 1.85905C9.44409 1.91605 6.71709 3.04555 4.89759 4.95655C2.55459 7.41805 2.22759 10.6161 2.24109 12.3036L1.52559 12.3096Z" fill="#112F5E"/>
    <path d="M1.93662 13.8457L0.553619 13.8742C0.279119 13.8802 0.0496195 13.6597 0.0436195 13.3852L0.000119609 11.3482C-0.00588039 11.0737 0.21462 10.8442 0.48912 10.8382L1.87212 10.8097C2.14662 10.8037 2.37612 11.0242 2.38212 11.2987L2.42562 13.3357C2.43162 13.6102 2.21112 13.8397 1.93662 13.8457Z" fill="#AEDFF6"/>
    <path d="M3.16812 9.49088L2.85912 14.9359C2.85612 14.9974 2.79912 15.0409 2.73762 15.0289L1.21362 14.7229C1.10712 14.7019 1.01412 14.6404 0.954122 14.5519C0.792122 14.3119 0.564122 13.7014 0.562622 12.1639L0.636122 10.6654C0.642122 10.5394 0.705122 10.4239 0.807122 10.3504C1.10412 10.1359 1.82112 9.69338 3.03312 9.37988C3.10212 9.36338 3.17262 9.41888 3.16812 9.49088Z" fill="#112F5E"/>
    <path d="M12.5297 1.53408L11.6841 1.50879L11.622 3.58396L12.4677 3.60925L12.5297 1.53408Z" fill="white" stroke="#78CBF9" stroke-width="2" stroke-miterlimit="10"/>
    <mask id="mask0_227_2" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="17" width="7" height="2">
    <path d="M11.1571 18.194C11.1571 18.194 16.4686 18.4715 17.8171 17.2085C17.8171 17.2085 13.2151 17.6405 11.1571 18.194Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_227_2)">
    <path d="M17.8171 17.2085H11.1571V18.4715H17.8171V17.2085Z" fill="#1E3E67"/>
    </g>
    <path d="M6.14712 18.2796L18.5281 17.6811C19.4941 17.6346 20.3551 17.0436 20.7271 16.1496C20.9626 15.5811 21.1876 14.7981 21.3466 13.7241C21.3466 13.7241 23.7676 4.4436 13.9306 3.1191C13.8481 3.1086 13.7866 3.1041 13.7416 3.0996C12.9961 3.0291 7.73412 2.6106 4.84362 5.9811C3.98562 6.9816 3.65412 7.9431 3.30912 8.9466C3.14112 9.4341 1.31112 14.9691 4.05912 17.3436C4.43412 17.6676 5.07912 18.0921 6.14712 18.2796Z" fill="white" stroke="#78CBF9" stroke-width="2" stroke-miterlimit="10"/>
    <path d="M19.6786 5.77686C15.5566 9.32436 10.0396 13.6759 4.0426 17.3254C4.0486 17.3314 4.0546 17.3374 4.0606 17.3419C4.4341 17.6659 5.0791 18.0904 6.1471 18.2779L18.5281 17.6794C19.4956 17.6329 20.3551 17.0419 20.7271 16.1479C20.9626 15.5794 21.1891 14.7964 21.3466 13.7224C21.3466 13.7239 22.5871 8.96586 19.6786 5.77686Z" fill="#B8CCDE"/>
    <path d="M15.2821 4.8904C13.3891 4.5169 9.33459 4.1119 6.39159 6.6064C5.67909 7.2109 5.15859 8.0149 4.87659 8.9059C4.26309 10.8424 3.78459 14.5009 7.88859 16.5259C8.47359 16.8139 9.11109 16.9774 9.76059 17.0299C11.9056 17.1994 17.1991 17.3014 19.1041 14.4199C19.2496 14.1994 19.3636 13.9624 19.4641 13.7179C20.0086 12.3964 21.1501 8.5174 17.2771 5.7394C16.6816 5.3149 15.9991 5.0314 15.2821 4.8904Z" fill="#064F94"/>
    <path d="M19.4866 8.2879C19.0666 7.4059 18.3721 6.5299 17.2741 5.7409C16.6801 5.3149 15.9976 5.0314 15.2806 4.8904C13.3876 4.5169 9.33314 4.1119 6.39014 6.6064C6.32264 6.6649 6.25664 6.7249 6.19214 6.7864C8.69864 5.8864 12.8161 5.7574 19.4866 8.2879Z" fill="#1C4381"/>
    <path d="M23.5996 12.6608L22.2211 12.5468C21.9466 12.5243 21.7411 12.2813 21.7636 12.0068L21.9301 9.97579C21.9526 9.70129 22.1956 9.49579 22.4701 9.51829L23.8486 9.63229C24.1231 9.65479 24.3286 9.89779 24.3061 10.1723L24.1396 12.2033C24.1156 12.4778 23.8741 12.6833 23.5996 12.6608Z" fill="#AEDFF6"/>
    <path d="M8.57421 6.97079C9.14396 6.86731 9.56082 6.53564 9.50531 6.22998C9.44979 5.92432 8.94292 5.76042 8.37317 5.8639C7.80342 5.96738 7.38656 6.29905 7.44207 6.60471C7.49759 6.91037 8.00446 7.07427 8.57421 6.97079Z" fill="white"/>
    <path d="M11.8816 2.02997C11.6641 1.97897 11.4706 1.85747 11.3266 1.68197C11.1526 1.47047 11.0701 1.20197 11.0971 0.928973C11.1526 0.364973 11.6566 -0.0505271 12.2206 0.00497289C12.7861 0.0604729 13.2001 0.564473 13.1446 1.12847C13.1176 1.40147 12.9856 1.64897 12.7741 1.82297C12.5611 1.99697 12.2941 2.07947 12.0211 2.05247C11.9731 2.04947 11.9266 2.04047 11.8816 2.02997ZM12.1921 0.724973C12.1786 0.721973 12.1651 0.718973 12.1501 0.717473C11.9776 0.700973 11.8246 0.826973 11.8081 0.999473C11.8006 1.08347 11.8246 1.16447 11.8786 1.22897C11.9311 1.29347 12.0061 1.33397 12.0901 1.34147C12.1741 1.35047 12.2551 1.32497 12.3196 1.27247C12.3841 1.21997 12.4246 1.14347 12.4321 1.06097C12.4486 0.901973 12.3436 0.759473 12.1921 0.724973Z" fill="#AEDFF6"/>
    <path d="M21.3241 8.74097L21.2476 13.3595C21.2446 13.5695 21.4036 13.7465 21.6136 13.763L22.7041 13.853C22.8031 13.8605 22.9021 13.832 22.9801 13.7705C23.0191 13.7405 23.0626 13.7045 23.1106 13.664C23.3716 13.4405 23.5321 13.121 23.5606 12.7775L23.7976 9.89897C23.7976 9.89897 24.0151 8.90297 21.8221 8.35997C21.5716 8.29847 21.3286 8.48447 21.3241 8.74097Z" fill="#112F5E"/>
    <path d="M8.70506 12.122C9.49871 12.0592 10.068 11.0717 9.97652 9.91628C9.88508 8.76091 9.16757 7.87521 8.37392 7.93802C7.58027 8.00084 7.01102 8.98838 7.10246 10.1438C7.1939 11.2991 7.91141 12.1848 8.70506 12.122Z" fill="#B1E0EF"/>
    <path d="M17.5356 10.5206C17.5942 9.31753 16.9972 8.3108 16.202 8.27203C15.4068 8.23326 14.7147 9.17712 14.656 10.3802C14.5974 11.5833 15.1944 12.59 15.9896 12.6288C16.7847 12.6676 17.4769 11.7237 17.5356 10.5206Z" fill="#B1E0EF"/>
    <path d="M10.4882 12.3017L13.8332 12.2207C13.8332 12.2207 14.0432 14.4797 12.2402 15.0227C10.4387 15.5657 10.4882 12.3017 10.4882 12.3017Z" fill="#B1E0EF"/>
    </g>
    <defs>
    <clipPath id="clip0_227_2">
    <rect width="25" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    </span><p></p>`;
    chatLi.innerHTML = chatContent;
    const pElement = chatLi.querySelector("p")
    if (className === "outgoing") {
      chatLi.querySelector("p").textContent = message;
    } else {
      chatLi.querySelector("p").innerHTML = message;
    }
    return chatLi;
    };
    const responses = {
    "Uso general de Moodle": `Si es la primera experiencia que esta ingresando al moodle puede pedir ayuad al area TI:<br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59171014010?text=Buenas Ing.,%20quisiera que me%20pueda%20mi%20colaborar mi Nombre es:.', '_blank')">Pedir ayuda</button>`,
    "Área Académica": `El área académica se enacarga de planes de estudio, notas, exámenes puedes Hablar con el encargad@. cualquier consulta que tengas puedes contactarte:<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59173360695?text=Hola,%20nesecito%20de%20su%20conlaboracion mi Nombre es:.', '_blank')">Contactarme</button>`,
    "Area TI": "El área de Tecnología de la Información (TI) gestiona la infraestructura, el soporte técnico y los servicios tecnológicos para garantizar el funcionamiento eficiente de la organización",
    "Otros": `Para más referencia puedes consultar al asistente virtual.<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/20/18/20250120181142-BKEDTJ2R.json', 'LumiBot', 'width=400,height=580');">Hablar con LumiBot + IA</button>`,
    "Area Contable": `En el área contable puedes consultar tu estado de cuenta, pagos pendientes, facturas y otros trámites relacionados con las finanzas.<br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; margin: 5px; border-radius:5px;" onclick="window.open('https://participantes.esam.edu.bo/login/?callbackUrl=https%3A%2F%2Fparticipantes.esam.edu.bo%2F', '_blank')">Ver mi pago</button><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59171863154?text=Como esta,%20hablo con el&20area%20contable?%20mi Nombre es:', '_blank')">Contactarme</button>`,
    "Soporte técnico": `Veo que tienes problemas relacionados con el acceso al sistema o su funcionamiento puedes hablar con: <button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/20/18/20250120181142-BKEDTJ2R.json', '_blank', 'width=360,height=500,scrollbars=yes')">Asistente virtual +IA</button>o puedes contactarte con el responsable de TI<br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59163365875?text=Buenas Ing,%20quisiera que me%20pueda%20colaborar mi nombre es:', '_blank')">Hablar con el soporte</button>`,
    "Habla con LumiBot +IA": `Puede que te pueda ayudar el asistente virtual<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/20/18/20250120181142-BKEDTJ2R.json', '_blank', 'width=360,height=500,scrollbars=yes')">Asistente virtual +IA</button>`,
    "Acceso a cursos": "Para acceder a un curso, inicia sesión y selecciona el curso desde tu panel de control. También puedes buscar cursos específicos por nombre o categoría.",
    "Planes de estudio": `Los planes de estudio son los documentos que detallan las materias que debes cursar según tu Fomacion Profesional. Consulta los planes específicos de tu Fomacion<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59163750724?text=Hola,%20me%20puede%20proporcionar%20los planes de estudio.', '_blank')">Maestria</button>`,
    "Mi Nota": `Para ver tus notas puedes ingresar a moodle dirijirte al apartado de calificaciones o directamente consultar<br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://moodle.esam.edu.bo/login/index.php', '_blank')">Ingresar al moodle</button><br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59173360695?text=Hola,%20me puede%20proporcionar%20mi nota%20mi Nombre es:.', '_blank')">Consultar</button>`,
    "Hablar con LumiBot +IA": "Hablando con IA..",
    "Planes de estudio": `Claro, puedo ayudarte Si necesitas más información o contactar directamente con ellos, puedes hacer clic en el siguiente botón para comunicarte con:<br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59173355489?text=Hola,%20me%20gustaria%20obtener%20mas%20informacion%20¿Podrían%20ayudarme,%20por%20favor?.', '_blank')">Contactar</button>`,
    "Solicitar certificado": `Para solicitar tu certificado, puedes comunicarte con la persona responsable:.<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59174443230?text=Hola,%20quisiera%20solicitar%20mi%20certificado mi Nombre es:.', '_blank')">Contactarme</button>`,
    "Ver mis calificaciones": `Ingrensando al moodle en el apartado de calificaciones puedes ver.<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://moodle.esam.edu.bo/login/index.php', '_blank')">Moodle</button>`,
    "Estado del título": `Para obtener detalles sobre el estado de tu título, te recomendamos contactar directamente con la administración al siguiente link con Lic Fany:.<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59174443230?text=Hola,%20quisiera%20amablemente%20solicitar%20información%20sobre%20el%20proceso%20y%20estado%20de%20mi%20título.%20Agradezco%20mucho%20su%20atención%20y%20quedo%20a%20disposición%20para%20cualquier%20detalle%20adicional.%20Muchas%20gracias.', '_blank')">Contactarme</button>`,
    "Ver estado de cuenta": `Para ver tus pagos puedes contactarte directamente con la encargada de Finanzas <button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59171863154?text=Hola,%20me%20puede verificar%20el%20estado%20de pago mi Nombre es:.', '_blank')">Contactarme</button><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://participantes.esam.edu.bo/login/?callbackUrl=https%3A%2F%2Fparticipantes.esam.edu.bo%2F', '_blank')">Ver en el moodle</button>`,
    "Plazo para mi tarea": `Si el tiempo limite a expirado de tu entraga de tarea puedes contactarte con:<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59163750724?text=Hola,%20por%20favor%20solicito%20plazo%20para%20mi%20entrega%20de%20mi%20tarea.', '_blank')">Asistente Academicos:</button>`,
    "Ver video": `Tenemos tutorial de como ingresar al moodle dale clik<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://youtu.be/2hiXzkzpLcs', '_blank', 'width=490,height=370', '_blank')">Aqui</button>`,
    "Pagar": `Puedes pagar mediante QR y enviar el comprobante o contactarte directamente con el area:<br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" <button onclick="window.open('https://i.ibb.co/yn62nyp/QR-gerenado-por-esam.jpg', '_blank', 'width=500,height=600');">Generar QR</button><br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59171863154?text=Hola,%20he%20realizado%20mi%20pago por QR mi nombre es:', '_blank')">Enviar Comprobante</button><br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59171863154?text=Hola,%20quiero%20realizar%20el%20pago mi Nombre es:', '_blank')">Contactarme</button>`,
    // "Precio de titulo": `Para más información, de saldo de tu titulo puedes contactarte<button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59171014010?text=Hola,%20me puede%20proporcionar%20el%20precio de mi titulo mi Nombre es:.', '_blank')"> Contartarme</button>`,
    "Acceder a plataforma": "Seleccione a que universidad perteneces",
    "": ".",
    "Ver Requisitos": `Para que puedas ver los requisitos puedes dar clik en el siguiente boton:<br><br><button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" <button onclick="window.open('https://i.ibb.co/CHttKqp/Reguisitos.jpg', '_blank', 'width=400,height=600');">Ver requisitos</button>`,
    "Desbloqueo de la Plataforma": `Si ya pagaste tus mensualidades y no puedes acceder a la plataforma, ponte en contacto con area de finanzas. Haz clic en el siguiente botón para enviarnos un mensaje por WhatsApp: <button style="border:none; background:#084e8b; color:#ffffff; cursor:pointer; padding:5px 10px; border-radius:5px;" onclick="window.open('https://wa.me/59164463023?text=Hola,%20me%20puede%20reactivar%20en%20la%20plataforma%20por%20favor%20mi%20Nombre%20es:', '_blank')">Aquí</button>`
    };
    
    const handleButtonClick = (payload, title) => {
    userMessage = payload;
    chatbox.appendChild(createChatLi(title, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    // Mostrar la respuesta directamente en lugar de "Pensando..."
    const responseMessage = responses[title] || "Pensando......";
    setTimeout(() => {
    const incomingChatLi = createChatLi(responseMessage, "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    // Mostrar botones de sugerencias adicionales
    showSuggestionButtons(title); 
    }, 500);
    };
    const showSuggestionButtons = (title) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    
    let button1, button2, button3, button4;
    let button5, button6, button7, button8;
    
    if (title === "Uso general de Moodle") {
    button1 = createButton("Hablar con LumiBot +IA", "Hablar con LumiBot +IA");
    button1.onclick = function() {
      window.open("https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/20/18/20250120181142-BKEDTJ2R.json", "LumiBot", "width=400, height=580");
    };
    button2 = createButton("¿Como Ingresar al moodle?", "Ver video");
    button3 = createButton("Acceder a plataforma", "Acceder a plataforma");
    button4 = createButton("Ver calificaciones", "Ver mis calificaciones");
    } else if (title === "Área Académica") {
    button1 = createButton("Planes de estudio", "Planes de estudio");
    button2 = createButton("Ver Requisitos", "Ver Requisitos");
    button3 = createButton("Consultar mi nota", "Mi Nota");
    button4 = createButton("Pedir plazo para mi tarea", "Plazo para mi tarea");
    }
    else if (title === "Plazo para mi tarea") {
    button1 = createButton("Hablar con coodinadora", "https://wa.me/59173360695?text=Hola,%20nesecito%20su%20ayuda%20mi Nombre es:");
    button2 = createButton("Seguimiento", "https://wa.me/59167609993?text=Hola,%20nesecito%20su%20ayuda%20mi Nombre es:");
    // <!-- button3 = createButton("Área Titulaciones", "Área Titulaciones"); -->
    button4 = createButton("Admiciones", "https://wa.me/59173355489?text=Hola,%20nesecito%20su%20ayuda%20mi Nombre es:");
    } else if (title === "Area TI") {
    button1 = createButton("Soporte técnico", "Soporte técnico");
    button2 = createButton("Habla con LumiBot +IA", "Habla con LumiBot +IA");
    button3 = createButton("¿Como ingresar al moodle?", "");
    button3.onclick = function() {
      window.open("https://youtu.be/2hiXzkzpLcs", "ingresar", "width=500, height=350");
    };
    button4 = createButton("¿Como subir mi tarea?", "");
    button4.onclick = function() {
      window.open("https://youtu.be/s0Vb0_SflKQ", "subir", "width=500, height=350");
    };
    } 
    else if (title === "Planes de estudio") {
    button1 = createButton("Diplomado", "https://i.ibb.co/zXxvnkQ/Whats-App-Image-2025-01-03-at-19-27-21.jpg");
    button2 = createButton("Mestrias", "https://i.ibb.co/zXxvnkQ/Whats-App-Image-2025-01-03-at-19-27-21.jpg");
    button3 = createButton("Hablar con la coodinador@", "https://wa.me/59173360695?text=Hola,%20un%20gusto%20saludarle%20mi%20Nombre%20es:.");
    button4 = createButton("Otros", "Otros");
    } 
    else if (title === "Area Contable") {
    button1 = createButton("Ver estado de cuenta", "Ver estado de cuenta");
    button2 = createButton("Pagar", "Pagar");
    button3 = createButton("Consultar asistente +IA", "");
    button3.onclick = function() {
      window.open("https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/20/18/20250120181142-BKEDTJ2R.json", "Consultar", "width=500, height=600");
    };
    button4 = createButton("Desbloqueo de la Plataforma", "Desbloqueo de la Plataforma");
    } else if (title === "Acceder a plataforma") {
    button1 = createButton("Universidad SIGLO XX", "https://moodle.esam.edu.bo/login/index.php");
    button2 = createButton("Consultar asistente +IA", "");
    button2.onclick = function() {
      window.open("https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/20/18/20250120181142-BKEDTJ2R.json", "Consultar", "width=500, height=600");
    };
    button3 = createButton("Pedir mis datos de acceso", "https://wa.me/59163365875?text=Hola,%20me%20puedes%20proporcionar%20mis%20datos%20de%20acceso%20al%20Moodle?%20Mi%20Nombre%20es:.");
    button4 = createButton("Reportar problema", "Soporte técnico");
    }else if (title === "Examenes") {
    button1 = createButton("Ver de  SIGLO XX", "https://moodle.esam.edu.bo/login/index.php");
    button2 = createButton("Ver de  UAP", "https://virtual2.posgradouap.edu.bo/login/index.php");
    button3 = createButton("Contactarme", "https://wa.link/u1xtx7");
    button4 = createButton("Pedir Plazo", "Área Titulaciones");
    } else if (title === "Ver mis calificaciones") {
    button1 = createButton("Universidad SIGLO XX", "https://moodle.esam.edu.bo/login/index.php");
    button2 = createButton("Universidad UAP", "https://virtual2.posgradouap.edu.bo/login/index.php");
    button3 = createButton("Ver video", "https://wa.link/u1xtx7");
    button4 = createButton("No tengo acceso ala plataforma", "Área Titulaciones");
    } else {
    return; // Si no necesita sugerencias, no hacemos nada
    }
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    buttonContainer.appendChild(button3);
    buttonContainer.appendChild(button4);
    
    chatbox.appendChild(buttonContainer);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    // Reasignar los eventos de los botones
    [button1, button2, button3, button4].forEach(button => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-message").startsWith("http")) {
          window.open(button.getAttribute("data-message"), "_blank");
      } else {
          handleButtonClick(button.getAttribute("data-message"), button.getAttribute("data-message"));
      }
    });
    });
    };
    // Crear un botón con un mensaje
    const createButton = (text, message) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("response-button");
    button.setAttribute("data-message", message);
    return button;
    };
    // FUNCION DE API
    // Variables ya creadas
    let chatboxt = document.getElementById('chatbox');
    let chatInputt = document.getElementById('message-box');
    // Función para crear un nuevo mensaje en el chat
    const createChatLti = (text, type) => {
    const li = document.createElement('li');
    li.classList.add(type); // 'outgoing' o 'incoming'
    li.textContent = text;
    return li;
    };
    
    // Función para manejar el chat de usuario
    const handleChat = async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";  // Limpiar el campo de entrada
    // Mostrar el mensaje del usuario en el chat
    chatbox.appendChild(createChatLi(userMessage, 'outgoing'));
    chatbox.scrollTo(0, chatbox.scrollHeight);  // Hacer scroll al final
    // Mostrar "Procesando..." mientras esperamos la respuesta de la API
    const processingMessage = createChatLi('Procesando...', 'incoming');
    chatbox.appendChild(processingMessage);
    chatbox.scrollTo(0, chatbox.scrollHeight);  // Hacer scroll al final
    // Llamar a la API para obtener la respuesta
    await getResponseFromAPI(userMessage, processingMessage);
    };
    // Función para llamar a la API de OpenAI
    async function getResponseFromAPI(message, processingMessage) {
    const apiKey = '';  // Reemplaza con tu clave API de OpenAI
    try {
    // Llamada a la API de OpenAI
    const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',  // Modelo de OpenAI
      prompt: message,  // Usar el mensaje del usuario como prompt
      max_tokens: 150,  // Limitar la longitud de la respuesta
      temperature: 0.7,  // Control de creatividad
      top_p: 1,  // Control de diversidad
      frequency_penalty: 0,  // Evitar repeticiones
      presence_penalty: 0  // Evitar respuestas genéricas
    })
    });
    const data = await response.json();
    // Eliminar el mensaje de "Procesando..."
    chatbox.removeChild(processingMessage);
    
    // Verificar si la API devolvió una respuesta válida
    if (data.choices && data.choices.length > 0) {
    const apiResponse = data.choices[0].text.trim();
    // Mostrar la respuesta de la API en el chat
    const incomingMessage = createChatLi(apiResponse, 'incoming');
    chatbox.appendChild(incomingMessage);
    } else {
    // Si no hay respuesta, mostrar un mensaje por defecto
    const incomingMessage = createChatLi("<span style='color: #b22222; background-color: #ffcccc;'>Lo siento no tengo capacidad para derte respuesta, tiene al asistente v.1.0 con +IA o puede seguir usando con sugerencia de botones</span>", 'incoming');
    chatbox.appendChild(incomingMessage);
    }
    chatbox.scrollTo(0, chatbox.scrollHeight);  // Hacer scroll al final
    } catch (error) {
    console.error('Error al obtener respuesta de la API:', error);
    // Si hay un error, eliminar el "Procesando..." y mostrar un mensaje de error
    chatbox.removeChild(processingMessage);
    const incomingMessage = createChatLi("Hubo un error al procesar tu mensaje. Intenta de nuevo más tarde.", 'incoming');
    chatbox.appendChild(incomingMessage);
    chatbox.scrollTo(0, chatbox.scrollHeight);  // Hacer scroll al final
    }
    }
    // FUNCION DE API
    // Función para crear un elemento de chat
    const createChatLt = (message, type) => {
    const li = document.createElement("li");
    li.classList.add(type);
    li.textContent = message;
    return li;
    };
    // Cambiar el evento de los botones
    const buttons = document.querySelectorAll(".response-button");
    buttons.forEach(button => {
    button.addEventListener("click", () => {
      const message = button.getAttribute("data-message");
      handleButtonClick(message, message);
    });
    });
    // Ajustar el tamaño del campo de texto
    chatInput.addEventListener("input", () => {
    chatInput.style.height = "auto";
    chatInput.style.height = `${chatInput.scrollHeight}px`;
    });
    chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
    });
    chatbotToggler.addEventListener("click", function () {
    const isShown = document.body.classList.toggle("show-chatbot");
    if (isShown) {
      chatbotToggler.classList.add("show-chatbot");
    } else {
      chatbotToggler.classList.remove("show-chatbot");
    }
    });
    chatbotCloseBtn.addEventListener("click", () =>
    document.body.classList.remove("show-chatbot")
    );
    sendChatBtn.addEventListener("click", handleChat);
    buttons.forEach(button => {
    button.addEventListener("click", () => {
      const message = button.getAttribute("data-message");
      handleButtonClick(message, message);
    });
    }); 
