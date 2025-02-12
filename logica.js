
                function showYoutubeModal(videoUrl) {
                // Extraer el ID del video a partir de la URL proporcionada
                let videoId = '';
                if (videoUrl.includes('youtu.be/')) {
                    // Extrae lo que sigue a "youtu.be/" hasta un posible signo de interrogación
                    videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
                } else if (videoUrl.includes('youtube.com/watch')) {
                    const urlParams = new URLSearchParams(new URL(videoUrl).search);
                    videoId = urlParams.get('v');
                } else if (videoUrl.includes('youtube.com/embed/')) {
                    videoId = videoUrl.split('youtube.com/embed/')[1].split('?')[0];
                } else {
                    console.error('Formato de URL de YouTube no reconocido.');
                    return;
                }

                // Crear el overlay del modal
                const modalOverlay = document.createElement('div');
                modalOverlay.className =
                    'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50';

                // Crear el contenedor del contenido del modal
                const modalContent = document.createElement('div');
                modalContent.className =
                    'bg-white rounded-lg overflow-hidden relative max-w-3xl w-full';

                // Botón para cerrar el modal
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '&times;';
                closeBtn.className =
                    'absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl font-bold';
                closeBtn.addEventListener('click', () => {
                    document.body.removeChild(modalOverlay);
                });

                // Contenedor para el video (manteniendo una proporción 16:9)
                const videoContainer = document.createElement('div');
                videoContainer.className = 'w-full relative';
                videoContainer.style.paddingTop = '56.25%'; // 16:9

                // Crear el iframe para el video de YouTube
                const iframe = document.createElement('iframe');
                iframe.className = 'absolute top-0 left-0 w-full h-full';
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                iframe.frameBorder = '0';
                iframe.allow =
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;

                // Ensamblar el modal
                videoContainer.appendChild(iframe);
                modalContent.appendChild(closeBtn);
                modalContent.appendChild(videoContainer);
                modalOverlay.appendChild(modalContent);
                document.body.appendChild(modalOverlay);

                // Cerrar el modal al hacer clic fuera del contenido
                modalOverlay.addEventListener('click', (e) => {
                    if (e.target === modalOverlay) {
                    document.body.removeChild(modalOverlay);
                    }
                });
                }

                // Ejemplo de asignación al botón (asegúrate de que el selector coincide con tu botón)
                document
                .querySelector('.bg-white.w-14.h-14.rounded-full.flex.items-center.justify-center')
                .addEventListener('click', () => {
                    // Llama a la función con el enlace que proporcionaste
                    showYoutubeModal('https://youtu.be/HaAC3hMBGO4?feature=shared');
                });

				// BLOQUEO DE CLIK DERECHO
				document.addEventListener("contextmenu", function (event) {
					event.preventDefault();
				});
            
                    function toggleCommentSection() {
                        const section = document.getElementById('commentSection');
                        section.classList.toggle('active');
                    }
                
                    document.getElementById('commentForm').addEventListener('submit', function(e) {
                        e.preventDefault();
                
                        const submitButton = document.getElementById('submitButton');
                
                        // Simulación del proceso de envío:
                        submitButton.disabled = true;
                        submitButton.textContent = "Enviando.......";
                
                        // Simula un tiempo de envío de 2 segundos
                        setTimeout(function() {
                            // Se limpia el textarea y se oculta la sección de comentarios
                            document.getElementById('comment').value = '';
                            document.getElementById('commentSection').classList.remove('active');
                
                            // Se actualiza el botón a "Enviado"
                            submitButton.textContent = "Enviado";
                            submitButton.disabled = false;
                        }, 2000);
                    });
                