# gsw-lab2-anderson

**Laboratorio 2 - Gestión de Servidores Web (UNIVO, Ciclo 02-2026)**
Caso: *Dulce Hogar - Repostería Artesanal*
Estudiante: Anderson Saul Maravilla Callejas

Infraestructura web para Dulce Hogar: sitio estático servido por **Apache** con
**HTTPS (mkcert)**, API en **Express** conectada por **reverse proxy**,
permisos POSIX sin 777 y evidencia de logs.

| Elemento | Puerto |
|---|---|
| Apache HTTP (redirige a HTTPS) | 8085 |
| Apache HTTPS | 4443 |
| Express (API) | 9090 |

Entorno: Windows + WSL2 (Ubuntu). Dominio local: `dulcehogar.local`.

## Estructura

```
fase1-dimensionamiento.txt   Cálculos y justificación
fase2-apache.txt             Apache + Virtual Host
fase3-reverseproxy.txt       Reverse proxy a Express
fase4-https-permisos.txt     HTTPS, permisos y logs
codigo/                      index.js (Express), index.html y pastel.svg (sitio)
config/                      ports.conf y VirtualHosts de Apache
capturas/                    Evidencias de mi propio entorno
```

## Cómo reproducirlo (resumen)

1. `sudo apt install -y apache2` y copiar `codigo/index.html` + `codigo/pastel.svg` a `/var/www/dulcehogar.local/`.
2. Copiar los archivos de `config/` a `/etc/apache2/` (ajustando `IP_HOST`), luego `a2enmod ssl headers proxy proxy_http` y `a2ensite`.
3. En Windows: `npm install express` y `node codigo/index.js`.
4. Generar el certificado con `mkcert dulcehogar.local` e importar la CA en Windows.
5. Probar: `https://dulcehogar.local:4443/` y `https://dulcehogar.local:4443/api/saludo?nombre=Anderson`.

## Historial de commits por fase

Cada fase tiene al menos un commit descriptivo (ver `git log`).

## Errores encontrados y cómo se resolvieron

Documentados al final de cada archivo `faseN-*.txt`.
