
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
              // document.addEventListener("contextmenu", function (event) {
              // 	event.preventDefault();
              // });
            
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
                // Función que crea y muestra el modal con el video
                    function showVideoModal() {
                        // Crear el contenedor del modal
                        const modal = document.createElement('div');
                        modal.style.position = 'fixed';
                        modal.style.top = '0';
                        modal.style.left = '0';
                        modal.style.width = '100%';
                        modal.style.height = '100%';
                        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                        modal.style.display = 'flex';
                        modal.style.justifyContent = 'center';
                        modal.style.alignItems = 'center';
                        modal.style.zIndex = '1000';
                      
                        // Crear el contenedor para el contenido del modal
                        const content = document.createElement('div');
                        content.style.position = 'relative';
                        content.style.width = '80%';
                        content.style.maxWidth = '800px';
                      
                        // Crear el iframe que mostrará el video (usando la URL "preview" de Google Drive)
                        const iframe = document.createElement('iframe');
                        iframe.src = "https://drive.google.com/file/d/1Ar0ZrI8hJi3tQDf4N8JrXF3wEvfx0YmX/preview";
                        iframe.style.width = '100%';
                        iframe.style.height = '450px';
                        iframe.style.border = 'none';
                        iframe.setAttribute('allow', 'autoplay; encrypted-media');
                        iframe.setAttribute('allowfullscreen', '');
                      
                        // Crear el botón de cierre
                        const closeBtn = document.createElement('span');
                        closeBtn.innerHTML = '&times;';
                        closeBtn.style.position = 'absolute';
                        closeBtn.style.top = '10px';
                        closeBtn.style.right = '15px';
                        closeBtn.style.fontSize = '30px';
                        closeBtn.style.color = '#fff';
                        closeBtn.style.cursor = 'pointer';
                      
                        // Evento para cerrar el modal al hacer clic en el botón de cierre
                        closeBtn.addEventListener('click', () => {
                          document.body.removeChild(modal);
                        });
                      
                        // Cerrar el modal si se hace clic fuera del contenido
                        modal.addEventListener('click', (e) => {
                          if (e.target === modal) {
                            document.body.removeChild(modal);
                          }
                        });
                      
                        // Agregar los elementos creados al DOM
                        content.appendChild(closeBtn);
                        content.appendChild(iframe);
                        modal.appendChild(content);
                        document.body.appendChild(modal);
                      }
                      
                      // Asignar la función al evento 'click' de tu botón
                      document.addEventListener('DOMContentLoaded', () => {
                        const btn = document.getElementById('videoButton');
                        if (btn) {
                          btn.addEventListener('click', showVideoModal);
                        }
                      });
                    //   <!-- JavaScript para aplicar la animación solo una vez por logo -->
                    
                        document.querySelectorAll('.logo-container').forEach(function(container) {
                          container.addEventListener('mouseenter', function() {
                            if (!container.classList.contains('animated')) {
                              container.classList.add('animated');
                            }
                          });
                        });
